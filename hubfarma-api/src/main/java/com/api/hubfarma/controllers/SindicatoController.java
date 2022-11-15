package com.api.hubfarma.controllers;

import com.api.hubfarma.dtos.SindicatoDto;
import com.api.hubfarma.dtos.VoluntarioDto;
import com.api.hubfarma.models.SindicatoModel;
import com.api.hubfarma.models.VoluntarioModel;
import com.api.hubfarma.services.SindicatoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(("/sindicato"))
public class SindicatoController {

    final SindicatoService sindicatoService;

    public SindicatoController(SindicatoService sindicatoService) {
        this.sindicatoService = sindicatoService;
    }

    @PostMapping
    public ResponseEntity<Object> saveSindicato(@RequestBody @Valid SindicatoDto sindicatoDto) {
        var sindicatoModel = new SindicatoModel();
        BeanUtils.copyProperties(sindicatoDto, sindicatoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(sindicatoService.save(sindicatoModel));
    }

    @GetMapping
    public ResponseEntity<List<SindicatoModel>> getAllSindicatos() {
        return ResponseEntity.status(HttpStatus.OK).body(sindicatoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneSindicato (@PathVariable(value = "id") UUID id) {
        Optional<SindicatoModel> sindicatoModelOptional = sindicatoService.findById(id);
        if (!sindicatoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sindicato não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(sindicatoModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteSindicato (@PathVariable(value = "id") UUID id) {
        Optional<SindicatoModel> sindicatoModelOptional = sindicatoService.findById(id);
        if (!sindicatoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sindicato não encontrado.");
        }
        sindicatoService.delete(sindicatoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Sindicato deletado da base de dados.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateSindicato(@PathVariable(value = "id") UUID id,
                                                   @RequestBody @Valid SindicatoDto sindicatoDto) {
        Optional<SindicatoModel> sindicatoModelOptional = sindicatoService.findById(id);
        if (!sindicatoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sindicato não encontrado.");
        }
        var sindicatoModel = new SindicatoModel();
        BeanUtils.copyProperties(sindicatoDto, sindicatoModel);
        sindicatoModel.setId(sindicatoModelOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(sindicatoService.save(sindicatoModel));
    }
}
