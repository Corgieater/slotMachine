# slotMachine
Just trying to do a food slot machine if I don't know what to eat

其實意外簡單，
轉動效果其實只是不斷把最後一個element插到前面去

下次要面對的問題：
1. 如何把外接的名單放進去裡面，像別人做的一樣(這樣prompt就要拿掉)
2. 如果外接名單很長就會遇到隨機秒數可能不夠跑的情況(可能只會跑到前面)

可能的修改方向:
隨機秒數如果保留的話，或許可以從外接名單隨機選取固定或固定基數以上的店家插入array裡面，
這樣就能解決名單過長的問題，同時又可以解決隨機問題
