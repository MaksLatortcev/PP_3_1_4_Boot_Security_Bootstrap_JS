package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;


@Controller
public class UserController {

    private UserService userService;
    private RoleService roleService;

    private PasswordEncoder passwordEncoder;


    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    public void setRoleServace(RoleService roleService) {
        this.roleService = roleService;
    }


//    @GetMapping("/admin/edit")
//    public ModelAndView editUserForm(@RequestParam long id) {
//        ModelAndView mav = new ModelAndView("parts/edit_user");
//        User user = userService.getUserById(id);
//        user.setPassword("*****");
//        List<Role> roles = roleService.getAllRoles();
//        mav.addObject("user", user);
//        mav.addObject("roles", roles);
//        return mav;
//    }

    @PostMapping("/admin/save")
    public String saveUser(@ModelAttribute("user") User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.saveUser(user);
        return "redirect:/admin/";
    }

    @PostMapping("/admin/edit")
    public String editUser(@RequestParam("id") long id,
                           @RequestParam("login") String login,
                           @RequestParam("password") String password,
                           @RequestParam("roles") List<Role> roles) {
        User user = userService.getUserById(id);
        user.setLogin(login);
        user.setPassword(passwordEncoder.encode(password));
        user.setRoles(roles);
        userService.updateUser(user);
        return "redirect:/admin";
    }

    @GetMapping("/admin/delete")
    public String deleteUserForm(@RequestParam long id) {
        userService.deleteUser(id);
        return "redirect:/admin/";
    }

    @GetMapping("/user")
    public String getUser(Principal principal,
                          Model model) {
        model.addAttribute("user", userService.getUserByUsername(principal.getName()));
        return "user";
    }

    @GetMapping("/admin")
    public String editUserForm(Model model) {
        User user = new User();
        List<Role> roles = roleService.getAllRoles();
        model.addAttribute("user", user);
        model.addAttribute("roles", roles);
        model.addAttribute("users", userService.getAllUsers());
        return "index1";
    }
}
