package com.api.hubfarma.models;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.UUID;

@Entity
@Table(name = "tb_voluntario")
@Data
public class VoluntarioModel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column
    private String nome;

    @Column(length = 11)
    private BigInteger cpf;

    @Column
    private String email;

    @Column
    private String dataNasc;

    @Column
    private String endereco;

    @Column(length = 2)
    private String uf;

    @Column
    private String formacao;



}
