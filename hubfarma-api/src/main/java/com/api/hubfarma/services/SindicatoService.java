package com.api.hubfarma.services;

import com.api.hubfarma.models.SindicatoModel;
import com.api.hubfarma.repositories.SindicatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SindicatoService {

    final
    SindicatoRepository sindicatoRepository;

    public SindicatoService(SindicatoRepository sindicatoRepository) {
        this.sindicatoRepository = sindicatoRepository;
    }

    @Transactional
    public SindicatoModel save(SindicatoModel sindicatoModel) {
        return sindicatoRepository.save(sindicatoModel);
    }

    public List<SindicatoModel> findAll() {
        return sindicatoRepository.findAll();
    }

    public Optional<SindicatoModel> findById(UUID id) {
        return sindicatoRepository.findById(id);
    }

    public void delete(SindicatoModel sindicatoModel) {
        sindicatoRepository.delete(sindicatoModel);
    }
}
