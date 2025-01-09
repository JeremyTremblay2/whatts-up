package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentOptionsDTO {
    private Boolean payPerUse;
    private String creditCardPayment;
    private Boolean otherPaymentMethods;
}