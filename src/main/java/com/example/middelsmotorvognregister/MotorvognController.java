package com.example.middelsmotorvognregister;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    public final List<Motorvogn> alleBiler = new ArrayList<>();

    @GetMapping("/lagre")
    public void lagreBiller(Motorvogn innBiler){

        String navn = innBiler.getNavn();

        InsertData.insertDataIntoDatabase(innBiler);
    }
    @GetMapping("/hentAlle")
    public ArrayList<Motorvogn> hentAlle(){

        ArrayList<Motorvogn> motorvogns =  com.example.middelsmotorvognregister.databaseHandlers.getBiler.getAll();

        return motorvogns;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        com.example.middelsmotorvognregister.databaseHandlers.slett.slettAlle();
    }

    @GetMapping("/slettEn")
    public void slettEn(String regnr){
        com.example.middelsmotorvognregister.databaseHandlers.slett.slettEn(regnr);
    }

}