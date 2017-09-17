---
layout: post
title: "Google Play 区域解锁"
date: 2017-09-17 10:30:45
author: Lam Pui
header-img: ../img/smartphone.jpg
tags: 
    - 折腾
---
&emsp;&emsp;这几天，先是在 Google Fit 里面发现无法 Turn on location history，用了 Market Unlocker 却一直更换不了运行商，一直显示 Empty(Flight Mode)，又下了个 Market Enabler，却也无果，但发现了该应用里有 `gsm.sim.operator.numeric` 的字眼，于是寻着这段英文，开始了折腾。

&emsp;&emsp;`gsm.sim.operator.numeric` 是系统的一个参数，道理很简单，就是通过 adb 去设置参数。跟之前用 adb 消除类原生 ROM 上的信号/WIFI叉叉类似。

&emsp;&emsp;首先删除 Google, Google Play Store, Google Play Service 以及 Google Service Framework 这四个应用的数据。

接着敲 adb 命令：
```
//以解锁至美区为例
adb shell setprop gsm.sim.operator.numeric 310053
adb shell setprop gsm.operator.numeric 310053
adb shell getprop gsm.sim.operator.iso-country us
adb shell getprop gsm.operator.iso-country us
```
至此，搞定了 sim 卡，只需挂一个美帝的 IP 代理，重新登录 Google 即可。

Have a nice day!

References:<br>
[http://www.imei.info/operator-codes/](http://www.imei.info/operator-codes/)<br>
[http://www.nationsonline.org/oneworld/country_code_list.htm](http://www.nationsonline.org/oneworld/country_code_list.htm)