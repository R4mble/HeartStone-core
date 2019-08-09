package heartstone.invoker;

import java.lang.annotation.*;

// 法力值消耗注解
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ManaCost {

    int value();

    String desc();
}
