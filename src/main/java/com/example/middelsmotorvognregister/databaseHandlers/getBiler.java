package com.example.middelsmotorvognregister.databaseHandlers;

import com.example.middelsmotorvognregister.Motorvogn;

import java.sql.*;
import java.util.ArrayList;

public class getBiler {
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

    public static ArrayList<Motorvogn> getAll() {
        // SQL query for insertion
        String insertQuery = "SELECT * FROM motorvognliste;";

        try {
            // Create a PreparedStatement
            PreparedStatement preparedStatement = getConnection().prepareStatement(insertQuery);

            ResultSet resultSet = preparedStatement.executeQuery();

            ArrayList<Motorvogn> motorvogns = new ArrayList<>();

            while (resultSet.next()) {
                String personNr = resultSet.getString("personNr");
                String kjonn= resultSet.getString("kjonn");
                String navn = resultSet.getString("navn");
                String adresse = resultSet.getString("adresse");
                String bilSkilt = resultSet.getString("bilSkilt");
                String bilMerke = resultSet.getString("bilMerke");
                String bilModel = resultSet.getString("bilModel");
                String bilFarge = resultSet.getString("bilFarge");
                String sted = resultSet.getString("sted");

                Motorvogn motorvogn = new Motorvogn(personNr, kjonn, navn, adresse, bilSkilt, bilMerke, bilModel, bilFarge, sted);

                motorvogns.add(motorvogn);
            }

            preparedStatement.close();
            return motorvogns;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
