package heartstone.exception;

public class TotemFullException extends RuntimeException {

    public TotemFullException() {
        super("你的图腾已经满了, 不能再转了!");
    }
}
