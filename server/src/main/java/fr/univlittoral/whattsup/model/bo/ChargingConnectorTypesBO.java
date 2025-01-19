package fr.univlittoral.whattsup.model.bo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingConnectorTypesBO {
    private Boolean typeEF;
    private Boolean type2;
    private Boolean comboCCS;
    private Boolean chademo;
    private Boolean other;
    private Boolean attachedCableT2;
    private String connectionType;
}