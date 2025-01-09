package fr.univlittoral.whattsup.model.bo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingPointBO {
    private String itinerantId;
    private String localId;
    private Double nominalPower;
    private ChargingConnectorTypesBO connectorTypes;
    private Boolean isFree;
    private PaymentOptionsBO paymentOptions;
    private String pricing;
}