package javascript;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;

public class JSEngine {
    public static void main(String[] args) throws Exception {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");
        // babel hello.js  -o lowb.js
        long t1 = System.currentTimeMillis();

        String path = "C:\\Users\\Ramble\\Desktop\\Demo\\heartstone\\src\\main\\java\\javascript\\lower.bat";
        Process p = Runtime.getRuntime().exec("cmd.exe /c start " + path);
        Thread.sleep(5000);
        System.out.println(p.isAlive());

        engine.eval(new InputStreamReader(new FileInputStream(new File("src\\main\\java\\javascript\\lowb.js"))));
        long t2 = System.currentTimeMillis();
        // 1172 1328 1281
        System.out.println(t2 - t1);
    }
}
