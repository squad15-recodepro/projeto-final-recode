package com.api.hubfarma.repositories;

import com.api.hubfarma.models.SindicatoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SindicatoRepository extends JpaRepository<SindicatoModel, UUID> {
}
