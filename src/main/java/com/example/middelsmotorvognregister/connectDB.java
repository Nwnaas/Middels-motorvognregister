package com.example.middelsmotorvognregister;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connectDB {
    public static void main(String args[])
    {
        String url="jdbc:mariadb://localhost:3307/motorvognregister";
        String user="root";
        String password="";

        try {

            Connection connection = DriverManager.getConnection(url,user,password);
            System.out.println("Connection is Succseful to the database"+url);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
}
