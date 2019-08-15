local _ = require 'fun'

local t = {}
for _it, k, v in _.iter({ a = 5, b = 6, c = 7}) do t[#t + 1] = k end
table.sort(t)
for _it, v in _.iter(t) do print(_it, v) end