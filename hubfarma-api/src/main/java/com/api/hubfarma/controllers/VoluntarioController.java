package com.api.hubfarma.controllers;

import com.api.hubfarma.dtos.VoluntarioDto;
import com.api.hubfarma.models.VoluntarioModel;
import com.api.hubfarma.services.VoluntarioService;
import org.apache.coyote.Response;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(("/voluntario"))
public class VoluntarioController {

    final VoluntarioService voluntarioService;

    public VoluntarioController(VoluntarioService voluntarioService) {
        this.voluntarioService = voluntarioService;
    }

    @PostMapping
    public ResponseEntity<Object> saveVoluntario(@RequestBody @Valid VoluntarioDto voluntarioDto) {
        var voluntarioModel = new VoluntarioModel();
        BeanUtils.copyProperties(voluntarioDto, voluntarioModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(voluntarioService.save(voluntarioModel));
    }

    @GetMapping
    public ResponseEntity<List<VoluntarioModel>> getAllVoluntarios() {
        return ResponseEntity.status(HttpStatus.OK).body(voluntarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneVoluntario (@PathVariable(value = "id") UUID id) {
        Optional<VoluntarioModel> voluntarioModelOptional = voluntarioService.findById(id);
        if (!voluntarioModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Voluntário não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(voluntarioModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteVoluntario (@PathVariable(value = "id") UUID id) {
        Optional<VoluntarioModel> voluntarioModelOptional = voluntarioService.findById(id);
        if (!voluntarioModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Voluntário não encontrado.");
        }
        voluntarioService.delete(voluntarioModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Voluntário deletado da base de dados.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateVoluntario(@PathVariable(value = "id") UUID id,
                                                   @RequestBody @Valid VoluntarioDto voluntarioDto) {
        Optional<VoluntarioModel> voluntarioModelOptional = voluntarioService.findById(id);
        if (!voluntarioModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Voluntário não encontrado.");
        }
        var voluntarioModel = new VoluntarioModel();
        BeanUtils.copyProperties(voluntarioDto, voluntarioModel);
        voluntarioModel.setId(voluntarioModelOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(voluntarioService.save(voluntarioModel));
    }

}
