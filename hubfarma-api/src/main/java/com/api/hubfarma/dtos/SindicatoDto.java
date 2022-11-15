package com.api.hubfarma.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigInteger;

@Data
public class SindicatoDto {

    @NotBlank
    private String nome;
    @NotNull
    private BigInteger cnpj;
    @NotBlank
    private String email;
    @NotBlank
    private String endereco;
    @NotBlank
    private String uf;

}
