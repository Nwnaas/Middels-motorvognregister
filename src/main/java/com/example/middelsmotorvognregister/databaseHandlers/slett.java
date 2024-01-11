package com.example.middelsmotorvognregister.databaseHandlers;

import com.example.middelsmotorvognregister.Motorvogn;

import java.sql.*;
import java.util.ArrayList;

public class slett {
    private static Connection getConnection() {
        String url = "jdbc:mariadb://localhost:3307/motorvognregister";
        String user = "root";
        String password = "";
        Connection connection = null;

        try {
            connection = DriverManager.getConnection(url, user, password);

        } catch (SQLException e) {
            e = e;
        }
        return connection;
    }


    public static void slettAlle() {
        // SQL query for insertion
        String insertQuery = "DELETE FROM motorvognliste;";

        try {
            // Create a PreparedStatement
            PreparedStatement preparedStatement = getConnection().prepareStatement(insertQuery);

            preparedStatement.execute();



            preparedStatement.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void slettEn(String regnr) {
        // SQL query for insertion
        String insertQuery = "DELETE FROM motorvognliste WHERE bilSkilt like (?);";

        try {
            // Create a PreparedStatement
            PreparedStatement preparedStatement = getConnection().prepareStatement(insertQuery);

            preparedStatement.setString(1, regnr);

            preparedStatement.execute();

            preparedStatement.close();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
