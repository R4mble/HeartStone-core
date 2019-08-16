package heartstone.exception;

public class TargetWrongException extends RuntimeException {

    public TargetWrongException() {
        super("你指定的目标不对!");
    }
}
