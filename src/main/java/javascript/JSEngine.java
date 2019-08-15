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
        engine.eval(new InputStreamReader(new FileInputStream(new File("src\\main\\java\\javascript\\lowb.js"))));
    }
}
