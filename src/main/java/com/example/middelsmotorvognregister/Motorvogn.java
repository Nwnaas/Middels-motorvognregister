package com.example.middelsmotorvognregister;

public class Motorvogn {

    private String personNr;
    private String kjonn;
    private String navn;
    private String adresse;
    private String bilSkilt;
    private String bilMerke;
    private String bilModel;
    private String bilFarge;
    private String sted;
    private String fjern;

    public Motorvogn(String personNr, String kjonn, String navn, String adresse, String bilSkilt, String bilMerke, String bilModel, String bilFarge, String sted, String fjern) {
        this.personNr = personNr;
        this.kjonn = kjonn;
        this.navn = navn;
        this.adresse = adresse;
        this.bilSkilt = bilSkilt;
        this.bilMerke = bilMerke;
        this.bilModel = bilModel;
        this.bilFarge = bilFarge;
        this.sted = sted;
        this.fjern = fjern;
    }

    public Motorvogn() {

    }

    public String getPersonNr() {
        return personNr;
    }

    public void setPersonNr(String personNr) {
        this.personNr = personNr;
    }

    public String getKjonn() {
        return kjonn;
    }

    public void setKjonn(String kjonn) {
        this.kjonn = kjonn;
    }

    public String getNavn() { return navn; }

    public void setNavn(String navn) { this.navn = navn; }

    public String getAdresse() { return adresse; }

    public void setAdresse(String adresse) { this.adresse = adresse; }

    public String getBilSkilt() { return bilSkilt; }

    public void setBilSkilt(String bilSkilt) { this.bilSkilt = bilSkilt; }

    public String getBilMerke() { return bilMerke; }

    public void setBilMerke(String bilMerke) { this.bilMerke = bilMerke; }

    public String getBilModel() { return bilModel; }

    public void setBilModel(String bilModel) { this.bilModel = bilModel; }

    public String getBilFarge() { return bilFarge; }

    public void setBilFarge(String bilFarge) { this.bilFarge = bilFarge; }

    public String getSted() { return sted; }

    public void setSted(String sted) { this.sted = sted; }

    public String getFjern() { return fjern; }

    public void setFjern(String fjern) { this.fjern = fjern; }
}