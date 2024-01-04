package com.example.middelsmotorvognregister;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    public final List<Motorvogn> alleBiler = new ArrayList<>();

    @GetMapping("/lagre")
    public void lagreBiller(Motorvogn innBiler){
        alleBiler.add(innBiler);
    }
    @GetMapping("/hentAlle")
    public List<Motorvogn> hentAlle(){
        return alleBiler;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleBiler.clear();
    }

}