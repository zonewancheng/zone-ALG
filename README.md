# 《算法图解》（《Grokking Algorithms》）练习

个人JavaScript 算法练习。主要根据《算法图解》路线练习，并拓展提到的知识等。

其他各种语言可参考《算法图解》官方：https://github.com/egonSchiele/grokking_algorithms

> 学习路线：摘自《算法图解》中文版（推荐阅读）

### 一、基础篇

    二分查找，学习使用大O分析法，分析算法速度，时间复杂度，空间复杂度
    基本数据结构，数组和链表。通过他们来创建更高级的数据结构
    递归调用，很多算法都可以使用的实用技巧

### 二、技巧篇

    如果不确定如何解决问题，可以尝试分而治之或者动态规划，如果认识到根本没有高效的方法，可以尝试使用贪婪算法获得近似答案

##### 散列表

    散列表是一种很有用的数据结构，由键值对组成，如人名和电子邮件地址或者用户名和密码。
    散列表的用途之大，再怎么强调都不过分。每当我需要解决问题时，首先想到的两种方法是:可以使用散列表吗?可以使用图来建立模型吗?

##### 图算法

    图是一种模拟网络的方法，这种网络包括人际关系网、公路网、神经元网络或者任何一组连接。
    广度优先搜索和狄克斯特拉算法计算网络中两点之间的最短距离，可用来计算两人之间的分隔度或前往目的地的最短路径。

##### KNN 最近相邻算法

    这是一种简单的机器学习算法，可用于创建推荐系统、OCR引擎、预测股价或其他值(如“我们认为Adit会给这部电影打4星”)的系统，
    以及对物件进行分类(如“这个字母是Q”)。

### 三、拓展知识

##### 11.1 树

    二叉查找树(binary search tree)、也有一些处于平衡状态的特殊二叉查找树，
    如红黑树。 那在什么情况下使用二叉查找树呢?B树是一种特殊的二叉树，数据库常用它来存储数据。
    如果你对数据库或高级数据结构感兴趣，请研究如下数据结构:B树，红黑树，堆， 2 伸展树。

##### 11.2 反向索引

    一个散列表，将单词映射到包含它的页面。这种数据结构被称为反向索引(inverted index)，常用于创 建搜索引擎。如果你对搜索感兴趣，从反向索引着手研究是不错的选择。

##### 11.3 傅里叶变换

    绝妙、优雅且应用广泛的算法少之又少，傅里叶变换算是一个。

##### 11.4 并行算法

     并行性管理开销。假设你要对一个包含1000个元素的数组进行排序，如何在两个内核之 间分配这项任务呢?如果让每个内核对其中500个元素进行排序，再将两个排好序的数组 合并成一个有序数组，那么合并也是需要时间的。
     负载均衡。假设你需要完成10个任务，因此你给每个内核都分配5个任务。但分配给内核 A的任务都很容易，10秒钟就完成了，而分配给内核B的任务都很难，1分钟才完成。这意 味着有那么50秒，内核B在忙死忙活，而内核A却闲得很!你如何均匀地分配工作，让两 个内核都一样忙呢?要改善性能和可扩展性，并行算法可能是不错的选择!

##### 11.5 MapReduce

    有一种特殊的并行算法正越来越流行，它就是分布式算法。在并行算法只需两到四个内核时， 完全可以在笔记本电脑上运行它，但如果需要数百个内核呢?在这种情况下，可让算法在多台计 算机上运行。MapReduce是一种流行的分布式算法，你可通过流行的开源工具Apache Hadoop来 2 使用它。

##### 11.6 布隆过滤器和HyperLogLog

    布隆过滤器是一种概率型数据结构，它提供的答案有可能不对， 但很可能是正确的。
     可能出现错报的情况，即Google可能指出“这个网站已搜集”，但实际上并没有搜集。 
     不可能出现漏报的情况，即如果布隆过滤器说“这个网站未搜集”，就肯定未搜集。 

##### 11.7 SHA 算法

    另一种散列函数是安全散列算法(secure hash algorithm，SHA)函数。给定一个字符串，SHA返回其散列值。
    SHA还让你能在不知道原始字符串的情况下对其进行比较。

##### 11.8 局部敏感散列算法 Simhash

    SHA还有一个重要特征，那就是局部不敏感的。有时候，你希望结果相反，即希望散列函数是局部敏感的。

##### 11.9 Diffie-Hellman 密钥交换

     双方无需知道加密算法。他们不必会面协商要使用的加密算法。
     要破解加密的消息比登天还难。

##### 11.10 线性规划 Simplex
    
    线性规划用于在给定约束条件下最大限度地改善指定的指标。

##### 11.11 结语

    本章简要地介绍了10个算法，唯愿这让你知道还有很多地方等待你去探索。
    在我看来，最佳 的学习方式是找到感兴趣的主题，然后一头扎进去，而本书便为你这样做打下了坚实的基础。