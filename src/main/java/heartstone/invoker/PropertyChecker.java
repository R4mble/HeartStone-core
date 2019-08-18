package heartstone.invoker;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author Wangyl
 * @date 2019/8/16
 */
public class PropertyChecker {

    private static String[] propertyArr = {"战吼", "嘲讽", "亡语", "吸血", "风怒", "突袭", "冲锋", "圣盾", "复生", "磁力"};

    // 解析属性
    public static List<String> read(String properties) {
        List<String> res = new ArrayList<>();
        for (int i = 0; i < properties.length(); i++) {
            if (Integer.parseInt(String.valueOf(properties.charAt(i))) == 1) {
                res.add(propertyArr[i]);
            }
        }
        return res;
    }

    // 生成属性
    public static String write(List<String> properties) {
        StringBuilder sb = new StringBuilder();

        for (String s : propertyArr) {
            if (properties.contains(s)) {
                sb.append(1);
            } else {
                sb.append(0);
            }
        }
        return sb.toString();
    }
}
