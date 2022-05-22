package ru.kata.spring.boot_security.demo.dao;

import org.springframework.stereotype.Repository;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;


@Repository
public class UserDaoImpl implements UserDao {

    @PersistenceContext(unitName = "entityManagerFactory")
    private EntityManager entityManager;

    @Override
    public User getUserByUsername(String username) {
        return (User) entityManager.createQuery("FROM User u WHERE u.firstName = :username")
                .setParameter("username", username)
                .getResultList().get(0);
    }

    @Override
    public void saveUser(User user) {
        User userForSave = new User(
                user.getFirstName(),
                user.getLastName(),
                user.getAge(),
                user.getEmail(),
                user.getPassword());
        entityManager.persist(userForSave);
        for (Role role : user.getRoles()) {
            entityManager.createNativeQuery("INSERT INTO users_roles (user_id, role_id) VALUES (?, ?)")
                    .setParameter(1, userForSave.getId())
                    .setParameter(2, role.getRoleName())
                    .executeUpdate();
        }
    }

    @Override
    public List<User> getAllUsers() {
        return entityManager.createQuery("FROM User", User.class).getResultList();
    }

    @Override
    public User getUserById(long id) {
        return entityManager.find(User.class, id);
    }

    @Override
    public void updateUser(User user) {
        User userForUpdate = entityManager.find(User.class, user.getId());
        userForUpdate.setFirstName(user.getFirstName());
        userForUpdate.setLastName(user.getLastName());
        userForUpdate.setAge(user.getAge());
        userForUpdate.setEmail(user.getEmail());
        userForUpdate.setPassword(user.getPassword());
        entityManager.merge(userForUpdate);

        entityManager.createNativeQuery("DELETE FROM users_roles WHERE user_id = ?")
                .setParameter(1, user.getId())
                .executeUpdate();;

        for (Role role : user.getRoles()) {
            entityManager.createNativeQuery("INSERT INTO users_roles (user_id, role_id) VALUES (?, ?)")
                    .setParameter(1, userForUpdate.getId())
                    .setParameter(2, role.getRoleName())
                    .executeUpdate();
        }
    }

    @Override
    public void deleteUser(long id) {
        User userDelete = entityManager.find(User.class, id);
        entityManager.remove(userDelete);
    }
}
