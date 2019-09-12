package heartstone.exception;

public class ManaLessException extends RuntimeException {
    
    public ManaLessException(int needCry, int curCry) {
        super("法力值不够哎!" + " 该卡牌需要" + needCry + "费, 而你当前只有" + curCry + "费~");
    }
}