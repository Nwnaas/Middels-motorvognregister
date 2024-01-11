package com.example.middelsmotorvognregister;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InsertData {

    //static Connection connection;

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

    public static void insertDataIntoDatabase(Motorvogn motorvogn) {
        // SQL query for insertion
        String insertQuery = "INSERT INTO motorvognliste (personNR, kjonn, navn, adresse, bilSkilt, bilMerke, bilModel, bilFarge, sted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            // Create a PreparedStatement
            PreparedStatement preparedStatement = getConnection().prepareStatement(insertQuery);

            // Set values for the placeholders (?)
            preparedStatement.setString(1, motorvogn.getPersonNr());
            preparedStatement.setString(2, motorvogn.getKjonn());
            preparedStatement.setString(3, motorvogn.getNavn());
            preparedStatement.setString(4, motorvogn.getAdresse());
            preparedStatement.setString(5, motorvogn.getBilSkilt());
            preparedStatement.setString(6, motorvogn.getBilMerke());
            preparedStatement.setString(7, motorvogn.getBilModel());
            preparedStatement.setString(8, motorvogn.getBilFarge());
            preparedStatement.setString(9, motorvogn.getSted());


            // Execute the insert query
            int rowsAffected = preparedStatement.executeUpdate();

            System.out.println(rowsAffected + " row(s) affected.");

            // Close the PreparedStatement
            preparedStatement.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
