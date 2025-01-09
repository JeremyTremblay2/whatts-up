package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingPointDTO {
    private String itinerantId;
    private String localId;
    private Double nominalPower;
    private ChargingConnectorTypesDTO connectorTypes;
    private Boolean isFree;
    private PaymentOptionsDTO paymentOptions;
    private String pricing;
}