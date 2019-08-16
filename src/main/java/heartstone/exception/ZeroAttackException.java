package heartstone.exception;

public class ZeroAttackException extends RuntimeException {

    public ZeroAttackException() {
        super("攻击力为0, 无法攻击其他角色!");
    }
}
