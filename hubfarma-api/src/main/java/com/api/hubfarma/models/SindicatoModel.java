package com.api.hubfarma.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.UUID;

@Entity
@Table(name = "tb_sindicato")
@Data
public class SindicatoModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column
    private String nome;

    @Column(length = 14)
    private BigInteger cnpj;

    @Column
    private String email;

    @Column
    private String endereco;

    @Column(length = 2)
    private String uf;

}
