package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingConnectorTypesDTO {
    private Boolean typeEF;
    private Boolean type2;
    private Boolean comboCCS;
    private Boolean chademo;
    private Boolean other;
    private Boolean attachedCableT2;
}