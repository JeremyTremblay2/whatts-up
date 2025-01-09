package fr.univlittoral.whattsup.model.bo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentOptionsBO {
    private Boolean payPerUse;
    private String creditCardPayment;
    private Boolean otherPaymentMethods;
}