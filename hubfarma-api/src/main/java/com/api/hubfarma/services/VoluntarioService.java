package com.api.hubfarma.services;

import com.api.hubfarma.models.VoluntarioModel;
import com.api.hubfarma.repositories.VoluntarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class VoluntarioService {

    final
    VoluntarioRepository voluntarioRepository;

    public VoluntarioService(VoluntarioRepository voluntarioRepository) {
        this.voluntarioRepository = voluntarioRepository;
    }

    @Transactional
    public VoluntarioModel save(VoluntarioModel voluntarioModel) {
        return voluntarioRepository.save(voluntarioModel);
    }

    public List<VoluntarioModel> findAll() {
        return voluntarioRepository.findAll();
    }

    public Optional<VoluntarioModel> findById(UUID id) {
        return voluntarioRepository.findById(id);
    }

    public void delete(VoluntarioModel voluntarioModel) {
        voluntarioRepository.delete(voluntarioModel);
    }
}
