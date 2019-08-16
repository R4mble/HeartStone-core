package heartstone.invoker;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Wangyl
 * @date 2019/8/16
 */
public class PropertyChecker {

    // 属性: 战吼, 嘲讽, 亡语, 吸血, 风怒, 突袭, 冲锋, 圣盾, 复生
    public static List<String> check(String properties) {
        String[] propertyArr = {"战吼", "嘲讽", "亡语", "吸血", "风怒", "突袭", "冲锋", "圣盾", "复生"};
        List<String> res = new ArrayList<>();
        for (int i = 0; i < properties.length(); i++) {
            if (Integer.parseInt(String.valueOf(properties.charAt(i))) == 1) {
                res.add(propertyArr[i]);
            }
        }
        return res;
    }
}
