// ==UserScript==
// @name        Kitten Scientists
// @namespace   http://www.reddit.com/r/kittensgame/comments/34gb2u/kitten_scientists_automation_script/
// @description Launch Kitten Scientists
// @include     *bloodrizer.ru/games/kittens/*
// @include     file:///*kitten-game*
// @include     *kittensgame.com/web/*
// @include     *kittensgame.com/beta/*
// @include     *kittensgame.com/alpha/*
// @version     1.5.0
// @grant       none
// @copyright   2015, cameroncondry
// ==/UserScript==

// ==========================================
// Begin Kitten Scientist's Automation Engine
// ==========================================
window.run = function() {
	const version = 'V15.201';
	const kg_version = "小猫珂学家版本" + version;
	// Initialize and set toggles for Engine
	// =====================================
	const i18nData = {
		'zh': {
			'option.observe': '观测天文现象',
			'option.festival': '举办节日',
			'option.praise': '赞美太阳',
			'option.autofeed': '献祭死灵兽',
			'option.hunt': '派出猎人',
			'option.crypto': '黑币交易',
			'option.embassies': '建造大使馆',
			'option.style': '占满屏幕',
			//'option.steamworks': '启动蒸汽工房',
			'option.useWorkers': '启用后台满速珂学家',

			'filter.build': '建筑',
			'filter.craft': '工艺制作',
			'filter.space': '太空相关',
			'filter.upgrade': '工坊升级',
			'filter.research': '科学研究',
			'filter.policy': '政策',
			'filter.upgBld': '营火建筑升级',
			'filter.trade': '贸易',
			'filter.embassy': '大使馆',
			'filter.hunt': '狩猎',
			'filter.praise': '赞美太阳',
			'filter.adore': '赞美群星',
			'filter.transcend': '次元超越',
			'filter.sacrifice': '献祭',
			'filter.faithBld': '太阳教团',
			'filter.accelerate': '光阴似箭',
			'filter.time.skip': '时间跳转',
			'filter.festival': '举办节日',
			'filter.star': '天文现象',
			'filter.distribute': '猫猫分配',
			'filter.leader': '领袖相关',
			'filter.misc': '喵喵喵',

			'dispose.necrocorn': '小猫帮你处理掉了影响效率的多余死灵兽',
			'act.feed': '小猫向利维坦献上祭品。古神很高兴',
			'blackcoin.buy': '小猫花掉 {1} 遗物，加仓了 {0} 黑币',
			'blackcoin.sell': '小猫抛售 {1} 黑币，套现了 {0} 遗物',
			'act.observe': '小猫观测了天文现象{0}',
			'act.hunt': '{0} 波{1}去打猎',
			'act.hunt.unicorn': '小猫急着派出猎人帮独角兽配种，呜呼十连爪ฅ ฅ',
			'act.hunt.trade': '小猫贸易后决定去打猎',
			'act.hunt.mint': '毛皮或羊皮纸处于低储量',
			'act.build': '小猫建造了一个 {0}',
			'act.builds': '小猫建造了 {1} 个新的 {0}',
			'act.craft': ' {0} {1}',
			'act.trade': ' {1} 交易 {0} 次',

			'upgrade.space.mission': '小猫执行了 {0} 的任务',
			'upgrade.space': '小猫执行了 {0}',
			'upgrade.race': '小猫探险遇到了新的文明：{0}',
			'upgrade.upgrade': '{1}发明了 {0}',
			'upgrade.limited': '优化 {0}',
			'upgrade.unlimited': '全部 {0}',
			'upgrade.tech': '{1}研究了 {0}',
			'upgrade.policy': '小猫通过了 {0} 法案',

			'festival.hold': '呜呼，小猫开趴了',
			'festival.extend': '小猫加了一年钟',

			'build.embassy': '在 {1} 设立了 {0} 个大使馆',
			'build.embassies': '在 {1} 设立了 {0} 个大使馆',

			'act.praise': '赞美太阳! 消耗了 {0} 信仰转化成 {1} 的虔诚',
			'autoPraise.trigger.set': '输入新的赞美太阳的触发值，取值范围为 0 到 1的纯小数\n 当为0.98时且点出太阳革命，若虔诚太少小猫每天赞美太阳',
			'summary.praise.msg': '虔诚的小猫每天都会赞美太阳，直到太阳革命加成大于 {0} %<br>说你了虔诚太低了! (虔诚滚猫咪越滚越虔诚',
			'act.sun.discover': '小猫在宗教祷告了 {0} ',
			'act.sun.discovers': '小猫在宗教祷告了 {0} {1} 次',
			'act.sun.discovers.leader': '哲学家小猫在宗教祷告了 {0} {1} 次',

			'tcRefine.trigger.set': '输入触发精炼水晶功能的时间水晶最低数量，其最低值\n暂时只支持黑之连结大于35才会触发',

			'ui.items': '项目',
			'ui.disable.all': '全部禁用',
			'ui.enable.all': '全部启用',
			'ui.craft.resources': '资源',
			'ui.trigger': '触发条件',
			'ui.trigger.set': '输入资源的 {0} 触发条件，取值范围为 0 到 1 的小数。\n\n 触发条件的意思：当前项目的触发资源的数量 / 资源的上限数量 \n鼠标移动到该项目名字上能看到触发资源',
			'ui.trigger.resource': '触发资源为',
			'ui.none': '无',
			'ui.limit': '限制',
			'ui.tradeLimit': 'AI计算',
			'ui.distributeLimit': '限量',
			'ui.craftLimit': 'AI平衡',
			'ui.upgradesLimit': '优选',
			'ui.trigger.filterGame.set': '设置游戏日志数量上限',
			'ui.trigger.missions.set': '输入一个新的 探索星球 触发值,取值范围为 0 到 13 的整数。\n分别对应13颗星球。\n\n默认优先碧池探索，会暂时跳过沙丘',
			'ui.trigger.crypto.set': '输入一个新的 {0} 触发值，\n支持3个参数：-符号隔开数字参数\n第一个数字：当遗物数量大于触发值才会进行黑币交易\n第二个数字：买入的最高价（超过这价格就不会买了）\n第三个数字：卖出最低的价格。（低于这价格就不会卖出）\n默认1e7-881-1060',
			'ui.engine': '启用小猫珂学家',
			'ui.build': '营火',
			'ui.space': '太空',
			'ui.craft': '工艺',
			'ui.upgrade': '升级',
			'ui.trade': '贸易',
			'ui.faith': '宗教',
			'ui.time': '时间',
			'ui.options': '小喵杂项',
			'ui.filter': '日志过滤',
			'ui.distribute': '喵喵管理',
			'ui.max': 'Max: {0}',

			'msg.catnip': '如果寒冬猫薄荷产量低于0，连续寒冷的天气，小猫会饿死<br>小猫珂学家会留下过寒冬的猫薄荷',

			'ui.upgrade.upgrades': '工坊升级',
			'ui.upgrade.techs': '科学科技',
			'ui.upgrade.races': '探险者出发!',
			'ui.upgrade.missions': '探索星球',
			'ui.upgrade.buildings': '升级建筑',
			'ui.upgrade.policies': '政策',
			'ui.upgrade.policies.load': '读取',
			'ui.upgrade.policies.show': '列表',

			'ui.faith.addition': '宗教附加',
			'option.faith.best.unicorn': '自动最佳独角兽建筑',
			'option.faith.best.unicorn.desc': '自动献祭独角兽，并会以独角兽或象牙来决定建造独角兽牧场~象牙塔...太阳尖顶<br>当象牙不足时会切换成象牙模式具体可以点击小猫总结看到(概览无象牙模式)',
			'unicornSacrifice' : '小猫让 {0} 个独角兽群返回了天上的维度，收集了 {1} 滴独角兽的眼泪',

			'option.faith.transcend': '自动最佳次元超越',
			'summary.transcend.catnip': '喵喵喵，你也不想次元超越再赞美群星后让小喵饿死吧？（猫薄荷产量将是：{0}）',
			'act.transcend': '消耗 {0} 顿悟，达到次元超越 {1}',
			'summary.transcend': '次元超越了 {0} 次',

			'option.faith.adore': '赞美群星',
			'act.adore': '赞美群星! 消耗了 {0} 虔诚转化成 {1} 顿悟',
			'act.adore.last': '下次小猫赞美群星，会等到虔诚大于 {0} ',
			'summary.adore': '赞美群星了 {0} 次，共积累了 {1} 顿悟',
			'summary.adore.catnip': '喵喵喵，你也不想赞美群星后让小喵饿死吧？（猫薄荷产量将是：{0}）',
			'summary.adore.solar': '聪明的小猫已经会算期望了，当太阳革命加成到达：{0}% 后才会赞美群星',
			'summary.adore.last': '下次赞美群星会等到虔诚大于{0} ',
			'adore.trigger.set': '赞美群星再赞美太阳后的太阳革命加成 ≥ 触发条件 * 1000%，\n触发条件取值范围为 0 到 1 的小数（0.001为自动模式）\n\n同时满足以下条件珂学家将自动赞美群星。\n1. 当前信仰 / 信仰上限 ≥ 0.98(赞美太阳触发条件设置0.98配合使用)\n2.有月球前哨\n3.赞美群星后的猫薄荷产量＞0。\n推荐启用该功能多放几个农民，喵喵保护协会不允许饿死喵喵喵\n优先次元超越 => 赞美群星 => 赞美太阳',


			// todo
			'option.faith.alicorn': '献祭天角兽(还未新建文件夹)',
			'option.faith.tcRefine': '精炼水晶',

			'resources.add': '添加资源',
			'resources.clear.unused': '清除未使用',
			'resources.stock': '库存: {0}',
			'resources.consume': '消耗率: {0}',
			'resources.del': '删除',
			'resources.stock.set': '设置 {0} 的库存',
			'resources.consume.set': '设置 {0} 的消耗率',
			'resources.del.confirm': '确定要取消 {0} 的库存控制?',

			'status.ks.enable': '神说，要有猫猫珂学家!',
			'status.ks.disable': '太敬业了，该歇了',
			'status.sub.enable': '启用 {0}',
			'status.auto.enable': '启用自动化 {0}',
			'status.sub.disable': '禁用 {0}',
			'status.auto.disable': '禁用自动化 {0}',

			'time.game' : '猫珂学家等待游戏处理{0} 毫秒',
			'time.ks': '可爱小喵珂学家一共为你服务了 {0} 次，珂学家处理共耗时 {1} 毫秒，平均耗时 {2} 毫秒',

			'trade.limited': '贸易获得数量大于产量时才与 {0} 贸易，次数自动限制',
			'trade.limitedTitle': '根据产量和贸易获得数量',
			'trade.unlimited': '{1}与 {0} 的 贸易',
			'trade.seasons': '季节',
			'trade.season.enable': '启用在 {1} 与 {0} 的贸易',
			'trade.season.disable': '停止在 {1} 与 {0} 的贸易',
			'trade.catnip': 'ฅ\'ω\'ฅ，你也不想让小喵饿死吧？与鲨鱼贸易喽',

			'filter.enable': '过滤 {0}',
			'filter.disable': '取消过滤 {0}',

			'craft.force': '为了研究{1}，喵喵偷偷拿了资源合成了{0}，呐呐呐，她才不会心痛了~♪',
			'craft.CacheSteel': '小猫急急急，存材料点工坊升级{0}，真的就用了亿点点材料~为了发展果咩捏',
			'craft.forceSteel': '小猫为了工坊升级{0}，偷偷用了亿点点材料合成了钢<br>喵喵了?! 喵喵已经逃跑了 ﾚ(ﾟ∀ﾟ;)ﾍ=3=3 !',
			'craft.limited': '平衡{0}（理解为小猫AI控制触发条件、消耗率，挂机效率会比较高）',
			'craft.limitedTitle': '根据原材料和目标材料的数量',
			'craft.unlimited': '触发资源：{1}{0}',

			'distribute.limited': '分配 {0} 的数量不会超过Max',
			'distribute.leaderJob': '领袖工作为 {0} ',
			'distribute.leaderTrait': '领袖的特质为 {0} ',
			'distribute.unlimited': '总Max数量分配完后， {0} 的数量允许超过MAX',
			'distribute.makeLeader': '分配领袖',
			'act.distribute': '抓住一只空闲猫猫分配为 {0}',
			'act.distribute.catnip': '担心你的猫猫没有猫薄荷吸并强制分配到农民<br>农民自动分配无视Max~',
			'act.distributeLeader': '分配一只 {0} 猫猫领袖',
			'ui.max.set': '设置 {0} 的最大值',
			'summary.distribute': '帮助 {0} 只偷吃猫薄荷的猫猫找到工作',
			'set.leader': '{0}，喵喵喵！',

			'option.promote': '提拔领袖小猫',
			'act.promote': '花费了 {1} 黄金，小猫领袖被提拔到 {0} 级',
			'summary.promote': '提拔领袖 {0} 次',

			'ui.trigger.useWorkers.alert': '比如玩别的游戏或者在干别的事情，浏览器可能会慢10倍的速度运行\n勾选后将会防止浏览器休眠珂学家，注意会导致使用内存增多，性能消耗增加。\n电脑不好、内存< 8G的建议禁用\n推荐过滤全部日志会减少性能的消耗。\n\n需满足浏览器支持且游戏选项的web worker启用。\n确认后会自动重新勾选启用珂学家\n 最小化浏览器必定会进入后台(游戏和珂学家速度都会被浏览器减慢10倍)',
			'ui.timeCtrl': '时间管理',
			'option.accelerate': '光阴似箭',
			'act.accelerate': '固有时制御，二倍速!',
			'act.accelerate.acl': '抓稳了，猫猫要开始加速了!',
			'act.accelerate.slow': '不行了，猫猫要减速了',
			'act.accelerate.fine': '没关系，{0}已经很厉害了 ❤',
			'summary.accelerate': '小猫加速时间 {0} 次',
			'option.time.skip': '时间跳转',
			'act.time.skip': '燃烧时间水晶, 跳过接下来的 {0} 年!',
			'ui.cycles': '周期',
			'ui.maximum': '单次数量',
			'time.skip.cycle.enable': '启用在 {0} 跳转时间并允许跳过该周期',
			'time.skip.cycle.disable': '停止在 {0} 跳转时间并禁止跳过该周期',
			'time.skip.season.enable': '启用在 {0} 跳转时间',
			'time.skip.season.disable': '停止在 {0} 跳转时间',
			'time.skip.trigger.set': '拥有时间水晶数量大于该触发值才会燃烧时间水晶，取值范围为正整数。\n注意会计算时间水晶库存\n周期默认全勾就行，珂学家会自动判断是否停在红月\n每2秒烧水晶次数固定为 0.04x时计炉(无千禧年0.02)，故单次数量进一法就行\n如果资源回复后资源一直是满的，建议过滤大部分日志\n\n故长挂推荐：触发条件200，单次数量1，周期全勾',
			'summary.time.skip': '燃烧时间水晶，跳过 {0} 年',

			'option.time.reset': '重启时间线 (弃用)',
			'status.reset.check.enable': '在重启时间线前检查 {0}',
			'status.reset.check.disable': '在重启时间线前不检查 {0}',
			'ui.min': 'Min: {0}',
			'reset.check.trigger.set': '为 {0} 设置新的触发值.\n-1 表示必须将此建筑建造至超过资源上限为止',
			'reset.check': '{0} 的触发值: {1}, 现在共有 {2}',
			'reset.checked': '所有条件都已满足，时间线将在几秒后重启!',
			'reset.tip': '你可以通过取消 "启用小猫珂学家" 或 "时间操控" 或 "重启时间线" 以取消此次重启',
			'reset.countdown.10': '10 - 正在收获猫薄荷',
			'reset.countdown.9': '&nbsp;9 - 正在献祭独角兽',
			'reset.countdown.8': '&nbsp;8 - 正在放生蜥蜴',
			'reset.countdown.7': '&nbsp;7 - 正在拆解电磁炮',
			'reset.countdown.6': '&nbsp;6 - 正在启动时间引擎',
			'reset.countdown.5': '&nbsp;5 - 正在融化黑币',
			'reset.countdown.4': '&nbsp;4 - 正在关闭卫星',
			'reset.countdown.3': '&nbsp;3 - 正在打开时空裂隙',
			'reset.countdown.2': '&nbsp;2 - 正在启动时间锻造',
			'reset.countdown.1': '&nbsp;1 - 时间引擎已启动!',
			'reset.countdown.0': '&nbsp;0 - 时空裂缝已打开!',
			'reset.last.message': '我们下个庞加莱回归再见',
			'reset.after': '初次见面，可爱的猫猫珂学家为您服务',
			'reset.cancel.message': '重启时间线计划取消.',
			'reset.cancel.activity': '喵斯顿，我们有麻烦了.',
			'summary.time.reset.title': '过去 {0} 个时间线的总结',
			'summary.time.reset.content': '获得 {0} 业.<br>获得 {1} 领导力.',
			'ui.close': '关闭',

			'auto.countdown': '{0} 秒后将会自动启用珂学家',
			'auto.tip': '你可以通过取消 "首次自动启用珂学家" 以取消此次自动开启',

			'option.fix.cry': '修复冷冻仓',
			'act.fix.cry': '小猫修复了 {0} 个冷冻仓',
			'summary.fix.cry': '修复了 {0} 个冷冻仓',

			// 'summary.auto.newYear': 'Cheney祝你新年快乐🏮🧨🧧',
			'summary.auto.150Faith': '你的信仰空了，看看你的宗教，有新东西',
			'summary.auto.1000Faith': '你的信仰空了，无所谓，太阳革命会出手',
			'summary.auto.academy': '吾等猫类看不上研究院♪呐',
			'summary.auto.anyChallengeActive': '挑战模式中请自己点政策<br>挑战模式中请自己点政策<br>挑战模式中请自己点政策',
			'summary.auto.apocripha': '超越喵喵极限，新约外传才有用捏',
			'summary.auto.aqueduct': '心中无水渠，发展自然神，除非它给的猫薄荷实在太多了',
			'summary.auto.aqueductCatnip': '水渠，饿饿，饭饭',
			'summary.auto.bestUnicorn': '推荐勾选自动最佳独角兽，AI计算建筑，独角兽天角兽都会获得更快',
			'summary.auto.biolab': '小猫为了节省合金发展，轨道测地学前不建造，太空制造前生物实验室优先级降低',
			'summary.auto.blackCore': '活祭之猫的黑之核心不是特别适合呐',
			'summary.auto.bls': '小猫存眼泪准备搅拌这悲伤的液体',
			'summary.auto.biology': '哎呦，只因你镁有钛，跳过困难的生物学',
			'summary.auto.broadcastTower': '小猫知道你缺钛，等钛上限时才会建造更多的广播塔',
			'summary.auto.caravanserai': '储存黄金为了商队驿站。~打败斑马的第一步',
			'summary.auto.changeLeader': '同时勾选提拔领袖小猫、喵喵管理、分配领袖，小喵服务时自会动切换对应领袖特质，发展会快很多的喵<br>科学和工坊升级换到科学家领袖，比如神学的科学价格变为19K等等',
			'summary.auto.craftCatnip': '呐呐呐，你也不想让寒冬时小喵饿死吧？喵粮上交',
			'summary.auto.craftLimited': '每次运行都会合成工艺(即无视触发条件)，数量AI自动。挂机发展速度会远大于触发条件的。',
			'summary.auto.crossbow': '铁当然是要来用来改良弩，喵用喵说好',
			'summary.auto.concreteHuts': '再多问斑马要亿点点钛，就能住上混凝土小屋了',
			'summary.auto.defaultPriest': '默认无限制牧师，如需要限制请更改max',
			'summary.auto.drama': '喵力产量低，羊皮纸库存低，聪明的小猫就不勾栏听曲啦',
			'summary.auto.factory': '有了更多钛的后，小猫下次一定造工厂',
			'summary.auto.fuelInjectors': '给蒸汽工房换上你燃料喷射器捏',
			'summary.auto.furs': '我知道你很急，但是先别急，<br>更高的制作工艺加成后，同样的毛皮会制作更多的羊皮纸',
			'summary.auto.geologist': '黄金和煤有点缺，就多了亿点点搬砖的地质学家',
			'summary.auto.harbor': '港口需要的金属板太多，小猫会少造亿点点(一定是斑马的阴谋',
			'summary.auto.hunter': '未发明弩和导航学，小猫当猎人欲望降低',
			'summary.auto.ironFactory': '如果钢的合成数量偏少，推荐关闭煅烧炉的自动化',
			'summary.auto.ironwood': '喵喵喵把铁收起来，希望住上向往的铁木小屋',
			'summary.auto.keepGold': '猫猫只是想当个守财奴，神殿、铸币厂，再等等猫猫米多点',
			'summary.auto.kittens': '计划生育! 猫粮产量不够了 ovo',
			'summary.auto.ksHelp': '为了游戏可玩性，没有给萌新开放过多智能项目，<br>你点珂学家这些按钮没用捏，因为我只是一只猫，自己多点点游戏捏<br>随着猫猫的发展珂学家初始设置好默认配置下会越来越智能快速效率喵',
			'summary.auto.ksHelp2': '如有你特意想点的项目可以在 工艺 => 资源 => 库存,比如重置前要点猫口建筑设置木材 100K,就会永远留100K的木材让你手点',
			'summary.auto.ksHelp3': '不更改任何设置下，默认配置纯自动大概290年左右 130猫口 + 新约外传(手动咸鱼平均600年❤)',
			'summary.auto.ksHelp4': '小猫杂项里 => 恢复初始配置，只需外面大项目就可以用到毕业，想发展慢一点的话就自己改下设置',
			'summary.auto.ksHelp5': '珂学家的日志过滤需勾选过滤，注意游戏的为不勾选才是过滤日志',
			'summary.auto.lag': '喵喵砖家提示你，燃烧时间水晶：只要不挂在前台请务必打开后台珂学家<br>最好不要设置工程师、在挑战页面挂机可以减少卡顿',
			'summary.auto.leader': '喵喵自觉顶替领袖，做特质相关项目。（领袖特质的具体效果可以参考右下角：百科-游戏标签-村庄-猫口普查）',
			'summary.auto.leaderGold': '猫猫领袖贪污点黄金自用，氪金就能变强',
			'summary.auto.leaderPriest': '已经是成熟的小猫了，该学会好好念经了，领袖职业改为牧师',
			'summary.auto.logHouse': '为了喵喵的幸福，需要更多剧场来上演[所有的狗去天堂]的节目',
			'summary.auto.logHouseMineral': '存点矿物点木屋',
			'summary.auto.lower': '未研究轨道测地学，小猫是懂发展的，故降低牧场、水渠、图书馆、研究院、粮仓、港口、油井、仓库的优先度',
			'summary.auto.lumberMill': '喵喵觉得木头已经发展好了，减少木材厂的建造',
			'summary.auto.marker': '没有黑金字塔小猫拒绝了神印的建造',
			'summary.auto.mansion': '小猫为了节省钛和钢用来发展，宅邸优先度降低（2倍多资源）',
			'summary.auto.miao': '喵~<br>喵喵~<br>喵喵喵~<br>喵喵喵喵~<br>哎嘿，保留10个版本',
			'summary.auto.miningDrill': '来点钢，地质学家会出手',
			'summary.auto.moonBase': '难得素~男德素存到80%，小猫才会有力气造月球基地',
			'summary.auto.nanotechnology': '存点蓝图，喵喵可能要进化成纳米机器猫了',
			'summary.auto.oilTick': '小猫是懂石油的，控制石油平衡暂时不造煅烧炉了',
			'summary.auto.offCalciner': '猫猫只会担心能源，关掉了煅烧炉',
			'summary.auto.one1000years': '聪明的小猫自动勾上了长挂所需要的选项',
			'summary.auto.oxidation': '别急，你先别急，小猫为了氧化反应把钢全存起来了',
			'summary.auto.parchment': '还未感悟到地质学，小猫咪用不了那么多毛皮，毛皮存起来了',
			'summary.auto.pasture': '喵喵喵嫌弃了牧场，木材还是用来发展的好（真的是最后1个了',
			'summary.auto.physics': '艺术猫咪觉得物理学救不了猫咪',
			'summary.auto.railgun': '喵喵想用电磁炮了，就多了亿点点猎人',
			'summary.auto.religion': '大教堂前继续限制神殿和交易所',
			'summary.auto.reinforcedSaw': '用铁给木材厂升级换成加强锯，更加锋利的捏',
			'summary.auto.rotaryKiln': '猫猫看上了<s>回转炉</s>? 减肥旋转滚轮!',
			'summary.auto.sattelite': '小猫足够虔诚，于是会先造卫星回回血，呼呼外层空间条约',
			'summary.auto.scholar': '科学产量可能有点不够，学者猫咪数量上限增加~',
			'summary.auto.scienceBld': '天文台、研究院、生物实验室科学上限快满了才会建造',
			'summary.auto.ship': '征服斑马的第二步，小目标:先制作 {0} 个贸易船<br>⊂(‘ω’⊂ ),斑马拿铁辅料钛<br>喵偷偷告诉你个秘密，贸易船越多跟斑马贸易获得钛几率越大',
			'summary.auto.shipGeodesy': '小猫嗅到了黄金的味道喵 ^ ω ^，来点船船抄斑马的家<br>喵偷偷告诉你个秘密，贸易船越多跟斑马贸易获得钛数量越多哦<br>多点船让斑马把猫猫的钛灌满❤',
			'summary.auto.smelter': '冶炼专精的小猫会根据木材和矿物产量来控制熔炉上限',
			'summary.auto.spaceManufacturing': '猫猫进军太空，大概要用亿点点的钛',
			'summary.auto.spaceStation': '黑暗天空会缺电，小猫贴心替你点了关闭空间站(记得删除时间水晶库存)',
			'summary.auto.spaceStationStar': '小猫咪再等等亿点点时间就会造空间站了，小猫是懂星图的',
			'summary.auto.spaceTrigger': '为了星图，星图得留给探索碧池星',
			'summary.auto.spaceZero': '猫猫小助手提示: 太空触发条件为0时，会变聪明哦',
			'summary.auto.steamworks': '小猫曰：蒸汽工房要与磁电机成双成对',
			'summary.auto.steelAxe': '存着钢换个喵喵自用的精钢斧',
			'summary.auto.steelSaw': '小喵存着钢给木材厂换精钢锯，更加锋利了喵',
			'summary.auto.templars': '没有足够的黄金和铁产量拿什么祷告圣殿骑士呢',
			'summary.auto.temple': '祷告太阳革命后才会建造神殿，真的不是偷懒喵',
			'summary.auto.titaniumGeodesy': '小猫打败斑马的最后一步，存着钛点测地学。',
			'summary.auto.tradepost': '祷告太阳革命前，交易所的建设开摆 ≧ω≦',
			'summary.auto.tear': '小喵都做了什么?! 独角兽的眼泪加小猫幸福度的捏',
			'summary.auto.unicorn': '最佳独角兽建筑：{0}',
			'summary.auto.upgPasture': '当勾选太阳能发电站了，并钛爆仓、且缺电、且猫薄荷产量足够高时，小猫会贴心的帮你卖出全部牧场后，升级太阳能发电站!',
			'summary.auto.upgAqueduct': '当勾选水电站了，有太阳能发电站、且缺电、且猫薄荷产量足够高时，小猫会贴心的帮你卖出全部水渠后，升级水电站!',
			'summary.auto.upgLibrary': '当勾选数据中心了，概要数量大于 150X图书馆数量 时，小猫会贴心的帮你卖出全部图书馆后，升级数据中心!',
			'summary.auto.upgAmphitheatre': '当有贸易船或者钛产量足够高时，小猫会贴心的帮你卖出全部剧场后，升级广播塔!',
			'summary.auto.workshop': '工坊只是解锁升级的 猫玩具罢了，现在小猫只愿意造1个工坊哦',
			'summary.auto.debug': '{0}',
			'summary.upgrade.building.pasture': '卖出牧场 并升级为 太阳能发电站 !',
			'summary.upgrade.building.aqueduct': '卖出水渠 并升级为 水电站 !',
			'summary.upgrade.building.library': '卖出图书馆 并升级为 数据中心!',
			'summary.upgrade.building.amphitheatre': '卖出剧场 并升级为 广播塔!',

			'summary.resource': '小猫自动调整资源: {0} 的消耗率',
			'summary.moon': '小猫停在红月周期散热 {0} 次',
			'summary.time.skip.moon': '由于燃烧时间水晶支出大于收入，停留在红月周期 {0} 次! (可以获得更多的难得素)',

			'summary.blackcoin.buy': '小猫出售遗物并买入 {0} 次黑币',
			'summary.blackcoin.sell': '小猫出售黑币并买入了 {0} 次遗物',

			'summary.accelerator': '电量寄了，大概只有加速器能关闭了（不会影响库存',

			'summary.breweryOn': '已举办文化节，喵星人重新打开了酿酒厂~嗝',
			'summary.breweryOff': '节日或者香料没呐，小猫拒奢守俭，暂时关闭了酿酒厂',
			'summary.brewery': '小猫根据节日调整了 {0} 次酿酒厂',

			'summary.biolab': '小猫担心冬季电不够并关闭了 {0} 个生物实验室(关了后科学上限和科学加成还会加成)',
			'summary.biolab.test': ' {0} 个生物实验室(非常没用的工坊升级)',
			'summary.calciner': '小猫因为你工坊升级了钢铁工厂，故关闭了煅烧炉自动化（其效果铁和煤转化钢没有100%~具体右下角参考百科）（她真的好温柔，😭）',

			'summary.chronocontrolOn': '小猫开启了时间操纵延长时间悖论的持续天数',
			'summary.chronocontrolOff': '小猫关闭了时间操纵节省电力',
			'summary.chronocontrol': '小猫根据时间悖论调整了 {0} 次时间操纵',

			'summary.catnip': '呐，你的猫猫没有猫薄荷吸并强制分配 {0} 个农民',
			'summary.factory': '小猫为了空间的发展，把工厂全部启用呐',
			'summary.magneto': '也许没有石油了导致磁电机自动关机，小猫还是选择打开了它',
			'summary.mint': '秋梨膏别开铸币厂了（其转化效率与喵力上限有关，打猎会获得更多的毛皮，具体右下角参考百科 游戏标签-其它建筑-铸币厂）',
			'summary.moonBase': '小猫我先急，趁你不注意关闭了月球基地',
			'summary.pumpjack': '小猫担心冬季电不够并关闭了 {0} 次油井自动化',
			'summary.reactor': '小猫向反应堆投入了铀开始发光呐，资源产量变多了',
			'summary.steamworks': '小猫向蒸汽工房加了煤开始排蒸汽呐，资源产量变多了',
			'summary.temporalAccelerator': '小猫担心卡顿打开了时空加速器的自动化',

			'summary.festival': '举办了 {0} 次节日喵',
			'summary.stars': '观测了 {0} 次天文事件',
			'summary.praise': '赞美太阳了 {0} 次，共积累了 {1} 虔诚',
			'summary.hunt': '派出了 {0} 批可爱的小猫',
			'summary.hunt.manager': '管理者领袖派出了 {0} 批可爱的小猫',
			'summary.embassy': '设立了 {0} 个大使馆',
			'summary.feed': '向利维坦献祭 {0} 只死灵兽',
			'summary.tech': '{0}',
			'summary.upgrade': '{0}',
			'summary.build': '建造了 {0} 个 {1}',
			'summary.faith': '{1} {0} 次',
			'summary.craft': '制作了{0} 个 {1}',
			'summary.craftLeader': '工匠制作了 {0} 个 {1}',
			'summary.craftManuscript': '小猫偷偷使用了 {0} 次材料合成手稿，为了科学',
			'summary.craftCompedium': '小猫偷偷使用了 {0} 次材料合成概要，为了科学',
			'summary.craftBlueprint': '小猫偷偷使用了 {0} 次材料合成蓝图，为了科学',
			'summary.trade': '{1} 贸易了 {0} 次',
			'summary.year': '年',
			'summary.years': '年',
			'summary.separator': ' ',
			'summary.day': '天',
			'summary.days': '天',
			'summary.head': '你醒啦，看看你的猫国过去 {0} 的总结',
			'summary.show': '小猫总结',
		},
	};
	// if (!i18nData[lang]) {
	// 	console.error(lang + ' not found');
	// 	i18nData[lang] = i18nData['en'];
	// }

	const i18n = function (key, args) {
		// i18n('$xx') mean load string from game
		// i18n('xx') mean load string from ks
		if (key[0] === "$") {
			return $I(key.slice(1));
		}
		let value = i18nData['zh'][key];
		if (typeof value === 'undefined') {
			game.msg(key,'notice');
		}
		if (args) {
			for (let i = 0; i < args.length; i++) {
				value = value.replace('{' + i + '}', args[i]);
			}
		}
		return value;
	};

	const options = {
		// When debug is enabled, messages that go to the game log are also logged using window.console.
		debug: false,
		// The interval at which the internal processing loop is run, in milliseconds.
		interval: 2000,
		// The default color for KS messages in the game log (like enabling and disabling items).
		msgColor: '#aa50fe', // dark purple
		// The color for activity summaries.
		summaryColor: '#009933', // light green
		// The color for log messages that are about activities (like festivals and star observations).
		activityColor: '#E65C00', // orange
		// The color for resources with stock counts higher than current resource max
		stockWarnColor: '#DD1E00',
		// 复制的特质
		copyTrait: false,
		//倒计时
		countdown: 120,
		// 上次渲染的时间
		renderTime: 0,
		// The default consume rate.
		consume: 0.6,
		// The default settings for game automation.
		auto: {
			// Settings related to KS itself.
			engine: {
				// Should any automation run at all?
				enabled: false
			},
			// split form faith to make "Best Unicorn Building" easily
			unicorn: {
				items: {
					unicornPasture:     {require: false,         enabled: true, variant: 'zp', label: i18n('$buildings.unicornPasture.label'), checkForReset: true, triggerForReset: -1},
					unicornTomb:        {require: false,         enabled: true, variant: 'z',  label: i18n('$religion.zu.unicornTomb.label'), checkForReset: true, triggerForReset: -1},
					ivoryTower:         {require: false,         enabled: true, variant: 'z',  label: i18n('$religion.zu.ivoryTower.label'), checkForReset: true, triggerForReset: -1},
					ivoryCitadel:       {require: false,         enabled: true, variant: 'z',  label: i18n('$religion.zu.ivoryCitadel.label'), checkForReset: true, triggerForReset: -1},
					skyPalace:          {require: false,         enabled: true, variant: 'z',  label: i18n('$religion.zu.skyPalace.label'), checkForReset: true, triggerForReset: -1},
					unicornUtopia:      {require: 'gold',        enabled: true, variant: 'z',  label: i18n('$religion.zu.unicornUtopia.label'), checkForReset: true, triggerForReset: -1},
					sunspire:           {require: 'gold',        enabled: true, variant: 'z',  label: i18n('$religion.zu.sunspire.label'), checkForReset: true, triggerForReset: -1},
				}
			},
			faith: {
				// Should religion building be automated?
				enabled: false,
				// At what percentage of the storage capacity should KS build faith buildings?
				trigger: 0,
				// 超越猫薄荷日志
				transcendCatnip: 0,
				// 赞美群星猫薄荷日志
				adoreCatnip: 0,
				// Additional options
				addition: {
					bestUnicornBuilding:    {enabled: true,  misc: true, label: i18n('option.faith.best.unicorn'), confirm: 0},
					autoPraise:             {enabled: true,  misc: true, label: i18n('option.praise'), subTrigger: 0.98,
						msg: 0, time: 0, expect: 0},
					// Former [Faith Reset]
					adore:                  {enabled: true,  misc: true, label: i18n('option.faith.adore'), subTrigger: 0.001},
					transcend:              {enabled: true,  misc: true, label: i18n('option.faith.transcend')},
					alicorn:                {enabled: false, misc: true, label: i18n('option.faith.alicorn')},
					tcRefine:               {enabled: false, misc: true, label: i18n('option.faith.tcRefine'), subTrigger: 100000},
				},
				// Which religious upgrades should be researched?
				items: {
					// Variant denotes which category the building or upgrade falls within in the Religion tab.
					// Ziggurats are variant z.
					// UNICORN BUILDING START
					// unicornPasture:     {require: false,         enabled: true,  variant: 'zp', label: i18n('$buildings.unicornPasture.label')},
					// unicornTomb:        {require: false,         enabled: false, variant: 'z'},
					// ivoryTower:         {require: false,         enabled: false, variant: 'z'},
					// ivoryCitadel:       {require: false,         enabled: false, variant: 'z'},
					// skyPalace:          {require: false,         enabled: false, variant: 'z'},
					// unicornUtopia:      {require: 'gold',        enabled: false, variant: 'z'},
					// sunspire:           {require: 'gold',        enabled: false, variant: 'z'},
					// UNICORN BUILDING END
					marker:             {require: 'unobtainium', enabled: false, max:75, variant: 'z', checkForReset: true, triggerForReset: -1},
					unicornGraveyard:   {require: false,         enabled: false, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					unicornNecropolis:  {require: false,         enabled: false, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					blackPyramid:       {require: 'unobtainium', enabled: true,  max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					// Order of the Sun is variant s.
					solarchant:         {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					scholasticism:      {require: 'faith',       enabled: true, max:3,   variant: 's', checkForReset: true, triggerForReset: -1},
					goldenSpire:        {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					sunAltar:           {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					stainedGlass:       {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					solarRevolution:    {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					basilica:           {require: 'faith',       enabled: true, max:5,   variant: 's', checkForReset: true, triggerForReset: -1},
					templars:           {require: 'faith',       enabled: true, max:6,   variant: 's', checkForReset: true, triggerForReset: -1},
					apocripha:          {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					transcendence:      {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					// Cryptotheology is variant c.
					blackObelisk:       {require: false,         enabled: true,  max:70, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackNexus:         {require: false,         enabled: true,  max:54, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackCore:          {require: false,         enabled: true,  max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					singularity:        {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackLibrary:       {require: false,         enabled: false, max: 0, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackRadiance:      {require: false,         enabled: false, max: 8, variant: 'c', checkForReset: true, triggerForReset: -1},
					blazar:             {require: false,         enabled: false, max:40, variant: 'c', checkForReset: true, triggerForReset: -1},
					darkNova:           {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					holyGenocide:       {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
				}
			},
			build: {
				// Should buildings be built automatically?
				enabled: false,
				// When a building requires a certain resource (this is what their *require* property refers to), then
				// this is the percentage of the storage capacity of that resource, that has to be met for the building
				// to be built.
				trigger: 0,
				// The items that be automatically built.
				// Every item can define a required resource. This resource has to be available at a certain capacity for
				// the building to be built. The capacity requirement is defined by the trigger value set for the section.
				//
				// Additionally, for upgradeable buildings, the item can define which upgrade stage it refers to.
				// For upgraded buildings, the ID (or internal name) of the building can be controlled through the *name*
				// property. For other buildings, the key of the item itself is used.
				items: {
					// production
					field:          {require: 'catnip',      enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// craft bonuses
					workshop:       {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// housing
					hut:            {require: 'wood',        enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					logHouse:       {require: 'minerals',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					mansion:        {require: 'titanium',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					// conversion
					steamworks:     {require: false,         enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					magneto:        {require: false,         enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					reactor:        {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					smelter:        {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					calciner:       {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					mine:           {require: 'wood',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					lumberMill:     {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					oilWell:        {require: 'coal',        enabled: true, max:200,checkForReset: true, triggerForReset: -1},
					factory:        {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// science
					observatory:    {require: 'iron',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					biolab:         {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					library:        {require: 'wood',        enabled: true, max:-1, stage: 0, checkForReset: true, triggerForReset: -1},
					dataCenter:     {require: false,         enabled: true, max:150, stage: 1, name: 'library', checkForReset: true, triggerForReset: -1},
					academy:        {require: 'wood',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					pasture:        {require: 'catnip',      enabled: true, max:150, stage: 0, checkForReset: true, triggerForReset: -1},
					solarFarm:      {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'pasture', checkForReset: true, triggerForReset: -1},
					aqueduct:       {require: 'minerals',    enabled: true, max:250, stage: 0, checkForReset: true, triggerForReset: -1},
					hydroPlant:     {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'aqueduct', checkForReset: true, triggerForReset: -1},
					amphitheatre:   {require: 'minerals',    enabled: true, max:60, stage: 0, checkForReset: true, triggerForReset: -1},
					broadcastTower: {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'amphitheatre', checkForReset: true, triggerForReset: -1},

					// conversion (稍微调低优先度)
					quarry:         {require: false,         enabled: true, max:300,checkForReset: true, triggerForReset: -1},

					chapel:         {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					temple:         {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					mint:           {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					tradepost:      {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// unicornPasture: {require: false,         enabled: true},
					ziggurat:       {require: false,         enabled: true, max:110, checkForReset: true, triggerForReset: -1},
					chronosphere:   {require: 'unobtainium', enabled: false,max:-1,  checkForReset: true, triggerForReset: -1},
					aiCore:         {require: false,         enabled: false,max:-1,  checkForReset: true, triggerForReset: -1},
					brewery:        {require: false,         enabled: true, max:-1,  checkForReset: true, triggerForReset: -1},


					// storage
					barn:           {require: 'wood',        enabled: true, max:15, checkForReset: true, triggerForReset: -1},
					harbor:         {require: false,         enabled: true, max:200,checkForReset: true, triggerForReset: -1},
					warehouse:      {require: false,         enabled: true, max:200,checkForReset: true, triggerForReset: -1},
					accelerator:    {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// zebras
					zebraOutpost:   {require: 'bloodstone',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					zebraWorkshop:  {require: 'bloodstone',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					zebraForge:     {require: 'bloodstone',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1}
				}
			},
			space: {
				// Should space buildings be built automatically?
				enabled: false,
				// The functionality of the space section is identical to the build section. It just needs to be treated
				// separately, because the game internals are slightly different.
				trigger: 0,
				items: {
					// Cath
					spaceElevator:  {require: 'unobtainium', enabled: true, max:110, checkForReset: true, triggerForReset: -1},
					sattelite:      {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					spaceStation:   {require: 'oil',         enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// Moon
					moonOutpost:    {require: 'uranium',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					moonBase:       {require: 'unobtainium', enabled: true, max:140, checkForReset: true, triggerForReset: -1},

					// Dune
					planetCracker:  {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					hydrofracturer: {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					spiceRefinery:  {require: 'science',     enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Piscine
					researchVessel: {require: 'titanium',    enabled: true,  max:-1, checkForReset: true, triggerForReset: -1},
					orbitalArray:   {require: 'science',     enabled: true,  max:-1, checkForReset: true, triggerForReset: -1},

					// Helios
					sunlifter:          {require: 'science', enabled: true,  max:-1, checkForReset: true, triggerForReset: -1},
					containmentChamber: {require: 'science', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					heatsink:           {require: false,     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					sunforge:           {require: false,     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// T-Minus
					cryostation:    {require: 'eludium',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// Kairo
					spaceBeacon:    {require: 'antimatter',  enabled: true, max:51, checkForReset: true, triggerForReset: -1},

					// Yarn
					terraformingStation: {require: 'antimatter',  enabled: false, max:0, checkForReset: true, triggerForReset: -1},
					hydroponics:         {require: 'kerosene',    enabled: false, max:0, checkForReset: true, triggerForReset: -1},

					// Umbra
					hrHarvester:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Charon
					entangler:    {require: 'antimatter',  enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// Centaurus
					tectonic:   {require: 'antimatter', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					moltenCore: {require: 'uranium',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1}
				}
			},
			time: {
				// Should time upgrades be built automatically?
				enabled: false,
				trigger: 0,
				items: {
					// Variants denote whether these buildings fall within the Chronoforge or Void categories.
					// Chronoforge has variant chrono.
					temporalBattery:     {require: false,          enabled: false, max: 0, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					blastFurnace:        {require: false,          enabled: true,  max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					timeBoiler:          {require: false,          enabled: false, max:0,  variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalAccelerator: {require: false,          enabled: false, max: 1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalImpedance:   {require: false,          enabled: false, max: 0, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					ressourceRetrieval:  {require: false,           enabled: true,  max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalPress:       {require: false,          enabled: false, max: 0, variant: 'chrono', checkForReset: true, triggerForReset: -1},

					// Void Space has variant void.
					cryochambers:        {require: false,          enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					voidHoover:          {require: 'antimatter',   enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					voidRift:            {require: false,          enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					chronocontrol:       {require: 'temporalFlux', enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					voidResonator:       {require: false,          enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1}
				}
			},
			timeCtrl: {
				enabled: false,
				items: {
					accelerateTime:     {enabled: true,  subTrigger: 1,     misc: true, label: i18n('option.accelerate')},
					timeSkip:           {enabled: true, subTrigger: 200,     misc: true, label: i18n('option.time.skip'), maximum: 1,
						0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true,
						spring: true, summer: false, autumn: false, winter: false,
						wait: false, adore: false, craft: false, moonMsg: -1},
					//reset:              {enabled: false, subTrigger: 99999, misc: true, label: i18n('option.time.reset')}
				}
			},
			craft: {
				// Should resources be crafted automatically?
				enabled: false,
				// Every item can define a required resource with the *require* property.
				// At what percentage of the storage capacity of that required resource should the listed resource be crafted?
				trigger: 0.95,
				// The items that can be crafted.
				// In addition to the *require* property, which is explained above, items can also define a *max*. If they
				// do, no more than that resource will be automatically produced. This feature can not be controlled through
				// the UI and is not used for any resource by default.
				// The *limited* property tells KS to craft resources whenever the ratio of the component cost of the stored resources
				// to the number of stored components is greater than the limit ratio "limRat".
				// This means that if limRat is 0.5, then if you have 1000 beams and 500 beams worth of scaffolds, 250 of the beams
				// will be crafted into scaffolds. If instead limRat is 0.75, 625 of the beams will be crafted into scaffolds for a final result
				// of 1125 beams-worth of scaffolds and 375 remaining beams.
				// Currently, limRat is not modifiable through the UI, though if there is demand, perhaps this will be added in the future.
				// Limited has a few other effects like balancing plates and steel while minimizing iron waste
				// 贸易船日志时间
				shipTime: 0,
				// TLDR: The purpose of the limited property is to proportionally distribute raw materials
				// across all crafted resources without wasting raw materials.

				items: {
					wood:       {require: 'catnip',      max: 0, limited: true,  limRat: 0.5, enabled: true},
					beam:       {require: 'wood',        max: 0, limited: true,  limRat: 0.5, enabled: true},
					slab:       {require: 'minerals',    max: 0, limited: true,  limRat: 0.5, enabled: true},
					steel:      {require: 'coal',        max: 0, limited: true,  limRat: 0.5, enabled: true},
					plate:      {require: 'iron',        max: 0, limited: true,  limRat: 0.5, enabled: true},
					alloy:      {require: 'titanium',    max: 0, limited: true,  limRat: 0.5, enabled: true},
					concrate:   {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					gear:       {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					scaffold:   {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					ship:       {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					tanker:     {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: false},
					parchment:  {require: false,         max: 0, limited: false, limRat: 0.5, enabled: true},
					manuscript: {require: 'culture',     max: 0, limited: true,  limRat: 0.5, enabled: true},
					compedium:  {require: 'science',     max: 0, limited: true,  limRat: 0.5, enabled: true},
					blueprint:  {require: 'science',     max: 0, limited: true,  limRat: 0.5, enabled: true},
					kerosene:   {require: 'oil',         max: 0, limited: true,  limRat: 0.5, enabled: true},
					megalith:   {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					eludium:    {require: 'unobtainium', max: 0, limited: true,  limRat: 0.5, enabled: true},
					thorium:    {require: 'uranium',     max: 0, limited: true,  limRat: 0.5, enabled: true}
				},
				autoConsume : {},
			},
			trade: {
				cache: false,
				// Should KS automatically trade?
				enabled: false,
				// Every trade can define a required resource with the *require* property.
				// At what percentage of the storage capacity of that required resource should the trade happen?
				trigger: 0.98,
				// Trades can be limited to only happen during specific seasons. This is because trades with certain races
				// are more effective during specific seasons.
				// The *allowCapped* property allows us to trade even if the sold resources are at their cap.
				items: {
					dragons:    {enabled: true,  require: 'titanium',    allowCapped: false,    limited: true,
						summer:  false,  autumn:  true,  winter:  true,          spring:      true},

					zebras:     {enabled: true,   require: false,         allowCapped: false,    limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true},

					lizards:    {enabled: false,  require: 'minerals',    allowCapped: false,    limited: true,
						summer:  true,  autumn:  false, winter:  false,         spring:      false},

					sharks:     {enabled: true,  require: 'iron',        allowCapped: false,    limited: true,
						summer:  false, autumn:  false, winter:  true,          spring:      false},

					griffins:   {enabled: true,   require: 'wood',        allowCapped: false,    limited: true,
						summer:  false, autumn:  true,  winter:  false,         spring:      false},

					nagas:      {enabled: true,   require: false,         allowCapped: false,    limited: true,
						summer:  false, autumn:  false, winter:  false,         spring:      true},

					spiders:    {enabled: true,  require: false,         allowCapped: false,    limited: true,
						summer:  true,  autumn:  true,   winter:  true,         spring:      true},

					leviathans: {enabled: true,   require: 'unobtainium', allowCapped: true,     limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true}
				}
			},
			upgrade: {
				enabled: false,
				items: {
					techs:     {enabled: true,  limited: true},
					upgrades:  {enabled: true,  limited: true, cache: false},
					policies:  {enabled: false, auto: false },
					races:     {enabled: true},
					missions:  {enabled: true, subTrigger: 4},
					buildings: {enabled: true},
				}
			},
			options: {
				//猫薄荷日志
				catnipMsg: 0,
				enabled: true,
				items: {
					style:              {enabled: true,                    misc: true, label: i18n('option.style')},
					hunt:               {enabled: true,  subTrigger: 0.95, require: 'manpower', misc: true, label: i18n('option.hunt')},
					buildEmbassies:     {enabled: true,  subTrigger: 0.95, require: 'culture', misc: true, label: i18n('option.embassies')},
					festival:           {enabled: true,                    misc: true, label: i18n('option.festival')},
					promote:            {enabled: true,                    misc: true, label: i18n('option.promote')},
					autofeed:           {enabled: true,                    misc: true, label: i18n('option.autofeed')},
					observe:            {enabled: true,                    misc: true, label: i18n('option.observe')},
					filterGame:         {enabled: true,  subTrigger: 200,  misc: true, label: '游戏日志过滤'},
					crypto:             {enabled: false, subTrigger: 1e6,  misc: true, label: i18n('option.crypto')},
					fixCry:             {enabled: false,                   misc: true, label: i18n('option.fix.cry')},
					//_steamworks:        {enabled: true,                   misc: true, label: i18n('option.steamworks')},
					saves:              {enabled: false,                   misc: true, label: '导出配置文件'},
					donate:             {enabled: false,                   misc: true, label: '显示捐赠原作者图标'},
					useWorkers:         {enabled: false,                   misc: true, label: i18n('option.useWorkers')},
					wiki:               {enabled: false,                   misc: true, label: '(ฅ´ω`ฅ)使用说明书（百科链接）'},
					autoScientists:     {enabled: false,                   misc: true, label: '首次自动启用珂学家'},
				}
			},
			distribute: {
				religion: false,
				// Should KS automatically distribute free kittens
				enabled: false,
				items: {
					// dynamic priority. distribute to the job which have lowest (job.val / job.max) value.
					// if all jobs reach the max, then distribute kittens to unlimited job.
					woodcutter: {enabled: true, max: 28, limited: true},
					farmer:     {enabled: true, max: 1, limited: true},
					scholar:    {enabled: true, max: 9, limited: true},
					hunter:     {enabled: true, max: 24, limited: true},
					miner:      {enabled: true, max: 26, limited: true},
					priest:     {enabled: true, max: 3, limited: false},
					geologist:  {enabled: true, max: 40, limited: true},
					// engineer:   {enabled: false, max: 0, limited: false},
					leader:     {enabled: true, leaderJob: 'woodcutter', leaderTrait: 'manager'},
				}

			},
			filter: {
				//What log messages should be filtered?
				enabled: false,
				console: {},
				items: {
					buildFilter:             {enabled: true,   label: i18n('filter.build'),     },
					researchFilter:          {enabled: false,  label: i18n('filter.research'),  },
					upgradeFilter:           {enabled: false,  label: i18n('filter.upgrade'),   },
					craftFilter:             {enabled: true,   label: i18n('filter.craft'),     },
					spaceFilter:             {enabled: true,   label: i18n('filter.space'),     },
					policyFilter:            {enabled: true,   label: i18n('filter.policy'),    },
					upgBldFilter:            {enabled: true,   label: i18n('filter.upgBld'),    },
					tradeFilter:             {enabled: true,   label: i18n('filter.trade'),     },
					embassyFilter:           {enabled: true,   label: i18n('filter.embassy'),   },
					huntFilter:              {enabled: true,   label: i18n('filter.hunt'),      },
					unicornSacrificeFilter:  {enabled: true,   label: i18n('filter.sacrifice'), },
					faithBuildFilter:        {enabled: true,   label: i18n('filter.faithBld'),  },
					// 赞美太阳 faith => praise
					faithFilter:             {enabled: true,   label: i18n('filter.praise'),    },
					adoreFilter:             {enabled: false,  label: i18n('filter.adore'),     },
					transcendFilter:         {enabled: true,   label: i18n('filter.transcend'), },
					accelerateFilter:        {enabled: true,   label: i18n('filter.accelerate'),},
					tcShatterFilter:         {enabled: true,   label: i18n('filter.time.skip'), },
					festivalFilter:          {enabled: true,   label: i18n('filter.festival'),  },
					astronomicalEventFilter: {enabled: true,   label: i18n('filter.star'),      },
					distributeFilter:        {enabled: true,   label: i18n('filter.distribute'),},
					leaderFilter:            {enabled: true,   label: i18n('filter.leader'),    },
					miscFilter:              {enabled: false,  label: i18n('filter.misc'),      }
				}
			},
			resources: {
				furs:        {enabled: true,  stock: 350, checkForReset: false, stockForReset: Infinity},
				timeCrystal: {enabled: true,  stock: 0,   checkForReset: true,  stockForReset: 500000}
			},
			policies: [],
			cache: {
				dataTimer: {},
				cacheSum:  {},
				resources: {},
				trait:     {},
				upgrade:   undefined,
				science:   '',
				resUpg:    {},
				stocks:    undefined,
			},
		}
	};

	// 游戏资源对象(方便引用
	let resMap = game.resPool.resourceMap;

	const printout = function (args) {
		let filter = args[1];
		let filters = options.auto.filter;
		if (filters.enabled && filter) {
			let item = filters.items[filter];
			if (item && item.enabled) {return;}
		}
		const color = args.pop();
		args[1] = args[1] || 'ks-default';

		// update the color of the message immediately after adding
		let msg = game.msg.apply(game, args);
		$(msg.span).css('color', color);

		if (options.debug && console) {
			console.log(args);
		}
	};

	// Used for option change messages and other special notifications
	const message = function () {
		let args = Array.prototype.slice.call(arguments);
		args.push('ks-default');
		args.push(options.msgColor);
		printout(args);
	};

	const activity = function () {
		let args = Array.prototype.slice.call(arguments);
		let activityClass = args.length > 1 ? args.pop() : 'miscFilter';
		args.push(activityClass);
		args.push(options.activityColor);
		printout(args);
	};

	const summary = function () {
		const args = Array.prototype.slice.call(arguments);
		args.push('ks-summary');
		args.push(options.summaryColor);
		printout(args);
	};

	const warning = function () {
		const args = Array.prototype.slice.call(arguments);
		args.unshift('Warning!');

		if (console) {
			console.log(args);
		}
	};

	// i18n support
	const imessage = function(key, args, t) { message(i18n(key, args), t); };
	const iactivity = function(key, args, t) { activity(i18n(key, args), t); };
	const iSummary = function(key, args, t) { summary(i18n(key, args), t); };
	//var iwarning = function(key, args, t) { warning(i18n(key, args), t); };

	// 缓存upgrade
	const cacheUpgrades = (metaUpgrades) => {
		let cache = options.auto.cache;
		if (!cache.upgrade) {cache.upgrade = {};}
		let Upg = cache.upgrade;
		for (let i in metaUpgrades) {
			let metaUpg = metaUpgrades[i];
			if (!Upg[i]) {Upg[i] = [];}
			let upgrade = Upg[i];
			for (let j in metaUpg) {
				let metaUpgrade = metaUpg[j];
				if (upgrade.indexOf(metaUpgrade) === -1) {
					upgrade.push(metaUpgrade);
				}
			}
		}
	};
	// 资源百分比
	let resPercent = (name) => {
		let res = resMap[name];
		return res.value / res.maxValue;
	};

	// Core Engine for Kitten Scientists
	// =================================

	let Religion = game.religion;
	let Workshop = game.workshop;

	const Engine = function () {
		this.upgradeManager = new UpgradeManager();
		this.buildManager = new BuildManager();
		this.spaceManager = new SpaceManager();
		this.craftManager = new CraftManager();
		this.bulkManager = new BulkManager();
		this.tradeManager = new TradeManager();
		this.religionManager = new ReligionManager();
		this.timeManager = new TimeManager();
		this.villageManager = new TabManager('Village');
		this.cacheManager = new CacheManager();
	};

	Engine.prototype = {
		upgradeManager: undefined,
		buildManager: undefined,
		spaceManager: undefined,
		craftManager: undefined,
		bulkManager: undefined,
		tradeManager: undefined,
		religionManager: undefined,
		timeManager: undefined,
		villageManager: undefined,
		cacheManager: undefined,

		now: undefined,
		loop: undefined,
		huntID: undefined,
		renderID: undefined,
		worker: undefined,

		changeLeader: false,
		toolText: undefined,
		leaderTimer: undefined,
		leader: 0,
		accelerateTime: 0,
		timeTick: 0,
		time: undefined,
		start: function (msg = true) {
			options.interval = Math.ceil (100 / game.getTicksPerSecondUI()) * 100;
			if (game.isWebWorkerSupported() && game.useWorkers && options.auto.options.items.useWorkers.enabled) {
				if (this.worker) {return;}
				const blob = new Blob([
					"onmessage = function(e) { setInterval(function() {postMessage('miaowu')}, '" + options.interval + "' ); }"
				]);
				const blobURL = window.URL.createObjectURL(blob);

				this.worker = new Worker(blobURL);
				this.worker.addEventListener('message', this.iterate.bind(this));
				this.worker.postMessage("miaowu");
				if (msg) {message('后台珂学家上钟了~ ＞▽＜');}
			} else {
				if (this.loop) {return;}
				this.loop = setInterval(this.iterate.bind(this), options.interval);
				if (msg) {imessage('status.ks.enable');}
			}
		},
		stop: function (msg = true) {
			if (game.isWebWorkerSupported() && this.worker) {
				if (msg) {message('后台珂学家爪巴了');}
				this.worker.terminate();
				this.worker = undefined;
			}

			if (!this.loop) {return;}
			clearTimeout(this.huntID);
			clearTimeout(this.renderID);
			clearInterval(this.loop);
			this.loop = undefined;
			if (msg) {imessage('status.ks.disable');}
		},
		iterate: async function () {
			if (!game.mobileSaveOnPause || game.loadingSave || game.isPaused)               {return this.timeTick = 0;}
			let refresh = 0;
			this.time = performance.now();
			let auto = options.auto;
			let subOptions = auto.options;
			let miscEnabled = subOptions.enabled;
			let items = subOptions.items;
			if (miscEnabled && items.observe.enabled)                                       {this.observeStars();}
			// && items.festival.enabled
			if (miscEnabled)                                                                {this.holdFestival();}
			if (auto.timeCtrl.enabled)                                                      {refresh += ~~this.timeCtrl();}
			if (miscEnabled && items.autofeed.enabled)                                      {this.autofeed();}
			if (miscEnabled && items.promote.enabled)                                       {this.promote();}
			if (auto.trade.enabled)                                                         {this.trade();}
			if (auto.upgrade.enabled)                                                       {refresh += ~~this.upgrade();}
			if (auto.build.enabled)                                                         {refresh += ~~this.build();}
			if (auto.space.enabled)                                                         {refresh += ~~this.space();}
			if (auto.faith.enabled)                                                         {refresh += ~~this.worship();}
			if (refresh > 0 || auto.cache.upgrade)                                          {this.gameUpgrade();}
			if (auto.craft.enabled)                                                         {this.craft();}
			if (miscEnabled && items.hunt.enabled)                                          {this.delay();}
			if (auto.time.enabled)                                                          {refresh += ~~this.chrono();}
			if (miscEnabled && items.crypto.enabled)                                        {this.crypto();}
			if (options.copyTrait)                                                          {this.setTrait();}
			if (miscEnabled)                                                                {refresh += ~~this.miscOptions();}
			if (auto.distribute.enabled)                                                    {refresh += ~~this.distribute();}
			if (refresh > 0)                                                                {this.delay('render');}
			this.calculateTime();
			//if (options.auto.timeCtrl.enabled && options.auto.timeCtrl.items.reset.enabled) {await this.reset();}
		},
		delay: function (render) {
			if (render) {
				let tool = dojo.byId('tooltip').textContent;
				tool = tool.slice(0, Math.ceil(tool.length * 0.4));
				if (options.renderTime + 6e5 < Date.now() || this.toolText !== tool) {
					this.renderID = setTimeout(() => {
						if (game.ui.activeTabId === 'Nummon') {return;}
						options.renderTime = Date.now();
						this.toolText = tool;
						game.ui.render();
					}, Math.min(197, 197 - Date.now() + game.timer.timestampStart));
				}
				game.updateResources();
			} else {
				this.huntID = setTimeout(() => {
					this.hunt();
				}, options.interval * 0.5);
			}
		},
		reset: async function () {
			/*
			// check challenge
			if (game.challenges.anyChallengeActive()) {return;}

			var checkedList = [];
			var checkList = [];
			var check = function (buttons) {
				if (checkList.length !== 0) {
					for (var i in buttons) {
						if (!buttons[i].model.metadata) {continue;}
						var name = buttons[i].model.metadata.name;
						var index = checkList.indexOf(name);
						if (index !== -1) {
							checkList.splice(index, 1);
							if (game.resPool.hasRes(buttons[i].model.prices)) {return true;}
						}
					}
				}
				return false;
			};

			// check building
			var opt = options.auto.build.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = game.bld.get(name);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			// unicornPasture
			opt = options.auto.unicorn.items.unicornPasture;
			if (opt.checkForReset) {
				var bld = game.bld.get('unicornPasture');
				checkedList.push({name: bld.label, trigger: opt.triggerForReset, val: bld.val});
				if (opt.triggerForReset > 0) {
					if (opt.triggerForReset > bld.val) {return;}
				} else {
					checkList.push('unicornPasture');
				}
			}
			if (check(this.buildManager.manager.tab.buttons) || checkList.length) {return;}

			// check space
			opt = options.auto.space.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = game.space.getBuilding(name);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			if (checkList.length != 0) {
				var panels = this.spaceManager.manager.tab.planetPanels;
				for (var i in panels) {
					for (var j in panels[i].children) {
						var model = panels[i].children[j].model;
						var name = model.metadata.name;
						var index = checkList.indexOf(name);
						if (index != -1) {
							checkList.splice(index, 1);
							if (game.resPool.hasRes(model.prices)) {this.return;}
						}
					}
				}
			}
			if (checkList.length) {return;}

			// check religion
			opt = options.auto.faith.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = this.religionManager.getBuild(name, opt[name].variant);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			opt = options.auto.unicorn.items;
			for (var name in opt) {
				if (opt[name].checkForReset && opt[name].variant == 'z') {
					var bld = this.religionManager.getBuild(name, 'z');
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			if (check(this.religionManager.manager.tab.zgUpgradeButtons) ||
				check(this.religionManager.manager.tab.rUpgradeButtons) ||
				check(this.religionManager.manager.tab.children[0].children[0].children) ||
				checkList.length) {return;}

			// check time
			opt = options.auto.time.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = this.timeManager.getBuild(name, opt[name].variant);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}

			if (check(this.timeManager.manager.tab.children[2].children[0].children) ||
				check(this.timeManager.manager.tab.children[3].children[0].children) ||
				checkList.length) {return;}

			// check resources
			opt = options.auto.resources;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var res = game.resPool.get(name);
					checkedList.push({name: res.title, trigger: opt[name].stockForReset, val: res.value});
					if (opt[name].stockForReset > res.value) {return;}
				}
			}

			// stop!
			this.stop(false);

			var sleep = function (time = 1500) {
				return new Promise(resolve => {
					if (!(options.auto.engine.enabled && options.auto.timeCtrl.enabled && options.auto.timeCtrl.items.reset.enabled)) {throw 'canceled by player';}
					setTimeout(resolve, time);
				});
			};

			try {
				for (var i in checkedList) {
					await sleep(500);
					var checked = checkedList[i];
					imessage('reset.check', [checked.name, game.getDisplayValueExt(checked.trigger), game.getDisplayValueExt(checked.val)]);
				}

				await sleep(0).then(() => {
					imessage('reset.checked');
					return sleep();
				}).then(() => {
					iactivity('reset.tip');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.10');
					return sleep(2000);
				}).then(() => {
					imessage('reset.countdown.9');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.8');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.7');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.6');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.5');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.4');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.3');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.2');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.1');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.0');
					return sleep();
				}).then(() => {
					iactivity('reset.last.message');
					return sleep();
				});
			} catch (error) {
				imessage('reset.cancel.message');
				iactivity('reset.cancel.activity');
				return;
			}

			var kittenStorage;
			if (typeof kittenStorage.reset === 'undefined') {kittenStorage.reset = {};}

			kittenStorage.reset.karmaLastTime = game.resPool.get('karma').value;
			kittenStorage.reset.paragonLastTime = game.resPool.get('paragon').value;
			kittenStorage.reset.times += 1;
			kittenStorage.reset.reset = true;
			saveToKittenStorage();

			//=============================================================
			for (var i = 0; i < game.challenges.challenges.length; i++) {
				game.challenges.challenges[i].pending = false;
			}
			game.resetAutomatic();
			//=============================================================
			*/
		},
		timeCtrl: function () {
			const optItem = options.auto.timeCtrl.items;
			let refreshRequired = 0;

			// Tempus Fugit
			if (optItem.accelerateTime.enabled && game.science.get("calendar").researched) {
				const tf = resMap['temporalFlux'];
				if (tf.value >= Math.max(tf.maxValue * optItem.accelerateTime.subTrigger, 5) && !game.time.isAccelerated) {
					game.time.isAccelerated = true;
					this.accelerateTime = performance.now();
					iactivity('act.accelerate', [], 'accelerateFilter');
					storeForSummary('accelerate', 1);
				}
				if (options.interval !== Math.ceil (100 / game.getTicksPerSecondUI()) * 100) {
					engine.stop(false);
					if (options.auto.engine.enabled) {
						if (options.interval === 2000) {
							iactivity('act.accelerate.acl');
							this.accelerateTime = performance.now();
						} else {
							let aTime = this.accelerateTime;
							if (aTime) {
								let total = (performance.now() - aTime) / 1000;
								let Time = game.toDisplaySeconds(total);
								if (Time && total < 61) {
									Time = Time.substring(0, Time.length - 1);
									let msg = game.msg(i18n('act.accelerate.fine',[Time]), null, null, true);
									$(msg.span).css('color', "#ff589c");
								}
								this.accelerateTime = 0;
							}
							iactivity('act.accelerate.slow');
						}
						engine.start(false);
					}
				}
			}

			// Combust time crystal
			TimeSkip:
			if (optItem.timeSkip.enabled && game.workshop.get('chronoforge').researched) {
				let timeCrystalValue = resMap['timeCrystal'].value;
				let timeSkipMaximum = optItem.timeSkip.maximum;
				const heatMax = game.getEffect('heatMax');
				let heatNow = game.time.heat;
				if (!timeSkipMaximum) {return 0;}
				let factor = game.challenges.getChallenge("1000Years").researched ? 5 : 10;
				if (heatNow - 15 * game.getEffect('heatPerTick') < 0.9 * heatMax) {
					let heatTick = game.getEffect('heatPerTick');
					let radiate = 50 / factor * heatTick / game.getTicksPerSecondUI();
					let skipCycle = (game.getEffect("shatterTCGain") * (1 + game.getEffect("rrRatio")) > 1) ? 0 : 5;
					let moreSkip = heatTick > 1 && game.calendar.cycle === skipCycle;
					if (game.bld.get("aiCore").effects["aiLevel"] < 14 || game.getEffect('aiCoreProductivness')) {

					}
					if (heatNow < 10 * game.getTicksPerSecondUI() * game.getEffect('heatPerTick')) {
						if (radiate > 2 && game.calendar.cycle === 5) {
							radiate = 500;
						} else {
							radiate += 1;
						}
					}
					timeSkipMaximum = Math.ceil(Math.max(radiate, timeSkipMaximum));
				}
				// timeSkipMaximum = 50;
				const subTrigger = optItem.timeSkip.subTrigger;
				let cost = Math.max(subTrigger, this.craftManager.getStock('timeCrystal'), timeSkipMaximum);

				const currentCycle = game.calendar.cycle;
				const currentYear = game.calendar.year;
				const currentDay = game.calendar.day;

				// 水晶低于指点数量 、 时间悖论 、 周期禁用 、 热度大于上限
				if (timeCrystalValue < cost || currentDay < 0 || !optItem.timeSkip[currentCycle] || heatNow >= heatMax) {
					break TimeSkip;
				}

				// 红月判断收支平衡
				let prestige = game.prestige.getPerk("numerology").researched;
				if (currentCycle === 5 && optItem.timeSkip[currentCycle] && prestige && game["nummon"]) {
					// 概览 算好的当前周期收入
					let unobtainiumTick = game["nummon"]['getTradeTC']();
					let cycleFestival = game.calendar.cycleEffectsFestival({
						unobtainium: 1
					})['unobtainium'];
					let cycleEffects = game.calendar.cycleEffectsBasics({
						unobtainiumPerTickSpace: 1
					}, "moonOutpost")['unobtainiumPerTickSpace'];
					// 平衡周期
					let calendar = (56.5 + 12 * game.getEffect("festivalRatio")) / 50 ;
					let cycleYear = game.calendar.cycleYear;
					let tradeVal = unobtainiumTick * calendar / (cycleFestival * cycleEffects);
					if (tradeVal < 1 || game.getEffect('heatPerTick') < 0.02) {
						if (cycleYear !== optItem.timeSkip.moonMsg) {
							optItem.timeSkip.moonMsg = cycleYear;
							iactivity('summary.time.skip.moon', [1]);
							storeForSummary('time.skip.moon', 1);
						}
						break TimeSkip;
					}
				}

				let shatter = game["timeTab"].cfPanel.children[0].children[0]; // check?
				if (!shatter.model.enabled) {
					return shatter.controller.updateEnabled(shatter.model);
				}

				let season = game.calendar.season;
				let wait = optItem.timeSkip.wait;
				// 自动停留红月
				let stopMoon = game.getEffect("shatterTCGain") * (1 + game.getEffect("rrRatio")) <= 1 && wait !== false && currentCycle === 5;
				if (!optItem.timeSkip[game.calendar.seasons[season].name] || stopMoon) {
					if (wait === 1 && currentCycle === 5) {
						optItem.timeSkip.wait = game.calendar.year;
						break TimeSkip;
					} else if (wait === false || wait === currentYear || wait === 1) {
						break TimeSkip;
					} else if (wait !== currentYear) {
						optItem.timeSkip.wait = false;
					}
				}

				let heatMin = 4 * timeSkipMaximum * factor;
				let booleanForHeat = (game.time.heat > game.getEffect('heatMax') - Math.min(heatMin, 20 * game.time.getCFU("blastFurnace").on + 20));
				let moonBoolean = optItem.timeSkip[5];
				if (moonBoolean && prestige && optItem.timeSkip.wait === false && booleanForHeat) {
					optItem.timeSkip.wait = 1;
					if (currentCycle === 5) {
						iactivity('summary.moon', [1]);
						storeForSummary('moon', 1);
					}
				}

				let yearsPerCycle = game.calendar.yearsPerCycle;
				let remainingYearsCurrentCycle = yearsPerCycle - game.calendar.cycleYear;
				let cyclesPerEra = game.calendar.cyclesPerEra;
				let canSkip = Math.min(Math.floor((heatMax - heatNow) / factor), timeSkipMaximum);
				let willSkip = 0;
				if (canSkip < remainingYearsCurrentCycle) {
					willSkip = canSkip;
				} else {
					willSkip += remainingYearsCurrentCycle;
					canSkip -= remainingYearsCurrentCycle;
					let skipCycles = 1;
					while (canSkip > yearsPerCycle && optItem.timeSkip[(currentCycle + skipCycles) % cyclesPerEra]) {
						willSkip += yearsPerCycle;
						canSkip -= yearsPerCycle;
						skipCycles += 1;
					}
					if (optItem.timeSkip[(currentCycle + skipCycles) % cyclesPerEra] && canSkip > 0) {willSkip += canSkip;}
				}
				if (willSkip > 0) {
					willSkip = Math.min(willSkip, Math.max(2500, game.getEffect("temporalPressCap") * 25));

					if (game.time.getCFU("ressourceRetrieval").val) {
						optItem.timeSkip.adore = true;
						options.auto.options.items.hunt.time = true;

						// 调整消耗率到1
						let addCraft = optItem.timeSkip;
						if (!addCraft.craft) {
							const resList = ['catnip', 'coal', 'iron', 'oil', 'uranium', 'science'];
							let name = '';
							resList.forEach((res) => {
								options.auto.craft.autoConsume[res] = true;
								name = name + resMap[res].title + '，';
							});
							addCraft.craft = true;
							activity(i18n('summary.resource', [name]));
						}
					}

					let beforeSkipYear = game.calendar.year;
					let beforeSkipShatter = game.time.testShatter;
					if (willSkip > 1 && willSkip < 50) {
						game.time.testShatter = 2;
						msgSummary('lag', false, 'noFilter');
					}
					this.setTrait();
					shatter.controller.doShatterAmt(shatter.model, willSkip);
					game.time.testShatter = beforeSkipShatter;
					willSkip = game.calendar.year - beforeSkipYear;
					if (!willSkip) {return;}
					storeForSummary('timeCrystal', timeCrystalValue - resMap['timeCrystal'].value, 'resConsume');
					refreshRequired = -100;
					iactivity('act.time.skip', [willSkip], 'tcShatterFilter');
					storeForSummary('time.skip', willSkip);
				}
			}

			return refreshRequired;
		},
		promote: function () {
			this.changeLeader = true;
			let village = game.village;
			let leader = village.leader;
			let Distribute = options.auto.distribute;
			let optionLeader = Distribute.items.leader;
			if (leader) {
				let countDown = this.leaderTimer > 600;
				let optionLeaderEnabled = optionLeader.enabled;
				// 20分钟
				if (optionLeaderEnabled && leader.trait.name === optionLeader.leaderTrait || countDown) {
					if (!countDown) {leader.exp += 0.15 + 10 * game.getEffect("skillXP");}
					let rank = leader.rank || 0;
					let goldStock = this.craftManager.getStock('gold');
					let gold = resMap['gold'].value - goldStock;

					// game.village.sim.goldToPromote will check gold
					// game.village.sim.promote check both gold and exp
					if (rank >= this.leader && village.sim.expToPromote(rank, rank + 1, leader.exp)[0]) {
						if (village.sim.goldToPromote(rank, rank + 1, gold)[0]) {
							if (village.sim.promote(leader, rank + 1) === 1) {
								let census = game['villageTab'].censusPanel.census;
								iactivity('act.promote', [rank + 1, 25 + 25 * rank], 'leaderFilter');
								census.renderGovernment(census.container);
								game['villageTab'].censusPanel.census.update();
								this.leader = leader.rank;
								this.leaderTimer = 0;
								this.toolText = 0;
								storeForSummary('gold', 25 + 25 * rank, 'resConsume');
								storeForSummary('promote', 1);
							}
						} else if (!goldStock && rank > 0 && (resMap['faith'].maxValue > 100 || rank < 3)) {
							options.auto.cache.stocks['gold'] = 25 * rank + 25;
							msgSummary('leaderGold');
						}
					}
				} else {
					this.leaderTimer++;
				}
				if (!Distribute.enabled || !optionLeaderEnabled) {
					return msgSummary('changeLeader');
				}
			}
		},
		distribute: function () {
			const distributeItem = options.auto.distribute.items;
			let leaderMeta = distributeItem.leader;
			let refreshRequired = 0;
			let village = game.village;
			let sim = village.sim;
			let Kittens = sim.kittens;
			let kittenLength = Kittens.length;

			let anarchy = game.challenges.isActive("anarchy");
			let tt = Religion.transcendenceTier;
			let priceRatio = game.getEffect("priceRatio");

			let freeKittens = village.getFreeKittens();
			// 缺少猫薄荷
			let resKitten = resMap["kittens"];
			let resCatnip = resMap["catnip"];
			let catnipVal = resCatnip.value;
			let happiness = village.happiness;
			let currentKitten = resKitten.value;
			let catnipTick = Math.min(this.craftManager.getPotentialCatnip(false), resCatnip.perTickCached);
			let catnipPer = resPercent('catnip');
			let negative = (500 + 3000 * (catnipPer < 0.2) + 500 * (catnipPer < 0.5)) * (catnipTick - 0.85 * (Math.max(happiness * !anarchy - 1, 0.25)));
			let winterCatnip = (catnipTick <= 0.85 * happiness && currentKitten < 4) || catnipVal + negative < 0;
			let normalWinterCatnip = (winterCatnip || (village.jobs[1].value === 0 && distributeItem['farmer'].enabled));
			let religionCatnip = options.auto.distribute;
			let farmerCatnip = religionCatnip.religion || (normalWinterCatnip && catnipVal <= resCatnip.maxValue);
			// 分配领袖
			if (leaderMeta.enabled && game.science.get('civil').researched && !anarchy && !options.copyTrait) {
				let traitName = leaderMeta.leaderTrait;
				let leaderJobName = leaderMeta.leaderJob;

				let Leader = village.leader;
				let force = leaderJobName === 'woodcutter' || leaderJobName === 'farmer';
				if (force && traitName === 'manager' && (tt > 6 || priceRatio < -0.06) && village.getJob('priest').unlocked) {
					leaderJobName = 'priest';
					if (Leader && Leader.job !== 'priest') {msgSummary('leaderPriest');}
				}

				if (Leader === null && kittenLength) {
					return game["villageTab"].censusPanel.census.makeLeader(Kittens[0]);
				}
				let optionsTheocracy = false;
				if (options.auto.upgrade.items.policies.enabled) {
					optionsTheocracy = (options.policies === undefined) ? false : options.policies.some(obj => obj === 'theocracy');
				}
				if (optionsTheocracy || game.science.getPolicy('theocracy').researched) {leaderJobName = "priest";}
				let distributeJob = village.getJob(leaderJobName);
				if (Leader == null || !(Leader.job === leaderJobName && Leader.trait.name === traitName)) {
					let traitKittens = Kittens.filter(kitten => kitten.trait.name === traitName);
					if (traitKittens.length !== 0) {
						if (distributeJob.unlocked && distributeJob.value < village.getJobLimit(leaderJobName)) {
							let correctLeaderKitten = traitKittens.sort(function(a, b) {return b.rank - a.rank === 0 ? b.exp - a.exp : b.rank - a.rank;})[0];
							let remove;
							if (correctLeaderKitten.job === 'farmer' && Leader.job !== 'farmer') {remove = Leader.job;}
							village.unassignJob(correctLeaderKitten);
							correctLeaderKitten.job = leaderJobName;
							if (remove) {
								game.village.sim.removeJob(remove, 1);
								freeKittens = village.getFreeKittens();
							}
							village.getJob(leaderJobName).value++;
							game["villageTab"].censusPanel.census.makeLeader(correctLeaderKitten);
							refreshRequired += 1;
							this.toolText = 0;
							iactivity('act.distributeLeader', [i18n('$village.trait.' + traitName)], 'distributeFilter');
							storeForSummary('distribute', 1);
						}
					}
				}
			}
			let woodcutter = village.getJob('woodcutter').value;
			if (!freeKittens) {
				let minerItem = distributeItem.miner;
				if (minerItem.enabled && woodcutter > 1 && kittenLength) {
					let miner = village.jobs[4];
					if (miner.unlocked && !miner.value) {
						for (let i = kittenLength - 1; i > 0; i--) {
							let kitten = Kittens[i];
							if (kitten.isLeader || kitten.job !== 'woodcutter') {continue;}
							village.unassignJob(kitten);
							freeKittens = village.getFreeKittens();
							break;
						}
					}
				}
				// if (distributeItem.scholar.enabled && woodcutter > 3 && kittenLength) {
				// 	let miner = village.jobs[2];
				// 	if (miner.unlocked && !miner.value) {sim.removeJob('woodcutter');}
				// 	sim.removeJob('woodcutter');
				// }

				if (farmerCatnip && catnipTick < 0 && game.science.get("agriculture").researched) {
					let b = game.getResourcePerTick('catnip', true);
					if ((catnipVal + 25 * catnipTick < 0 && game.calendar.day > 92)
						|| catnipVal + (1000 - 10 * game.calendar.day) * b < 0 || religionCatnip.religion) {
						for (let i = kittenLength - 1; i > 0; i--) {
							let kitten = Kittens[i];
							if (kitten.isLeader || kitten.job === 'farmer') {continue;}
							village.unassignJob(kitten);
							freeKittens = village.getFreeKittens();
							break;
						}
					}
				}
				if (!freeKittens) {return refreshRequired;}
			}

			if (farmerCatnip && game.science.get("agriculture").researched) {
				religionCatnip.religion = false;
				village.assignJob(village.getJob("farmer"), 1);
				iactivity('act.distribute.catnip', [], 'distributeFilter');
				iactivity('act.distribute', [i18n('$village.job.' + "farmer")], 'distributeFilter');
				game["villageTab"].updateTab();
				village.updateResourceProduction();
				storeForSummary('catnip', 1);
				return 1;
			}

			let jobName = '';
			let minRatio = Infinity;
			let currentRatio = 0;
			let revolution = Religion.getSolarRevolutionRatio();
			let scholar = (game.challenges.isActive("blackSky") && game.getEffect('calcinerRatio'))
				|| (resMap['unobtainium'].value && tt > 5);
			let atheism = game.challenges.isActive("atheism");
			for (let i = village.jobs.length - 1; i >= 0; i--) {
				let job = village.jobs[i];
				let unlocked = job.unlocked;
				if (!unlocked) {continue;}

				let name = job.name;
				if (name === 'engineer') {continue;}
				let jobItem = distributeItem[name];
				if (!jobItem.enabled) {continue;}

				let maxGame = village.getJobLimit(name);
				let val = job.value;
				if (val >= maxGame) {continue;}

				let maxKS = Math.max(0, jobItem.max);
				let limited = jobItem.limited;
				if (name === 'hunter') {
					let manpowerJobRatio = game.getEffect('manpowerJobRatio');
					let navigation = manpowerJobRatio <= 0.75 && !game.science.get('navigation').researched;
					if (maxKS === 24 && game.workshop.get('railgun').researched) {
						maxKS = 30;
						if (atheism) {maxKS = 100;}
						if (val > 23 && val < 30) {msgSummary('railgun');}
					}

					if (manpowerJobRatio < 0.5) {
						maxKS = (village.maxKittens > 10) ? 2 : 0;
					} else if (navigation) {
						maxKS = Math.round(maxKS * 0.42);
						if (!activitySummary.other['auto.hunter'] && val >= maxKS -1) {
							let div = game.msg($I("village.job.hunter.flavor"), null, null, true);
							$(div.span).css('color', "#ff589c");
							msgSummary('hunter');
						}
					} else {
						msgSummary('hunter', true);
					}
					let manpowerRes = resMap['manpower'];
					if (manpowerRes.maxValue / manpowerRes.perTickCached < 20) {maxKS = 0;}
				}
				// 无神论
				if (atheism) {
					if (name !== 'hunter' || name !== 'farmer') {
						limited = false;
					}
				}
				if (name === 'woodcutter') {
					if (game.getEffect('rankLeaderBonusConversion')) {
						let leader = village.leader;
						if (leader && leader.job === 'woodcutter' && (leader.rank > 1 && leader.exp > 1000 || leader.rank > 2)) {
							maxKS = Math.min(20, maxKS);
						}
					}
					let woodRes = resMap['wood'];
					if (woodRes.maxValue / woodRes.perTickCached < 60) {maxKS = 0;}
					if (Workshop.get('spaceManufacturing').researched || (game.getEffect('calcinerRatio') && anarchy)) {
						maxKS *= 0.5;
					}
				}
				if (name === 'geologist') {
					let geodesy = game.workshop.get("geodesy").researched;
					if (tt > 9) {maxKS = Math.min(maxKS, Math.max(30, 44 - tt));}
					if (!geodesy) {
						if (resMap['iron'].perTickCached < 20) {
							maxKS = Math.round(maxKS * (0.25 - priceRatio) + tt);
							if (resPercent('coal') > 0.97) {maxKS = 0;}
						} else {
							maxKS = Math.min(20, maxKS);
						}
					}
					if (game.science.get('drama').unlocked && resPercent('coal') > 0.8) {maxKS = 1;}
					if (tt < 9 && geodesy) {
						maxKS = Math.max(50 - tt, maxKS);
						if (val >= 40 && val < 50) {
							let msg = msgSummary('geologist');
							if (!msg) {
								$("#set-geologist-max")[0].innerText = i18n('ui.max', [Math.ceil(maxKS)]);
							}
						}
					}
					if (resMap['starchart'].value > 1e5 && !game['diplomacyTab'].visible) {maxKS = 1;}
					if (maxKS > 1 && resPercent('gold') > 0.85) {maxKS = 1;}
					if (!woodcutter) {maxKS = 0;}
				}
				if (name === 'scholar') {
					let moreScholar = 0.28;
					if (!game.getEffect('shatterTCGain')) {
						if (!resMap['starchart'].value && !scholar && resMap['science'].value > 3e3 + 1e4 * (val > 4) && val > 2) {maxKS = 0;}
						if (game.workshop.get('rotaryKiln').researched) {
							moreScholar = 0.5;
						} else {
							if (!tt && resMap['science'].maxValue < 95000 && val > 3) {
								maxKS *= 0.5;
							}
							if (val < 6) {
								if (Workshop.get('cadSystems').researched || revolution > 0.3 * (val > 5) + 0.3) {moreScholar = 0.5;}
							}
						}
						if (!resMap['coal'].value && val > 2) {maxKS *= 0.4;}
						if (scholar) {
							moreScholar = 0.6;
						}
					}
					if (resPercent('science') > moreScholar && val || !woodcutter || (woodcutter < 2 && !resMap['paragon'].value)) {
						maxKS = 0;
					} else if (moreScholar > 0.28) {
						maxKS = Math.max(maxKS, Math.min(23, (game.getEffect('calcinerRatio') > 2.6) * 3 + 11 + revolution + tt * (game.getEffect('priceRatio') < -0.07) + tt * scholar));
						if (val > 8 && val < maxKS) {
							let msg = msgSummary('scholar');
							if (!msg) {
								$("#set-scholar-max")[0].innerText = i18n('ui.max', [Math.ceil(maxKS)]);
							}
						}
					}
				}
				if (name === 'miner') {
					if (!game.science.get('writing').researched) {
						// 货币前少分配
						if (val > 1) {
							if (tt) {
								maxKS = Math.round(maxKS * 0.3 + 0.4 * game.science.get('currency').researched);
							} else {
								maxKS *= 0.8;
							}
						}

						if (!resMap['paragon'].value && village.getJob('scholar').value === 1) {
							maxKS = 1;
						}
						if (!game.science.get('civil').researched && resMap['kittens'].value < 11 && val > 1) {maxKS = 1;}
					}
					if (game.workshop.get('geodesy').researched) {
						if (anarchy || (resMap['starchart'].value > 1e3 && val > 15)) {
							maxKS *= 0.5;
						}
						if (val < Math.min(25, maxKS) && !scholar) {
							maxKS *= 4;
						}
					} else if (tt < 6) {
						maxKS = Math.round(maxKS * (0.94 - 0.05 * (currentKitten < 35) - 0.01 * tt));
					}
					let mineral = resMap['minerals'];
					if (mineral.maxValue / mineral.perTickCached < 60) {maxKS = 0;}
					if (Workshop.get('spaceManufacturing').researched) {
						maxKS *= 0.5;
					}
				}
				if (name === 'priest') {
					if (limited && maxKS === 3) {
						$("#toggle-limited-priest").click();
						msgSummary('defaultPriest');
					}
					if (resMap['starchart'].value > 1e4 && revolution < 3) {maxKS = Math.max(maxKS, 20);}
					if (!revolution) {
						if (tt > 3 && maxKS === 3 && val < 3) {val = 0;}
					}
					if (resMap['paragon'].value < 100) {maxKS = 2;}
					if (!woodcutter) {
						limited = true;
						maxKS = 0;
					}
				}
				if (!limited || val < maxKS) {
					currentRatio = val / maxKS;
					if (currentRatio < minRatio) {
						minRatio = currentRatio;
						jobName = name;
					}
				}
			}
			if (jobName) {
				village.assignJob(village.getJob(jobName), 1);
				refreshRequired = 1;
				iactivity('act.distribute', [i18n('$village.job.' + jobName)], 'distributeFilter');
				storeForSummary('distribute', 1);
			}
			if (refreshRequired) {
				game["villageTab"].updateTab();
				village.updateResourceProduction();
				return 1;
			}
		},
		autofeed: function () {
			const nCorn = resMap["necrocorn"];
			let nCornValue = nCorn.value;
			if (!nCornValue) {return;}
			let Deficit = game.religion.pactsManager.necrocornDeficit;
			if (Deficit) {
				if (nCornValue > Math.ceil(Deficit)) {
					game.religion.pactsManager.necrocornDeficit = 0;
					resMap["necrocorn"].value -= Math.ceil(Deficit);
					game.religion.meta[3].meta[4].unlocked = false;
					nCornValue = nCorn.value;
				}
			}
			const levi = game.diplomacy.get("leviathans");
			if (!levi.unlocked) {return;}
			let cap = game.diplomacy.getMarkerCap();
			if (levi.energy >= cap) {return;}
			if (nCornValue >= 1) {
				game.diplomacy.feedElders(Math.min(nCornValue, cap - levi.energy));
				iactivity('act.feed', [], 'unicornSacrificeFilter');
				storeForSummary('feed', 1);
			} else if (0.25 * (1 + game.getEffect("corruptionBoostRatio")) < 1) {
				storeForSummary('feed', nCornValue);
				game.diplomacy.feedElders();
				iactivity('dispose.necrocorn');
			}
		},
		crypto: function () {
			let coinPrice = game.calendar.cryptoPrice;
			let previousRelic = resMap['relic'].value;
			let previousCoin = resMap['blackcoin'].value;
			if ((!game.science.get("blackchain").researched && !previousCoin > 0) || !game.diplomacy.get("leviathans").unlocked) {return;}
			let crypto = options.auto.options.items.crypto;
			let subTrigger = (crypto.subTrigger == null) ? "1e7-860-1060" : options.auto.options.items.crypto.subTrigger.toString().split('-');
			//var isNumber = /^\d+(\.\d+)?$/;

			let relicTrigger = parseFloat(subTrigger[0]);
			let minCoinPrice = parseFloat(subTrigger[1]);
			let maxCoinPrice = parseFloat(subTrigger[2]);

			if (subTrigger.length !== 3 || !relicTrigger || !minCoinPrice || !maxCoinPrice) {
				if (!relicTrigger) {relicTrigger = 1e7;}
				options.auto.options.items.crypto.subTrigger = relicTrigger + "-881-1060";
				//kittenStorage.items['set-crypto-subTrigger'] = JSON.stringify(relic + "-881-1060");
				//$("#set-crypto-subTrigger")[0].title = relic;
				return saveToKittenStorage();
			}

			// Exchanges up to a certain threshold, in order to keep a good exchange rate, then waits for a higher threshold before exchanging for relics.
			if (coinPrice < minCoinPrice && previousRelic > relicTrigger) {
				game.diplomacy.buyBcoin();

				let currentCoin = resMap['blackcoin'].value;
				let exchangedCoin = game.getDisplayValueExt(currentCoin - previousCoin);
				iactivity('blackcoin.buy', [exchangedCoin, game.getDisplayValueExt(previousRelic)], 'tradeFilter');
				storeForSummary('blackcoin.buy', 1);
			} else if (coinPrice > maxCoinPrice && resMap['blackcoin'].value > 0) {
				game.diplomacy.sellBcoin();

				let currentRelic = resMap['relic'].value;
				let exchangedRelic = game.getDisplayValueExt(currentRelic - previousRelic);

				iactivity('blackcoin.sell', [exchangedRelic, game.getDisplayValueExt(previousCoin)], 'tradeFilter');
				storeForSummary('blackcoin.sell', 1);
			}
		},
		worship: function () {
			const builds = options.auto.faith.items;
			const buildManager = this.buildManager;
			const craftManager = this.craftManager;
			let religionManager = this.religionManager;
			const option = options.auto.faith.addition;
			let religion = Religion;
			let refreshRequired = 0;
			let noPastureCopy, i;
			let voidOrder = game.prestige.getPerk("voidOrder").researched;
			let production = game.prestige.getParagonProductionRatio();
			let rrVal = game.time.getCFU("ressourceRetrieval").val;
			let zigguratOn = game.bld.getBuildingExt('ziggurat').meta.on;

			// 独角兽
			if (option.bestUnicornBuilding.enabled) {
				let btn = this.getBestUnicornBuilding();
				let tearHave = resMap['tears'].value;
				let unicorns = resMap['unicorns'].value;
				let sunspire = religion.getZU('sunspire').on;
				let renaissance = game.prestige.getPerk('renaissance').researched;
				let storeUnicorn = !renaissance || !tearHave || zigguratOn > 27;
				if (btn && storeUnicorn) {
					let oneTear = !tearHave && unicorns >= 1000 && zigguratOn && !game.ironWill;
					let buttonPrices;
					let unicornRatio = (activitySummary.other['auto.bestUnicorn']) ? 0 : 1;
					let blackPyramid = religion.getZU("blackPyramid");
					let blackPyramidVal = blackPyramid.val + (game.challenges.getChallenge("blackSky").researched && !game.challenges.isActive("blackSky") ? 1 : 0);
					resMap['unicorns'].value += resMap['unicorns'].perTickCached * unicornRatio;
					let black = builds['blackPyramid'].enabled && blackPyramid.unlocked;
					let bls = sunspire > 1 && resMap['sorrow'].value < 5 && !blackPyramidVal && resMap['unobtainium'].maxValue > 5e3 && black;
					// 精炼5悲伤
					if (bls) {
						msgSummary('bls');
						if (tearHave >= 10e3) {
							resMap['tears'].value -= 10e3;
							resMap['sorrow'].value += 1;
							activity('小喵把眼泪炼成悲伤');
						}
					}
					if (btn.name === "unicornPasture" && !oneTear && !bls) {
						if (unicorns >= Math.pow(btn.priceRatio + game.getEffect("priceRatio"), btn.val) * 2) {
							buildManager.built(btn.name, undefined, 1);
						}
					} else {
						let tearNeed;
						let btnButton = 0;
						if (oneTear) {
							tearNeed = 1;
							msgSummary('tear');
						} else {
							buttonPrices = dojo.clone(btn.prices);
							for (i = 0; i < buttonPrices.length; i++) {
								let price = buttonPrices[i];
								price.val *= Math.pow(1.15, btn.on);
								if (price.name === 'tears') {
									price.val += craftManager.getStock('tears') + 0.01;
									tearNeed = price.val;
								}
								if (price.name === 'gold') {price.val *= 1 - game.getEffect('goldCostReduction');}
							}
						}
						// 神印留眼泪
						if (blackPyramidVal) {
							if (builds['marker'].enabled) {
								let marker = religion.getZU('marker').on;
								let tearPrice = 5e3 * Math.pow(1.15, marker);
								if (tearHave < tearPrice && sunspire > Math.min(9 + marker, 19)) {tearNeed = Math.min(tearPrice, tearNeed);}
							}
							if (game.calendar.day < 1 && !game.calendar.season && Math.random() < 0.2 && unicornRatio) {
								game.diplomacy.unlockElders();
								game['diplomacyTab'].updateTab();
							}
						}

						tearNeed = (bls) ? 10e3 : tearNeed;
						if (tearNeed > tearHave) {
							// if no ziggurat, getBestUnicornBuilding will return unicornPasture
							let maxSacrifice = Math.floor((unicorns - craftManager.getStock('unicorns')) / 2500);
							let needSacrifice = Math.ceil((tearNeed - tearHave) / zigguratOn);
							if (needSacrifice <= maxSacrifice) {
								let sacrificeBtn = game["religionTab"].sacrificeBtn;
								if (!sacrificeBtn || !sacrificeBtn.model) {return game["religionTab"].render();}
								let unicornTotal = sacrificeBtn.model.prices[0].val * needSacrifice;
								if (unicorns > unicornTotal) {
									let gainCount = zigguratOn * needSacrifice;
									let sacrificeController = sacrificeBtn.controller.controllerOpts;
									game.resPool.addResEvent(sacrificeBtn.model.prices[0].name, -unicornTotal);
									game.resPool.addResEvent(sacrificeController.gainedResource, gainCount);
									game.stats.getStat("unicornsSacrificed").val += unicornTotal;
									storeForSummary('unicorns', unicornTotal, 'resConsume');
									storeForSummary('tears', gainCount, 'resGain');
									gainCount = game.getDisplayValueExt(gainCount);
									unicornTotal = game.getDisplayValueExt(unicornTotal);
									game.msg($I(sacrificeController.logTextID, [unicornTotal, gainCount]), "notice", sacrificeController.logfilterID);
									activity(i18n('unicornSacrifice', [game.getDisplayValueExt(needSacrifice), gainCount]), 'unicornSacrificeFilter');
								}
								//ReligionTab.sacrificeBtn.controller._transform(ReligionTab.sacrificeBtn.model, needSacrifice);
							}
						}
						// && resMap['tears'].value >= tearNeed
						if (!oneTear && !bls && game.resPool.hasRes(buttonPrices) && zigguratOn) {
							religionManager.build(btn.name, 'z', 1);
							refreshRequired = 1;
						}
					}
				}
			} else {
				msgSummary('bestUnicorn');
				msgSummary('changeLeader');
				//builds = Object.assign({}, builds, Object.fromEntries(Object.entries(options.auto.unicorn.items).filter(([k,v]) => v.variant != 'zp')));
				if (options.auto.unicorn.items.unicornPasture.enabled) {
					this.build({unicornPasture: {require: false, enabled: true}});
				}
				noPastureCopy = JSON.parse(JSON.stringify(options.auto.unicorn.items));
				noPastureCopy = Object.assign(noPastureCopy, options.auto.faith.items);
				delete noPastureCopy.unicornPasture;
			}

			// 精炼水晶
			if (option.tcRefine.enabled) {
				if (game.getEffect('relicRefineRatio') > 35) {
					 //未升级时间锻造
					if (zigguratOn && !game.workshop.get("chronoforge").researched && resMap['relic'].value < 6) {
						if (resMap['timeCrystal'].value > option.tcRefine.subTrigger) {
							let refineTCBtn = game['religionTab'].refineTCBtn;
							if (!refineTCBtn) {
								game['religionTab'].render();
								refineTCBtn = game['religionTab'].refineTCBtn;
							}
							refineTCBtn.controller._transform(refineTCBtn.model, 1);
						}
					}
				}
			}

			// religion build
			refreshRequired += this._worship(noPastureCopy || builds);

			let resourceFaith = craftManager.getResource('faith');
			let rate = resPercent('faith');
			let transcendenceMeta = religion.getRU("transcendence");
			let transcendenceReached = transcendenceMeta.on;
			let transcendenceTier = religion.transcendenceTier;
			let tt = transcendenceReached ? transcendenceTier : 0;

			// After Adore epiphany
			let worship = religion.faith;
			let epiphany = religion.faithRatio;
			let solarRatio = religion.getSolarRevolutionRatio();
			let solarRLimit = game.getEffect("solarRevolutionLimit");
			let maxSolarRevolution = 10 + solarRLimit;
			let adoreTrigger = option.adore.subTrigger;
			let triggerSolarRevolution = maxSolarRevolution * adoreTrigger;
			// 1e-6 * 1.01 = 101e-8;
			let epiphanyInc = worship * 101e-8 * (tt + 1) * (tt + 1);
			let epiphanyAfterAdore = epiphany + epiphanyInc;
			let worshipAfterAdore = 0.01 + resourceFaith.value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			let solarRevolutionAfterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, maxSolarRevolution);

			// boolean
			let forceStep = false;
			let autoPraiseEnabled = option.autoPraise.enabled;
			let autoAdoreEnabled = option.adore.enabled;
			let timeSkipAdore = options.auto.timeCtrl.items.timeSkip.adore;
			let doAdoreAfterTimeSkip = (timeSkipAdore && autoPraiseEnabled && autoAdoreEnabled);
			let PraiseSubTrigger = option.autoPraise.subTrigger;

			let moonBoolean = game.space.getBuilding('moonOutpost').val;
			let booleanForAdore = moonBoolean && worship >= 1e5;
			let apocripha = religion.getRU('apocripha').on;
			let firstAdore = tt || (!epiphany && worship > 200e3);
			booleanForAdore = booleanForAdore && apocripha && firstAdore && autoAdoreEnabled;
			let praiseLess = PraiseSubTrigger < 0.98;
			let hasAdored = activitySummary['adore'][0];
			if (moonBoolean && booleanForAdore && praiseLess && PraiseSubTrigger) {option.autoPraise.subTrigger = 0.98;}

			// 超越 和 赞美群星
			if (Math.min(0.999, Math.max(0.98, PraiseSubTrigger)) <= rate || doAdoreAfterTimeSkip) {
				// Transcend
				let catnipVal = resMap['catnip'].value;
				let catnipFactor = 150 + 3850 * (resPercent('catnip') < 0.2);
				if (option.transcend.enabled && transcendenceReached) {
					let TranscendTimes;
					let nextLevelCatnip = religion._getTranscendTotalPrice(tt + 1) - religion._getTranscendTotalPrice(tt);
					let transcendCatnip = this.catnipForReligion(nextLevelCatnip);
					transcendCatnip = transcendCatnip >= 0
						|| (transcendCatnip < 0 && catnipVal + catnipFactor * transcendCatnip > 0);
					if (tt > 10) {
						TranscendTimes = 1;
					}
					if (tt < 11 && moonBoolean && apocripha && transcendCatnip) {
						TranscendTimes = 4;
					}

					while (TranscendTimes) {
						epiphany = religion.faithRatio;
						tt = religion.transcendenceTier;

						// Epiphany Recommend
						let adoreIncreaseRatio = Math.pow((tt + 2) / (tt + 1), 2);
						let needNextLevel = religion._getTranscendTotalPrice(tt + 1) - religion._getTranscendTotalPrice(tt);
						let x = needNextLevel;
						let blackObeliskMeta = religion.getTU("blackObelisk");
						let blackObelisk = blackObeliskMeta.val;
						let obeliskRatio = ((tt + 1) * 5 * blackObelisk + 1000) / (tt * 5 * blackObelisk + 1000);
						if (game.getEffect('shatterTCGain') > 0.07 && game.calendar.trueYear < 1400) {obeliskRatio = 1;}
						let k = adoreIncreaseRatio * obeliskRatio;
						let epiphanyRecommend = (1 - k + Math.sqrt(80 * (k * k - 1) * x + (k - 1) * (k - 1))) * k / (40 * (k + 1) * (k + 1) * (k - 1)) + x + x / (k * k - 1);

						// Transcend Condition
						let booleanEpiphany = epiphany > epiphanyRecommend && worship > 1e5;
						let afterAdoreMoreEpiphany = (worship * 2.02 * tt + 3.03 * worship > 1e6 * needNextLevel && epiphany > needNextLevel);
						if (booleanEpiphany || afterAdoreMoreEpiphany) {
							// code copy from kittens game's religion.js: religion.transcend()
							// religion.transcend() need confirm by player
							// game version: 1.4.8.1
							// ========================================================================================================
							// DO TRANSCEND START
							// ========================================================================================================
							religion.faithRatio -= needNextLevel;
							religion.tcratio += needNextLevel;
							religion.transcendenceTier += 1;
							let atheism = game.challenges.getChallenge("atheism");
							atheism.calculateEffects(atheism, game);
							blackObeliskMeta.calculateEffects(blackObeliskMeta, game);
							game.msg($I("religion.transcend.msg.success", [religion.transcendenceTier]));
							// ========================================================================================================
							// DO TRANSCEND END
							// ========================================================================================================
							tt = religion.transcendenceTier;
							if (tt < 10) {
								forceStep = true;
							}
							for (let i = 0; i < religion.transcendenceUpgrades.length; i++) {
								let upgrade = religion.transcendenceUpgrades[i];
								if (!game.getFeatureFlag("MAUSOLEUM_PACTS") && upgrade.name === 'mausoleum') {
									continue;
								}
								if (!upgrade.unlocked && tt >= upgrade.tier) {
									upgrade.unlocked = true;
									refreshRequired = 1;
								}
							}
							TranscendTimes--;
							iactivity('act.transcend', [game.getDisplayValueExt(needNextLevel), tt], 'transcendFilter');
							storeForSummary('transcend', 1);
						} else {
							TranscendTimes = 0;
						}
					}
				}

				// 打开超越按钮
				let transcendStorage = (game.resPool.isStorageLimited(transcendenceMeta.prices));
				let transcendenceOption = options.auto.faith.items.transcendence;
				if (!transcendenceOption.enabled && worship > transcendenceMeta.faith && autoAdoreEnabled && transcendStorage) {
					transcendenceOption.enabled = true;
					printout(['小猫贴心得无视超越按钮禁用','ks-default', options.activityColor]);
				}

				// Adore
				let adoreFactor = (!religion.faithRatio || tt);
				// 期望太阳革命加成赞美群星
				let paragonFactor = (production < 2) ? 1 + 0.2 + 0.1 * (tt > 6) + (0.5 + 0.1 * Math.log2(solarRLimit)) * (solarRLimit > 0)
					: 1 + 0.005 * tt * tt * (tt < 11);
				let transformTier = 0.5 * Math.log(religion.faithRatio) + 3.45;
				let factor = (adoreFactor < 11 || rrVal) ? 1.3 + paragonFactor * Math.min(0.6, tt * 0.06) + Math.log1p(solarRLimit) : 1.32;
				let expectSolarRevolutionRatio = game.getLimitedDR(paragonFactor * factor * Math.pow(Math.E, 0.65 * transformTier), 100 * maxSolarRevolution);
				let adoreTri = option.adore.subTrigger;
				let expect = solarRatio * 100 < expectSolarRevolutionRatio;
				// 低于期望太阳革命加成时日志提醒
				if (adoreTri === 0.001) {
					if (booleanForAdore && tt) {
						let activityAdore = activitySummary.other['adore.solar'];
						if (!activityAdore || expect) {
							// 并当赞美群星赞美太阳后恢复的加成过少时会取消赞美群星
							let lessRatio = Math.min(expectSolarRevolutionRatio - 45 - tt, maxSolarRevolution * 90 + 3 * tt, maxSolarRevolution * 94);
							let solarAdore = solarRevolutionAfterAdore * 100 <= Math.max(1, lessRatio);
							if (solarAdore) {
								booleanForAdore = false;
							} else {
								if (solarRatio < solarRevolutionAfterAdore + 0.3 && solarRevolutionAfterAdore < 9.7 && solarRevolutionAfterAdore > 4) {
									booleanForAdore = false;
								}
							}
							expectSolarRevolutionRatio = Math.floor(expectSolarRevolutionRatio * 100) / 100;
							if (expectSolarRevolutionRatio !== activityAdore && solarAdore && (!rrVal || !voidOrder)) {
								activity(i18n('summary.adore.solar', [expectSolarRevolutionRatio]));
								activitySummary.other['adore.solar'] = expectSolarRevolutionRatio;
							}
						}
					}
				} else {
					if (booleanForAdore) {
						booleanForAdore = adoreTri * 10 < solarRevolutionAfterAdore;
					}
				}
				if (booleanForAdore) {
					let catnipAdore = this.catnipForReligion();
					booleanForAdore = transcendenceTier > 9 || catnipAdore > 0
						|| (catnipAdore < 0 && catnipVal + catnipFactor * catnipAdore > 0);
				}
				if (booleanForAdore || forceStep) {
					if (doAdoreAfterTimeSkip) {options.auto.timeCtrl.items.timeSkip.adore = false;}
					forceStep = true;
					religion._resetFaithInternal(1.01);
					iactivity('act.adore', [game.getDisplayValueExt(worship), game.getDisplayValueExt(epiphanyInc)], 'adoreFilter');
					activitySummary['adore'][1] += epiphanyInc;
					activitySummary['adore'][0] += 1;
				}
			}

			// 太阳革命加速恢复到期望值
			let transformTier = 0.65 * (0.525 * Math.log(religion.faithRatio) + 3.45);
			let factor = (voidOrder || hasAdored) ? 1 : 0.3;
			let stainedGlassOn = religion.getRU("stainedGlass").on;
			factor = factor * (game.prestige.getPerk('vitruvianFeline').researched) ? 1 : 0.5 - 0.1 * !stainedGlassOn;
			factor = (religion.getRU('solarchant').on > 6) ? 5 - Math.sqrt(production) : factor;
			let maxPercent = (moonBoolean < 3) ? 95 : 80;
			let expectSolarRevolutionRatio = Math.max(1.8,
				game.getLimitedDR(0.3 * Math.pow(Math.E, transformTier) * factor, maxPercent * maxSolarRevolution));
			option.autoPraise.expect = expectSolarRevolutionRatio * 0.01;
			let solarRevolution = religion.getRU('solarRevolution').on;

			praiseLess = !praiseLess && PraiseSubTrigger <= 1;
			if (solarRevolution && praiseLess && solarRatio < expectSolarRevolutionRatio * 0.01) {
				// 彩色玻璃
				let glass = stainedGlassOn || resMap['gold'].value < 180 || game.getEffect('culturePerTickBase') < 0.9;
				// 大教堂
				let basilica = religion.getRU("basilica").on || resMap['gold'].value < 600 || resourceFaith.perTickCached < 1.8
					|| game.getEffect('culturePerTickBase') < 2.7;
				let culturePercent = resPercent('culture');
				if (glass && basilica || culturePercent > 2) {
					// if (resPercent('culture') < 2) {
						PraiseSubTrigger = 0;
						refreshRequired += 1;
					// }
				}
			}

			// 无盛典点出阳光赞歌
			let fR = (1 + game.getUnlimitedDR(epiphany, 0.1) * 0.1);
			let fPraise;
			if (!solarRatio && !voidOrder) {
				if (resourceFaith.value > (1000 - worship) / fR && worship < 1000 && game.getEffect('faithRatioReligion')) {
					fPraise = true;
					msgSummary('1000Faith');
				} else if (resourceFaith.value > (150 - worship) / fR && worship < 150) {
					fPraise = true;
					msgSummary('150Faith');
				}
			}
			// Praise
			let fistReset = (solarRevolution || rate < 0.98 || (!voidOrder && resMap['gold'].value < 400));
			let booleanForPraise = (autoPraiseEnabled && rate >= PraiseSubTrigger && resourceFaith.value > 0.001 && fistReset);
			if (booleanForPraise || forceStep || fPraise) {
				let msgPraise = praiseLess && !forceStep && rate < 0.98 && !timeSkipAdore;
				let times = (transcendenceTier < 5) ? 1e5 : 8e5;
				if (msgPraise && (Date.now() > option.autoPraise.time + times || !activitySummary.other['praise.msg']) && solarRatio) {
					option.autoPraise.time = Date.now();
					let expectSolar = game.getDisplayValueExt(expectSolarRevolutionRatio);
					activity(i18n('summary.praise.msg', [expectSolar]));
					activitySummary.other['praise.msg'] = expectSolar;
				}
				let apocryphaBonus = religion.getApocryphaBonus();
				let faithMap = resMap['faith'];
				let val = faithMap.value + 3 * faithMap.perTickCached;
				let worshipInc = val * (1 + apocryphaBonus);
				activitySummary['praise'][1] += worshipInc;
				activitySummary['praise'][0] += 1;
				storeForSummary('faith', val, 'resConsume');
				iactivity('act.praise', [game.getDisplayValueExt(val), game.getDisplayValueExt(worshipInc)], 'faithFilter');
				faithMap.value = Math.max(val, 0);
				religion.praise();
			}
			return refreshRequired;
		},
		_worship: function (builds) {
			let faithItems = options.auto.faith.items;
			let copyBuilds = JSON.parse(JSON.stringify(builds || options.auto.faith.items));
			let buildManager = this.religionManager;
			let bulkManager = this.bulkManager;
			let solarMeta = Religion.getRU('solarRevolution');
			let changeLeader = (activitySummary.other['auto.changeLeader']) ? 0 : 1;
			let Unlocked = (Religion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched) && resMap['faith'].maxValue > 750 - 75 * changeLeader;
			let tt = Religion.transcendenceTier;
			let trigger = (!solarMeta.on && Unlocked && Religion.getRU('solarchant').on && tt) ? 0.98 + 0.2 * (resMap['gold'].maxValue > 470 - 20 * changeLeader) : options.auto.faith.trigger;

			this.setTrait('wise');
			let leaderRatio = 1 - game.getLimitedDR(0.09 + 0.01 * (1 + game.prestige.getBurnedParagonRatio()), 1.0);
			// 无视触发条件 太阳革命
			if (!solarMeta.on && Unlocked && faithItems.solarRevolution.enabled && Religion.faith > solarMeta.faith) {
				buildManager.build("solarRevolution", "s", 1);
			}
			let basilica = Religion.getRU("basilica").on;
			if (!basilica) {
				if (!Religion.getRU('solarchant').on && resMap['faith'].value > 100 && Religion.faith > 150) {buildManager.build("solarchant", "s", 1);}
				if (copyBuilds['basilica'].enabled) {
					let glass = Religion.getRU("stainedGlass").on;
					if (game.village.leader) {
						copyBuilds['goldenSpire'].enabled = false;
					}
					if (!glass) {
						if (resMap['science'].maxValue > 65e3) {copyBuilds['scholasticism'].enabled = false;}
						if (Religion.faith > 15e3 && tt > 4) {
							copyBuilds['sunAltar'].enabled = false;
						}
					}
					if (tt > 7) {
						copyBuilds['sunAltar'].enabled = false;
						copyBuilds['goldenSpire'].enabled = false;
					}
				}
			}
			// 圣殿骑士
			if (!game.ironWill && game.getEffect('faithRatioReligion') < 0.8) {
				if (resMap['unobtainium'].maxValue < 350 || tt > 10) {copyBuilds['templars'].enabled = false;}
				if (!Religion.getRU("templars").on && resMap['faith'].value > 3e3 && Religion.faith > 75e3) {msgSummary('templars');}
				if (tt) {
					if (!game.getEffect('calcinerRatio')) {
						copyBuilds['goldenSpire'].enabled = false;
						if (tt > 7) {
							copyBuilds['scholasticism'].enabled = false;
							copyBuilds['sunAltar'].enabled = false;
						}
					}
				}
				if (tt < 10 && resMap['paragon'].value > 10) {
					copyBuilds['basilica'].max = 2;
					copyBuilds['scholasticism'].max = (copyBuilds['scholasticism'].max === -1) ? 3 : copyBuilds['scholasticism'].max;
					if (!Workshop.get('spaceManufacturing').researched) {
						copyBuilds['goldenSpire'].max = 2;
						copyBuilds['templars'].max = 0;
					}
					if (!Religion.getRU("sunAltar").on && tt > 4) {copyBuilds['goldenSpire'].enabled = false;}
				}
			}

			// 新约外传
			if (tt && !Religion.getRU("transcendence").on) {
				copyBuilds['apocripha'].enabled = false;
				if (resMap['faith'].value > 6e3) {msgSummary('apocripha');}
			}
			if (Religion.getSolarRevolutionRatio() > 9.98 + 0.9 * game.getEffect("solarRevolutionLimit") && Workshop.get('spaceManufacturing').researched && activitySummary['adore'][0]) {
				let noMax = ['scholasticism','goldenSpire','stainedGlass','basilica','templars'];
				noMax.forEach(index => {copyBuilds[index].max = -1;});
			}

			let marker = Religion.getZU("marker")
			let markerUnlocked = marker.unlocked;
			// 神印
			if (Religion.getZU("blackPyramid").getEffectiveValue(game)) {
				if (!solarMeta.on) {
					copyBuilds['blackPyramid'].enabled = false;
				}
				let rrr = game.getEffect('relicRefineRatio');
				if (rrr < 61 && game.getEffect('beaconRelicsPerDay')) {
					if (resMap['burnedParagon'].value < 1e5) {
						copyBuilds['blackNexus'].max = 36;
					}
					let Num = game['nummon'];
					if (Num && Num.getBestRelicBuilding().indexOf('核心') === -1) {
						copyBuilds['blackCore'].max = 0;
						msgSummary('blackCore');
					}
					if (rrr < 36) {
						copyBuilds['singularity'].max = 5;
						copyBuilds['blazar'].max = 1;
						copyBuilds['blackRadiance'].max = 1;
						copyBuilds['blackObelisk'].max = Math.min(35, rrr + 0.2 * rrr * (rrr > 13));
					}
				}
			} else {
				if (markerUnlocked) {
					let markerBld = copyBuilds['marker'];
					markerBld.enabled = false;
					if (game.resPool.hasRes(marker.prices)) {
						msgSummary('marker');
					}
					if (resMap['burnedParagon'].value < 2e6) {
						markerBld.max = Math.max(80, markerBld.max);
					}
				} else {
					copyBuilds['blackNexus'].max = 0;
				}
				// 黑金字塔
				if (Religion.getZU("sunspire").val < 2) {
					copyBuilds['blackPyramid'].enabled = false;
				}
				copyBuilds['blackCore'].max = 0;
				if (!game.getEffect('beaconRelicsPerDay')) {
					copyBuilds['blackObelisk'].max = 0;
				}
			}

			// 黑图书馆
			if (!game.prestige.getPerk("codexLeviathanianus").researched) {
				copyBuilds['blackLibrary'].max = 0;
			}

			// 黑之光辉
			if (!markerUnlocked) {
				copyBuilds['blackRadiance'].max = 0;
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			let metaData = {};
			for (let name in copyBuilds) {
				let build = copyBuilds[name];
				let metaBuild = buildManager.getBuild(name, build.variant);
				if (build.variant === 's') {
					let stack = metaBuild.noStackable;
					let faithEnabled = (metaBuild.on && stack) || Religion.faith < metaBuild.faith;
					if (faithEnabled) {build.enabled = false;}
					if (stack) {build.max = 1;}
				}
				if (build.variant === "z" && !game.bld.getBuildingExt("ziggurat").meta.on) {build.enabled = false;}
				if (build.variant === 'c' && !game.science.get('cryptotheology').researched) {build.enabled = false;}
				metaData[name] = metaBuild;
			}

			const buildList = bulkManager.bulk(copyBuilds, metaData, trigger);

			let refreshRequired = 0;
			let count;
			for (let entry in buildList) {
				let build = buildList[entry];
				let count = build.count;
				if (count > 0) {
					buildManager.build(build.id, build.variant, count);
					refreshRequired += 1;
				}
			}

			return refreshRequired;
		},
		chrono: function () {
			if (!game["timeTab"].visible || !game.workshop.get('chronoforge').researched) {return 0;}
			let refreshRequired = 0;
			const builds = JSON.parse(JSON.stringify(options.auto.time.items));
			const buildManager = this.timeManager;
			//var craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.time.trigger;

			let cryochambers = builds['cryochambers'];
			let cryochambersMax = cryochambers.max;
			let cryoLimited = game.bld.getBuildingExt("chronosphere").meta.on + game.getEffect("cryochamberSupport");
			cryochambers.max = (cryochambersMax === -1) ? cryoLimited : Math.min(cryoLimited, cryochambersMax);
			let RR = builds['ressourceRetrieval'];
			let rrMax = RR.max;
			let blastFurnace = builds['blastFurnace'];
			if (resMap['timeCrystal'].value < 1e10) {
				blastFurnace.max = 4;
				if (game.getEffect('shatterTCGain') > 0.05) {
					blastFurnace.max = Math.round(127.35 * game.getEffect('shatterTCGain') + 11.393);
				}
				let paragon = resMap['paragon'].value + resMap['burnedParagon'].value;
				if (paragon < 1e7 && game.calendar.trueYear() < 2e3) {
					rrMax = 32;
					if (paragon < 2e4) {
						rrMax = 16;
					}
				}
			}
			RR.max = (rrMax === -1) ? 100 : Math.min(100, rrMax);
			// 时间阻抗
			if (game.calendar.darkFutureYears(true) < 0) {
				builds['temporalImpedance'].max = 0;
			}
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			const metaData = {};
			for (let name in builds) {
				let build = builds[name];
				if (build.variant === 'chrono' && !game.workshop.get('chronoforge').researched) {build.enabled = false;}
				if (build.variant === 'void' && !game.science.get('voidSpace').researched) {build.enabled = false;}
				metaData[name] = buildManager.getBuild(name, build.variant);
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger, 'time');

			for (let entry in buildList) {
				let build = buildList[entry];
				if (build.count > 0) {
					buildManager.build(build.id, build.variant, build.count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		upgrade: function () {
			let i, prices, resource;
			const upgrades = options.auto.upgrade.items;
			const upgradeManager = this.upgradeManager;
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			const buildManager = this.buildManager;
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let revolutionRatio = Religion.getSolarRevolutionRatio();
			let Production = game.prestige.getParagonProductionRatio();
			let priceRatio = game.getEffect('priceRatio');
			let refreshRequired = 0;

			let pastureMeta = game.bld.getBuildingExt('pasture').meta;
			let aqueductMeta = game.bld.getBuildingExt('aqueduct').meta;

			this.setTrait('scientist');
			//upgradeManager.workManager.render();
			//upgradeManager.sciManager.render();
			if (upgrades.techs.enabled && game["libraryTab"].visible) {
				const tech = game.science.techs;
				upgrades.techs.limited = true;
				let nanotechnology = game.science.get('nanotechnology').researched;
				let titanium = resMap['titanium'].value;
				let acoustics = game.science.get('acoustics').researched;
				let relic = resMap['relic'].value;
				let parchment = resMap['parchment'];
				let start = resMap['starchart'].value > 1e5 && !game.science.get('drama').researched && parchment.value < 7500;
				let sciMaxVal = resMap['science'].maxValue;
				techLoop:
				for (let upg of tech) {
					if (upg.researched || !upg.unlocked) {continue;}
					if (upgrades.techs.limited) {
						switch (upg.name) {
							case 'combustion':
								if (sciMaxVal > 15e4 && titanium < 5000 && !game.science.get('metalurgy').researched
									|| (resMap['oil'].maxValue < 20e3 && titanium < 1500 && !priceRatio)) {continue;}
								break;
							case 'biology': {
								let a = geodesy || !activitySummary.other['auto.changeLeader'];
								if ((sciMaxVal < 123e3 && a) || (sciMaxVal > 123e3 && titanium < 5000)) {
									msgSummary('biology');
									continue;
								}
							}
							// falls through
							case 'dimensionalPhysics':
							case 'rocketry':
								if (start) {continue;}
								break;
							case 'chemistry':
								if (!acoustics && revolutionRatio) {continue;}
								break;
							case 'biochemistry':
								if (titanium < 7000) {continue;}
								break;
							case 'ecology':
								if (titanium < 1e4 || start) {continue;}
								break;
							case 'ai':
								if (titanium < 10e3 || start) {continue;}
								break;
							case 'physics':
								if (!acoustics && Religion.transcendenceTier && titanium < 15 && sciMaxVal > 6e4
									&& (resMap['compedium'].value < 120 || resMap['steel'].value < 100)) {
									msgSummary('physics');
									continue;
								}
								break;
							case 'particlePhysics':
								if (Production > 2) {
									if ((!nanotechnology && sciMaxVal > 2e5 && !start)
										|| (!resMap['uranium'].value && sciMaxVal > 180e3)) {continue;}
								}
								break;
							case 'sattelites':
								if (Production > 1.75 || sciMaxVal < 2e5) {break;}
								// if (Production < 1.75 || revolutionRatio > 1) {break;}
							// falls through
							case 'oilProcessing':
								if (!nanotechnology && titanium < 10e3 || !orbitalGeodesy) {continue;}
								break;
							case 'drama': {
								if (resMap['manpower'].perTickCached < 14 && parchment.value < 1e4 + 4e3 * !Production && !resMap['eludium'].value) {
									if (parchment.value > 5000) {msgSummary('drama');}
									continue;
								}
							}
								break;
							case 'quantumCryptography':
								if (game.getEffect('relicRefineRatio') < 2 && game.religion.getZU("blackPyramid").on) {continue;}
								break;
							case 'antimatter':
								if (Production > 2 && !game.getEffect('beaconRelicsPerDay') || !game.workshop.get('chronoforge').researched) {continue;}
								break;
							case 'terraformation':
								if (Production > 2 && (!aqueductMeta.stage || resMap['sorrow'].maxValue < 17)) {continue;}
								break;
							case 'cryptotheology':
								if (relic < 105 && resMap['antimatter'].value < 4000) {continue;}
								break;
							case 'blackchain':
								continue;
						}
					}

					let prices = dojo.clone(upg.prices);
					prices = game.village.getEffectLeader("scientist", prices);
					for (let resource of prices) {
						let name = resource.name;
						if (upgradeManager.getValue(name) < resource.val) {
							continue techLoop;
						}
					}
					refreshRequired = 1;
					upgradeManager.build(upg, 'science');
				}
			}

			if (upgrades.upgrades.enabled && game["workshopTab"].visible) {
				if (!game["workshopTab"].domNode) {refreshRequired = 2;}
				const work = game.workshop.upgrades;
				let Limited = true;
				let noop = [];
				if (Limited) {
					let resStarchart = resMap['starchart'];
					let resStarchartVal = resStarchart.value;
					let isFilter;
					noop = ['biofuel','gmo','invisibleBlackHand','steelPlants','register','neuralNetworks'];
					if (game.getEffect('shatterTCGain') < 0.05) {
						if (Production > 2) {noop = noop.concat(['amReactors','amReactorsMK2','amDrive']);}
					}
					if (!pastureMeta.on || pastureMeta.stage === 0) {
						noop = noop.concat(['photovoltaic', 'thinFilm', 'qdot']);
					}
					if (!aqueductMeta.on || aqueductMeta.stage === 0) {
						noop.push('hydroPlantTurbines');
					}

					// let energy = game.resPool.energyProd - game.resPool.energyCons; (无神论?科学加成?)
					// 虚空
					if (resMap['void'].value < 250) {noop.push('voidAspiration');}
					if (priceRatio) {
						// 虚空反应堆
						noop.push('voidReactors');
					}
					let autoM = ['factoryAutomation','advancedAutomation','pneumaticPress'];
					let pacifism = game.challenges.isActive("pacifism");
					if (game.bld.getBuildingExt('steamworks').meta.on < 1 - 50 * priceRatio) {
						if (!pacifism) {noop = noop.concat(['printingPress','offsetPress','photolithography'], autoM);}
						if (!game.bld.getBuildingExt('steamworks').meta.on) {noop.push('combustionEngine');}
					} else if (!game.opts.enableRedshift) {
						noop = noop.concat(autoM);
					}
					// 和平主义
					if (pacifism) {noop = noop.concat(['bolas',"huntingArmor","steelArmor","alloyArmor","nanosuits",'silos']);}
					if (game.village.getJob('engineer').value < 5) {
						noop = noop.concat(['spaceEngineers','aiEngineers','chronoEngineers','amFission','factoryRobotics','factoryOptimization']);
					}
					// 太阳革命
					if (!revolutionRatio && resMap['faith'].maxValue >= 750 && Religion.faith > 1000) {noop.push('caravanserai');}
					// 过滤钛升级
					if (game.globalEffectsCached['titaniumPerTickAutoprod'] < 0.02 && resMap['ship'].value < 50) {
						if (Production > 2 && resMap['titanium'].value < 15 || revolutionRatio > 1.6) {
							noop.push('titaniumAxe');
						}
						if (revolutionRatio > 2.26) {
							noop.push('silos','astrolabe','titaniumBarns','alloyAxe','alloyArmor','alloyBarns','alloyWarehouses');
						}
					}
					// 过滤测地学
					isFilter = revolutionRatio > 8 + 23.2 * priceRatio || orbitalGeodesy;
					if (isFilter && !game.space.meta[0].meta[3].val && resStarchartVal < 1700) {
						if (!resMap['unobtainium'].value) {noop = noop.concat(['geodesy','seti']);}
						if (!orbitalGeodesy) {
							if (game.getEffect('calcinerRatio') > 1) {noop.push('fuelInjectors');}
							// if (resMap['oil'].value > 35e3) {}
							noop = noop.concat(['titaniumWarehouses','titaniumBarns','steelSaw','titaniumSaw','cadSystems']);
						}
					}
					if (!geodesy) {
						// 筒仓
						noop.push('seti','silos');
						if (!orbitalGeodesy) {
							// 没测地学过滤 钛金锯
							if (revolutionRatio < 6 && resStarchartVal > 300) {
								noop.push('titaniumSaw');
								if (!game.getEffect('calcinerRatio')) {noop.push('pumpjack');}
							}
							let coalPercent = resPercent('coal');
							// 印刷机 光刻机
							if (resMap['oil'].value < 7.5e4) {
								noop = noop.concat(['offsetPress','photolithography']);
								if (coalPercent > 0.8 && resPercent('oil') < 0.95) {
									noop.push('fuelInjectors', 'pyrolysis', 'combustionEngine','coalFurnace');
								}
								if (coalPercent > 0.6 && Production > 1) {
									noop.push('coalFurnace');
								}
							}
							noop.push('titaniumWarehouses');
							if (revolutionRatio > 4 && coalPercent > 0.4) {noop.push('fuelInjectors');}
						}
						// 投石索
						if (!resMap['manpower'].value) {noop.push('bolas');}
						// 货轮
						if (!resMap['ship'].value) {noop.push('cargoShips');}
					}
					// 混凝土粮仓、混凝土仓库、地外、驳船
					if (!game.getEffect('smelterRatio')) {
						noop.push('concreteWarehouses', 'concreteBarns', 'barges', 'seti');
					}
					// 工厂
					if (game.bld.getBuildingExt('factory').meta.val < 3 + 2 * geodesy) {
						noop.push('factoryLogistics', 'refrigeration', 'barges','carbonSequestration','seti');
						if (resPercent('oil') > 0.7) {
							if (Production > 1.5) {
								if (Production > 1.8) {noop.push('pumpjack', 'silos');}
								noop = noop.concat(['oilDistillation','oilRefinery']);
							}
						}
					}
					// 微型亚空间
					if (!game.workshop.get('mWReactor').researched) {
						noop.push('eludiumReflectors', 'amBases', 'coldFusion', 'amReactors','cryocomputing','darkEnergy');
						if (Production > 1) {
							noop.push('lhc');
							if (Production > 2 && revolutionRatio > 4 || resPercent('unobtainium') < 1) {
								noop.push('unobtainiumReflectors', 'astrophysicists');
							}
							// if (Production < 1.626 && !game.workshop.get('unobtainiumHuts').researched) {
							// 	noop.push('miningDrill');
							// }
						}
					}
					// 星链 上行
					if (game.bld.getBuildingExt('library').meta.stage === 0) {
						noop = noop.concat(['starlink', 'uplink', 'cryocomputing']);
					}
					// 加速器
					if (game.bld.getBuildingExt('accelerator').meta.val < 5) {
						noop.push('darkEnergy', 'stasisChambers', 'voidEnergy', 'tachyonAccelerators', 'lhc','assistance');
						if (Production > 4) {
							noop = noop.concat(['stoneBarns', 'reinforcedBarns', 'titaniumBarns', 'alloyBarns', 'concreteBarns', 'alloyWarehouses', 'concreteWarehouses', 'storageBunkers', 'stasisChambers', 'voidEnergy', 'darkEnergy']);
						}
					}
					// AI核心
					if (game.bld.getBuildingExt('aiCore').meta.val < 5) {
						noop = noop.concat(['machineLearning', 'aiBases']);
						let ship = resMap['ship'].value < 5e4;
						if (Production > 4) {
							noop = noop.concat(['storageBunkers', 'tachyonAccelerators', 'darkEnergy','eludiumReflectors','amBases']);
						}
						if (ship) {noop.push('thoriumEngine');}
					}
					// 反应堆槽
					if (game.bld.getBuildingExt('reactor').meta.val < 2 || resMap['ship'].value < 169) {
						noop = noop.concat(['reactorVessel', 'enrichedUranium']);
					}
					// 太阳能卫星
					if (game.space.getBuilding('sattelite').val < 6) {
						noop = noop.concat(['solarSatellites', 'satelliteRadio']);
					}
					// 星图产出
					if (resStarchart.perTickCached) {
						if (resStarchartVal.perTickCached < 1 && game.challenges.isActive('blackSky')) {
							noop = noop.concat(['geodesy']);
						}
					} else {
						noop = noop.concat(['hubbleTelescope']);
					}
					// 碳封存
					let magneto = game.bld.getBuildingExt('magneto').meta;
					if (magneto.val === magneto.on) {noop.push('carbonSequestration');}
					// 钍反应堆
					if (resMap['thorium'].value < 3e5 || game.resPool.energyProd - game.resPool.energyCons > 600) {
						noop.push('thoriumReactors');
						if (Production > 1) {
							noop.push('coldFusion');
							if (resStarchartVal < 2e5) {
								noop.push('amBases','eludiumCracker');
							}
						}
						let hut = game.getEffect('hutPriceRatio');
						if (hut && hut > - 1.06) {noop.push('astrophysicists');}
					}
					// 天体观测仪
					isFilter = resMap['science'].maxValue > 120e3 + 1e5 * geodesy && resStarchartVal < 2075;
					if (isFilter || resMap['titanium'].value < 5 + 10 * revolutionRatio + 5 * !Production) {
						noop = noop.concat(['astrolabe','unobtainiumReflectors','lhc','titaniumMirrors']);
					}
					// 无政府挑战
					if (game.challenges.isActive("anarchy")) {
						noop = noop.concat(['logistics', 'augumentation', 'internet', 'neuralNetworks','register']);
					}
					// 钢铁意志
					if (game.ironWill) {
						noop = noop.concat(['logistics','augumentation','internet','neuralNetworks','mineralHoes','ironHoes','miningDrill',
							'mineralAxes','ironAxes','steelAxe','titaniumAxe','alloyAxe','ironwood','concreteHuts',
							'unobtainiumHuts','eludiumHuts', 'geodesy','register','unobtainiumDrill','assistance',
							'astrophysicists','register']);
					} else if (!game.workshop.get('concreteHuts').researched) {
						noop = noop.concat(['concreteWarehouses', 'concreteBarns', 'barges', 'seti']);
						if (!game.workshop.get('fuelInjectors').researched) {noop.push('offsetPress');}
						// 农民工具升级过滤
						if (game.village.jobs[0].value > 1 && Production > 1 && priceRatio) {
							if (game.getEffect('woodJobRatio') < 0.7) {noop.push('mineralHoes');}
							if (game.getEffect('woodJobRatio') < 1.2) {noop.push('ironHoes');}
						}
						// CAD
						if (geodesy) {
							noop.push('cadSystems');
						}
						if (Production > 1) {
							noop.push('titaniumSaw');
						}
					}
				}

				workLoop:
				for (let upg of work) {
					if (upg.researched || !upg.unlocked) {continue;}
					let upgName = upg.name;
					if (noop.indexOf(upgName) !== -1) {continue;}

					prices = dojo.clone(upg.prices); // game.village.getEffectLeader will override its argument
					prices = game.village.getEffectLeader("scientist", prices);
					for (resource of prices) {
						if (upgradeManager.getValue(resource.name, upgName) < resource.val) {continue workLoop;}
					}

					refreshRequired += 1;
					upgradeManager.build(upg, 'workshop');
				}
			}

			if (upgrades.policies.enabled && game["libraryTab"].visible) {
				// write a function to make breaking big loop easier
				(function () {
					const Science = game.science;
					const policies = Science.policies;
					const length = policies.length;
					const toResearch = [];
					let ratio = (Science.get('astronomy').researched || (resMap['burnedParagon'].value < 1e4 && resMap['culture'].value < 400) || !game.getEffect('priceRatio')) ? 1 : 3;
					let policiesList = options.policies;
					if (upgrades.policies.auto) {
						policiesList = [];
						if (game.challenges.anyChallengeActive()) {
							upgrades.policies.enabled = false;
							$('#toggle-policies').prop("checked", false);
							msgSummary('anyChallengeActive');
						} else {
							if (!game.ironWill) {
								let shipVal = resMap['ship'].value;
								policiesList = ["clearCutting","outerSpaceTreaty",'epicurianism','expansionism','necrocracy'];
								let first = 'liberty';
								let environment = 'sustainability';
								let leader = 'authocracy';// autocracy
								let zebras = '';
								let trade = 'isolationism';
								let tradeNext = 'cityOnAHill';
								let kitten = 'extravagance';
								let philosophy = 'rationality';
								let factory = 'fascism';
								if (shipVal > 65 + 5 * Production) {
									zebras = 'zebraRelationsAppeasement';
								}
								if (priceRatio) {
									philosophy = 'mysticism';
									if (priceRatio < -0.06) {
										zebras = '';
										environment = 'fullIndustrialization';
										trade = 'diplomacy';
										tradeNext = 'knowledgeSharing';
									}
									if (resMap['burnedParagon'].value > 1e4) {
										first = 'tradition';
										leader = 'monarchy';
										tradeNext = 'culturalExchange';
										factory = 'communism';
										kitten = 'carnivale';
									}
								} else {
									first = 'tradition';
								}
								if (game.diplomacy.get('leviathans').unlocked && shipVal > 1e4) {
									zebras = 'zebraRelationsBellicosity';
								}
								policiesList.push(first, environment, leader, trade, tradeNext, philosophy, factory, kitten);
								if (zebras) {
									policiesList.push(zebras);
								}
							}
						}
					 }

					let policyMetaCache = game.science.policyMetaCache;
					for (i in policiesList) {
						let targetName = policiesList[i];
						let policy = policyMetaCache[targetName];
						if (policy) {
							if (!policy.researched) {
								if (policy.blocked) {continue;}
								if (policy.unlocked) {
									if (policy.requiredLeaderJob === undefined ||
										(game.village.leader != null && game.village.leader.job === policy.requiredLeaderJob)
									) {
										toResearch.push(policy);
									}
								}
							}
						}
					}
					checkPrices:
					for (i of toResearch) {
						for (let resource of i.prices) {
							if (craftManager.getValueAvailable(resource.name, true) < resource.val * ratio) {continue checkPrices;}
						}
						upgradeManager.build(i, 'policy');
					}
				})();
			}

			let spaceTab = game["spaceTab"];
			if (upgrades.missions.enabled && spaceTab.visible) {
				let subTrigger = upgrades.missions.subTrigger;
				let missionsLength = game.space.meta[0].meta.length;
				let manu = game.workshop.get('spaceManufacturing').researched;
				if (subTrigger === 4) {
					let chat = resMap['starchart'].value;
					if (chat < 4e5) {
						if (game.challenges.anyChallengeActive()) {
							subTrigger = 5;
						}
						if (priceRatio > -0.06 && resMap['unobtainium'].maxValue < 350) {
							subTrigger = 2;
						}
					}
					if (resMap['antimatter'].value > 60 ||chat > Math.min(2e5 * (1 + Production) * (1 + revolutionRatio), 1e9)
					|| resMap['alicorn'].value > 2) {
						subTrigger = 7;
						if (resMap['relic'].value > 26) {subTrigger = 12;}
					}
				}
				let index = 0;
				let skip = !orbitalGeodesy && (!resMap['unobtainium'].value || !geodesy);
				let GCPanel = spaceTab.GCPanel;
				if (!GCPanel) {spaceTab.render();}
				const missions = game.space.meta[0].meta;
				missionLoop:
				for (i = 0; i < missionsLength; i++) {
					let mission = missions[i];
					if (mission.val && i !== 7) {index++;}
					if (!mission.unlocked || mission.val || i >= subTrigger) {continue;}
					if (skip) {break;}

					let Btn = GCPanel.children[i];
					if (!Btn || !Btn.model.metadata) {
						spaceTab.render();
						break;
					}

					if (!missions[3].val && i === 2 && subTrigger !== 3 && !game.challenges.isActive('blackSky')) {continue;}

					if (Btn.model.metadata.val || Btn.model.metadata.on) {continue;}
					prices = Btn.model.prices;
					for (resource of prices) {
						if (craftManager.getValueAvailable(resource.name, true) < resource.val) {continue missionLoop;}
					}
					if (!Btn.model.enabled) {
						Btn.controller.updateEnabled(Btn.model);
						continue;
					}
					Btn.controller.build(Btn.model, 1);
					manu = 2;
					storePrices(prices);
					if (i === 7 || i === 12) {
						activity(i18n('upgrade.space.mission', [missions[i].label]), 'spaceFilter');
					} else {
						activity(i18n('upgrade.space', [missions[i].label]), 'spaceFilter');
					}
				}
				if (spaceTab.planetPanels.length !== index && !skip || manu > 1) {spaceTab.render();}
			}

			if (upgrades.races.enabled && game.diplomacy.hasUnlockedRaces()) {
				let maxRaces = (game.diplomacy.get('leviathans').unlocked) ? 8 : 7;
				if (game["diplomacyTab"].racePanels.length < maxRaces) {
					let unlockRace = function (race) {
						if (game.diplomacy.get(race).unlocked) {return;}
						let manpower = craftManager.getValueAvailable('manpower', true);
						if (manpower >= 1000) {
							resMap['manpower'].value -= 1000;
							maxRaces = 'render';
							iactivity('upgrade.race', [game.diplomacy.unlockRandomRace().title], 'tradeFilter');
							storeForSummary('manpower', 1000, 'resConsume');
						}
					};
					if (game.challenges.isActive("pacifism") || !game.village.sim.kittens.length || resMap['gold'].value > 15) {
						unlockRace('lizards');
						unlockRace('sharks');
						unlockRace('griffins');
					}
					if (resMap["culture"].value >= 1500) {unlockRace('nagas');}
					if (resMap["ship"].value >= 1) {unlockRace('zebras');}
					if (resMap["ship"].value >= 100 && resMap["science"].maxValue > 125000) {unlockRace('spiders');}
					if (game.science.get("nuclearFission").researched) {unlockRace('dragons');}
				}
				if (!game["diplomacyTab"].racePanels.length || maxRaces === 'render') {game["diplomacyTab"].render();}
			}

			if (upgrades.buildings.enabled) {
				let items = options.auto.build.items;
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				let energyActive = game.challenges.isActive("energy");
				let start = 1000 * (resMap['starchart'].value > 2e6);
				let energy = (winterProd - 10 - 5 * Production - 30 * (revolutionRatio > 9) - start < game.resPool.energyCons)
					|| energyActive;
				let pastures = (pastureMeta.stage === 0) ? pastureMeta.val : 0;
				let aqueducts = (aqueductMeta.stage === 0) ? aqueductMeta.val : 0;
				// 升级建筑
				let upgradeBuilding = (name, meta) => {
					let prices = meta.stages[1].prices;
					if (bulkManager.singleBuildPossible(meta, prices, 1)) {
						buildManager.sellBuild(name);
						game.resPool.payPrices(prices);
						meta.stage = 1;
						meta.on = 1;
						meta.val = 1;
						if (meta.upgrades) {
							if (meta.updateEffects) {
								meta.updateEffects(meta, game);
							}
							cacheUpgrades(meta.upgrades);
						}
						game.bld.getBuildingExt(name)._metaCache = null;
						buildManager.manager.render();
						options.renderTime = 0;
						iactivity('summary.upgrade.building.' + name, [], 'upgBldFilter');
						storeForSummary('upgrade.building.' + name);
						msgSummary('upg' + name.charAt(0).toUpperCase() + name.slice(1), true);
						return 2;
					}
				};

				if (pastureMeta.stage === 0) {
					if (pastureMeta.stages[1].stageUnlocked) {
						let broadcastTower = game.bld.getBuildingExt('amphitheatre').meta.stage === 1;
						let boolean = (energy && broadcastTower && (game.getResourcePerTick('titanium', true) > 20 + Production - 5 * geodesy || game.workshop.get('unobtainiumDrill').researched));
						let catnipTick = craftManager.getPotentialCatnip(true, 0, aqueducts);
						catnipTick = catnipTick > 0 || (catnipTick < 0 && resMap['catnip'].value + 2000 * catnipTick > 0);
						if (catnipTick && boolean && items.solarFarm.enabled && resPercent('titanium') > 0.4) {
							return upgradeBuilding('pasture', pastureMeta);
						} else {
							msgSummary('upgPasture', '', 'upgBldFilter');
						}
					}
				}

				if (aqueductMeta.stage === 0) {
					if (aqueductMeta.stages[1].stageUnlocked) {
						if (pastureMeta.stage === 1) {
							let titanium = 250 * Math.pow(pastureMeta.stages[1].priceRatio + priceRatio, pastureMeta.val) > resMap['titanium'].maxValue || energyActive;
							let catnipTick = craftManager.getPotentialCatnip(true, pastures, 0);
							let catnip = catnipTick > 0 || (catnipTick < 0 && resMap['catnip'].value + (1e4 + 6e3 * (revolutionRatio < 8) - 1e3 * Production) * catnipTick > 0);
							if (catnip && titanium && energy && items.hydroPlant.enabled) {
								return upgradeBuilding('aqueduct', aqueductMeta);
							} else {
								msgSummary('upgAqueduct', '', 'upgBldFilter');
							}
						}
					}
				}

				let libraryMeta = game.bld.getBuildingExt('library').meta;
				if (libraryMeta.stage === 0) {
					if (libraryMeta.stages[1].stageUnlocked) {
						let scienceBldMax = 0.1 * libraryMeta.totalEffectsCached.scienceMax / (1 + Production);
						let paragon = Math.max(1 + game.prestige.getParagonProductionRatio(), 2) / 2;
						let ratio = resMap['compedium'].value * 3 > scienceBldMax / (1 + game.bld.getBuildingExt('biolab').meta.val * 0.01)
							&& game.bld.getEffect('scienceMax') > 3e4 * (1 + Production) * (1 + revolutionRatio);
						ratio |= craftManager.getTickVal(resMap['concrate']) > 600 * paragon;
						let oneP = 1 + Production;
						if (ratio && items.dataCenter.enabled) {
							if (resMap['eludium'].value > Math.pow(3, oneP) - 74 * (!Production && resMap['unobtainium'].value) + 70) {
								if (winterProd >= game.resPool.energyCons + 100 * oneP && !energyActive && resPercent('science') > 0.8) {
									return upgradeBuilding('library', libraryMeta);
								}
							}
						} else {
							msgSummary('upgLibrary', '', 'upgBldFilter');
						}
					}
				}

				let amphitheatreMeta = game.bld.getBuildingExt('amphitheatre').meta;
				if (amphitheatreMeta.stage === 0) {
					if (amphitheatreMeta.stages[1].stageUnlocked) {
						// 考虑 priceRatio 参数船?
						if (items['broadcastTower'].enabled && (game.getResourcePerTick('titanium', true) > 2 || resMap['ship'].value > 400)) {
							return upgradeBuilding('amphitheatre', amphitheatreMeta);
						} else {
							msgSummary('upgAmphitheatre', '', 'upgBldFilter');
						}
					}
				}
			}

			return refreshRequired;
		},
		build: function (builds) {
			const buildManager = this.buildManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.build.trigger;
			let refreshRequired = 0;
			let buildIterate = {};
			let copyItem;
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			// 每次由iterate第一次运行builds为空
			if (typeof builds != 'object') {
				const craftManager = this.craftManager;
				let iw = game.ironWill;
				let blackSky = game.challenges.isActive('blackSky');
				let priceRatio = game.getEffect("priceRatio");
				let vitruvianFeline = priceRatio < -0.06;
				let atheism = game.challenges.isActive('atheism');
				let hasLeader = game.village.leader !== null;

				let Production = game.prestige.getParagonProductionRatio();
				let geodesy = Workshop.get('geodesy').researched;
				let orbitalGeodesy = Workshop.get('orbitalGeodesy').researched;
				let spaceManufacturing = Workshop.get('spaceManufacturing').researched;
				let sattelite = game.space.getBuilding('sattelite').on;

				let solarMeta = Religion.getRU('solarRevolution');
				let revolutionRatio = Religion.getSolarRevolutionRatio();

				let calcinerMeta = game.bld.getBuildingExt('calciner').meta;
				let calcinerVal = calcinerMeta.val;

				let science = game.science;
				let theology = science.get('theology').researched;
				copyItem = {};
				let items = JSON.parse(JSON.stringify(options.auto.build.items));

				let scienceMap = resMap['science'];
				let scienceMax = scienceMap.maxValue;
				let scienceTrigger = scienceMap.value / scienceMax;
				let scienceBuild = (name, max, trigger) => {
					let bld = items[name];
					let bldMax = bld.max;
					if (name) {
						if (scienceTrigger < trigger) {
							bld.max = (bldMax === -1) ? max : Math.min(max, bldMax);
							if (game.bld.getBuildingExt(name).meta.val >= max && !spaceManufacturing) {
								msgSummary('scienceBld');
							}
						} else {
							bld.max = (bldMax === -1) ? game.bld.getBuildingExt(name).meta.val + 4 : bldMax;
						}
					}
				};

				let starchartVal = resMap['starchart'].value;
				if (revolutionRatio < 50 && (starchartVal < 2e6 || sattelite < 10)) {
					let number = (starchartVal > 1e4) ? 100 : 300;
					scienceBuild('observatory', number + game.getEffect('timeRatio') + Math.pow(3.2, Production), 0.95);
					scienceBuild('academy', 22 * (Production + 1), 0.98);
					scienceBuild('biolab', 200, 0.99);
				}

				let winterTick = craftManager.getPotentialCatnip(false);
				let machinery = science.get('machinery').researched;
				let astronomy = science.get('astronomy');
				if (scienceTrigger < 0.98 && (!machinery || astronomy.unlocked) && resMap['minerals'].value) {
					let set = Production && !astronomy.researched;
					if (set) {
						items['academy'].max = 6 * (Production + 1);
						if (game.getEffect('maxKittens') < 12 && Production > 1.5) {items['academy'].max = 3;}
						if (astronomy.unlocked) {msgSummary('academy');}
					}
				}
				// 熔炉
				let smelter = items['smelter'];
				let pasture = items['pasture'];
				if (!game["workshopTab"].visible && science.get('animal').researched) {
					smelter.max = 0;
					if (pasture.max === 150 && !game.challenges.isActive('winterIsComing') && (winterTick > 5 || resMap['minerals'].value > 400 || game.village.jobs[0].value > 3)) {
						pasture.enabled = false;
						msgSummary('pasture');
					}
				}
				if (!theology) {
					let pastureMeta = game.bld.getBuildingExt('pasture').meta;
					let hutVal = game.bld.getBuildingExt('hut').meta.val - 2;
					if (pastureMeta.val > 10) {
						pasture.max = (1 + 3 * priceRatio) * (6 - Production + game.bld.getBuildingExt('library').meta.val - 12.5 * (hutVal === 2));
					}
					let library = items['library'];
					library.max = (hutVal > 0) ? Math.floor(hutVal * 11 + 100 * priceRatio) : library.max;
					if (machinery && resPercent('wood') < 0.9 && !iw) {library.max = 45;}
					if (Production && hutVal < 4 && hutVal > 1) {
						if (priceRatio) {
							if (hutVal === 2 ) {
								items['barn'].max = 1;
							}
							if (hutVal === 3) {
								items['pasture'].max = 10;
							}
						}
						if (winterTick > 2 + !priceRatio + vitruvianFeline) {
							if (Religion.transcendenceTier > 9 && !machinery) {
								if (winterTick > 5 && game.village.jobs[0].value > 1) {pasture.max = 0;}
								items['barn'].max = 0;
							}
							if (!science.get('civil').researched) {
								if (hutVal === 2) {
									library.max = 13 + Production - 3 * vitruvianFeline;
									items['mine'].max = 1;
									pasture.max = 13;
								}
								let vit = !game.bld.getBuildingExt('logHouse').meta.val && vitruvianFeline && !iw;
								if (hutVal === 3) {
									library.max = 30 - 2 * Production - 7 * vitruvianFeline;
									items['academy'].max = 5;
									if (vit) {
										items['mine'].max = 7;
									}
								}
								if (hutVal === 4) {
									if (vit) {
										items['mine'].max = 7;
									}
								}
							}
							if (resMap['parchment'].value > 3 && !resMap['culture'].value) {items['workshop'].max = 0;}
						}
					}
					if (!resMap['gold'].value && !Production) {items['academy'].max = 5;}
					if (!science.get('currency').researched) {items['academy'].max = 1 + Production + !Production;}
					items['warehouse'].max = 20 - 5 * Production + 50 * vitruvianFeline + 2 * hutVal;
				}

				// 工坊
				if (!science.get('writing').researched && resMap['minerals'].value) {
					let workshop = items['workshop'];
					workshop.max = 1;
					if (resPercent('minerals') > 0.9) {workshop.max = 3;}
					msgSummary('workshop');
				} else {
					msgSummary('workshop', true);
				}
				// 没铀不造反应堆
				let reactor = items['reactor'];
				if (!spaceManufacturing && (resMap['titanium'].maxValue > 125000 || (!sattelite && vitruvianFeline))) {reactor.max = 25 + 10 * blackSky;}

				// 采石场
				if (resMap['oil'].maxValue < 55e3) {items['quarry'].max = 35 * (1 + revolutionRatio) / (1 + Production);}
				// 天文台
				if (blackSky && scienceMax > 3e5 && !orbitalGeodesy && !iw) {items['observatory'].max = 3 + calcinerVal;}

				let magnetoMeta = game.bld.getBuildingExt('magneto').meta;
				// 铸币厂 蒸汽工房
				if (!game.challenges.isActive("pacifism")) {
					let mint = items['mint'];
					let manpower = resMap['manpower'].maxValue;
					let mintV = game.bld.getBuildingExt('mint').meta.val;
					if (manpower <= 2e4 && !game.workshop.get("unobtainiumDrill").researched) {
						mint.enabled = false;
					} else if (!mintV || !sattelite || game.getEffect("productionRatio") < 0.5) {
						mint.max = 2 + 10 * (revolutionRatio > 4);
						items['temple'].max = 25;
					} else if (!orbitalGeodesy) {
						mint.enabled = false;
					}
					if (!spaceManufacturing) {
						// 仓库
						let warehouse = items['warehouse'];
						if (warehouse.max === 200) {
							warehouse.max = Math.min(200 * Math.log(1.064) / Math.log(1.15 + priceRatio), 200);
						}
						if (resMap['blueprint'].value < 10) {
							items['chapel'].max = 23;
						}
						if (!iw) {
							let magnetoOn = magnetoMeta.on;
							if (Production < 1 && magnetoOn < 4 && magnetoOn) {
								items['steamworks'].max = 5;
							}
							if (magnetoOn < Math.max(1, 7 - Production - 4 * hasLeader - 3 * (game.getEffect("calcinerRatio") > 0) - 0.4 * geodesy + !Production)) {
								// 解锁磁电机才会造蒸汽工房
								let steamW = items['steamworks'];
								if (game.bld.getBuildingExt('steamworks').meta.unlocked && steamW.enabled && resMap['gear'].value > 19) {
									msgSummary('steamworks');
									steamW.enabled = false;
								}
							} else {
								msgSummary('steamworks', true);
							}
						}
					}
				}
				// 无节日不造酿酒厂
				let Brewery = items['brewery'];
				if (!science.get('metalurgy').researched || resMap['spice'].value > 1e3 && resMap['spice'].value < 1e4) {Brewery.max = 4;}
				if (!game.calendar.festivalDays || resMap['spice'].value < 1e3 + 500 * Production
					|| (!sattelite && winterTick < 0) || resMap['parchment'].value < 5000) {
					Brewery.enabled = false;
				}

				// 神殿
				let temple = items['temple'];
				if (hasLeader && !game.getEffect('unobtainiumPerTickSpace') && resMap['faith'].maxValue < 1e4) {
					temple.max = Math.max(21 + 10 * orbitalGeodesy - Production + 5 * priceRatio - 4 * vitruvianFeline, 10 * (1 + revolutionRatio));
				}
				// 无、低太阳革命
				if (revolutionRatio < 0.06) {
					if (Brewery.max !== 4) {Brewery.max = 30;}
					items['chapel'].max = 19 - 18 * !revolutionRatio+ (resMap['ship'].value > 100) * 60;
					temple.max = 40 - 28 * !geodesy - 3 * hasLeader - Production;
					let smelterVal = game.bld.getBuildingExt('smelter').meta.val;
					if (winterTick > 7 * game.village.happiness * (2 - 1 * hasLeader)) {
						pasture.max = 0;
						msgSummary('pasture');
					}
					if (resMap['wood'].perTickCached < 0.09 && !game.ironWill) {smelter.max = 0;}
					if (smelterVal) {
						if (resMap['wood'].perTickCached * 2 < smelterVal - 0.5 * machinery || resMap['minerals'].perTickCached < smelterVal + 0.8 - 3 * theology - Production - 5 * (astronomy.researched) + priceRatio) {
							smelter.max = 0;
							if (!iw) {msgSummary('smelter');}
						} else {
							smelter.max = smelterVal + 1;
						}
					}
				}

				let templeVal = game.bld.getBuildingExt('temple').meta.val;
				let tradepost = items['tradepost'];
				let solarUnlocked = (Religion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched);
				let goldTri = resMap['gold'].value / resMap['gold'].maxValue;
				// 商队驿站
				if (game.getEffect('standingRatio') < 0.2 && resMap['ivory'].value > 1e4 && templeVal > 11) {
					let caravanserai = game.workshop.get('caravanserai');
					if (caravanserai.unlocked && !caravanserai.researched) {
						temple.enabled = false;
						tradepost.max = 21 - Production;
						msgSummary('caravanserai');
					 }
				}
				// let expect = options.auto.faith.addition.autoPraise.expect;
				if (geodesy) {
					if (hasLeader) {
						if (!orbitalGeodesy && resMap['kittens'].maxValue < 130) {
							if (game.workshop.get('concreteHuts').researched) {
								if (items['hut'].enabled) {buildManager.built('hut', undefined, 1);}
								if (items['logHouse'].enabled) {buildManager.built('logHouse', undefined, 1);}
							}
						}
					}
					if (!Production && scienceMax < 119e3) {
						items['library'].max = 64;
					}
				} else {
					if (priceRatio && revolutionRatio && !spaceManufacturing) {
						// !Religion.getRU("basilica").on
						let basilica = Religion.getRU("basilica").on;
						temple.max = 23 - 8.5 * (priceRatio < 0) - 2 * (revolutionRatio > 3) - 2 * hasLeader + 1.5 * basilica;
						let val = 12 + 2 * templeVal - 5 * Production - 3 * Math.sqrt(revolutionRatio) - 2 * hasLeader
							+ calcinerVal + 2 * geodesy + 5 * !priceRatio + (2 + 2 * vitruvianFeline) * basilica;
						if (!iw) {val = Math.max(Math.min(Math.floor(val), 35), 12);}
						tradepost.max = val;
						msgSummary('religion');
					}
					// 测地学 交易所
					if (!revolutionRatio) {
						tradepost.max = 40 - 25 * (Production > 4) - 5 * hasLeader - 5 * atheism - 7 * !Production;
					}
				}
				// 太阳革命前不造交易所和神殿
				if (!solarMeta.on && !atheism && theology) {
					if (options.auto.faith.items.solarRevolution.enabled) {
						let templeCeil = (!activitySummary.other['auto.changeLeader'] && priceRatio < -0.07) ? 1 : 0;
						if (resMap['faith'].maxValue > 750 - 75 * templeCeil && resMap['gold'].maxValue > 500 - 50 * templeCeil) {
							msgSummary('temple');
							temple.max = Math.floor((7.5 - templeCeil * 0.7) / (1 + game.prestige.getParagonStorageRatio())) + 4 * !hasLeader + 3 * !Production;
							if (resPercent('gold') > 0.961) {
								temple.max = templeVal + 1;
							}
						}
					}
					if (Religion.transcendenceTier) {
						tradepost.max = 21 - 2 * Production + 1 * (resMap['kittens'].value < 60) - 5 * hasLeader - 2 * (resMap['kittens'].value > 70);
					} else {
						tradepost.max = 23 - 2 * Production - 2 * (resMap['kittens'].value > 55);
					}
					if (resPercent('gold') > 0.966) {
						tradepost.max = Math.min(18 + Production, game.bld.getBuildingExt('tradepost').meta.val + 1);
					}
					msgSummary('tradepost');
				} else if (theology) {
					msgSummary('temple', true);
					msgSummary('tradepost', true);
					if (!orbitalGeodesy && templeVal > 25) {temple.enabled = false;}
				}

				// 神学前 交易所神殿
				if (!theology && science.get('philosophy').researched && goldTri < 0.96 && !atheism) {
					temple.max = (priceRatio < -0.07) ? 1 : Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio())) - vitruvianFeline;
					tradepost.max = 21 - 2 * Production - 5 * hasLeader - 1.45 * (resMap['kittens'].value > 43);
					msgSummary('tradepost');
				}

				// 煅烧炉
				let calciner = items['calciner'];
				let calcinerMax = calciner.max;
				if (orbitalGeodesy) {
					if (!spaceManufacturing || !sattelite) {
						let Max = Math.min(46 + revolutionRatio, 6 * revolutionRatio + 15 + 2 * Production + 4 * game.workshop.get('unobtainiumDrill').researched);
						calciner.max = (calcinerMax === -1) ? Math.min(Max + Max * game.getEffect("productionRatio"), 95 - 35 * blackSky + game.space.meta[0].meta[0].on * blackSky * 10)
							: Math.min(50, calcinerMax);
					}
					if (vitruvianFeline && orbitalGeodesy) {
						msgSummary('lower', true);
					}
				} else {
					let uranium = resMap['uranium'].value > 250;
					let oil = resMap['oil'].value > 35e3;
					let amt = 21 + 10 * uranium + 5 * oil;
					if (scienceMax < 2e5 || resMap['oil'].maxValue < 5e4) {
						amt = Math.min(10 + Production * 3 + 2 * Math.sqrt(revolutionRatio), amt);
					}
					calciner.max = (calcinerMax === -1) ? amt : Math.min(amt, calcinerMax);
					if (!game.workshop.get('fluidizedReactors').researched) {calciner.max = 20;}
					if (!game.workshop.get('oxidation').researched) {calciner.max = 5 + revolutionRatio + 0.2 * Production + geodesy;}
					items['warehouse'].max = 45 - 200 * priceRatio + 50 * (priceRatio < -0.07) + 5 * (science.get('electricity').researched) + Production + 4 * calcinerVal * vitruvianFeline + 13 * geodesy * Production * vitruvianFeline;
					items['quarry'].max = revolutionRatio + Math.max(Production - 1, 1) + 4 + calcinerVal * geodesy;
					// 后勤 限制天文台、图书馆
					if (!Production && hasLeader && !Workshop.get('logistics').researched) {
						items['observatory'].max = 26;
						items['library'].max = 60;
					}
					// 反应堆无铀
					if (resMap['uranium'].value < 100) {reactor.max = 0;}
				}

				let oilTick = resMap['oil'].perTickCached - 0.024 * calcinerVal;
				if (oilTick < 0.5 - 0.1 * vitruvianFeline) {
					calciner.max = 1 + 1 * (Production > 1) + 2 * game.getEffect("calcinerRatio");
					if (calcinerVal) {
						msgSummary('oilTick');
					}
					if (oilTick < 0.085) {items['magneto'].max = 0;}
				}

				// 太阳能
				let solarFarm = items['solarFarm'];
				if (resPercent('titanium') < 0.9 && game.resPool.energyProd - 10 > game.resPool.energyCons) {
					solarFarm.enabled = false;
				}

				// 庙塔
				let zigguratM = game.bld.getBuildingExt('ziggurat').meta;
				if (zigguratM.val > 8 + vitruvianFeline && !resMap['alicorn'].unlocked) {
					if (resMap['blueprint'].value < (5 + revolutionRatio - 1.5 * spaceManufacturing + 1 * !orbitalGeodesy) * Math.pow(zigguratM.priceRatio + priceRatio, zigguratM.val)) {
						items['ziggurat'].max = 0;
					} else {
						items['ziggurat'].max = zigguratM.val + 1;
					}
				}

				// 宅邸
				let mansion = items['mansion'];
				let broadcastTower = items['broadcastTower'];
				let archeology = science.get('archeology').researched;
				let shipVal = resMap['ship'].value;
				let titaniumMore = (orbitalGeodesy || shipVal > 600);
				if (spaceManufacturing) {
					// 粮仓
					if (spaceManufacturing && items['barn'].max < 16 && resPercent('wood') > 0.9) {items['barn'].max = -1;}
				} else {
					if (starchartVal > 1e4 - 9e3 * vitruvianFeline && !iw && Production > 1 && resMap['eludium'].value) {
						if (!game.calendar.festivalDays) {
							items['observatory'].max = 70;
							items['chapel'].max = 10;
							items['factory'].max = Math.floor(0.05 * calcinerVal);
							items['amphitheatre'].max = 20;
							items['academy'].max = 60;
							items['harbor'].max = 10;
							broadcastTower.max = 10;
							items['logHouse'].max = Math.min(70, game.bld.getBuildingExt('logHouse').meta.val + 1);
							items['hut'].max = game.bld.getBuildingExt('hut').meta.val + 1;
							if (!resMap['wood'].perTickCached) {smelter.max = 60;}
							items['ziggurat'].max = 1;
							items['mansion'].max = 35;
						}
						let kittens = game.resPool.resourceMap['kittens'];
						if (kittens.maxValue - kittens.value > 60) {
							items['logHouse'].enabled = false;
							items['hut'].enabled = false;
						}
					}
				}
				if (science.get('electronics').researched && !spaceManufacturing) {
					msgSummary('broadcastTower');
					mansion.max = 80;
				} else {
					msgSummary('broadcastTower', true);
				}
				// 宅邸生物实验室
				let titaniumMap = resMap['titanium'];
				let biolab = items['biolab'];
				if (!geodesy && !orbitalGeodesy) {
					if (!iw && mansion.max) {
						mansion.max = 12 - priceRatio - Production;
						if (Production && starchartVal > 100) {mansion.max -= 7;}
						items['quarry'].max = revolutionRatio + Production + 5 + 2 * !Production;
						if (calciner.max === 25 || !resMap['oil'].value) {mansion.max = 0;}
					}
					if (resMap['alloy'].value > 25 && science.get('biology').researched) {
						biolab.max = 0;
						msgSummary('biolab');
					}
				} else {
					if (titaniumMore && !mansion.max && resPercent('titanium') === 1) {
						mansion.max = 45;
					}
					if (spaceManufacturing) {
						msgSummary('biolab', true);
						msgSummary('mansion', true);
						msgSummary('scienceBld', true);
						msgSummary('smelter', true);
						if (revolutionRatio > 0.1 && orbitalGeodesy) {msgSummary('pasture', true);}
					} else {
						if (resPercent('titanium') < 0.98 || game.getEffect("calcinerRatio") < 2) {
							let number = (!orbitalGeodesy && scienceMax > 181e3 && calcinerVal > 19) || calcinerVal < 20 || scienceMax > 190e3;
							biolab.max = Math.max(20 - revolutionRatio - Production - 15 * number, 21 * (!Production && scienceMax < 181e3));
							if (!geodesy) {
								mansion.max = Math.max(Math.floor(17 * (Production + 1)), 135 - game.village.maxKittens);
							}
						}
						if (revolutionRatio && game.getEffect('faithRatioReligion') < 0.2) {
							tradepost.max = Math.min(36 + Math.max(4 * geodesy, 22 * orbitalGeodesy, 0.5 * calcinerVal) - 5 * vitruvianFeline, 50);
							if (items['workshop'].enabled) {
								let kittensMaxVal = resMap['kittens'].maxValue;
								if (Production > 1 || kittensMaxVal < 125 || kittensMaxVal > 135) {
									// 优先工坊
									let workshop = game.bld.getBuildingExt('workshop').meta;
									if (resMap['minerals'].maxValue * 0.95 > 400 * Math.pow(workshop.priceRatio + priceRatio, workshop.val)) {
										items['logHouse'].enabled = false;
										smelter.max = 25 + 35 * vitruvianFeline;
										items['aqueduct'].enabled = false;
										items['amphitheatre'].enabled = false;
									} else {
										if (priceRatio && resPercent('wood') < 0.7) {
											items['mine'].enabled = false;
										}
									}
								}
							}
						}
					}
				}

				// 油井
				if (!science.get('electricity').researched) {
					items['oilWell'].max = 1 + Production + revolutionRatio + 10 * vitruvianFeline + titaniumMap.perTickCached;
				}

				// 广播塔
				if (game.space.getProgram('moonMission').on && resPercent('titanium') > 0.9) {
					if (resPercent('titanium') !== 1 && starchartVal < 1e6) {
						let bTowerMax = broadcastTower.max;
						broadcastTower.max = (bTowerMax === -1) ? 20 : Math.min(20, bTowerMax);
					}
				} else if (starchartVal < 1e6) {
					broadcastTower.max = 8 + 100 * atheism;
				}

				// 等3个传送仪一起造
				if (priceRatio && resMap['unobtainium'].value < 13e3 && game.calendar.futureSeasonTemporalParadox < 0 && !game.getEffect('resStasisRatio')) {
					items['chronosphere'].enabled = false;
				}
				// AI核心
				if (game.challenges.isActive("anarchy")) {
					items['aiCore'].enabled = true;
				} else {
					if (!game.getEffect('aiCoreProductivness') && resMap['burnedParagon'].value < 2e4 && vitruvianFeline) {
						if (game.getEffect('beaconRelicsPerDay')) {
							items['aiCore'].max = (game.getEffect('gflopsConsumption')) ? 4 + 21 * (game.calendar.year > 3e3) : 3;
						} else {
							items['aiCore'].max = 0;
						}
						items['chronosphere'].max = 10 + 10 * (resMap['paragon'].value > 2e3 || game.calendar.year > 200);
					}
					if (game.science.get("paradoxalKnowledge").researched && resMap['unobtainium'].maxValue < 7e9 && game.calendar.trueYear() < 2e3) {
						if (vitruvianFeline) {
							items['harbor'].max = 300;
						}
						if (resMap['burnedParagon'].value > 2e4) {
							items['harbor'].max = 400;
							items['chronosphere'].max = Math.max(40, game.getEffect('gflopsPerTickBase') * 50);
						}
					}
				}
				// 黑暗天空造煅烧炉
				if (blackSky) {
					if (options.auto.build.items.calciner.enabled && calcinerMeta.unlocked && !calcinerVal) {
						buildManager.built("calciner", undefined, 1);
					}
					if (game.ironWill && !Workshop.get('celestialMechanics').researched) {
						items['library'].max = 0;
					}
				}
				let optimize = ['library','academy','pasture','barn','harbor','oilWell','warehouse','broadcastTower','accelerator','mansion','quarry','aqueduct','chapel','lumberMill','biolab','mint'];
				for (let name in items) {
					let item = items[name];
					if (!item.enabled || !item.max) {continue;}
					if (optimize.indexOf(name) === -1) {
						copyItem[name] = item;
					} else {
						buildIterate[name] = item;
					}
				}
			}

			builds = copyItem || builds;
			let metaData = buildManager.getMetaDataList(builds);
			const buildList = bulkManager.bulk(builds, metaData, trigger, 'bonfire');

			if (buildList) {
				for (let i = 0; i < buildList.length; i++) {
					let count = buildList[i].count;
					let id = buildList[i].id;
					count = buildManager.count(id, count);
					if (count > 0) {
						buildManager.built(buildList[i].name || id, buildList[i].stage, count);
						refreshRequired += 1;
					}
				}
			}

			// 低优先度的后计算资源数量
			if (JSON.stringify(buildIterate) !== "{}") {
				metaData = buildManager.getMetaDataList(buildIterate);
				let buildList2 = bulkManager.bulk(buildIterate, metaData, trigger, 'bonfire');
				if (buildList2) {
					for (let i = 0; i < buildList2.length; i++) {
						let count = buildList2[i].count;
						let id = buildList2[i].id;
						count = buildManager.count(id, count);
						if (count > 0) {
							buildManager.built(buildList2[i].name || id, buildList2[i].stage, count);
							refreshRequired += 1;
						}
					}
				}
			}

			return refreshRequired;
		},
		space: function () {
			if (!game["spaceTab"].visible || !game.space.meta[0].meta[0].on) {return;}
			const builds = JSON.parse(JSON.stringify(options.auto.space.items));
			const buildManager = this.spaceManager;
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.space.trigger;
			let blackSky = game.challenges.isActive("blackSky");
			let solarRevolution = Religion.getSolarRevolutionRatio();
			let starchartVal = resMap['starchart'].value;
			this.setTrait('chemist');
			// 自动项目
			{
				let bldSpaceStation = builds['spaceStation'];
				let unobtainiumTick = game.getEffect('unobtainiumPerTickSpace');
				let priceRatio = game.getEffect('priceRatio');
				let vitruvianFeline = priceRatio < -0.06;
				let keepStar = solarRevolution > 1.3 - 0.5 * vitruvianFeline && unobtainiumTick || solarRevolution > 2;
				if (blackSky) {
					builds['researchVessel'].enabled = false;
					if (bldSpaceStation.enabled) {
						$('#toggle-spaceStation').click();
						msgSummary('spaceStation');
					}
				} else if (!trigger && keepStar && !game.space.meta[0].meta[3].val && starchartVal < 2400) {
					trigger = 9;
					msgSummary('spaceTrigger');
				}

				let sattelite = game.space.getBuilding('sattelite').val;
				let spaceManufacturing = Workshop.get('spaceManufacturing').researched;
				let blackOrSolar = blackSky || solarRevolution > 5
					|| (unobtainiumTick && spaceManufacturing);
				if (trigger) {
					if (trigger !== 9) {
						msgSummary('spaceZero');
					}
				} else {
					let Prod = game.resPool.energyProd;
					let Cons = game.resPool.energyCons;

					let Production = game.prestige.getParagonProductionRatio();
					let unobtainiumTri = resPercent('unobtainium');

					let station = game.space.getBuilding('spaceStation').val;
					let containmentChamber = game.space.getBuilding("containmentChamber").val;

					let moreKitten = (-0.6 - priceRatio) * !vitruvianFeline * (game.getEffect('hutPriceRatio') < -1);
					let sattelitePrice = Math.pow(1.08, sattelite);
					let FiveSattelite = 2300 * sattelitePrice * (1 - moreKitten);
					let spaceStation = 3e3 * Math.pow(1.12, station) * (8 * !solarRevolution + moreKitten + 0.7
						+ vitruvianFeline * (-1.2 * (resMap['titanium'].maxValue < 2500 * sattelitePrice * (2.7 + 15 * priceRatio)) + 0.5));
					let buildSattelite = builds['sattelite'];
					if (starchartVal > FiveSattelite && solarRevolution < 2) {
						buildSattelite.max = Math.max(sattelite + 1, buildSattelite.max);
					}
					if (!unobtainiumTick && solarRevolution) {
						buildSattelite.max = 9 + 6 * blackSky;
					}
					// 反应堆
					let one = game.getEffect('productionRatio') < 0.6 && unobtainiumTri > 0 && solarRevolution > 5;
					if ((starchartVal < FiveSattelite && solarRevolution < 2 && sattelite)
						|| !game.workshop.get('orbitalGeodesy').researched || one) {
						buildSattelite.max = 0;
					}
					if (starchartVal > spaceStation) {
						bldSpaceStation.max = station + 1;
					}
					let energyChallenge = game.challenges.isActive("energy");
					if (starchartVal < spaceStation || energyChallenge || !unobtainiumTick || containmentChamber) {
						if (bldSpaceStation.enabled) {
							msgSummary('spaceStationStar');
						}
						bldSpaceStation.max = 0;
						if (energyChallenge) {
							// 构造体
							builds['tectonic'].enabled = true;
							// HR收割机
							builds['hrHarvester'].enabled = true;
						}
					}

					// 电梯
					if (!game.getEffect('lunarOutpostRatio')) {
						if (unobtainiumTri !== 1) {
							builds['spaceElevator'].max = 7 + Math.min(solarRevolution, Production) - 6 * (resMap['unobtainium'].maxValue < 500) + vitruvianFeline;
							if ((!vitruvianFeline && unobtainiumTri < 0.5 - 10 * priceRatio)
								|| (!solarRevolution && !game.ironWill && !Workshop.get('astrophysicists').researched)
								|| (!vitruvianFeline && game.getEffect('hutPriceRatio') > -1 && priceRatio && !game.ironWill)) {
								builds['spaceElevator'].max = 0;
							}
						}
					} else if (!solarRevolution) {
						builds['spaceElevator'].max = 40;
					}

					// 星球改造站
					if (resPercent('antimatter') < 0.8) {
						builds['terraformingStation'].enabled = false;
					}
					let uranium = game.getResourcePerTick('uranium', true);
					// 月球前哨
					if (uranium < 2 + 10 * spaceManufacturing || resPercent('unobtainium') >= 1) {
						builds['moonOutpost'].max = 1;
					}
					let storage = game.prestige.getParagonStorageRatio();
					// 月球基地
					if (unobtainiumTri < 0.8 - priceRatio) {
						builds['moonBase'].max = (game.bld.getBuildingExt('aiCore').meta.val > 25) * 140;
						msgSummary('moonBase');
					} else {
						let moonBase = game.space.getBuilding('moonBase');
						if (moonBase.val === moonBase.on) {
							builds['moonBase'].max = moonBase.val + 1;
						}
					}

					// 星球裂解
					if (uranium > 8 && starchartVal < 1e6) {
						builds['planetCracker'].max = 7 * (starchartVal > 1e5);
					}
					// 流体切割
					if (starchartVal < Math.min(3e4 * (1 + solarRevolution * solarRevolution), 1e7)) {
						builds['hydrofracturer'].max = 100 * game.getEffect('spaceRatio') * (1 + 5 * priceRatio) - Production - solarRevolution - 23 * blackSky;
					}
					if (!solarRevolution) {
						builds['hydrofracturer'].max = 0;
						builds['researchVessel'].max = 42 + Production;
						if (!blackSky) {
							builds['sunlifter'].max = 0;
						}
					}
					// 香料提取
					if (starchartVal < 1e5) {
						builds['spiceRefinery'].max = 0;
					}
					// 太阳提取
					if (resPercent('antimatter') > 0.9) {
						builds['sunlifter'].max = 0;
					}

					// 低温储存站
					let cryostation = game.space.getBuilding('cryostation').val;
					let eludiumVal = resMap['eludium'].value;
					let cryostationFactor = 25 * Math.pow(1.12, 3 * (storage > 1) + 9 * (storage > 100) + cryostation + Production + Math.sqrt(storage * 0.5));
					if (eludiumVal > cryostationFactor) {
						builds['cryostation'].max = cryostation + 1;
					}
					if (eludiumVal < cryostationFactor) {
						builds['cryostation'].max = 0;
					}

					// 收容室 散热器
					let itemChamber = builds['containmentChamber'];
					let itemHeatsink = builds['heatsink'];
					let antimatter = resMap['antimatter'];
					let heatsink = game.space.getBuilding("heatsink").val;
					itemHeatsink.max = heatsink + 1;
					itemChamber.max = containmentChamber + 1;
					let ChamberCons = Math.max(50 * (1 + heatsink * 0.01), 5 * containmentChamber);
					let energyExtra = Prod < Cons + ChamberCons + 2;
					let sunCycle = game.prestige.getPerk("numerology").researched && (game.calendar.cycle === 3 || game.calendar.cycle === 1);
					if (vitruvianFeline && game.getEffect('gflopsConsumption') && containmentChamber + 20 > heatsink && containmentChamber > 14) {
						itemChamber.enabled = false;
					}
					if (antimatter.value + (50 - 40 * !Production) * game.getEffect('antimatterProduction') < antimatter.maxValue
						|| energyExtra || sunCycle || !resMap['alicorn'].value) {
						itemHeatsink.enabled = false;
						itemChamber.enabled = false;
					}
					if (Prod < Cons + 20) {
						bldSpaceStation.max = 0;
						builds['moonOutpost'].max = 0;
						builds['moonBase'].max = 0;
					}

					// 纠缠站
					let entangler = builds['entangler'];
					// 太空灯塔 和 自动勾选
					if (game.getEffect('beaconRelicsPerDay')) {
						let entanglerMax = entangler.max;
						let factor = 0;
						let aiCoreMeta = game.bld.getBuildingExt("aiCore").meta;
						if (aiCoreMeta.effects["aiLevel"] > 13 && !game.getEffect('aiCoreProductivness')) {
							factor = 1;
						}
						// todo
						if (game.religion.getZU("blackPyramid").on && !game.space.getBuilding("entangler").effects["hashRateLevel"]) {
							builds['spaceBeacon'].max = 20;
						}
						entangler.max = (entanglerMax === -1) ? game.getEffect('gflopsPerTickBase') / 0.1 * (1 + factor) : entanglerMax;
						if (Prod < Cons + 100 && game.getEffect('relicRefineRatio') > 20) {
							// 构造体
							builds['tectonic'].enabled = true;
							// 熔火之心
							builds['moltenCore'].enabled = true;
							if (game.calendar.year > 1e5) {
								// HR收割机
								builds['hrHarvester'].enabled = true;
							}
						}
					} else {
						// 长挂 自动勾选
						if (game.calendar.year < 1000) {
							let years = game.challenges.getChallenge('1000Years');
							if (!years.on && years.active) {
								if (!options.auto.space.items['containmentChamber'].enabled) {
									$('#toggle-containmentChamber').click();
								}
								if (!options.auto.space.items['heatsink'].enabled) {
									$('#toggle-heatsink').click();
								}
								let Auto = options.auto;
								let timeCtrl = Auto.timeCtrl;
								if (!timeCtrl.enabled) {
									$('#toggle-timeCtrl').click();
								}
								if (!timeCtrl.items.timeSkip.enabled) {
									$('#toggle-timeSkip').click();
								}
								if (!Auto.build.items.chronosphere.enabled) {
									$('#toggle-chronosphere').click();
								}
								if (!Auto.build.items.aiCore.enabled) {
									$('#toggle-aiCore').click();
								}
								if (!Auto.options.items.useWorkers.enabled) {
									engine.stop();
									Auto.options.items.useWorkers.enabled = true;
									kittenStorage.items['toggle-useWorkers'] = true;
									if (Auto.engine.enabled) {
										engine.start();
									}
								}
								let worship = Auto.faith.items;
								if (!worship.marker.enabled) {
									$('#toggle-marker').click();
								}
								if (!worship.blackPyramid.enabled) {
									$('#toggle-blackPyramid').click();
								}
								msgSummary('one1000years', false, 'noFilter');
								if (blackSky) {
									i18nData['zh']['one1000years'] += '<br>猫猫贴心提示煅烧炉和卫星价格变了具体可以参考百科挑战';
								}
							}
						}
						if (priceRatio < -0.03 && !blackSky) {
							builds['spaceBeacon'].enabled = false;
						}
						// 无遗物站 太阳锻造关
						if (vitruvianFeline) {
							builds['sunforge'].enabled = false;
						}
						// 黑暗天空 太空灯塔
						if (blackSky) {
							builds['spaceBeacon'].enabled = true;
						}
						builds['entangler'].enabled = false;
					}

					// 轨道阵列
					let Array = builds['orbitalArray'];
					let Nummon = game["nummon"];
					if (Nummon) {
						let ArrayVal = game.space.getBuilding('orbitalArray').val;
						if (Nummon.getBestUnobtainiumBuilding() === $I("space.planet.piscine.orbitalArray.label")) {
							if (!game.getEffect('shatterTCGain') || ArrayVal > 39 || Production < 2) {
								Array.max = ArrayVal + 1;
							} else {
								Array.max = 40;
							}
						} else if (Array.max < 0) {
							Array.max = 0;
						}
					}
					// 缺电不造轨道阵列
					if (Production < 0.4 && !vitruvianFeline) {
						Array.max = 0;
					}
				}
				if (game.ironWill) {
					bldSpaceStation.max = 0;
					builds['terraformingStation'].max = 0;
				}
				if (sattelite < 3 + 2 * (solarRevolution > 9.7) && game.getEffect("calcinerRatio") > 2 && keepStar || !sattelite) {
					buildManager.build("sattelite", 1);
					msgSummary('sattelite');
				}
				if (blackOrSolar) {
					if (!blackSky && game.space.getBuilding('researchVessel').val < 1 && builds.sattelite.enabled) {
						buildManager.build("researchVessel", 1);
					}
					if (game.space.getBuilding('researchVessel').val < 4) {bldSpaceStation.max = 0;}
				}
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			const metaData = {};
			for (let name in builds) {
				//var build = builds[name];
				metaData[name] = buildManager.getBuild(name);
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger, 'space');

			let refreshRequired = 0;

			for (let entry in buildList) {
				let item = buildList[entry];
				let count = item.count;
				if (count > 0) {
					buildManager.build(item.id, count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		craft: function () {
			const crafts = options.auto.craft.items;
			const manager = this.craftManager;
			const craftsItem = ['ship','parchment','beam','wood','slab','alloy','gear','concrate','steel','plate','scaffold','tanker','manuscript','compedium','blueprint','kerosene','megalith','eludium','thorium'];
			let trigger = options.auto.craft.trigger;
			let craftUnlock = !game.science.get("construction").researched || !game.bld.getBuildingExt('workshop').meta.on;
			let amount, craft, require, lessTri, ironPer, begin;

			let autoDefault = trigger === 0.95;
			if (autoDefault) {
				lessTri = Workshop.get('orbitalGeodesy').researched;
				ironPer = resPercent('iron') === 1;
				begin = game.prestige.getParagonProductionRatio() < 1.74;
			}

			this.setTrait('metallurgist');
			this.setTrait('engineer');

			for (const name of craftsItem) {
				craft = crafts[name];
				//var current = !craft.max ? false : manager.getResource(name);
				require = craft.require ? manager.getResource(craft.require) : 'noRequire';
				amount = 0;
				if (!craft.enabled) {continue;}
				if (craftUnlock && name !== "wood") {continue;}
				// Ensure that we have reached our cap
				//if (current && current.value > craft.max) {continue;}
				if (!manager.getCraft(name).unlocked) {continue;}
				let newTrigger = trigger;
				if (autoDefault) {
					if (lessTri) {
						newTrigger = 0.9;
						if (name === 'thorium') {newTrigger = 1;}
						if (name === 'eludium' || name === 'kerosene') {newTrigger = 0.98;}
						// 由于钢会先消耗铁，充分消耗爆仓的铁
						if (name === 'plate' && Workshop.get('spaceManufacturing').researched && ironPer) {newTrigger = 0;}
					}
					if (begin) {
						if (name === 'slab' || name === 'beam' || name === 'wood') {newTrigger = 0.99;}
					}
				}
				// Craft the resource if we meet the trigger requirement
				if (require === 'noRequire' || (require.value / require.maxValue >= newTrigger && require.value <= 2 * require.maxValue)) {
					amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, require.name);
				} else if (craft.limited) {
					amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, false);
				}
				if (amount >= 1) {
					manager.craft(name, amount);
				}
			}
			let upgrades = options.auto.upgrade.items.upgrades;
			if (upgrades.cache && game.workshop.get(upgrades.cache).researched) {upgrades.cache = false;}
		},
		holdFestival: function () {
			let carnivals = game.prestige.getPerk('carnivals').researched;
			let skip = carnivals && (resMap['parchment'].value < 1e4 || resMap['culture'].value < 15e3);
			if (!game.science.get('drama').researched || game.calendar.festivalDays >= 400) {return;}
			if ((!carnivals || skip) && game.calendar.festivalDays > 1) {return;}
			if (game.village.getKittens() < 5 && !resMap["zebras"].value) {return;}
			if (game.ironWill && !game.prestige.getPerk("numeromancy").researched) {return;}

			let craftManager = this.craftManager;
			let catProf = 4000 * craftManager.getTickVal(resMap['manpower'], true) > 1500;
			let cultureProf = 4000 * craftManager.getTickVal(resMap['culture'], true) > 5000;
			let parchProf = 4000 * craftManager.getTickVal(resMap['parchment'], true) > 2500 * 3;

			let noSkip = resMap['parchment'].value >= 7000
				|| resMap['manpower'].perTickCached > 20 - game.prestige.getParagonProductionRatio();
			if (!(catProf && cultureProf && noSkip)) {return;}

			if (game.science.getPolicy('carnivale').researched) {
				let luxury = (!resMap["furs"].value || !resMap["ivory"].value || !resMap["spice"].value);
				if (luxury) {return;}
			}

			let villageTab = game["villageTab"];
			let festivalBtn = villageTab.festivalBtn;
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			if (!festivalBtn || !festivalBtn.model) {return villageTab.render();}

			let price = festivalBtn.model.prices;
			if (game.resPool.hasRes(price)) {
				game.resPool.payPrices(price);
				let number = (carnivals && resMap['culture'].value > 1e6) ? 50 : 1;
				game.village.holdFestival(number);
				options.auto.trade.festival = undefined;

				storeForSummary('festival', 1);
				storePrices(price);
				if (game.calendar.festivalDays > 400) {
					iactivity('festival.extend', [], 'festivalFilter');
				} else {
					iactivity('festival.hold', [], 'festivalFilter');
				}
			} else {
				if (Workshop.get('nanosuits').researched) {
					if (resMap['parchment'].value < 2500 || resMap['manpower'].value < 1500) {options.auto.trade.festival = true;}
				}
			}
		},
		observeStars: function () {
			let calendar = game.calendar;
			let a = game.ironWill || !activitySummary.other['auto.changeLeader'];
			if (a) {
				let Res = resMap['catnip'];
				Res.value = Math.min(Res.maxValue, Res.value + Math.max(0, Res.perTickCached) + 20);
			}
			if (calendar.observeBtn != null) {
				let sci = resMap['science'].value;
				let star = resMap['starchart'].value;
				calendar.observeHandler();

				let msg = '';
				let afterSci = resMap['science'].value - sci;
				if (afterSci) {msg += '，获得了 ' + game.getDisplayValueExt(afterSci) + ' 科学';}
				let afterStar = resMap['starchart'].value - star;
				if (afterStar) {msg += '，获得了 ' + afterStar + ' 个星图';}
				iactivity('act.observe', [msg], 'astronomicalEventFilter');
				let ratio = 1;
				if (Math.random() < 0.2 && a) {
					let node = dojo.byId("observeButton");
					calendar.observeBtn = dojo.create("input", {
						id: "observeBtn",
						type: "button",
						value: $I("navbar.observe")
					}, node);
					calendar.observeHandler();
					ratio = 2;
				}
				storeForSummary('science', afterSci * ratio, 'resGain');
				storeForSummary('starchart', afterStar * ratio, 'resGain');
				storeForSummary('stars', 1);
			}
		},
		hunt: function () {
			// clearTimeout(this.huntID);
			let manpower = resMap['manpower'];
			if (manpower.value < 100 || game.challenges.isActive("pacifism")) {return;}
			let hunterRatio = game.getEffect('hunterRatio');
			if (resPercent('manpower') > 3 && hunterRatio < 3) {return;}

			// 无独角兽牧场 强制打猎
			let unicornPasture = game.bld.getBuildingExt('unicornPasture').meta.val;
			let unicornHunt;
			if (!unicornPasture) {
				let unicornValue = resMap['unicorns'].value;
				let unicorn = game.achievements.get('unicornConspiracy').unlocked || unicornValue || hunterRatio;
				unicornHunt = (!unicornPasture && unicorn && manpower.value > 1e3 && unicornValue < 3);
			}

			let itemHunt = options.auto.options.items.hunt;
			let subTrigger = itemHunt.subTrigger;
			game.resPool.addRes(manpower, Math.max(2 * (subTrigger > 0.9) * manpower.perTickCached + game.getEffect('manpowerPerTickCon'), 0), false);
			let huntCount = Math.floor(manpower.value / 100);
			let manpowerBoolean = itemHunt.subTrigger <= manpower.value / manpower.maxValue;
			let tradeCache = !manpowerBoolean && options.auto.trade.cache;

			// 铸币厂前加速打猎
			let aveOutput = this.craftManager.getAverageHunt();
			let architecture = game.science.get('writing').researched;
			let preCount = (!resMap['furs'].value || resMap['parchment'].value < Math.max(25, aveOutput['ivory']) || game.ironWill) ? Math.max(30, Math.floor(0.5 * huntCount)) : 0;
			let mint = (architecture && huntCount > preCount && preCount > 0 && resPercent('culture') !== 1);

			if (manpowerBoolean || mint || unicornHunt || tradeCache || itemHunt.time) {
				if (mint) {
					huntCount = preCount;
					if (!game.ironWill) {iactivity('act.hunt.mint', '', 'huntFilter');}
				}

				if (unicornHunt) {
					huntCount = 10;
					activity(i18n('act.hunt.unicorn'));
				}

				if (tradeCache && !itemHunt.time) {
					huntCount = Math.min(huntCount, Math.max(Math.floor(manpower.perTickCached / 50), 1));
					options.auto.trade.cache = false;
					iactivity('act.hunt.trade', '', 'huntFilter');
				}
				if (itemHunt.time) {itemHunt.time = false;}

				if (huntCount <= 0) {return;}
				let hunter = (game.ironWill) ? resMap['zebras'].title : $I('effectsMgr.statics.maxKittens.title');
				game.resPool.addResEvent("manpower", -huntCount * 100);
				storeForSummary("manpower", huntCount * 100, 'resConsume');
				let a = {};
				for (let i in aveOutput) {
					a[i] = resMap[i].value;
				}
				this.setTrait('manager');
				game.village.gainHuntRes(huntCount);
				this.setTrait();
				if (huntCount >= 1000) {game.challenges.getChallenge("pacifism").unlocked = true;}
				if (options.auto.cache.trait['manager']) {
					iactivity('act.hunt', ['管理者派出 ' + huntCount, hunter], 'huntFilter');
					storeForSummary('hunt.manager', huntCount);
				} else {
					storeForSummary('hunt', huntCount);
					iactivity('act.hunt', [huntCount, hunter], 'huntFilter');
				}

				const trueOutput = {};

				for (let out in aveOutput) {
					let val = resMap[out].value - a[out];
					trueOutput[out] = val;
					storeForSummary(out, val, 'resGain');
				}

				this.cacheManager.pushToCache({'materials': trueOutput});

				//game.village.huntAll();
			}
		},
		trade: function () {
			let cacheSummary = {};
			let Ratio = (activitySummary.other['auto.changeLeader']) ? 0 : 2;
			let skip = game.calendar.day < 0;
			for (let res in resMap) {
				let Res = resMap[res];
				let ResVal = Res.value;
				let perTick = Res.perTickCached;
				if (skip || !perTick) {
					cacheSummary[res] = ResVal;
					continue;
				}
				let addVal = Math.min(Math.max(0, perTick) * Ratio + ResVal, Math.max(ResVal, Res.maxValue || Infinity));
				if (isNaN(ResVal) || ResVal < 0.0000000001){
					Res.value = 0;
				} else {
					Res.value = addVal;
				}
				cacheSummary[res] = addVal;
			}

			let i;
			const craftManager = this.craftManager;
			const tradeManager = this.tradeManager;
			const cacheManager = this.cacheManager;
			let trades = [];
			let optionTrade = options.auto.trade;
			let requireTrigger = optionTrade.trigger;

			if (!tradeManager.singleTradePossible(undefined)) {return;}

			let Calendar = game.calendar;
			let season = Calendar.getCurSeason().name;
			let goldTrigger = resPercent('gold');
			let titaniumTri = resPercent('titanium');
			let isGoldTrigger = requireTrigger <= goldTrigger;

			let isLimited;
			this.setTrait('merchant');
			let index = 0;
			let solarRevolution = Religion.getSolarRevolutionRatio();
			let faithVal = resMap['faith'].value;
			let challenge = game.challenges.anyChallengeActive();

			let priceRatio = game.getEffect('priceRatio');
			let vitruvianFeline = priceRatio < -0.06;
			let solar = solarRevolution || (challenge && !faithVal) || resMap['gold'].maxValue < 500 - 25 * Ratio;
			let spaceManufacturing = Workshop.get('spaceManufacturing').researched;
			let skipNagas = !game.ironWill && spaceManufacturing && solarRevolution && resMap['concrate'].value > 1e4 / (1 + solarRevolution);
			let glass = Religion.getRU("stainedGlass").on || !solarRevolution || faithVal < 200;
			// 优先太阳革命
			// 有采矿钻和登红月后优先点出超越和赞美群星
			let Faith = options.auto.faith.items;
			let transcendenceOn = Religion.getRU("transcendence").on;
			let transcendence = (transcendenceOn || !Faith.transcendence.enabled || !game.getEffect('unobtainiumPerTickSpace'));
			let apocripha = (Religion.getRU('apocripha').on || !Faith.apocripha.enabled || Religion.faithRatio > 0.22 || Religion.faith < 1e5);
			let Moon = (transcendence && apocripha) || Religion.transcendenceTier > 9 || game.village.sim.kittens.length < 130;

			// 优先大教堂
			if (vitruvianFeline && solarRevolution > 0.28 ) {
				if (glass && !Religion.getRU('basilica').on && game.village.leader) {
					let goldVal = resMap['gold'].value;
					if (goldVal > 330 && goldVal < 840) {
						glass = false;
					}
				}
				if (game.getEffect('productionRatio') > 0.3 && resMap['faith'].maxValue > 7500 - Ratio * 375 && !transcendenceOn && !resMap['unobtainium'].value) {
					Moon = false;
				}
			}

			// Determine how many races we will trade this cycle
			let trade, race, name, require;
			let items = optionTrade.items;
			for (name in items)  {
				trade = items[name];

				// Check if the race is in season, enabled, unlocked, and can actually afford it
				race = tradeManager.getRace(name);
				if (!race.unlocked) {continue;}
				if (!game["diplomacyTab"].racePanels[index]) {game["diplomacyTab"].render();}
				index++;
				if (name === 'nagas' && skipNagas) {continue;}
				if (name === 'dragons' && solarRevolution > 2 && titaniumTri < 0.7 && resPercent('uranium') > 0.1) {continue;}
				if (name === 'lizards' && solarRevolution > 0.1) {continue;}
				if (name === 'sharks' && !challenge && solarRevolution > 3 && !trade.limited) {continue;}
				if (!trade.enabled) {continue;}
				let Season = trade[season];
				if (!Season) {continue;}

				require = trade.require ? craftManager.getResource(trade.require) : false;
				if ((!require || requireTrigger <= require.value / require.maxValue) && isGoldTrigger) {
					trades.push(name);
				} else if (trade.limited && solar && Moon && glass) {
					if (name === 'sharks' && race.embassyLevel < 10) {continue;}
					if (tradeManager.getProfitability(name)) {
						trades.push(name);
						if (name !== 'leviathans' || (name === 'zebras' && !resMap['titanium'].value)) {isLimited = true;}
					}
				}
			}

			let catnipNow = resMap['catnip'].value + 100 * craftManager.getPotentialCatnip(true);
			if (catnipNow < 0 && game.deadKittens < 3e3 && !game.ironWill) {
				let sharks = game.diplomacy.get('sharks');
				if (sharks.unlocked) {
					let sharksAmt = tradeManager.getLowestTradeAmount('sharks');
					let catnip = tradeManager.getAverageTrade(sharks).catnip;
					tradeManager.trade('sharks', Math.max(Math.ceil(catnipNow / -catnip), sharksAmt, 1) + 2);
					iactivity('trade.catnip');
				}
			}

			if (trades.length === 0) {return;}

			isLimited = (isLimited && !isGoldTrigger) ? 0.3 + 0.05 * vitruvianFeline + 0.1 * !solarRevolution * (1 + 2 * game.science.get('theology').researched) + 0.05 * game.workshop.get('geodesy').researched : 1;
			// Figure out how much we can currently trade
			let maxTrades = Math.floor(tradeManager.getLowestTradeAmount(undefined, true, false) * isLimited);

			// 和平模式
			if (challenge && game.science.get('architecture').researched && !resMap['furs'].value) {return;}
			// 节日
			if (optionTrade.festival && !Calendar.festivalDays) {return;}
			// Distribute max trades without starving any race
			if (maxTrades < 1) {return;}
			// let spice = resMap['spice'].value + 60 * game.getResourcePerTick('spice', true) < 0;
			// if (spice && Calendar.festivalDays) {maxTrades = Math.ceil(maxTrades * 0.3);}
			const maxByRace = [];
			for (i = 0; i < trades.length; i++) {
				name = trades[i];
				trade = options.auto.trade.items[name];
				require = trade.require ? craftManager.getResource(trade.require) : false;
				let trigConditions = ((!require || requireTrigger <= require.value / require.maxValue) && requireTrigger <= goldTrigger);
				if (name === 'leviathans') {
					isLimited = 1;
				}

				let tradePos = Math.floor(tradeManager.getLowestTradeAmount(name, trade.limited, trigConditions) * isLimited);
				if (tradePos < 1) {
					trades.splice(i, 1);
					i--;
					continue;
				}
				maxByRace[i] = tradePos;
			}

			let tradesLength = trades.length;
			if (!trades.length) {return;}

			let TC = game.getEffect('shatterTCGain');
			let Spiders = (resMap['steel'].value > resMap['plate'].value && !TC && Calendar.season !== 2) || resPercent('coal') > 0.99;
			let Dragons = tradesLength > 1 && !TC &&
				((!solarRevolution && game.getEffect('unobtainiumPerTickSpace')) || resPercent('uranium') > 0.4);
			let Zebras = resMap['plate'].value > 10 * resMap['steel'].value && titaniumTri > 0.5 && resMap['titanium'].value > 1e4;
			let oneTrade = Calendar.season > 1 && titaniumTri > 0.5 + 0.4 * spaceManufacturing;
			const tradesDone = {};
			while (trades.length > 0 && maxTrades >= 1) {
				if (maxTrades < trades.length) {
					let j = Math.floor(Math.random() * trades.length);
					if (!tradesDone[trades[j]]) {tradesDone[trades[j]] = 0;}
					tradesDone[trades[j]] += 1;
					maxTrades -= 1;
					trades.splice(j, 1);
					maxByRace.splice(j, 1);
					continue;
				}
				let minTrades = Math.floor(maxTrades / trades.length);
				let minTradePos = 0;
				for (i = 0; i < trades.length; i++) {
					if (maxByRace[i] < minTrades) {
						minTrades = maxByRace[i];
						minTradePos = i;
					}
				}
				name = trades[minTradePos];
				if (name === 'spiders' && Spiders) {minTrades = Math.floor(0.2 * minTrades);}
				if (name === 'dragons' && Dragons) {minTrades = Math.floor(0.2 * minTrades);}
				if (name === 'zebras') {
					if (Zebras) {
						if (oneTrade) {minTrades = Math.min(Math.ceil(solarRevolution), minTrades);}
						minTrades = Math.floor(0.3 * minTrades);
					}
				}
				if (name === 'sharks' && goldTrigger >= 0.98) {minTrades = Math.floor(0.5 * minTrades);}
				if (!tradesDone[name]) {tradesDone[name] = 0;}
				tradesDone[name] += minTrades;
				maxTrades -= minTrades;
				trades.splice(minTradePos, 1);
				maxByRace.splice(minTradePos, 1);
			}
			if (tradesDone.length === 0) {return;}

			if (goldTrigger >= 0.98 || !resMap['furs'].value) {optionTrade.cache = true;}

			for (let name in tradesDone) {
				if (tradesDone[name] > 0) {
					if (!tradeManager.getTradeButton(name)) {
						game["diplomacyTab"].render();
						continue;
					}
					tradeManager.trade(name, tradesDone[name]);
				}
			}

			let noCache = options.auto.cache.cacheSum.manpower;
			const tradeNet = {};
			let amt = (isGoldTrigger || !noCache) ? 0.01 : 1 - 0.4 * vitruvianFeline;
			for (let res in resMap) {
				let number = resMap[res].value - cacheSummary[res];
				if (number) {
					tradeNet[res] = number * amt;
					if (number > 0) {storeForSummary(res, number, 'resGain');}
					if (number < 0) {storeForSummary(res, -number, 'resConsume');}
				}
			}
			cacheManager.pushToCache({'materials': tradeNet});
		},
		miscOptions: function () {
			const craftManager = this.craftManager;
			const buildManager = this.buildManager;
			const auto = options.auto;
			const optItem = auto.options.items;
			let refreshRequired = 0;

			let calendar = game.calendar;
			// 检查是否换存档了
			let cache = auto.cache;
			let dataTimer = cache.dataTimer;
			let currentTick = game.timer.ticksTotal;
			let startingTick = dataTimer.ticksTotal;
			let trueYear = calendar.trueYear();
			let guid = game.telemetry.guid;
			// 初始时间 、真实年 、 存档ID
			if (currentTick - startingTick < 0 || dataTimer['trueYear'] > trueYear || dataTimer['saveId'] !== guid) {
				cache.dataTimer = {};
				cache.cacheSum = {};
				auto.filter.console = {};
				resetActivitySummary();
				msgStock();
				cache.resUpg = {};
				this.leaderTimer = 0;
				this.leader = 0;
				auto.upgrade.items.upgrades.cache = null;
				let dataTimer = cache.dataTimer;
				dataTimer['saveId'] = guid;
				dataTimer['ticksTotal'] = currentTick;
				dataTimer['trueYear'] = trueYear;
			}
			if (currentTick - startingTick > 2e4) {
				dataTimer.ticksTotal = currentTick;
				auto.cache.cacheSum = {};
				msgSummary('changeLeader', true);
			}

			// 游戏日志过滤
			let filter = auto.filter;
			let tt = Religion.transcendenceTier;
			if (optItem.filterGame.enabled && filter.enabled && tt > 3) {
				let items = filter.items;
				let consoles = filter.console;
				let gameFilter = game.console.filters;
				for (let i in gameFilter) {
					let item = items[i + 'Filter'];
					let Filter = gameFilter[i];
					if (!Filter.unlocked || (item && !item.enabled) || consoles[i]) {continue;}
					Filter.enabled = false;
					consoles[i] = true;
					refreshRequired = 1;
				}
				if (refreshRequired) {game.ui.renderFilters();}
			}

			AutoEmbassy:
			if (optItem.buildEmbassies.enabled && !!game.diplomacy.races[0].embassyPrices && (game.ironWill || game.science.get('theology').researched)) {
				let culture = resMap['culture'];
				let cultureVal = culture.value;
				let cultureMaxVal = culture.maxValue;
				let cultureTri = cultureVal / cultureMaxVal;
				let subTrigger = optItem.buildEmbassies.subTrigger;
				if (cultureMaxVal < 3200 && cultureMaxVal > 3000) {
					subTrigger = 0.968;
				}
				let cultureForce = cultureVal > 5e3 + 5e3 * (tt > 5) + 5e3 * Math.sqrt(2 * Religion.getSolarRevolutionRatio());
				if (subTrigger <= cultureTri && cultureTri < 2 || cultureForce) {
					let i, name, race, emBulk;
					const racePanels = game["diplomacyTab"].racePanels;
					let cultureVal = craftManager.getValueAvailable('culture', true);
					let highCulture = cultureTri > Math.max(0.97, auto.craft.trigger);

					const embassyBulk = {};
					const bulkTracker = [];

					const racesLength = racePanels.length - ((game.diplomacy.get('leviathans').unlocked) ? 1 : 0);
					let tradeItem = auto.trade.items;
					for (i = racesLength - 1; i > -1; i--) {
						if (!racePanels[i].embassyButton) {
							game["diplomacyTab"].render();
							continue;
						}
						name = racePanels[i].race.name;
						race = game.diplomacy.get(name);
						if (!highCulture && !tradeItem[name].enabled) {continue;}
						let priceCoefficient = 1 - game.getEffect("embassyCostReduction");
						embassyBulk[name] = {'val': 0, 'basePrice': race.embassyPrices[0].val * priceCoefficient, 'currentEm': race.embassyLevel, 'priceSum': 0, 'race': race};
						bulkTracker.push(name);
					}

					if (bulkTracker.length === 0) {break AutoEmbassy;}

					let astronomy = game.science.get('astronomy').researched;
					let solarFactor = Math.sqrt(Religion.getSolarRevolutionRatio() + 1);
					while (bulkTracker.length > 0) {
						for (i = 0; i < bulkTracker.length; i++) {
							name = bulkTracker[i];
							emBulk = embassyBulk[name];
							let embassyVal = emBulk.currentEm + emBulk.val;
							let nextPrice = emBulk.basePrice * Math.pow(1.15, embassyVal + game.getEffect("embassyFakeBought"));
							let noSkip = true;
							if (!highCulture) {
								if ((embassyVal > 14 + solarFactor - 10 * (name === 'zebras') && astronomy)
									|| (name === 'sharks' && solarFactor > 2 && !game.getEffect('unobtainiumPerTickSpace') && resMap['furs'].value)
									|| (name === 'dragons' && !game.getEffect('unobtainiumPerTickSpace'))) {
									noSkip = false;
								}
							}
							if (nextPrice <= cultureVal && noSkip) {
								cultureVal -= nextPrice;
								emBulk.priceSum += nextPrice;
								emBulk.val += 1;
								if (highCulture) {
									bulkTracker.splice(i, 1);
									i--;
								}
							} else {
								bulkTracker.splice(i, 1);
								i--;
							}
						}
					}

					for (name in embassyBulk) {
						emBulk = embassyBulk[name];
						if (emBulk.val === 0) {continue;}
						cultureVal = craftManager.getValueAvailable('culture', true);
						if (emBulk.priceSum > cultureVal) {continue;}
						resMap['culture'].value -= emBulk.priceSum;
						storeForSummary('culture', emBulk.priceSum, 'resConsume');
						emBulk.race.embassyLevel += emBulk.val;
						storeForSummary('embassy', emBulk.val);
						refreshRequired += 1;
						if (emBulk.val === 1) {
							activity(i18n('build.embassy', [emBulk.val, emBulk.race.title]), 'embassyFilter');
						} else {
							activity(i18n('build.embassies', [emBulk.val, emBulk.race.title]), 'embassyFilter');
						}
					}
				}
			}

			// fix Cryochamber
			if (optItem.fixCry.enabled && game.time.getVSU("usedCryochambers").val > 0) {
				let fixed = 0;
				const btn = game["timeTab"].vsPanel.children[0].children[0]; //check?
				// buyItem will check resources
				while (btn.controller.buyItem(btn.model, {}, function() {})) {
					fixed += 1;
				}
				if (fixed > 0) {
					iactivity('act.fix.cry', [fixed], 'ks-fixCry');
					storeForSummary('fix.cry', fixed);
				}
			}

			let button;
			// 名字,数量,是否打开
			let msg = (name, number, onAll) => {
				activity(i18n('summary.' + name, [number]));
				storeForSummary(name, number);
				if (onAll) {
					button = buildManager.getBuildButton(name);
					if (button) {button.controller.onAll(button.model);}
				}
			};

			// 冬季最后一天能源
			let moonBase = game.space.getBuilding('moonBase');
			let lastDayEnergy = optItem.lastDayEnergy;
			if (lastDayEnergy) {
				if (calendar.season !== 3) {
					if (lastDayEnergy === 'moonBase') {
						moonBase.on = moonBase.val;
					}
					optItem.lastDayEnergy = false;
					lastDayEnergy = false;
				}
			}
			// todo 月球前哨 工厂 空间站 月球基地

			// 铸币厂
			let mint = game.bld.getBuildingExt('mint').meta;
			if (mint.on !== mint.val && resMap['manpower'].maxValue > 3e4 && resPercent('gold') > 0.5) {
				mint.on = mint.val;
			}
			if (mint.on > 1 && resMap['manpower'].maxValue < 19e3 && !game.challenges.isActive("pacifism")) {
				if (!game.opts.enableRedshift) {
					mint.on = 0;
					msg('mint');
				}
			}

			// 自动打开工厂
			let fa = game.bld.getBuildingExt('factory').meta;
			if (fa.val && fa.on !== fa.val && game.workshop.get('spaceManufacturing').researched && !lastDayEnergy) {msg('factory', undefined, true);}

			// 自动打开磁电机
			let ma = game.bld.getBuildingExt('magneto').meta;
			let oil = game.getResourcePerTick("oil",true) > 0.05 * ma.val;
			let pollution = game.bld.cathPollution > 5e6 && game.bld.cathPollutionPerTick > 50;
			if (ma.val && !ma.on && oil && pollution && !fa.isAutomationEnabled) {msg('magneto', undefined, true);}
			// 自动打开蒸汽工房
			let st = game.bld.getBuildingExt('steamworks').meta;
			if (st.val && st.on !== st.val && ma.on > 10 - 6 * (game.getEffect('coalRatioGlobalReduction') > 0.3)) {msg('steamworks', undefined, true);}
			// 自动打开反应堆
			let re = game.bld.getBuildingExt('reactor').meta;
			let ur = game.getResourcePerTick("uranium",true);
			if (re.val && re.on !== re.val && ur > 0) {msg('reactor', undefined, true);}
			// 自动打开时空加速器自动化
			let timeA = game.time.getCFU("temporalAccelerator");
			if (timeA.on && !game.time.testShatter) {
				timeA.isAutomationEnabled = true;
				game.time.testShatter = 1;
				msg('temporalAccelerator');
			}

			// let winterProd = (calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
			let Prod = game.resPool.energyProd;
			let biolab = game.bld.getBuildingExt('biolab').meta;
			let biofuel = biolab.on && game.workshop.get('biofuel').researched;
			let catnipTick = craftManager.getPotentialCatnip();
			catnipTick = auto.distribute.religion || (catnipTick < 0 && resMap['catnip'].value + 1000 * catnipTick < 0);
			if (biofuel && catnipTick) {
				activity(i18n('summary.biolab.test', ['']) + "(猫薄荷产量过低)");
				biolab.on = 0;
			}
			// 缺电
			if (Prod && Prod < game.resPool.energyCons) {
				if (biofuel && biolab.on) {
					let msg = '冬季产出电:' + game.getDisplayValueExt(Prod) + '，消耗电:' + game.getDisplayValueExt(game.resPool.energyCons) + '，小猫担心电不够并关闭了';
					let number = biolab.on;
					iactivity('summary.biolab.test', [msg + number]);
					biolab.on = 0;
					storeForSummary('biolab.test', msg + number);
					return 1;
				}
				let oilWell = game.bld.getBuildingExt('oilWell').meta;
				if (oilWell.isAutomationEnabled && game.workshop.get('pumpjack').researched && oilWell.val > 20) {
					oilWell.isAutomationEnabled = false;
					game.upgrade({buildings: ['oilWell']});
					game.resPool.update();
					msg('pumpjack', 1);
					return 1;
				}
				let accelerator = game.bld.getBuildingExt('accelerator').meta;
				if (accelerator.on) {
					accelerator.on -= Math.ceil(accelerator.on * 0.5);
					msg('accelerator', 1);
				}
				if (game.getEffect('antimatterProduction')) {
					if (calendar.season === 3) {
						let day = calendar.day;
						if (day >= 97 && day < 99) {
							if (fa.on) {
								fa.on = 0;
								optItem.lastDayEnergy = true;
							}
							if (moonBase.on) {
								moonBase.on = 0;
								optItem.lastDayEnergy = 'moonBase';
								msg('moonBase');
							}
							// 关闭煅烧炉
							let calciner = game.bld.getBuildingExt('calciner').meta;
							if (calciner.on) {
								calciner.on -= 1;
								msgSummary('offCalciner');
							}
						}
					}
				}
			}
			let spiceVal = resMap['spice'].value;
			// 酿酒厂
			const list = [{
				name: 'brewery',
				metadata: game.bld.getBuildingExt('brewery').meta,
				Button: buildManager.getBuildButton('brewery'),
				conditionOn: calendar.festivalDays && spiceVal > 1e4,
				conditionOff: game.bld.getBuildingExt('brewery').meta.on && (!calendar.festivalDays || !spiceVal),
			}];
			// 自动控制 时间操纵 酿酒厂 开关
			if (!game.opts.enableRedshift) {
				// 开启离线进度时不调整时间操纵
				list.push({
					name: 'chronocontrol',
					metadata: game.time.getVSU('chronocontrol'),
					Button: this.timeManager.getBuildButton('chronocontrol'),
					conditionOn: calendar.futureSeasonTemporalParadox < 1 && calendar.day > 98,
					conditionOff: game.time.getVSU('chronocontrol').on && calendar.day > 0,
				});
				let calciner = game.bld.getBuildingExt('calciner').meta;
				if (!game.time.getCFU("ressourceRetrieval").on && calciner.isAutomationEnabled) {
					calciner.isAutomationEnabled = false;
					game.upgrade({buildings: ['calciner']});
					msg('calciner');
				}
			}
			for (let index = 0; index < list.length; index++) {
				let element = list[index];
				if (element.metadata.val > 0) {
					if (element.conditionOn) {
						let off = element.metadata.val - element.metadata.on;
						if (off) {
							element.Button.controller.onAll(element.Button.model);
							activity(i18n('summary.' + element.name + 'On'));
							storeForSummary(element.name);
						}
					} else if (element.conditionOff) {
						element.Button.controller.offAll(element.Button.model);
						activity(i18n('summary.' + element.name + 'Off'));
						storeForSummary(element.name);
					}
				}
			}
			return refreshRequired;
		},
		gameUpgrade: function () {
			let Time = performance.now();
			let auto = options.auto;
			let upgrades = auto.upgrade.items.upgrades;
			let cache = auto.cache;
			let list = cache.upgrade;
			if (list) {
				game.upgrade(list);
				for (let i in list) {
					delete list[i];
				}
				cache.upgrade = null;
			} else {
				game.updateCaches();
			}
			if (upgrades.update) {
				game.updateCaches();
				upgrades.update = null;
			}
			let diffTime = performance.now() - Time;
			this.time += diffTime;
			// activitySummary.gameTime += diffTime;
		},
		calculateTime: function () {
			let Time = this.time;
			let timeNow = performance.now();
			// if (this.timeTick) {
			// 	console.log(this.timeTick + 2000 , new Date().getTime())
			// 	if (this.timeTick + 2000 != new Date().getTime()) {
			// 		game.msg('test');
			// 		this.timeTick = 0;
			// 	}
			// } else {
			// 	this.timeTick = new Date().getTime();
			// }
			let diffTime = performance.now() - Time;
			activitySummary.ksTime += diffTime;
			activitySummary.totalTicks++;
			options.auto.cache.stocks = null;
		},
		setTrait: function (trait) {
			if (!options.auto.distribute.enabled || !this.changeLeader) {
				return msgSummary('changeLeader');
			}
			let vLeader = game.village.leader;
			if (trait) {
				if (game.science.get('civil').researched && vLeader && !game.challenges.isActive("anarchy")) {
					let cache = options.auto.cache;
					let hasTrait = game.village.traits.some(obj => {return obj.name === trait;});
					if (!cache.trait[trait]) {
						if (hasTrait) {
							cache.trait[trait] = true;
							let traitDesc = $I('village.bonus.desc.' + trait);
							let leaderMsg = ['当' + traitDesc.slice(0,2) + "项目时" + $I('village.trait.' + trait) + "猫猫自觉顶替当前领袖，其效果为" + traitDesc];
							if (game.ticks > 1e4) {
								msgSummary('leader', true);
							} else {
								msgSummary('leader', '', 'leaderFilter');
							}
							iactivity('set.leader', [leaderMsg], 'leaderFilter');
						}
					}
					if (!options.copyTrait) {
						let traitName = vLeader.trait.name;
						options.copyTrait = traitName;
						cache.trait[traitName] = true;
					}
					if (!hasTrait) {cache.trait[trait] = false;}
					if (hasTrait || options.copyTrait === trait) {
						vLeader.trait.name = trait;
						// if (!Religion.transcendenceTier || game.getEffect('priceRatio')) {
						//
						// }
					}
				}
			} else if (options.copyTrait && vLeader) {
				if ($I('village.trait.' + options.copyTrait) === vLeader.trait.title) {
					vLeader.trait.name = options.copyTrait;
					options.copyTrait = undefined;
				}
			}
		},
		catnipForReligion: function (isTranscend) {
			let value = isTranscend || 0;
			let catnipTick = 1;
			let transcendenceReached = Religion.getRU("transcendence").on;
			let tt = transcendenceReached ? Religion.transcendenceTier : 0;
			if (value) {
				tt += 1;
			}
			let epiphany = Religion.faithRatio;
			let epiphanyInc = Religion.faith / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			let epiphanyAfterAdore = epiphany + epiphanyInc - value;
			let worshipAfterAdore = 0.01 + resMap['faith'].value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			let solarRevolutionAfterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, 10 + game.getEffect("solarRevolutionLimit"));
			if (tt < 10) {
				catnipTick = game.village.getResConsumption()['catnip'] * (1 + game.getEffect("catnipDemandRatio"));
				if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
					catnipTick += catnipTick * Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0) * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
				}
				let solarRevolutionRatio = 1 + Religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);
				catnipTick = ((resMap['catnip'].perTickCached - catnipTick) * (1 + solarRevolutionAfterAdore) / solarRevolutionRatio) + catnipTick + game.globalEffectsCached.catnipPerTickCon;
			}
			if (catnipTick < 0) {
				let catnipVal = resMap['catnip'].value;
				let optionFaith = options.auto.faith;
				if (!options.auto.distribute.religion) {
					if (catnipVal + 150 * catnipTick < 0) {
						options.auto.distribute.religion = true;
					}
				}
				let disVal = catnipTick * 5;
				if (options.auto.faith.addition.autoPraise.enabled) {
					// 次元超越猫薄荷
					if (value) {
						iactivity('summary.transcend.catnip', [game.getDisplayValueExt(disVal)]);
						activitySummary.other['transcend.catnip'] = disVal;
					}
					// 赞美群星猫薄荷
					if (!value) {
						iactivity('summary.adore.catnip', [game.getDisplayValueExt(disVal)]);
						activitySummary.other['adore.catnip'] = disVal;
					}
				}
			}

			return catnipTick;
		},
		// ref: https://github.com/Bioniclegenius/NummonCalc/blob/112f716e2fde9956dfe520021b0400cba7b7113e/NummonCalc.js#L490
		getBestUnicornBuilding: function () {
			let pastureMeta = game.bld.getBuildingExt('unicornPasture').meta;
			if (!pastureMeta.unlocked) {return;}

			let bestAmoritization = Infinity;
			let bestBuilding = '';
			let goldReduce = 1 - game.getEffect('goldCostReduction');

			let zig = game.bld.getBuildingExt('ziggurat').meta.on;
			let onZig = Math.max(zig, 1);

			let religionRatio = game.getEffect('unicornsRatioReligion') + 1;
			let baseUnicornsPerRift = 500 * (0.9 + religionRatio * 0.1);
			let riftChanceRatio = (game.prestige.getPerk('unicornmancy').researched) ? 1.1 : 1;
			let baseRift = game.getEffect('riftChance') * riftChanceRatio / 2e4 * baseUnicornsPerRift;

			let title = 'unicorns';
			let unicornsMap = resMap['unicorns'];
			let unicornsTick = unicornsMap.perTickCached;
			let festival = game.calendar.cycleEffectsFestival({
				unicorns: 1
			})['unicorns'];
			let total = unicornsMap.perTickCached * game.getTicksPerSecondUI() / festival;
			if (!total) {return pastureMeta;}
			let pastureAmor = total / Math.max(1, pastureMeta.val);
			let pasturePrices = 2 * Math.pow(pastureMeta.priceRatio + game.getEffect("priceRatio"), pastureMeta.val);
			pastureAmor = pasturePrices / pastureAmor;

			let fa = 1.5 * game.prestige.getParagonProductionRatio() + 1.5;
			let ivory = resMap['tears'].value + unicornsMap.value * 2500 / onZig > Math.max(1e6, fa * resMap['ivory'].value);
			ivory = ivory || (resMap['ivory'].perTickCached * fa * festival < unicornsTick && resMap['manpower'].maxValue > 2e4);
			ivory &= resMap['alicorn'].unlocked;
			let res = 'tears';
			if (ivory) {
				res = 'ivory';
				title = 'ivory';
			}
			pastureAmor = ivory ? pastureAmor * 3e3 : pastureAmor;
			if (pastureAmor < bestAmoritization) {
				bestAmoritization = pastureAmor;
				bestBuilding = pastureMeta;
			}
			unicorn:
			for (let i = 0; i < 6; i ++) {
				let btn = Religion.meta[0].meta[i];
				if (btn.unlocked) {
					let totalUnicorn, unicornPrice = 0;
					let relBonus = religionRatio;
					if (!btn.effects['unicornsRatioReligion']) {continue;}
					if (ivory && !btn.effects['alicornChance']) {continue;}
					let an = Math.pow(1.15, btn.on);
					for (let j = 0; j < btn.prices.length; j++) {
						let price = btn.prices[j];
						let name = price.name;
						let val = price.val;
						if (name === res) {
							unicornPrice += val * an * 2500 / onZig;
							relBonus += btn.effects['unicornsRatioReligion'];
						}
						if (name === 'gold' && val * goldReduce * an > resMap['gold'].maxValue) {continue unicorn;}
						if (name === 'tears') {totalUnicorn = val * an * 2500 / onZig;}
					}
					let riftChance = game.getEffect('riftChance');
					let effects = btn.effects;
					if (effects.riftChance) {riftChance += effects.riftChance;}
					let unicornsPerRift = 50 * relBonus + 450;
					let riftBonus = riftChance * riftChanceRatio / 2e4 * unicornsPerRift;
					riftBonus -= baseRift;
					let amor = total * relBonus / religionRatio;
					amor -= total;
					amor += riftBonus;
					amor = unicornPrice / amor;
					if (ivory && effects.tcRefineRatio) {amor *= 0.5 - effects.tcRefineRatio;}
					if (amor < bestAmoritization) {
						bestAmoritization = amor;
						bestBuilding = btn;
					}
					if (ivory && unicornsMap.value > totalUnicorn + pasturePrices) {bestBuilding = pastureMeta;}
				}
			}
			if (zig) {
				let name = bestBuilding.label || "独角兽牧场";
				name += '(' + i18n('$resources.' + title + '.title') + '性价比)';
				if (activitySummary.other['auto.unicorn'] !== name) {
					activitySummary.other['auto.unicorn'] = name;
					iactivity('summary.auto.unicorn', [name], 'unicornSacrificeFilter');
				}
			}
			return bestBuilding;
		}
	};

	let TabManager = function (name) {
		this.setTab(name);
	};

	TabManager.prototype = {
		tab: undefined,
		render: function () {
			if (this.tab && game.ui.activeTabId !== this.tab.tabId && !this.tab._inherited) {
				setTimeout(() => {
					this.tab.render();
				}, 200 + Math.max(- Date.now() + game.timer.timestampStart, -200));
			}
		},
		setTab: function (name) {
			for (const tab in game.tabs) {
				if (game.tabs[tab].tabId === name) {
					this.tab = game.tabs[tab];
					break;
				}
			}

			this.tab ? this.render() : warning('unable to find tab ' + name);
		}
	};

	// Religion manager
	// ================

	let ReligionManager = function () {
		this.manager = new TabManager('Religion');
		//this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	ReligionManager.prototype = {
		manager: undefined,
		//crafts: undefined,
		bulkManager: undefined,
		build: function (name, variant, amount) {
			let build = this.getBuild(name, variant);
			let button = this.getBuildButton(name, variant);

			if (!button || !button.model.metadata) {return game["religionTab"].render();}

			let Model = button.model;
			if (!Model.enabled) {
				Model.prices = button.controller.getPrices(Model);
				button.controller.updateEnabled(Model);
				if (!Model.enabled) {return;}
			}

			//var amountTemp = amount;
			amount = this.bulkManager.construct(Model, button, amount);
			//if (amount !== amountTemp) {
			//    warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			//}

			if (amount === 0) {return;}
			storePrices(Model.prices);
			game.stats.getStat("totalClicks").val += 1;

			let label = build.label;
			if (variant === "s") {
				if (options.auto.cache.trait['wise']) {
					storeForSummary('哲学家小猫祷告了 ' + label, amount, 'faith');
					return iactivity('act.sun.discovers.leader', [label, amount], 'faithBuildFilter');
				}
				iactivity('act.sun.discovers', [label, amount], 'faithBuildFilter');
				storeForSummary('小猫祷告了 ' + label, amount, 'faith');
			} else {
				storeForSummary(label, amount, 'build');
				iactivity('act.builds', [label, amount], 'buildFilter');
			}
		},
		getBuild: function (name, variant) {
			switch (variant) {
				case 'z':
					return Religion.getZU(name);
				case 's':
					return Religion.getRU(name);
				case 'c':
					return Religion.getTU(name);
			}
		},
		getBuildButton: function (name, variant) {
			let buttons, i, haystack;
			switch (variant) {
				case 'z':
					buttons = this.manager.tab.zgUpgradeButtons;
					break;
				case 's':
					buttons = this.manager.tab.rUpgradeButtons;
					break;
				case 'c':
					buttons = this.manager.tab.children[0].children[0].children;
			}
			let build = this.getBuild(name, variant);
			for (i = 0; i < buttons.length; i++) {
				if (!buttons[i]) {continue;}
				haystack = buttons[i].model.name;
				if (haystack.indexOf(build.label) !== -1) {
					return buttons[i];
				}
			}
		}
	};

	// Time manager
	// ============

	let TimeManager = function () {
		this.manager = new TabManager('Time');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	TimeManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, variant, amount) {
			let build = this.getBuild(name, variant);
			let button = this.getBuildButton(name, variant);

			if (!button || !button.model.metadata) {return game["timeTab"].render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			let amountTemp = amount;
			let label = build.label;
			amount = this.bulkManager.construct(button.model, button, amount);
			if (amount === 0) {return;}
			storePrices(button.model.prices);
			storeForSummary(label, amount, 'build');

			iactivity('act.builds', [label, amount], 'buildFilter');
		},
		getBuild: function (name, variant) {
			if (variant === 'chrono') {
				return game.time.getCFU(name);
			} else {
				return game.time.getVSU(name);
			}
		},
		getBuildButton: function (name, variant) {
			let buttons;
			if (variant === 'chrono') {
				buttons = this.manager.tab.children[2].children[0].children;
			} else {
				buttons = this.manager.tab.children[3].children[0].children;
			}
			const build = this.getBuild(name, variant);
			for (let i in buttons) {
				let haystack = buttons[i].model.name;
				if (haystack.indexOf(build.label) !== -1) {
					return buttons[i];
				}
			}
		}
	};

	// Upgrade manager
	// ============

	let UpgradeManager = function () {
		this.workManager = new TabManager('Workshop');
		this.sciManager = new TabManager('Science');
		this.crafts = new CraftManager();
	};

	UpgradeManager.prototype = {
		manager: undefined,
		crafts: undefined,
		build: function (upgrade, variant) {
			let i;
			const button = this.getBuildButton(upgrade, variant);
			if (!button || !button.model.metadata) {
				if (variant === 'workshop') {
					game['workshopTab'].render();
				} else {
					game["libraryTab"].render();
				}
				return;
			}
			if (!button.model.enabled) {
				button.model.prices = button.controller.getPrices(button.model);
				button.controller.updateEnabled(button.model);
				if (!button.model.enabled) {return;}
			}

			if (variant === 'policy') {
				let metaData = button.model.metadata;
				if (metaData.name === 'theocracy' && !game.village.leader) {return;}
				if (game.village.leader && metaData.requiredLeaderJob && game.village.leader.job !== metaData.requiredLeaderJob) {
					let jobTitle = game.village.getJob(metaData.requiredLeaderJob).title;
					game.msg($I("msg.policy.wrongLeaderJobForResearch", [metaData.label, jobTitle]), "important");
					return;
				} else if (metaData.name === "transkittenism" && game.bld.getBuildingExt("aiCore").meta.effects["aiLevel"] >= 15) {
					game.msg($I("msg.policy.aiNotMerges"),"alert", "ai");
					return;
				} else if (metaData.blocked === false) {
					for(i = 0; i < metaData.blocks.length; i++) {
						if (game.science.getPolicy(metaData.blocks[i]).researched) {
							metaData.blocked = true;
							return;
						}
					}
				}
			}

			let itemsUpgrades = options.auto.upgrade.items.upgrades;
			//need to simulate a click so the game updates everything properly
			button.model.prices = button.controller.getPrices(button.model);
			button.controller.payPrice(button.model, {}, function() {});
			storePrices(button.model.prices);
			//button.controller.onPurchase(button.model, {}, function() {});
			let meta = button.model.metadata;
			meta.researched = true;
			if (meta.handler) {meta.handler(game, meta);}
			if (meta.unlocks) {game.unlock(meta.unlocks);}
			if (meta.blocks) {
				for (i in meta.blocks) {
					let policy = game.science.getPolicy(meta.blocks[i]);
					policy.blocked = true;
				}
			}
			if (meta.onResearch) {meta.onResearch(game);}
			if (meta.upgrades) {
				if (variant === 'workshop' && !itemsUpgrades.update) {itemsUpgrades.update = true;}
				cacheUpgrades(meta.upgrades);
			}

			game.stats.getStat("totalClicks").val += 1;

			let label = upgrade.label;
			let scientist = options.auto.cache.trait['scientist'];
			let leader = (scientist) ? '科学家小猫' : '小猫';
			scientist = (scientist) ? 1 : 0;
			if (variant === 'workshop') {
				storeForSummary(label, scientist, 'upgrade');
				iactivity('upgrade.upgrade', [label, leader], 'upgradeFilter');
				let name = upgrade.name;
				if (name === itemsUpgrades.cache || name === 'geodesy') {
					itemsUpgrades.cache = false;
					let Upg = options.auto.cache.resUpg;
					for (let i in options.auto.cache.resUpg) {
						delete Upg[i];
					}
				}
				// 小屋 强制刷新
				if (meta.effects && meta.effects['hutPriceRatio'] && game.ui.activeTabId !== 'Bonfire') {
					setTimeout(() => {
						game['bldTab'].render();
					}, 2000);
				}
			} else if (variant === 'science') {
				storeForSummary(label, scientist, 'research');
				iactivity('upgrade.tech', [label, leader], 'researchFilter');
			} else if (variant === 'policy') {
				iactivity('upgrade.policy', [label], 'policyFilter');
			}
		},
		getValue: function (name, upgrade) {
			let res = options.auto.resources[name];
			let stock = (res && res.enabled) ? res.stock : 0;
			let cache = options.auto.upgrade.items.upgrades.cache;
			if (options.auto.craft.oxidation && upgrade !== 'oxidation') {
				if (name === 'science' && resMap['steel'].value > 5e3 && resMap['science'].value > 5e4) {stock += 1e5;}
				if (name === 'steel') {stock += 5e3;}
			}
			if (name === 'titanium' ) {
				if (cache !== upgrade) {
					if (cache === 'orbitalGeodesy') {
						if (upgrade !== 'pumpjack') {
							stock += 1e3;
						} else if (resMap['oil'].value > 30e3) {
							stock += 1e3;
						}
					}
					if (cache !== upgrade) {
						if (cache === 'rotaryKiln') {stock += 5000;}
						if (cache === 'miningDrill') {stock += 1750;}
						if (cache === 'concreteHuts') {stock += 3e3;}
						if (cache === 'geodesy') {stock += 250;}
					}
				}
			}
			if (name === 'iron' && upgrade !== 'ironwood') {
				if (activitySummary.other['auto.ironwood'] && resMap['science'].value > 1e4) {stock += 3000;}
			}
			if (name === 'alloy') {
				if (cache && cache !== upgrade) {stock += options.auto.cache.resUpg[name];}
			}
			if (name === 'oil') {
				if (upgrade !== 'orbitalGeodesy' && game.bld.getBuildingExt('calciner').meta.val > 20 && !game.workshop.metaCache['orbitalGeodesy'].researched) {
					stock += 35e3;
				}
			}
			return Math.max(resMap[name].value - stock, 0);
		},
		getBuildButton: function (upgrade, variant) {
			let buttons;
			if (variant === 'workshop') {
				buttons = this.workManager.tab.buttons;
			} else if (variant === 'science') {
				buttons = this.sciManager.tab.buttons;
			} else if (variant === 'policy') {
				buttons = this.sciManager.tab.policyPanel.children;
			}
			for (let i of buttons) {
				let haystack = i.model.name;
				if (haystack === upgrade.label) {
					return i;
				}
			}
		}
	};

	let BuildManager = function () {
		this.manager = new TabManager('Bonfire');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	BuildManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		built: function (name, stage, amount) {
			let build = this.getBuild(name);
			let button = this.getBuildButton(name, stage);

			if (!build.meta.unlocked) {return;}
			if (!button || !button.model.metadata) {
				game["bldTab"].activeGroup = 'all';
				if (!button || !button.model.metadata) {return game["bldTab"].render();}
			}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			//var amountTemp = amount;
			let label = build.meta.label ? build.meta.label : build.meta.stages[stage].label;
			amount = this.bulkManager.construct(button.model, button, amount);
			//if (amount !== amountTemp) {/*warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);*/}
			if (amount === 0) {return;}
			storePrices(button.model.prices);
			storeForSummary(label, amount, 'build');
			let group = game.stats.statGroups[0].group;
			// 点击总数
			group[8].val += 1;
			// 建造建筑
			group[7].val += amount;

			iactivity('act.builds', [label, amount], 'buildFilter');
		},
		count: function(id, count) {
			if (!count) {return;}
			let halfCount;
			let geodesy = Workshop.get('geodesy').researched;
			let orbitalGeodesy = Workshop.get('orbitalGeodesy').researched;
			let spaceManufacturing = Workshop.get('spaceManufacturing').researched;
			let priceRatio = game.getEffect('priceRatio');
			let vitruvianFeline = priceRatio < -0.06;
			let TitaniumCap = resPercent('titanium') > 0.9;
			let revolution = Religion.getSolarRevolutionRatio();
			let checkHalfCount = (id) => {
				if (vitruvianFeline) {
					if (!orbitalGeodesy && game.bld.getBuildingExt(id).meta.val) {
						halfCount = true;
						msgSummary('lower');
					}
				}
			};
			switch (id) {
				case 'hut':
				case 'logHouse':{
					let happy = game.village.happiness;
					if (geodesy) {
						msgSummary('kittens', true);
					} else {
						let Catnip = resMap['catnip'];
						let catnipTick = this.crafts.getPotentialCatnip(false);
						let anarchy = game.challenges.isActive("anarchy");
						let forceCat = catnipTick < 1 && Catnip.value + catnipTick * 1000 * (resPercent('catnip') < 0.1) - 1400 < 0;
						let noFarmer = Catnip.value < 5e3 - 2e3 * !game.calendar.season + happy * 100 && Catnip.perTickCached < 1.8 * happy * (1 + 2 * anarchy) && (!game.science.get('agriculture').researched || anarchy);
						if (noFarmer || forceCat) {
							count = 0;
							msgSummary('kittens');
						}
					}
					if (id === 'logHouse') {
						let am = game.bld.getBuildingExt('amphitheatre').meta;
						if (am.val < 5 && !am.stage && am.unlocked && happy < 3 && game.village.maxKittens > 25) {
							msgSummary('logHouse');
							return 0;
						}
					}
					break;
				}
				case 'workshop':
					if (!orbitalGeodesy && vitruvianFeline) {
						let am = game.bld.getBuildingExt('amphitheatre').meta;
						if (!am.stage && resMap['parchment'].value > 3 * Math.pow(am.stages[0].priceRatio + game.getEffect('priceRatio'), am.val) && am.val < 8 + 5 * (priceRatio < -0.08) && resPercent('minerals') < 0.9 && !game.ironWill) {
							halfCount = true;
						}
					}
					break;
				case 'pasture':
					if (!orbitalGeodesy && (geodesy || (resMap['wood'].perTickCached && vitruvianFeline))) {
						if (resPercent('wood') < 0.9) {
							if (vitruvianFeline && !revolution) {count *= 0.5;}
							halfCount = true;
							msgSummary('pasture');
						}
					}
					break;
				case 'aiCore':
					count = 1;
					if (game.getEffect('gflopsPerTickBase') > 0.6 && resMap['burnedParagon'].value > 1e5) {
						count = Math.floor(count * 0.5);
					}
					break;
				case 'temple':
					if (resPercent('gold') < 0.8 && Workshop.get('miningDrill').researched && orbitalGeodesy) {
						if (vitruvianFeline && resMap['faith'].maxValue < 6750) {return 1;}
						halfCount = true;
						count *= 0.4 - 0.2 * vitruvianFeline;
						msgSummary('keepGold');
					} else {
						count = 1;
					}
					break;
				case 'mint':
					if (resPercent('gold') < 0.95) {
						let manpowerCon = game.getEffect('manpowerPerTickCon');
						if ((!manpowerCon && game.bld.getBuildingExt(id).meta.val) || manpowerCon < -2) {
							halfCount = true;
							count *= 0.1 + 0.1 * spaceManufacturing + 0.1 * TitaniumCap + 0.1 * vitruvianFeline - 0.1 * !manpowerCon;
							msgSummary('keepGold');
						}
					}
					break;
				case 'field':
					if (!orbitalGeodesy && game.bld.getBuildingExt(id).meta.val > 50 + 85 * vitruvianFeline) {
						if (resMap['catnip'].value < 3e3 + game.village.happiness * 100) {
							count = Math.floor(count * 0.3);
							halfCount = true;
						}
					} else {
						return count;
					}
					break;
				case 'chapel':
					if (id === 'chapel') {
						if (game.bld.getBuildingExt(id).meta.val < 18.9 + revolution + 2 * geodesy * vitruvianFeline) {
							break;
						} else {
							if (!game.calendar.festivalDays) {count = 0;}
							if (!orbitalGeodesy || (!vitruvianFeline && revolution < 0.5 && !resMap['unobtainium'].value)) {
								count *= 0.4 - 0.06 * geodesy;
								halfCount = true;
							}
						}
					}
					break;
				case 'aqueduct': {
					if ((this.crafts.getPotentialCatnip(false) < 4 * game.village.happiness && resPercent('catnip') < 0.6)
						|| game.challenges.isActive('winterIsComing')) {
						msgSummary('aqueductCatnip');
						if (geodesy && !orbitalGeodesy && priceRatio) {
							count = 0;
						}
						break;
					} else if (!spaceManufacturing) {
						if (resMap['slab'].value < 4e5 * (1 + revolution) || (!revolution && resPercent('minerals') < 0.98)) {
							count = Math.floor(count * 0.4 - 0.05 * vitruvianFeline);
							msgSummary('aqueduct');
						}
					}
					checkHalfCount(id);
				}
					break;
				case 'library': {
					if (id === 'library' && !game.science.get('writing').unlocked) {break;}
				}
				// falls through
				case 'academy':
					if (id === 'academy' && resPercent('science') < 1 && !orbitalGeodesy) {
						//count *= 1 - 0.3 * vitruvianFeline;
						let val = game.bld.getBuildingExt(id).meta.val;
						if (val > 10 + 20 * vitruvianFeline) {
							halfCount = true;
							msgSummary('academy');
							if (priceRatio) {count *= 0.9;}
						}
						if (vitruvianFeline && revolution < 1 && val> 9) {count *= 0.5;}
					}
				// falls through
				case 'barn': {
					if (id === 'barn') {
						if (resMap['minerals'].maxValue < 1600) {
							break;
						}
					}
					let mineralsCap = (resMap['minerals'].value > resMap['minerals'].maxValue * 0.94);
					let woodCap = (resMap['wood'].value > resMap['wood'].maxValue * 0.94);
					if (mineralsCap && woodCap) {
						break;
					}
				}
				// falls through
				case 'warehouse':
					if (id === 'warehouse') {
						if (resMap['minerals'].maxValue < 5e4 &&
							(Workshop.get('deepMining').researched || game.bld.getBuildingExt(id).meta.val < 20 - 10 * vitruvianFeline)) {
							break;
						} else if (vitruvianFeline) {
							if (!spaceManufacturing) {
								count = Math.floor(count * 0.3);
							}
						}
					}
				// falls through
				case 'lumberMill':
					if (id === 'lumberMill') {
						if (game.bld.getBuildingExt(id).meta.val < 35 + 5 * !resMap['paragon'].value + 7 * (game.calendar.year > 20) - 5 * vitruvianFeline) {
							if (!game.getEffect('lumberMillRatio') && game.bld.getEffect('woodRatio') > 3.1 && resMap['iron'].maxValue > 1200) {
								count = 0;
							}
							if (resMap['gold'].value || game.getEffect('ironPerTickAutoprod') < 0.3) {
								break;
							}
							if (vitruvianFeline && !game.science.get('astronomy').researched && resMap['faith'].value) {
								halfCount = true;
							}
						} else if (resPercent('iron') < 0.5 - 4 * priceRatio + 0.05 * vitruvianFeline + 0.05 * spaceManufacturing) {
							halfCount = true;
							msgSummary('lumberMill');
						}
					}
				// falls through
				case 'oilWell':
					if (id === 'oilWell') {
						let val = game.bld.getBuildingExt(id).meta.val;
						let oil = resMap['oil'];
						let value = oil.value;
						let maxVal = oil.maxValue;
						if (val < 9 + vitruvianFeline || oil.maxValue < 2e4) {break;}
						if (!spaceManufacturing) {
							let cal = game.getEffect("calcinerRatio");
							if (cal > 1) {
								if ((!orbitalGeodesy && value < 35e3 - 5e3 * vitruvianFeline) || (cal > 2 && maxVal < 5e4)) {return count;}
							}
						}
						if (val < 199) {
							if (maxVal > 55e3 + 35e3 * (priceRatio < -0.04)) {
								count = Math.floor(count * 0.5);
							} else if (maxVal > 20e3 && game.getEffect("calcinerRatio") < 2) {
								halfCount = true;
								// 凑石油上限
								if (maxVal > 33e3 && geodesy && maxVal > 35e3) {return count;}
							}
						}
					}
					checkHalfCount(id);
					break;
				case 'quarry' :
					if (Workshop.get('nuclearSmelters').researched && !spaceManufacturing) {
						// if (game.bld.getBuildingExt(id).meta.val < 20 && geodesy) {return;}
						count *= 0.7 - 0.2 * vitruvianFeline;
						halfCount = true;
					}
					checkHalfCount(id);
					break;
				case 'harbor':
					if (id === 'harbor') {
						let harborVal = game.bld.getBuildingExt(id).meta.val;
						let reactorVal = game.bld.getBuildingExt('reactor').meta.val;
						if (revolution < 1 && harborVal < 7 + 2 * geodesy) {return 1;}
						if (harborVal < 15) {
							msgSummary('harbor');
							halfCount = true;
							if (!vitruvianFeline) {count *= 0.9;}
						} else if (reactorVal < 30) {
							if (vitruvianFeline) {count *= 0.5;}
							halfCount = true;
							if (revolution > 7.5) {count *= 0.2;}
							// } else if (!orbitalGeodesy && !Workshop.get('geodesy').researched) {
							// 	halfCount = true;
							// }
						} else if (spaceManufacturing) {
							msgSummary('harbor', true);
						}
						if (harborVal > 60 + reactorVal && resPercent('iron') < 0.9) {count = Math.floor(count * 0.5);}
					}
					break;
				case 'biolab':
					if (spaceManufacturing) {
						if (resMap['starchart'].value < 1e6 * (2 - !priceRatio)) {
							count *= 0.5;
							halfCount = true;
						}
					} else {
						if ((priceRatio || resMap['science'].maxValue > 2e5) && resMap['starchart'].value < 1e6) {
							halfCount = true;
							if (vitruvianFeline) {count *= 0.3;}
						}
					}
					break;
				case 'factory': {
					let faVal = game.bld.getBuildingExt(id).meta.val;
					if (spaceManufacturing) {
						if (!game.space.getBuilding('sattelite').val && faVal && !revolution) {
							options.auto.space.items['sattelite'].enabled = true;
							count = 0;
						}
						if (game.getEffect('productionRatio') < 1) {
							halfCount = true;
							if (game.getEffect('productionRatio') < 0.5) {return 0;}
						}
					} else {
						if (!TitaniumCap) {
							if (faVal) {
								let production = game.getEffect('productionRatio');
								if (revolution) {
									if (production > 0.6 || (geodesy && priceRatio > -0.08)) {
										if (faVal < 2 - (1 + 2 + vitruvianFeline) * !production
											+ (10 + 50 * priceRatio) * Workshop.get("nuclearSmelters").researched
											+ vitruvianFeline * (4 * production - 3 - 2 * (revolution > 6) - 3 * (revolution > 2))
											- !geodesy * (1 + 5 * (production < 0.4)) + 3 * geodesy + 2 * !priceRatio) {
											return count;
										}
									}
								}
								count *= 0.7 + (2 + 3 * (faVal > 6)) * priceRatio;
								halfCount = true;
								msgSummary('factory');
							} else {
								count = 1;
							}
						}
					}
					break;
				}
				// falls through
				case 'accelerator':
					if (!Workshop.get('energyRifts').researched) {
						count = 0;
					}
					if (!spaceManufacturing) {
						if (!TitaniumCap) {
							count *= 0.9;
							halfCount = true;
						}
						if (resMap['titanium'].maxValue > 125e3
							|| (game.bld.getBuildingExt('factory').meta.val < 16 && revolution < 6)
							|| (game.getEffect("magnetoRatio") < 0.02 && !revolution)) {
							count = 0;
						}
					} else if (!game.space.getProgram('piscineMission').on) {
						count = 0;
					} else if (!TitaniumCap && resMap['titanium'].maxValue > 1.3e5) {
						halfCount = true;
					}
					break;
				case 'mansion':
					if (!TitaniumCap && (vitruvianFeline || (!vitruvianFeline && geodesy && resMap['kittens'].value > 124 + 10 * !priceRatio))) {
						if (!spaceManufacturing && game.prestige.getParagonProductionRatio() > 1) {
							msgSummary('mansion');
							count *= 0.7;
							halfCount = true;
						}
						if (resMap['kittens'].value > 200) {
							count *= 0.5;
							halfCount = true;
						}
						if (resMap['starchart'].perTickCached < 4 && id === 'mansion') {
							halfCount = true;
						}
					}
					break;
			}
			if (halfCount) {
				count = Math.floor(count * 0.5);
			} else if (!revolution && !geodesy) {
				count = Math.ceil(count * 0.5);
			}
			return count;
		},
		getBuild: function (name) {
			return game.bld.getBuildingExt(name);
		},
		getBuildButton: function (name, stage) {
			let buttons = this.manager.tab.children;
			let build = this.getBuild(name);
			let label = typeof stage === 'undefined' ? build.meta.label : build.meta.stages[stage].label;

			for (const i in buttons) {
				let haystack = buttons[i].model.name;
				if (haystack.indexOf(label) !== -1) {
					return buttons[i];
				}
			}
		},
		getMetaDataList: function (list) {
			let metaData = {};
			let skip = !Workshop.get('geodesy').researched || resPercent('titanium') < 0.5 || resMap['kittens'].maxValue < 110;
			let hasLeader = game.village.leader !== null;
			for (let name in list) {
				let build = list[name];
				let meta = this.getBuild(build.name || name).meta;
				if (meta.almostLimited && hasLeader) {
					if (skip) {
						build.enabled = false;
					}
				}
				if (meta.stage !== build.stage) {build.enabled = false;}
				metaData[name] = meta;
			}
			return metaData;
		},
		getSumPrices: function (build, price) {
			let currentRatio = (build.priceRatio) ? build.priceRatio : build.stages[build.stage].priceRatio;
			let buildRatio = currentRatio + game.getEffect("priceRatio");
			return (price.val - price.val * Math.pow(buildRatio, build.val - 1)) / (1 - buildRatio);
		},
		sellBuild: function (name) {
			let build = this.getBuild(name).meta;
			let prices = build.stages[build.stage].prices;
			for(let i = 0; i < prices.length; i++) {
				let price = prices[i];
				let res = resMap[price.name];
				if (res.isRefundable() && !price.isTemporary && build.val) {
					let sumPrices = this.getSumPrices(build, price);
					game.resPool.addResEvent(price.name, sumPrices * 0.5);
				}
			}
			build.on = 0;
			build.val = 0;
		}
	};

	// Space manager
	// ================

	let SpaceManager = function () {
		this.manager = new TabManager('Space');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	SpaceManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, amount) {
			let build = this.getBuild(name);
			let button = this.getBuildButton(name);

			if (!build.unlocked) {return;}
			if (!button || !button.model.metadata) {return game["spaceTab"].render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			let amountTemp = amount;
			let label = build.label;
			amount = this.bulkManager.construct(button.model, button, amount);
			if (amount === 0) {
				return;
				//warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			}
			storePrices(button.model.prices);
			storeForSummary(label, amount, 'build');
			game.stats.getStat("totalClicks").val += 1;

			iactivity('act.builds', [label, amount], 'spaceFilter');
		},
		getBuild: function (name) {
			return game.space.getBuilding(name);
		},
		getBuildButton: function (name) {
			const panels = this.manager.tab.planetPanels;

			for (const panel in panels) {
				for (let child in panels[panel].children) {
					if (panels[panel].children[child].id === name) {return panels[panel].children[child];}
				}
			}
		}
	};

	// Crafting Manager
	// ================

	let CraftManager = function () {
		this.cacheManager = new CacheManager();
	};

	CraftManager.prototype = {
		craft: function (name, amount) {
			amount = Math.floor(amount);

			if (!name || amount < 1) {return;}
			if (!this.canCraft(name, amount)) {return;}

			let craft = this.getCraft(name);
			let ratio = game.getResCraftRatio(craft.name) + 1;
			let trait = options.auto.cache.trait['engineer'] && game.village.leader;
			let leader = '小猫制作了';

			//game.workshop.craft(craft.name, amount, true, false);
			amount = Math.ceil(amount);
			let craftAmt = amount * ratio;
			let prices = dojo.clone(game.workshop.getCraftPrice(craft));
			for (let i = prices.length - 1; i >= 0; i--) {
				let price = prices[i];
				price.val *= amount;
				storeForSummary(price.name, price.val, 'resConsume');
			}

			if (trait) {
				leader = '工匠小猫制作了 ';
				let engineer = game.village.getEffectLeader("engineer", 0);
				let tag = resMap[name].tag;
				if (tag === "metallurgist" && options.auto.cache.trait['metallurgist']) {
					craftAmt += amount * engineer;
					leader = '冶金学家小猫制作了 ';
				}
				if (tag === "chemist" && options.auto.cache.trait['chemist']) {
					craftAmt += 0.5 * amount * engineer;
					leader = '化学家小猫制作了 ';
				}
				if (name === "parchment") {
					craftAmt += amount * engineer;
				}
			}
			game.resPool.payPrices(prices);
			game.resPool.addResEvent(craft.name, craftAmt);
			// storeForSummary(craft.name, craftAmt, 'resGain');
			if (craft.upgrades) {cacheUpgrades(craft.upgrades);}
			let stats = game.stats;
			stats.getStat("totalCrafts").val++;
			stats.getStatCurrent("totalCrafts").val++;
			stats.getStat("totalClicks").val += 1;

			let iname = resMap[name].title;

			// determine actual amount after crafting upgrades
			// amount = (amount * (1 + ratio)).toFixed(2);
			amount = craftAmt;

			if (trait) {
				storeForSummary(iname, amount, 'craftLeader');
			} else {
				storeForSummary(iname, amount, 'craft');
			}
			iactivity('act.craft', [leader + game.getDisplayValueExt(amount), iname], 'craftFilter');
		},
		canCraft: function (name, amount) {
			let craft = this.getCraft(name);
			let result = false;

			if (craft.unlocked) {
				result = true;

				let prices = game.workshop.getCraftPrice(craft);
				for (let i in prices) {
					let price = prices[i];
					let value = resMap[price.name].value;

					if (value < price.val * amount) {result = false;}
				}
			}

			return result;
		},
		getCraft: function (name) {
			return game.workshop.getCraft(name);
		},
		// singleCraftPossible: function (name) {
		// 	const materials = this.getMaterials(name);
		// 	for (const mat in materials) {
		// 		if (this.getValueAvailable(mat, true) < materials[mat]) {return false;}
		// 	}
		// 	return true;
		// },
		getLowestCraftAmount: function (name, limited, limRat, aboveTrigger) {
			//var amount = Number.MAX_VALUE;
			let autoMax = Number.MAX_VALUE;
			let Science = game.science;
			let workshop = game.workshop;
			let geodesy = workshop.get("geodesy").researched;
			let materials = this.getMaterials(name);
			// Safeguard if materials for craft cannot be determined.
			if (!materials) {return 0;}
			// 跳过资源达到无限的情况
			let ResMap = resMap[name];
			let maxValue = ResMap.maxValue;
			let value = ResMap.value;
			if (value === Infinity) { return 0; }
			let useRatio = this.getLimRat(name, limited, limRat);

			let resValue = this.getValueAvailable(name, true);
			let i, force, delta;

			const temple = game.bld.getBuildingExt('temple').meta;
			let priceRatio = game.getEffect("priceRatio");
			let templePriceRatio = Math.pow(temple.priceRatio + priceRatio, temple.val);
			let renaissance = priceRatio < -0.08;

			let craft = this.getCraft(name);
			let Craft = options.auto.craft;
			let ratio = game.getResCraftRatio(craft.name) + 1;
			let trigger = Craft.trigger;
			if (name === 'ship' && limited) {
				let scienceMax = resMap['science'].maxValue;
				force = scienceMax > 50e3 && (value < 100 || scienceMax > 95e3 || Science.get('archeology').researched);
				if (scienceMax < 56e3 && resMap['titanium'].unlocked && value > 40) {
					force = false;
				}
				let solar = Religion.getSolarRevolutionRatio();
				let tt = Religion.transcendenceTier;
				let oxi = (!workshop.get('oxidation').researched && !Craft.oxidation) || !solar || tt < 6 || !value || (!renaissance && value < 350 && solar < 3);
				if (!oxi) {force = false;}
				if (force) {
					let forceShipVal = 40 / Math.max(0.2, Math.log1p(1.1 * solar)) + 10 * solar;
					if (solar < 0.52) {
						if (solar < 0.23) {
							forceShipVal = Math.min(16 / Math.log1p(solar), 139 + 30 * !resMap['paragon'].value);
						} else {
							forceShipVal = Math.min(23 - 120 * priceRatio / Math.log1p(solar), 176) * (1 + 1.3 * (priceRatio < -0.06));
						}
					}
					if (geodesy) {
						if (scienceMax > 119e3 || value < 200 || (resMap['scaffold'].value > 1200 && scienceMax < 115e3)) {
							forceShipVal = Math.min(243 + 5 * tt + solar, 400);
							if (Religion.faith > 9e4 && scienceMax > 11e4) {
								forceShipVal = 450 - 100 * priceRatio;
								if (solar > 0.2 && solar < 0.5) {
									forceShipVal += 40;
								}
							}
						}
						msgSummary('shipGeodesy');
					}
					if (value < forceShipVal && ratio > 3) {
						if (value && (Date.now() > Craft.shipTime + 16e5 || !activitySummary.other['auto.ship']) && resMap['starchart'].value > 24) {
							Craft.shipTime = Date.now();
							let valueExt = game.getDisplayValueExt(forceShipVal);
							activity(i18n('summary.auto.ship', [valueExt]));
							activitySummary.other['auto.ship'] = valueExt;
						}
						autoMax = 1;
					} else {
						force = false;
					}
				}
			}

			// 默认数量设为可达无限的最小值
			let amount = Number.MAX_VALUE / ratio + Number.MAX_VALUE / Math.pow(2, 53) / ratio;

			let scienceMeta = Science.meta[0];
			let navigation = Science.get('navigation').researched;
			let indexMax;
			let cache = options.auto.cache;

			if (name === 'beam' || name === 'slab') {
				i = Object.keys(materials)[0];
				if (resPercent(i) < 2) {
					Craft.autoConsume[i] = 0;
					if (resMap['scaffold'].value > 500 && trigger > 0.9 && limited) {
						Craft.autoConsume[i] = 1;
						trigger = 0.9;
					}
					if (!value && resMap['slab'].value > 3) {force = true;}
					if (name === 'slab') {
						if (!resMap['concrate'].unlocked) {
							if (resMap['beam'].value > 25 && !value) {
								autoMax = 1;
								force = true;
							}
							if (resMap['minerals'].value > 2500 && game.science.get('mechanization').researched && resMap['steel'].value > 25) {
								autoMax = 1;
								force = true;
							}
						}
						if (!priceRatio && geodesy && !game.ironWill && resMap['kittens'].maxValue < 135) {
							if (workshop.get("concreteHuts").researched && resPercent('minerals') < 0.99) {
								let mansion = game.bld.getBuildingExt('mansion').meta;
								let mansionRatio = Math.pow(mansion.priceRatio + priceRatio, mansion.val);
								if (resMap['titanium'].value > 25 * mansionRatio && resMap['steel'].value > 75 * mansionRatio) {
									let number = Math.ceil((185 * mansionRatio - value) / ratio);
									if (number > 0 && resMap['minerals'].value > number * 250) {
										this.craft(name, number);
									}
								}
							}
						}
					}
				}
			}
			if (name === 'megalith'&& limited) {
				let five = !ResMap.unlocked && game.diplomacy.get('nagas').embassyLevel > 15
				&& !game.calendar.season && !resValue;
				let tear = resMap['unicorns'].value > 2500 && !resMap['tears'].value && value < 50;
				let policy = resMap['culture'].maxValue < 15e3 && game.bld.getBuildingExt('factory').meta.val && value < 80;
				if (five || tear || policy) {
					autoMax = 1;
					force = true;
				}
			}

			if (name === 'plate' && limited) {
				let coalTick = game.getResourcePerTick('coal', true);
				let reactMeta = game.bld.getBuildingExt('reactor').meta;
				let reactRatio = Math.pow(priceRatio + reactMeta.priceRatio, reactMeta.val);
				let react = resMap['titanium'].value > 3500 * reactRatio && resMap['uranium'].value > 300 && resValue < 5000 * reactRatio;
				if (coalTick > 0 && resMap['iron'].value !== resMap['iron'].maxValue && resValue > 150 && !react) {
					if (this.getValueAvailable('plate') / this.getValueAvailable('steel') > 0.8 && Craft.items['steel'].enabled) {
						let coalTri = this.getResource('coal').maxValue * trigger;
						let ironInTime = ((coalTri - this.getValue('coal')) / coalTick) * Math.max(game.getResourcePerTick('iron', true), 0);
						autoMax = Math.max(0.008 * (this.getValueAvailable('iron') - Math.max(coalTri - ironInTime, 0)), 0.1 * resMap['iron'].perTickCached);
					}
					// if (resMap['minerals'].maxValue < 54e3 && resValue < 150) {
					// 	autoMax = 1;
					// 	force = true;
					// }
					if (!renaissance && !workshop.get('alloyBarns').researched && resMap['alloy'].value > 20 && value < 750) {
						autoMax = 1;
						force = true;
					}
				}
				//  || (resPercent('iron') > 0.89 && resMap['titanium'].maxValue < 3500 * reactRatio)
				if (react) {
					autoMax = Math.min(Math.ceil((5000 * reactRatio - resValue) / ratio), Math.floor(resMap['iron'].value / 125));
					force = true;
				}
				if (resValue < 150) {
					if (resMap['faith'].maxValue < 750 && resMap['gold'].value > 30 && value < templePriceRatio * 15) {
						let leader = game.village.leader;
						if (ratio > 2.8 || resMap['iron'].value / 125 * ratio > 10 || (leader && leader.rank > 3)) {
							force = true;
							autoMax = 3;
						}
					}
					if (!game.getEffect('warehouseRatio') && value && value < 50 && resMap['iron'].value > 700 && resMap['science'].maxValue > 3e4) {
						force = true;
						autoMax = 1;
					}
					if (!resMap['ship'].value && ratio > 3 - priceRatio && resMap['starchart'].value > 24) {
						autoMax = 1;
						force = true;
					}
				}
				// 有资源回复燃烧时间水晶全部用完铁
				let itemHunt = options.auto.options.items.hunt;
				if (itemHunt.time === 'fullIron' && itemHunt.enabled) {force = true;}
			}

			let scienceVal = this.getValueAvailable('science', true);
			let scienceTri = resPercent('science');
			let cultureTri = resPercent('culture');
			let msgScience = (name) => {
				let scienceName = (cache.science) ? cache.science : "科学";
				force = true;
				if (scienceName === '油气处理') {return;}
				if (!options.auto.filter.items.miscFilter.enabled) {
					let msg = game.msg(i18n("craft.force", [ResMap.title, scienceName]), null, null, true);
					$(msg.span).css('color', "#ff589c");
				}
				storeForSummary('craft' + ucfirst(name), 1);
			};
			if (name === 'manuscript' && limited) {
				let cacheManuscript = cache.resources['manuscript'];
				indexMax = (cacheManuscript) ? 17 : 19;
				for (i = 16; i < indexMax; i++) {
					let meta = scienceMeta.meta[i];
					let price = cacheManuscript || meta.prices[1].val;
					if (!meta.researched || cacheManuscript > 0) {
						let buildTemple = resMap['faith'].maxValue > 750 || value > 20;
						if (!buildTemple && !Science.get('theology').researched) {
							let templeVal = temple.val;
							if (templeVal >= 1 && ratio > 4 + Math.pow(templeVal, 3) * 0.08) {
								buildTemple = true;
							}
						}
						let templePrice = 10 * templePriceRatio;
						price = (buildTemple || value > templePrice) ? price : 10 * templePriceRatio;
						autoMax = Math.ceil((price - resValue) / ratio);
						let tradition = (game.getEffect('manuscriptCultureCost')) ? 1 : 0;
						if (autoMax >= 1) {
							let cultureCheck = this.getValueAvailable('culture', true) > (400 - 100 * tradition) * autoMax;
							if (this.getValueAvailable('parchment', true) > autoMax * (25 - 5 * tradition) && cultureCheck) {
								cache.science = (cacheManuscript > 0) ? cache.science : meta.label;
								cache.science = (buildTemple) ? cache.science : "神殿";
								msgScience('manuscript');
								cache.resources['manuscript'] = 0;
							}
						}
						break;
					}
				}
				if (!force) {
					if (cultureTri < 2 && resValue < 1e3) {
						if ((resMap['manpower'].perTickCached < 14 && cultureTri > 0.97) || (cultureTri > 0.9 && !navigation && value < 40)) {
							force = true;
							autoMax = 1;
						}
					}
					if (resMap['faith'].value && game.bld.getBuildingExt('chapel').meta.val < 18 && !Science.get('electricity').researched) {
						if (Science.get('archeology').researched) {
							force = false;
						} else if (resValue > 250) {
							force = false;
						}
					}
					if (!game.ironWill && !game.calendar.festivalDays && resMap['unobtainium'].value && Science.get('drama').unlocked) {autoMax = 0;}
				}
			}

			// 概要
			if (name === 'compedium' && limited && navigation) {
				let cacheCompedium = cache.resources['compedium'];
				indexMax = (cacheCompedium) ? 19 : 27;
				if (!aboveTrigger && ratio < 3) {autoMax = 0;}
				for (i = 18; i < indexMax; i++) {
					if (game.prestige.getPerk("numerology").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) {break;}
					let meta = scienceMeta.meta[i];
					if (!meta.researched || cacheCompedium > 0) {
						if (meta.name === 'metaphysics' || meta.name === 'drama') {continue;}
						if (i < 23 && value > 35 && !Science.get('physics').researched) {continue;}
						if (meta.prices[1].name === name || cacheCompedium) {
							let price = (cacheCompedium || meta.prices[1].val);
							autoMax = Math.ceil((price - resValue) / ratio);
							let resVal = this.getValueAvailable('manuscript', true);
							// let scienceCheck = scienceVal > 1e4 * autoMax || scienceTri >= 1;
							let scienceCheck = scienceVal > 1e4 * autoMax;
							if (resVal > autoMax * 50 && autoMax >= 1) {
								cache.science = (cacheCompedium > 0) ? cache.science : meta.label;
								if (scienceTri <= 1 && scienceCheck) {msgScience('compedium');}
								cache.resources['manuscript'] = 0;
								cache.resources['compedium'] = 0;
							} else if (autoMax >= 1) {
								cache.resources['manuscript'] = autoMax * 50;
								cache.science = (cacheCompedium > 0) ? cache.science : meta.label;
							}
						}
						break;
					}
				}
				if (!Science.get('metalurgy').researched) {
					// 物理学 => 强制到声学
					let acoustics = Science.get('acoustics').researched;
					if (i === 20 && value < 60 && !acoustics) {
						force = true;
						autoMax = 1;
					}
					// 冶金
					if (resValue < 100 + 200 * !priceRatio * acoustics && scienceTri > 0.995) {
						let maxVal = resMap['science'].maxValue;
						if ((!Science.get('electricity').researched && resValue < 85 && cultureTri > 0.92)
							|| (scienceTri === 1 && maxVal > scienceMeta.meta[i].prices[1].val)) {
							force = true;
							autoMax = 1;
						}
						if (cultureTri > 0.96) {
							if (maxVal > 81e3) {
								force = true;
								autoMax = 1;
							}
							if (resMap['titanium'].value > 3e3 && maxVal > 119e3 && !workshop.get("concreteHuts").researched && resMap['kittens'].maxValue) {autoMax = 0;}
						}
						if (resMap['faith'].value && acoustics && game.bld.getBuildingExt('chapel').meta.val < 18 && Science.get('archeology').researched) {
							force = false;
						}
					}
				}
				if (game.getEffect('scienceMaxCompendia') && game.getEffect('alicornChance') > 0.0001 * (40 - 39 * !priceRatio) && resMap['manuscript'].value > 2e4) {
					let compendiaMax = this.getCompendiaMax();
					let compediumVal = value * 10;
					if (compediumVal < Math.max(2e4, compendiaMax)) {
						force = aboveTrigger;
						autoMax = (compendiaMax - compediumVal) / (ratio * 10);
					}
				}
			}

			// 蓝图
			if (name === 'blueprint' && limited && Science.get('electricity').researched) {
				//indexMax = (game.village.maxKittens > 130) ? 44 : 34;
				let rocketry = Science.get('rocketry').researched;
				let scienceMaxVal = resMap['science'].maxValue;
				// 开局
				if (resMap['unobtainium'].value && rocketry && !Science.get('drama').researched) {
					autoMax = 0;
				} else if (!Science.get('advExogeology').researched) {
					for (i = 30; i < 44; i++) {
						let meta = scienceMeta.meta[i];
						if (!meta.researched) {
							let metaName = meta.name;
							let filterName = ['quantumCryptography', 'blackchain', 'ecology', 'ai'];
							let prices = meta.prices;
							if (filterName.indexOf(metaName) > -1 || scienceMaxVal < prices[0].val * 0.95) {
								continue;
							}
							let blueprint = prices[1];
							if (blueprint.name === name) {
								let testVal = resValue - value > 300 ? resValue : value;
								autoMax = Math.ceil((blueprint.val - testVal) / ratio);
								let resVal = this.getValueAvailable('compedium', true);
								let scienceCheck = scienceVal > 2.5e4 * autoMax || scienceTri >= 1;
								if (resVal > autoMax * 25 && autoMax >= 1) {
									cache.science = meta.label;
									if (scienceTri < 1 && scienceCheck) {msgScience('blueprint');}
									cache.resources['manuscript'] = 0;
									cache.resources['compedium'] = 0;
								} else if (autoMax >= 1) {
									cache.resources['compedium'] = autoMax * 25;
									cache.science = meta.label;
								}
							}
							if (i !== 33 && i !== 42 && i !== 43) {
								break;
							}
						}
					}
				}
				// 库存
				if (value - resValue === 150) {autoMax = 0;}
				// 火箭学
				if (!rocketry) {
					// 冶金
					if (!Science.get('metalurgy').researched && value < 60 && scienceTri > 0.98 && scienceMaxVal > 119e3
						|| (i > 34 + !priceRatio && resValue < 200 && scienceTri > 0.98 && cultureTri > 0.98 && scienceMaxVal > 110e3)) {
						force = true;
						autoMax = 1;
					}
				}
				if (game.getEffect('scienceMaxCompendia') && game.getEffect('alicornChance') > 0.0001 * (40 - 39 * !priceRatio)) {
					let compendiaMax = this.getCompendiaMax();
					let compediumVal = resMap['compedium'].value * 10;
					if (compediumVal > Math.max(2e4, compendiaMax)) {
						autoMax = (compediumVal - compendiaMax) / 250;
						force = aboveTrigger;
					} else {
						useRatio = 0.15;
					}
				}
			}

			// 混凝土
			if (name === 'concrate' && !value) {
				force = true;
				autoMax = 1;
			}
			// 羊皮纸
			if (name === 'parchment') {
				limited = ratio < 2.2 - priceRatio + 0.2 * renaissance;
				if (resMap['minerals'].value > 600 * (1 - priceRatio)) {
					if ((value < 6.1 && ratio > 1.5) || (value < 12.14 + 25 * priceRatio && ratio > 2)) {
						force = true;
						autoMax = 1;
					}
				}
				if (!force) {
					if (ratio > 2 && resMap['furs'].value < 350 || ratio < 2.12 - priceRatio) {
						if (resMap['furs'].value > 1000 && Science.get('writing').researched) {
							msgSummary('furs');
						}
						return;
					}
				}
				if (navigation) {
					if (priceRatio < -0.06 && !Science.get('acoustics').researched) {
						limited = true;
					}
				} else {
					if (resValue > 120) {
						limited = true;
						msgSummary('parchment');
					}
					if (!force) {
						autoMax = 2 * (500 - resValue) / ratio;
					}
				}
			}

			// 计算制作多少
			for (i in materials) {
				delta = 0;
				let material = materials[i];
				let craftAll = (!limited || force || (resMap[i].maxValue > 0 && aboveTrigger));
				if (craftAll) {
					// If there is a storage limit, we can just use everything returned by getValueAvailable, since the regulation happens there
					delta = this.getValueAvailable(i, force) / material;
				} else {
					// Take the currently present amount of material to craft into account
					// Currently this determines the amount of resources that can be crafted such that base materials are proportionally distributed across limited resources.
					// This base material distribution is governed by limRat "limited ratio" which defaults to 0.5, corresponding to half of the possible components being further crafted.
					// If this were another value, such as 0.75, then if you had 10000 beams and 0 scaffolds, 7500 of the beams would be crafted into scaffolds.
					delta = useRatio * ((this.getValueAvailable(i, true) + (material / ratio) * resValue) / material) - (resValue / ratio);
				}

				amount = Math.min(delta, amount, autoMax);
			}

			if (name === 'steel' && limited) {
				let calciner = game.bld.getBuildingExt('calciner').meta;
				let steelVal = value;
				let steelValAva = this.getValueAvailable('steel');
				if (!Craft.oxidation && Craft.items['plate'].enabled && steelValAva) {
					let ship = (navigation) ? 1 : 0;
					let ironCoalRatio = Math.max(1 * !ship, 0.3 * Math.min(1, resMap['coal'].perTickCached / resMap['iron'].perTickCached));
					if (resMap['plate'].value < Math.max(75 + (100 - 25 * (priceRatio < -0.06)) * ship * (ratio > 3), 1.25 * ironCoalRatio * resMap['steel'].value)) {
						if (!Science.get('theology').researched || value > 30) {
							amount = 0;
						}
					}
					if (!game.getEffect('warehouseRatio') && resMap['plate'].value > 50 && resMap['science'].maxValue > 3e4) {
						if (value < 50) {
							force = true;
							amount = 1;
						}
						if (Craft.items['scaffold'].enabled && resMap['scaffold'].value < 25) {
							this.craft('scaffold', 1);
						}
					}
				}
				let cacheUpg = options.auto.upgrade.items.upgrades;
				let forceSteel = (name, prices) => {
					let workshopMeta;
					if (name) {
						workshopMeta = workshop.get(name);
						prices = workshopMeta.prices;
						if (!workshopMeta.unlocked) {return;}
					}
					if (!name || !workshopMeta.researched) {
						let steelPrice;
						for (let Res in prices) {
							let price = prices[Res];
							if (price.name === 'steel') {steelPrice = price.val;}
							if (price.name === 'science' && resMap['science'].value < 0.95 * price.val) {return;}
						}
						let amt = Math.ceil((steelPrice - steelVal) / ratio);
						// let checkRes = (this.getValueAvailable('iron', true) > 100 * amt && this.getValueAvailable('coal', true) > 100 * amt);
						let checkRes = resMap['iron'].value > 100 * amt && resMap['coal'].value > 100 * amt;
						if (amt > 0 && checkRes) {
							amount = amt;
							force = true;
							if (name) {activity(i18n("craft.forceSteel", [workshopMeta.label]));}
						}
					}
				};
				if (!cacheUpg.cache && !Craft.oxidation && !game.ironWill) {
					forceSteel('steelAxe');
					forceSteel('steelArmor');
				}
				let oxid = this.getUnResearched('oxidation');
				let calVal = calciner.on;
				if (calVal) {
					if (calciner.isAutomationEnabled) {
						if (game.time.getCFU("ressourceRetrieval").on < 5) {msgSummary('ironFactory');}
					} else {
						let calAmount = 0.0015 * (1 + game.bld.getBuildingExt('reactor').meta.on * 0.1) * (game.getEffect("calcinerRatio") + 1)
							* game.bld.getAutoProductionRatio() * (game.getEffect("ironPolicyRatio") + 1)
							* game.calendar.cycleEffectsFestival({iron : 1})['iron'] * calVal;
						amount = Math.max(0, amount) + calAmount;
						if (steelVal < 125) {amount += 1;}
						let minAmount = Math.min(resMap['coal'].value, resMap['iron'].value) * 0.01;
						if (amount > minAmount || Craft.oxidation) {
							amount = minAmount;
						}
						if (calVal === 47 && !game.getEffect('productionRatio') && resMap['uranium'].value > 250) {amount = 0;}
					}
					forceSteel('oxidation');
					let titanium = resMap['titanium'].value;
					// 氧化反应
					if (oxid) {
						let steelStock = 0;
						if (options.auto.resources[name]) {steelStock = options.auto.resources[name].stock;}
						let Amt = Math.ceil((5000 - value + steelStock) / ratio);
						let ironMap = resMap['iron'];
						let coalMap = resMap['coal'];
						// 15分钟 5 * 60 * 15
						let coalR = (Amt * 100 - coalMap.value) / coalMap.perTickCached;
						let ironR = (Amt * 100 - ironMap.value) / this.getTickVal(ironMap, resMap['ship'].value < 243 && geodesy);
						let startGame = resMap['science'].value > 2e4 || resMap['starchart'].value < 1e4;
						let T = 4500 + 200 * (calVal > 2) + 300 * (calVal > 3) + + 500 * (calVal > 4) + 300 * (calVal > 6) + 200 * (calVal > 7);
						if (!renaissance && geodesy && resMap['ship'].value < 320) {
							T -= 1000;
						}
						if (coalR < T && ironR < T && startGame) {
							Craft.oxidation = true;
							msgSummary('oxidation');
						}
					}
					let alloyVal = resMap['alloy'].value;
					let flu = this.getUnResearched('fluidizedReactors');
					// 轨道测地学
					let orb = this.getUnResearched('orbitalGeodesy');
					if (orb && resMap['oil'].value > 3e4 && resMap['oil'].maxValue > 3.5e4 && resMap['uranium'].value < 1e3 && !flu) {
						let a = Math.ceil((1000 - alloyVal) / ratio);
						let isCache = resMap['titanium'].value > a * 10 || (resMap['alloy'].value > 300 && calVal > 20) || (a * 10 - titanium) / resMap['titanium'].perTickCached < 600 || calVal > 19 || (geodesy && game.calendar.year > 300);
						if (a > 0 && isCache && cacheUpg.cache !== 'orbitalGeodesy') {
							options.auto.cache.resUpg['alloy'] = 1000;
							activity(i18n('craft.CacheSteel', ['轨道测地学']));
							cacheUpg.cache = 'orbitalGeodesy';
						}
					}
					// 流化反应器
					if (flu) {
						let cache = cacheUpg.cache;
						if (!cache || cache === 'geodesy') {
							let amt = Math.ceil((200 - alloyVal) / ratio);
							// 2分钟 5 * 60 * 2
							let b = titanium > amt * 10 || resMap['alloy'].value > 100 || (amt * 10 - titanium) / resMap['titanium'].perTickCached < 600 || calVal > 13;
							if (amt > 0 && calVal > 9 - 3 * renaissance && b && !cacheUpg.cache) {
								options.auto.cache.resUpg['alloy'] = 200;
								cacheUpg.cache = 'fluidizedReactors';
								activity(i18n('craft.CacheSteel', ['流化反应器']));
							}
						}
					}
					let Drill = this.getUnResearched('miningDrill');
					if (Drill && resMap['science'].value > 1e5 && resValue > 1750 && geodesy && !cacheUpg.cache) {
						forceSteel('miningDrill');
					}
					let alloyCache = options.auto.cache.resUpg['alloy'];
					if (alloyCache) {
						let b = Math.ceil((alloyCache - alloyVal) / ratio);
						forceSteel('', [{name:'steel',val:b*75}]);
					}
				} else {
					if (game.challenges.isActive("blackSky")) {
						forceSteel('', [{name:'steel',val:1100}]);
					}
					// else {
					// 	if (value < 100) {
					// 		forceSteel('', [{name:'steel',val:100}]);
					// 	}
					// }
				}
				if (!oxid) {
					Craft.oxidation = null;
				}
				// 资源回复满的铁触发消耗完铁
				let itemHunt = options.auto.options.items.hunt;
				if (itemHunt.time && resPercent('iron') > 0.98) {itemHunt.time = 'fullIron';}
			}

			if (name === 'alloy' && limited) {
				let forceAlloy = (name, price) => {
					let workshopMeta = workshop.get(name);
					if (workshopMeta.researched || !workshopMeta.unlocked) {return;}
					let amt = Math.ceil((price - resMap['alloy'].value) / ratio);
					if (amt > 1 && resMap['steel'].value > amt * 75 && resMap['titanium'].value > amt * 10 && !Craft.oxidation) {
						let ti = options.auto.resources['titanium'];
						if (!ti || (ti && resMap['titanium'].value - price > ti.stock)) {
							amount = amt;
							force = true;
							if (Religion.getSolarRevolutionRatio() < 5.5 || price > 25) {
								if (!options.auto.upgrade.items.upgrades.cache) {
									activity(i18n('craft.forceSteel', [workshopMeta.label]));
								}
							}
						}
					}
				};
				if (!game.getEffect('unobtainiumPerTickSpace') && options.auto.upgrade.items.upgrades.cache !== 'geodesy') {
					if (resMap['oil'].value > 35000)  {
						forceAlloy('orbitalGeodesy', 1000);
					}
					forceAlloy('fluidizedReactors', 200);
					if (workshop.get('alloyAxe').researched) {
						if (game.getEffect('hunterRatio')) {
							forceAlloy('alloyArmor', 25);
							forceAlloy('nanosuits', 250);
						}
					} else if (resMap['wood'].perTickCached) {
						forceAlloy('alloyAxe', 25);
					}
					forceAlloy('alloySaw', 75);
					if (resMap['oil'].value > 5e4 && geodesy && resMap['science'].maxValue > 239e3) {
						if (resMap['starchart'].perTickCached) {
							forceAlloy('hubbleTelescope', 1250);
							if (game.village.leader && resMap['uranium'].value > 250 && ratio < 4.5) {
								forceAlloy('photolithography', 1250);
							}
						}
					}
				}
			}

			if (name === 'eludium' && limited) {
				if (resPercent('unobtainium') > 0.99 && amount < 1 && value) {
					amount = 1;
				}
				if (game.time.getCFU("ressourceRetrieval").on > 11 - renaissance && !game.calendar.season) {
					amount = Math.max(Math.min(20, amount), 1);
				}
			}

			if (amount < 1) {return 0;}
			// If we have a maximum value, ensure that we don't produce more than
			// this value. This should currently only impact wood crafting, but is
			// written generically to ensure it works for any craft that produces a
			// good with a maximum value.

			if (maxValue > 0 && amount * ratio > (maxValue - value)) {
				amount = (maxValue - value) / ratio;
			}

			if (ratio < 4 && limited && !force && (!aboveTrigger || aboveTrigger === 'noRequire')) {
				amount *= Math.max(Math.min(Math.log(ratio - 1), 1), 0.2);
			}

			return amount;
		},
		getMaterials: function (name) {
			let materials = {};
			let craft = this.getCraft(name);

			// Safeguard against craft items that aren't actually available yet.
			if (!craft) {return;}

			let prices = game.workshop.getCraftPrice(craft);

			for (const i in prices) {
				let price = prices[i];

				materials[price.name] = price.val;
			}

			return materials;
		},
		getTickVal: function (res, preTrade) {
			let name = res.name;
			let prod = game.getResourcePerTick(name, true);
			if (name === 'timeCrystal') {
				let aliChance = game.getEffect("alicornChance");
				let alicornTick = game.getResourcePerTick("alicorn");
				let tcRefineRatio = 0.04 * (1 + game.getEffect("tcRefineRatio"));
				aliChance *= 1 + game.getLimitedDR(game.getEffect("alicornPerTickRatio"), 1.2);
				let aliChanceTick = Math.min(aliChance, 1) * 0.2;
				prod = (aliChanceTick + alicornTick) * tcRefineRatio;
				if (game.getEffect('antimatterProduction') > 25 && resPercent('unobtainium') < 0.6) {prod *= 20;}
			}
			if (res.craftable) {
				let minProd = Number.MAX_VALUE;
				let materials = this.getMaterials(name);
				let ratio = 1 + game.getResCraftRatio(name);
				for (let mat in materials) {
					let rat = ratio / materials[mat];
					//Currently preTrade is only true for the festival stuff, so including furs from hunting is ideal.
					let addProd = this.getTickVal(this.getResource(mat));
					minProd = Math.min(addProd * rat, minProd);
				}
				prod += (minProd === Number.MAX_VALUE) ? 0 : minProd;
			}
			let ignore = (name === 'spice' || name === 'blueprint');
			if (prod <= 0 && ignore) {return 'ignore';}
			if (!preTrade) {
				let ratio = 1;
				// if (name === 'unobtainium' && Religion.getSolarRevolutionRatio() > 9) {
				// 	ratio = 0.75 - Math.min(0.4, 2 * game.getEffect('shatterTCGain'));
				// 	if (game.calendar.cycle === 5 && resPercent(name) > 0.8) {ratio -= 0.25;}
				// }
				prod += this.cacheManager.getResValue(name) * ratio;
			}
			return prod;
		},
		getAverageHunt: function() {
			let output = {};
			let hunterRatio = game.getEffect('hunterRatio') + game.village.getEffectLeader('manager', 0);

			output['furs'] = 40 + 32.5 * hunterRatio;

			output['ivory'] = 50 * Math.min(0.225 + 0.01 * hunterRatio, 0.5) + 40 * hunterRatio * Math.min(0.225 + 0.01 * hunterRatio, 0.5);

			output['unicorns'] = 0.05;

			if (this.getValue('zebras') >= 10) {
				output['bloodstone'] = (this.getValue('bloodstone') === 0) ? 0.05 : 0.0005;
			}

			if (game.ironWill && game.workshop.get('goldOre').researched) {
				output['gold'] = 0.625 + 0.625 * hunterRatio;
			}

			return output;
		},
		getResource: function (name) {
			let res = resMap[name];
			if (res) {return res;}
			warning('unable to find resource ' + name);
			return null;
		},
		getValue: function (name) {
			return this.getResource(name).value;
		},
		getStock: function (name) {
			let auto = options.auto;
			let res = auto.resources[name];
			// let stock = (res && res.enabled) ? res.stock : 0;
			let stock = (res) ? res.stock : 0;
			let stocks = auto.cache.stocks;
			if (!stocks) {
				this.getAutoStocks();
				stocks = auto.cache.stocks;
			}
			if (stocks[name]) {
				stock += stocks[name];
			}
			return stock;
		},
		getAutoStocks: function () {
			let workshop = game.workshop;
			let auto = options.auto;
			let cache = auto.cache;
			cache.stocks = {};
			if (workshop.get('spaceManufacturing').researched) {return;}
			let orbGeodesy = workshop.get('orbitalGeodesy').researched;
			let leader = game.village.leader;
			let iw = game.ironWill;
			let kittens = game.village.sim.kittens.length;
			let cacheAlloy = cache.resUpg['alloy'];
			let priceRatio = game.getEffect("priceRatio");
			let msgForStock = (price, name, res) => {
				cache.stocks[res] += price;
				msgSummary(name);
			};
			['wood','minerals','iron', 'alloy', 'titanium', 'steel', 'gear', 'beam', 'blueprint'].forEach((name) => {
				cache.stocks[name] = 0;
				let stock = 0;
				let Titanium = resMap['titanium'];
				switch (name) {
					case 'wood': {
						if (!resMap['paragon'].value && kittens === 8 && game.getEffect('skillXP') && resMap['wood'].value < 196) {stock += 196;}
						if (this.getUnResearched('ironwood') && resMap['iron'].value > 2800 && kittens > 20) {stock += 15e3;}
						// if (kittens < 130 && workshop.get('concreteHuts').researched && !iw && !game.getEffect("priceRatio") && resPercent(name) < 1 && resMap['beam'].value > 200) {stock += 11e5;}
						break;
					}
					case 'minerals': {
						if (kittens < 130 && workshop.get('concreteHuts').researched && !iw && !priceRatio && resPercent(name) < 0.99 && game.getEffect('craftRatio') >=3) {
							let logHouse = game.bld.getBuildingExt('logHouse').meta;
							msgSummary('logHouseMineral');
							stock += 250 * Math.pow(logHouse.priceRatio + priceRatio, logHouse.val);
						}
						break;
					}
					case 'iron': {
						let lumberMill = game.bld.getBuildingExt('lumberMill').meta;
						let temple = game.bld.getBuildingExt('temple').meta;
						let a = resMap['gold'].value < 50 * Math.pow(priceRatio + temple.priceRatio, temple.val) + 2;
						let lum = 50 * Math.pow(priceRatio + lumberMill.priceRatio, lumberMill.val) > 400;
						lumberMill = lumberMill.val > 18 - 40 * priceRatio;
						if (temple.on > 2 + priceRatio || resMap['faith'].maxValue > 749 || (a && lumberMill) || resMap['plate'].value > 18 || (lum && !priceRatio)) {
							let val = resMap[name].value;
							let maxVal = resMap[name].maxValue;
							let stockIron = (isStock, price, upg) => {
								if (isStock && val < 1e4 && kittens < 115) {
									msgForStock(price, upg, name);
								}
							};
							let reinforcedSaw = this.getUnResearched('reinforcedSaw') && val > 200 && maxVal > 1e3;
							let paragon = resMap['burnedParagon'].value < 1e5;
							let crossbow = this.getUnResearched('crossbow') && lumberMill && maxVal > 1500 && paragon;
							let ironwood = this.getUnResearched('ironwood') && val > 700 * (1 - priceRatio) && maxVal > 3000
								&& resMap['science'].maxValue > 3e4 && kittens > 20 && paragon;

							stockIron(reinforcedSaw, 1000, 'reinforcedSaw');
							stockIron(crossbow, 1500, 'crossbow');
							stockIron(ironwood, 3000, 'ironwood');
							if (workshop.get('spaceManufacturing').researched) {
								msgSummary('ironwood', true);
								msgSummary('crossbow', true);
								msgSummary('ironwood', true);
							}
						}
						break;
					}
					case 'alloy': {
						if (cacheAlloy) {stock += cacheAlloy;}
						break;
					}
					case 'steel': {
						let blackSky = game.challenges.isActive("blackSky");
						let titaniumVal = Titanium.value;
						let val = resMap[name].value;
						let steelAxe = this.getUnResearched('steelAxe') && resMap['coal'].value > 3000;
						if (steelAxe && !iw && (game.bld.getBuildingExt('lumberMill').meta.val > 29 || val > 10)) {msgForStock(75, 'steelAxe', name);}
						// 精钢锯
						if (this.getUnResearched('steelSaw') && val > 250 && !cache.stocks['titanium'] && resMap['science'].maxValue > 50e3 && kittens < 85) {
							msgForStock(750, 'steelSaw', name);
						}
						// 氧化反应
						if (this.getUnResearched('oxidation')) {
							if (options.auto.craft.oxidation) {stock += 5000;}
							if (this.getUnResearched('titaniumWarehouses') && titaniumVal > 50 && workshop.get('geodesy').researched && resMap['scaffold'].value > 500) {
								stock += 500;
							}
						}
						// 钛金粮仓
						if (this.getUnResearched('titaniumBarns') && resMap['ship'].value > 70 && titaniumVal > 25) {
							if (resMap['scaffold'].value > 250) {stock += 200;}
						}

						if (blackSky && !titaniumVal.perTickCached && val < 1100 && resMap['oil'].value > 6e3) {
							stock += 1100;
						}

						let upg = auto.upgrade.items.upgrades;
						// 采矿钻
						if (upg.cache === 'miningDrill' && Titanium.value > 1450) {
							stock += 750;
							msgSummary('miningDrill');
						}
						let cacheSteel = cache.resUpg['steel'];
						if (cacheSteel) {stock += cacheSteel;}
						if (cacheAlloy) {stock += Math.max(0, cacheAlloy - resMap['alloy'].value) * 75 / (1 + game.getEffect("craftRatio"));}
						break;
					}
					case 'titanium': {
						let Val = game.bld.getBuildingExt('calciner').meta.val;
						let geodesyResearched = workshop.get('geodesy').researched;
						let calcinerRatio = game.getEffect('calcinerRatio');
						let titaniumVal = Titanium.value;
						let items = options.auto.upgrade.items;
						let vitruvianFeline = priceRatio < -0.06;
						// 回转炉
						if (this.getUnResearched('rotaryKiln') && Titanium.maxValue > 5e3) {
							if ((titaniumVal > 1500 && Val > 5 + vitruvianFeline * 5 && geodesyResearched && resMap['ship'].value > 250) || (orbGeodesy && Val > 17)) {
								msgForStock(5000, 'rotaryKiln', name);
								let upg = items.upgrades;
								if (!upg.cache) {
									upg.cache = 'rotaryKiln';
								}
							}
						}

						if (this.getUnResearched('titaniumMirrors') && resMap['ship'].value > 40 && resMap['science'].maxValue < 57e3 && titaniumVal < 15) {
							stock += 15;
						}
						let Revolution = Religion.getSolarRevolutionRatio();
						let geodesy = this.getUnResearched('geodesy');
						if (!iw && geodesy && resMap['starchart'].value > 350 - 50 * !calcinerRatio) {
							if (Revolution < 3.3 && (Val || Titanium.value > 100)) {
								msgForStock(250, 'titaniumGeodesy', name);
								let upg = items.upgrades;
								if (!upg.cache) {
									upg.cache = 'geodesy';
								}
							}
						}
						//采矿钻
						if (geodesyResearched) {
							if (this.getUnResearched('miningDrill') && titaniumVal > 675) {
								let upg = items.upgrades;
								if (!upg.cache) {
									upg.cache = 'miningDrill';
								}
								stock += 1750;
							}
						}
						// 混凝土小屋
						if (this.getUnResearched('concreteHuts')  && resMap['science'].maxValue > 12e4 && resMap['uranium'].value < 250) {
							if (kittens < 124 + 16 * (priceRatio < -0.07) + 57 * !leader && !iw && resMap['concrate'].value > 45) {
								if ((geodesyResearched && titaniumVal > 750) || (geodesy && titaniumVal > 1e3)) {
									msgForStock(3e3, 'concreteHuts', name);
									let upg = items.upgrades;
									if (!upg.cache) {
										upg.cache = 'concreteHuts';
									}
								}
							}
						}
						// if (unResearched('augumentation') && resMap['uranium'].value > 50 && leader && workshop.get('rotaryKiln').researched) {stock += 5000;}
						if (this.getUnResearched('spaceManufacturing') && game.bld.getBuildingExt('reactor').meta.val > 24 && Titanium.maxValue > 125e3) {
							msgForStock(125e3, 'spaceManufacturing', name);
						}
						if (cacheAlloy) {stock += 5 * cacheAlloy;}
						break;
					}
					case 'gear': {
						let titaniumVal = Titanium.value;
						// 高压引擎
						if (this.getUnResearched('combustionEngine') && game.getEffect('coalRatioGlobal') && resMap['coal'].value < 1e3) {stock += 25;}
						// 回转炉
						if (this.getUnResearched('rotaryKiln') && titaniumVal > 4e3 && resMap['science'].maxValue > 138e3) {stock += 500;}
						// 燃料喷射器
						if (this.getUnResearched('fuelInjectors') && resMap['oil'].value > 2e4 && (game.getEffect('calcinerRatio') < 1 || resMap['coal'].value < 3e3) && Religion.getSolarRevolutionRatio() < 5 && game.getEffect('coalRatioGlobal')) {
							msgSummary('fuelInjectors');
							stock += 250;
						}
						// 抽油机
						let oilFactor = (resPercent('oil') < 0.8 && resMap['starchart'].value < 250 && resMap['steel'].value > 150) || resMap['oil'].perTickCached < 0.4;
						if (this.getUnResearched('pumpjack') && titaniumVal > 200 && oilFactor && priceRatio > -0.06) {stock += 125;}
						// 后勤
						if (this.getUnResearched('logistics') && resMap['scaffold'].value > 1000 && leader && kittens < 100) {stock += 100;}
						// 炼油厂
						if (this.getUnResearched('oilRefinery') && titaniumVal > 1750 && resMap['science'].maxValue > 125e3 && oilFactor) {stock += 500;}
						// to do 胶印机
						break;
					}
					case 'beam':
						if (this.getUnResearched('deepMining') && resMap['iron'].value > 1200) {stock += 5000;}
						break;
					case 'blueprint':
						if (game.bld.getBuildingExt('calciner').meta.val > 15 && !game.science.get('sattelites').researched && resMap['science'].maxValue > 181e3 && workshop.get('rotaryKiln').researched && !resMap['unobtainium'].value && resMap['blueprint'].value < 150) {
							stock += 125;
						}
						if (resMap['alloy'].value > 75 && !game.science.get('nanotechnology').researched && resMap['science'].maxValue > 2e5 && workshop.get('rotaryKiln').researched && !resMap['unobtainium'].value) {
							msgSummary('nanotechnology');
							stock += 150;
						}
						if (!game.science.get('orbitalEngineering').researched && resPercent('unobtainium') === 1 && game.getEffect('ProductionRatio') > 0.5) {stock += 250;}
						break;
				}
				cache.stocks[name] += stock;
			});
		},
		getValueAvailable: function (name, all, typeTrigger) {
			let value = this.getValue(name);
			let stock = this.getStock(name);

			let trigger;
			if (!typeTrigger && typeTrigger !== 0) {
				if (typeTrigger === undefined) {
					trigger = 1;
				} else {
					trigger = options.auto.craft.trigger;
				}
			} else {
				trigger = typeTrigger;
			}

			if (name === 'catnip') {
				let resPerTick = this.getPotentialCatnip(false);
				let catnipTick = (game.calendar.season !== 0 || this.getResource(name).maxValue * trigger < value || game.getResourcePerTick("catnip", true) < 0);
				if (resPerTick < 0 && catnipTick) {
					let calendar = game.calendar;
					let now = game.calcResourcePerTick('catnip');
					stock -= resPerTick * 1500;
					if (now > 0) {
						let number = (calendar.season < 3) ? 100 * (2 - calendar.season) + 100 - calendar.day : 0;
						stock = Math.max(0, stock - 10 * game.calcResourcePerTick('catnip') * number);
					}
					// 4000秒
					if (options.auto.options.catnipMsg + 40e5 < Date.now() || !activitySummary.other['auto.craftCatnip']) {
						if (game.stats.getStat("totalResets").val < 5) {activity(i18n('msg.catnip'));}
						msgSummary('craftCatnip');
						options.auto.options.catnipMsg = Date.now();
					}
				}
			}

			value = Math.max(value - stock, 0);

			// If we have a maxValue, and user hasn't requested all, check
			// consumption rate
			let maxValue = (typeTrigger && !all) ? value : this.getResource(name).maxValue;
			if (!all && maxValue > 0) {
				let res = options.auto.resources[name];
				let consume = res && res.enabled && (res.consume !== undefined) ? res.consume : options.consume;
				let craftItem = options.auto.craft.autoConsume;
				if ((craftItem[name] && !typeTrigger) || name === 'coal') {consume = 1;}

				value -= Math.min(maxValue, value) * (1 - consume);

				if (name === 'unobtainium' && value + stock < 1000 && this.getResource(name).value === maxValue && this.getResource(name).value >= 1000) {
					value = this.getResource(name).value;// fix unobtainium crafting to eludium
				}
			}

			return value;
		},
		getUnResearched: function(name) {
			let meta = game.workshop.metaCache[name];
			return !meta.researched && meta.unlocked;
		},
		getLimRat: function (name, limited, limRat) {
			if (!limited) {return limRat;}
			let navigation = game.science.get('navigation');

			let res = resMap[name];
			let shipValue = resMap['ship'].value;
			let space = game.space;
			let piscine = space.getProgram('piscineMission');

			let Bld = game.bld;
			let reactor = Bld.getBuildingExt('reactor').meta;
			let reactorVal = reactor.val;
			let priceRatio = game.getEffect("priceRatio");
			let renaissance = priceRatio < -0.07;
			let steamworks = Bld.getBuildingExt("steamworks").meta;
			let magneto = Bld.getBuildingExt('magneto').meta;
			let solar = Religion.getSolarRevolutionRatio();

			let factor;
			switch(name) {
				case 'wood': {
					let Catnip = resMap['catnip'];
					let better = 0.09 + res.perTickCached < Catnip.perTickCached / game.workshop.getCraft("wood").prices[0].val;
					let iw = !game.getEffect('scienceRatio') && Catnip.value > 1e3 && game.ironWill;
					limRat = (better || iw) ? 1 : 0.5 - 0.1 * (Catnip.perTickCached < 10);
					let field = Bld.getBuildingExt('field').meta;
					let fieldFactor = Math.pow(field.priceRatio + priceRatio, field.val);
					limRat = (Catnip.maxValue > 10 * fieldFactor && solar > 1 && !game.ironWill && res.value || (!this.getValueAvailable(name, true) && res.value)) ? 0 : limRat;
					break;
				}
				case 'beam': {
					let craftBeam = navigation.unlocked || resMap['gold'].maxValue < 500 || (resMap['iron'].value > 1000 && !resMap['coal'].value);
					limRat = (resMap['scaffold'].value < 500 + 500 * solar + 4500 * !solar) ? limRat : 0.02;
					limRat = (craftBeam) ? limRat : 5e-3;
					break;
				}
				case 'slab': {
					let resVal = res.value;
					let start = resMap['faith'].maxValue < 750 && resVal < 51 && resMap['gold'].value > 35;
					let scaffold = resMap['scaffold'].value;
					limRat = (scaffold || start || (reactorVal && resVal < 2500)) ? limRat : 5e-3;
					limRat = ((scaffold < 500 && shipValue < 210) || (scaffold > 500 && resVal < 615)) ? limRat : 0.1;
					limRat = (scaffold > 2500 && res.value > 2500 * (1 + solar) * (1 + 0.05 * reactor.on) * (1 + solar)) ? 0.04 : limRat;
					break;
				}
				case 'ship': {
					let starchart = resMap['starchart'].value;
					let titaniumMax = resMap['titanium'].maxValue;

					let shipLimit = 5 * reactorVal + 225;
					let satnav = !piscine.on && shipValue && space.getBuilding('sattelite').val < 9
						|| (!piscine.on && Workshop.get('spaceManufacturing').researched);
					let manufacture = satnav && solar > 5.5 && titaniumMax < 125e3 && !piscine.val;
					satnav = satnav && solar > 6 && titaniumMax > 120e3;
					let geodesy = Workshop.get('geodesy').researched;
					limRat = 0.4;
					if (geodesy && solar < 9 - 2 * renaissance + 3 * (!game.village.leader) - 4.5 * satnav) {
						let unobtainium = resMap['unobtainium'].perTickCached;
						let solarFactor = (solar < 0.8) ? 1 + (unobtainium > 0) * 3 : 1.2 * (shipValue < 400);
						let factor = (25 * priceRatio + Math.log1p(solar) + (unobtainium > 0 && priceRatio > -0.06) * 1.5 + 2.2 + solarFactor - 2.2 * (solar > 2)) * shipLimit;
						// console.log((25 * priceRatio + Math.log1p(solar) + (unobtainium > 0 && priceRatio > -0.06) * 1.5 + (1 + (unobtainium > 0) * 3) * (solar < 0.8) + 2.2) * shipLimit)
						let noReset = game.calendar.year > 400 && reactorVal;
						if (shipValue < Math.min(factor, 500 * (!satnav || noReset) + 1000) && starchart < 1500) {
							limRat = 0.7 + 0.2 * (shipValue < 400 - 4 * solar - 50 * renaissance || noReset) + (unobtainium > 0) * 0.3;
						}
					}
					limRat = (shipValue > shipLimit * 0.75 && solar > 3 + 2 * geodesy && starchart < 1e5 && satnav) ? 0.3 : limRat;
					limRat = (manufacture || resPercent('titanium') > 0.7) ? 0.05 : limRat;
					limRat = (satnav && (!game.workshop.get('satnav').researched || titaniumMax > 123e3) && starchart < 1e4) ? 0 : limRat;
					limRat = (shipValue > Math.max(400, 0.5 * titaniumMax)) ? 0 : limRat;
					break;
				}
				case 'plate': {
					const temple = Bld.getBuildingExt('temple').meta;
					let templeFactor = Math.pow(temple.priceRatio + priceRatio, temple.val);
					let value = res.value;
					let titan = value < 2500 && resMap['titanium'].value > 3500;
					let Temple = temple.on && temple.on < 15 - 3 * renaissance && solar && value < templeFactor * 15;
					limRat = (game.getEffect('calcinerRatio') || Temple || titan) ? limRat + 0.2 : 0.35;
					limRat = (value < 150 && navigation.researched && resMap['starchart'].value > 10 && resMap['scaffold'].value > 50 - 100 * priceRatio) ? 0.92 : limRat;
					limRat = (options.auto.craft.oxidation && !game.workshop.get('oxidation').researched) ? 0 : limRat;
					break;
				}
				case 'alloy': {
					let titaniumTick = game.globalEffectsCached['titaniumPerTickAutoprod'];
					let calcinerVal = Bld.getBuildingExt('calciner').meta.val;
					factor = Math.pow(magneto.priceRatio + priceRatio, magneto.val);
					limRat = ((calcinerVal < 4 && steamworks.on < magneto.on)
						|| calcinerVal < 2 || (calcinerVal < 3 && !resMap['titanium'].value < 22 - solar)) ? 0.45 : 0.76;
					let Reactor = !reactorVal && magneto.val > 31;
					limRat = (res.value > Math.max(1250, 10 * factor) && options.auto.build.items.magneto.enabled || Reactor) ? 0.01 : limRat;
					let blackSky = calcinerVal < 6 && !resMap['starchart'].unlocked;
					limRat = ((resMap['titanium'].value < 17 && !calcinerVal) || blackSky || !game.science.get('electricity').researched) ? 0 : limRat;
					break;
				}
				case 'steel': {
					let Auto = options.auto;
					limRat = (Auto.craft.oxidation) ? 1 : 0.65;
					break;
				}
				case 'eludium': {
					limRat = (game.getEffect('shatterTCGain') > 0.05) ? 0.1 : 0.6;
					limRat = (res.value < 125 && game.getEffect('hutPriceRatio') > -1.06) ? 1 : limRat;
					break;
				}
				case 'megalith': {
					let ziggurat = Bld.getBuildingExt('ziggurat').meta;
					factor = Math.pow(ziggurat.priceRatio + priceRatio, ziggurat.val);
					let reactorFactor = Math.pow(reactor.priceRatio + priceRatio, reactorVal);
					limRat = (game.workshop.get('spaceManufacturing').researched) ? limRat : 0.15;
					limRat = (res.value > Math.max(100, 50 * factor)) ? 5e-3 : limRat;
					limRat = (resMap['plate'].value < Math.max(5000, 50 * reactorFactor)) ? 0.1 : limRat;
					if (res.value > 50 || ziggurat.on || resMap['unicorns'].value < 1000) {
						if (!game.workshop.get('orbitalGeodesy').researched) {limRat = 1e-3;}
					}
					break;
				}
				case 'concrate': {
					let moon = space.getBuilding('moonOutpost').val;
					moon = 150 * Math.pow(1.12, moon);
					factor = Math.pow(reactor.priceRatio + priceRatio, reactorVal);
					let dataCenter = Bld.getBuildingExt('library').meta;
					let dataFactor = Math.pow(dataCenter.priceRatio + priceRatio, dataCenter.val) * dataCenter.stage;
					limRat = (reactorVal) ? 0.6 : 0.14;
					limRat = (res.value > Math.max(moon, 50 * factor, 10 * dataFactor)) ? 0.01 : limRat;
					break;
				}
				case 'gear': {
					factor = Math.pow(steamworks.priceRatio + priceRatio, steamworks.val);
					let logistics = this.getUnResearched('logistics') && resMap['scaffold'].value > 1e3;
					let fuelInjectors = this.getUnResearched('fuelInjectors') && resMap['oil'].value > 1e4 && resPercent('coal') < 0.6 + priceRatio && res.value < 250 && resMap['titanium'].value > 200 && resMap['steel'].value > 240 + 40 * priceRatio;
					// 胶印机待定
					// let offsetPress = this.getUnResearched('offsetPress') && resMap['oil'].value > 15e3 && solar < 1;
					let more = game.getEffect('calcinerRatio') && solar > 2;
					limRat = (fuelInjectors || logistics) ? 0.75 : 0.3 + 0.15 * more;
					limRat = (res.value > Math.max(500, 20 * factor)) ? 5e-3 : limRat;
					limRat = (steamworks.val || game.science.get('chemistry').researched || (!resMap['furs'].unlocked && res.value < 50)) ? limRat : 0;
					break;
				}
				case 'kerosene':
					limRat = 0.25 + 0.3 * (resMap['kerosene'].value < 2e3 && solar > 8 && piscine.on);
					limRat = (!piscine.val && resMap['starchart'].value > 1400 && res.value < 250 && solar > 3) ? 0.8 : limRat;
					limRat = (!piscine.on && res.value > 250) ? 0 : limRat;
					limRat = (space.getProgram('moonMission').val) ? limRat : 0;
					break;
				case 'manuscript': {
					limRat = (game.prestige.getPerk("numeromancy").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) ? 0.25 : 0.49;
					limRat = (reactorVal) ? 0.4 : limRat;
					let chapel = Bld.getBuildingExt('chapel').meta;
					chapel = Math.pow(chapel.priceRatio + priceRatio, chapel.val);
					let brewery = Bld.getBuildingExt('brewery').meta;
					if (resMap['culture'].maxValue > 750 * Math.pow(brewery.priceRatio + priceRatio, brewery.val) && resPercent('culture') > 0.5) {
						if (resMap['parchment'].value > Math.max(1e6, 260 * chapel) && reactorVal) {limRat = 1;}
					}
					break;
				}
				case 'compedium':
					limRat = (solar) ? limRat : 0.3;
					limRat = (game.science.get('architecture').unlocked) ? limRat : 0;
					// limRat = (resMap['manuscript'].value > 4e4) ? 0.6 : limRat;
					break;
				case 'blueprint':
					limRat = (game.science.get('industrialization').unlocked) ? limRat : 0;
					break;
				case 'scaffold': {
					let val = res.value;
					let observatory = Bld.getBuildingExt('observatory').meta;
					factor = Math.pow(game.getLimitedDR(priceRatio, 0.1) + 1.1, observatory.val);
					let craftObservatory = val < 50 * factor && resMap['iron'].value > 750 * factor;
					let scienceMax = resMap['science'].maxValue;
					let leader = game.village.leader;
					let logistics = val < 1e3 && this.getUnResearched('logistics') && leader && leader.rank > 2 && scienceMax > 95e3;
					// || resMap['beam'].value > 20 * resMap['slab'].value
					let forShip = resMap['plate'].value > 150 && val < 100 && scienceMax > 47500;
					limRat = (craftObservatory || logistics || forShip) ? 0.75 + 0.1 * (scienceMax < 6e4) : limRat;
					if (navigation.unlocked) {
						limRat = (resMap['iron'].value > 750 || game.science.get('chemistry').researched) ? limRat : 0;
						limRat = ((val < 880 + 120 * logistics && scienceMax < 119e3 && shipValue > 200 - 25 * logistics)
							|| (game.getEffect('priceRatio') > -0.06 && forShip)) ? 1 : limRat;
					} else {
						limRat = 0;
					}
					break;
				}
				case 'tanker':
					limRat = 0.01;
					break;
				case 'thorium':
					limRat = (res.value) ? 0.01 : 1e-4;
					break;
			}
			return limRat;
		},
		getCompendiaMax: function () {
			// 概要数量上限
			let scienceBldMax = game.bld.getEffect("scienceMax");
			let compCap = game.getEffect("scienceMaxCompendia");
			if (game.ironWill) {scienceBldMax *= 10;}
			if (game.prestige.getPerk("codexLeviathanianus").researched) {
				let blackLibrary = Religion.getTU("blackLibrary");
				let ttBoostRatio = 1 + blackLibrary.val * (blackLibrary.effects["compendiaTTBoostRatio"] + game.getEffect("blackLibraryBonus"));
				scienceBldMax *= 1 + 0.05 * ttBoostRatio * Religion.transcendenceTier;
			}
			return scienceBldMax + compCap;
		},
		getPotentialCatnip: function (worstWeather, pastures, aqueducts) {
			let fieldProd = game.getEffect('catnipPerTickBase');
			if (worstWeather) {
				fieldProd *= 0.1;
				fieldProd *= 1 + game.getLimitedDR(game.getEffect("coldHarshness"), 1);

				if (game.getEffect('factoryCostReduction')) {fieldProd = 0;}

			} else {
				//fieldProd *= game.calendar.getWeatherMod({name: "catnip"});
				let calendar = (game.calendar.year < 4) ? 0 : 0.15;
				fieldProd *= game.calendar.seasons[3].modifiers.catnip - calendar;
			}
			if (!game.village.resourceProduction) {game.village.updateResourceProduction();}
			let ResCatnip = game.village.resourceProduction['catnip'];
			let vilProd = (ResCatnip) ? ResCatnip * (1 + game.getEffect('catnipJobRatio')) : 0;
			let baseProd = fieldProd + vilProd;

			if (aqueducts === undefined) {
				baseProd *= 1 + game.getEffect('catnipRatio');
			} else {
				let hydroponics = game.space.getBuilding('hydroponics');
				let hydroponicsEffect = hydroponics.effects['catnipRatio'];
				baseProd *= 1 + game.bld.getBuildingExt('aqueduct').meta.stages[0].effects['catnipRatio'] * aqueducts + hydroponicsEffect * hydroponics.val;
			}

			let paragonBonus = (game.challenges.isActive("winterIsComing")) ? 0 : game.prestige.getParagonProductionRatio();
			baseProd *= 1 + paragonBonus;

			baseProd *= 1 + Religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);

			//if (!game.opts.disableCMBR) {baseProd *= (1 + game.getCMBRBonus());}

			baseProd *= 1 + (game.getEffect('blsProductionBonus') * resMap['sorrow'].value);

			baseProd = game.calendar.cycleEffectsFestival({catnip: baseProd})['catnip'];

			baseProd *= 1 + game.bld.pollutionEffects["catnipPollutionRatio"];

			baseProd += !activitySummary.other['auto.changeLeader'] * (0.1 * baseProd + 1);

			let baseDemand = game.village.getResConsumption()['catnip'];
			let uniPastures = game.bld.getBuildingExt('unicornPasture').meta.val;
			if (pastures === undefined) {
				baseDemand *= 1 + game.getEffect("catnipDemandRatio");
			} else {
				baseDemand *= 1 + (game.getLimitedDR(pastures * -0.005 + uniPastures * -0.0015, 1.0));
			}

			if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
				let happyCon = Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0);
				if (game.challenges.isActive("anarchy")) {
					baseDemand *= 1 + happyCon * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
				} else {
					baseDemand *= 1 + happyCon * (1 + game.getEffect("catnipDemandWorkerRatioGlobal")) * (1 - game.village.getFreeKittens() / game.village.sim.kittens.length);
				}
			}
			baseProd += baseDemand + 0.2 * !activitySummary.other['auto.changeLeader'];

			baseProd += game.getResourcePerTickConvertion('catnip');

			//Might need to eventually factor in time acceleration using game.timeAccelerationRatio().
			return baseProd;
		}
	};

	// Bulk Manager
	// ============

	let BulkManager = function () {
		this.craftManager = new CraftManager();
	};

	BulkManager.prototype = {
		craftManager: undefined,
		bulk: function (builds, metaData, trigger, source) {
			let data, prices, priceRatio, i, build;
			const bList = [];
			const countList = [];
			let counter = 0;
			for (const name in builds) {
				build = builds[name];
				if (!build.enabled) {continue;}
				data = metaData[name];
				// 建筑数量大于等于max时 或者等于0时跳过
				if (build.max !== -1 && build.max <= data.val) { continue; }
				if (data.unlocked === false) {continue;}
				let require = build.require ? resMap[build.require] : false;
				if (!require || trigger <= require.value / require.maxValue) {
					let prices = (data.stages) ? data.stages[data.stage].prices : data.prices;
					if (build.variant === 's') {prices = game.village.getEffectLeader("wise", dojo.clone(data.prices));}
					priceRatio = this.getPriceRatio(data, source);
					bList[counter] = {};
					let Build = bList[counter];
					Build.id = name;
					Build.label = build.label;
					Build.name = build.name;
					Build.stage = build.stage;
					Build.variant = build.variant;
					countList[counter] = {};
					let count = countList[counter];
					count.id = name;
					count.name = build.name;
					count.count = 0;
					count.spot = counter;
					count.prices = [];
					let pricesDiscount = game.getLimitedDR(game.getEffect(name + "CostReduction"), 1);
					let priceModifier = 1 - pricesDiscount;
					for (i in prices) {
						let price = prices[i];
						let resPriceDiscount = game.getLimitedDR(game.getEffect(price.name + "CostReduction"), 1);
						let resPriceModifier = 1 - resPriceDiscount;
						count.prices.push({
							val: price.val * priceModifier * resPriceModifier,
							name: price.name
						});
					}

					count.priceRatio = priceRatio;
					count.source = source;
					count.limit = (isNaN(build.max)) ? -1 : build.max;
					count.val = data.val;
					if (this.singleBuildPossible(data, count.prices, priceRatio, source)) {
						counter++;
					} else {
						countList.pop();
					}
				}
			}

			if (countList.length === 0) {return;}

			let tempPool = {};
			for (let res in resMap) {
				tempPool[res] = this.craftManager.getValueAvailable(res, true);
			}
			let k = 0;
			let nextPriceCheck;
			while (countList.length !== 0) {
				bulkLoop:
				for (let j = 0; j < countList.length; j++) {
					let build = countList[j];
					data = metaData[build.id];
					let dataVal = data.val;
					let valPlusLoopTime = k + dataVal;
					prices = build.prices;
					priceRatio = build.priceRatio || Number.MAX_VALUE;
					source = build.source;
					for (let p = 0; p < prices.length; p++) {
						let priceRes = prices[p];
						let spaceOil, cryoKarma, oilPrice, karmaPrice = false;
						let priceResName = priceRes.name;
						let tempRes = tempPool[priceResName];
						if (source === 'space' && priceResName === 'oil') {
							spaceOil = true;
							oilPrice = priceRes.val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
						} else if (build.id === 'cryochambers' && priceResName === 'karma') {
							cryoKarma = true;
							karmaPrice = priceRes.val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
						}

						if (spaceOil) {
							nextPriceCheck = (tempPool['oil'] < oilPrice * Math.pow(1.05, valPlusLoopTime));
						} else if (cryoKarma) {
							nextPriceCheck = (tempPool['karma'] < karmaPrice * Math.pow(priceRatio, valPlusLoopTime));
						} else {
							let price = priceRes.val * Math.pow(priceRatio, valPlusLoopTime);
							nextPriceCheck = tempRes < price;
						}
						if (nextPriceCheck) {
							for (let p2 = 0; p2 < p; p2++) {
								let priceRes2 = prices[p2];
								let Res2Name = priceRes2.name;
								if (source === 'space' && Res2Name === 'oil') {
									let oilPriceRefund = priceRes2.val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
									tempPool['oil'] += oilPriceRefund * Math.pow(1.05, valPlusLoopTime);
								} else if (build.id === 'cryochambers' && Res2Name === 'karma') {
									let karmaPriceRefund = priceRes2.val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
									tempPool['karma'] += karmaPriceRefund * Math.pow(priceRatio, valPlusLoopTime);
								} else {
									let refundVal = priceRes2.val * Math.pow(priceRatio, valPlusLoopTime);
									tempPool[Res2Name] += (Res2Name === 'void') ? Math.ceil(refundVal) : refundVal;
								}
							}
							if (build.limit !== -1) {
								build.count = Math.max(0, Math.min(build.count, (build.limit - build.val)));
							}
							bList[build.spot].count = build.count;
							countList.splice(j, 1);
							j--;
							continue bulkLoop;
						}
						if (spaceOil) {
							tempPool['oil'] -= oilPrice * Math.pow(1.05, valPlusLoopTime);
						} else if (cryoKarma) {
							tempPool['karma'] -= karmaPrice * Math.pow(priceRatio, valPlusLoopTime);
						} else {
							let pVal = priceRes.val * Math.pow(priceRatio, valPlusLoopTime);
							tempPool[priceResName] -= (priceResName === 'void') ? Math.ceil(pVal) : pVal;
							// 检查 NaN
							if (!tempPool[priceResName]) {tempPool[priceResName] = 0;}
						}
					}
					build.count++;
				}
				k++;
			}
			return bList;
		},
		construct: function (model, button, amount) {
			const meta = model.metadata;
			let counter = 0;
			if (typeof meta.limitBuild == "number" && meta.limitBuild - meta.val < amount) {
				amount = meta.limitBuild - meta.val;
			}
			if (!model.enabled) {button.controller.updateEnabled(model);}
			if (model.enabled && button.controller.hasResources(model) || game.devMode ) {
				while (button.controller.hasResources(model) && amount > 0) {
					model.prices = button.controller.getPrices(model);
					button.controller.payPrice(model);
					button.controller.incrementValue(model);
					counter++;
					amount--;
				}
				if (meta.breakIronWill) {
					game.ironWill = false;
					let liberty = game.science.getPolicy("liberty");
					liberty.calculateEffects(liberty, game);
				}
				if (meta.unlockScheme && meta.val >= meta.unlockScheme.threshold) {
					game.ui.unlockScheme(meta.unlockScheme.name);
				}
				if (meta.unlocks) {game.unlock(meta.unlocks);}
				if (meta.upgrades) {
					if (meta.updateEffects) {
						meta.updateEffects(meta, game);
					}
					cacheUpgrades(meta.upgrades);
					//game.upgrade(meta.upgrades);
				}
			}
			return counter;
		},
		getPriceRatio: function (data, source) {
			let ratio = (data.stages) ? (data.priceRatio || data.stages[data.stage].priceRatio) : data.priceRatio;

			let ratioDiff = 0;
			if (source === 'bonfire') {
				ratioDiff = game.getEffect(data.name + "PriceRatio") +
					game.getEffect("priceRatio") +
					game.getEffect("mapPriceReduction");

				ratioDiff = game.getLimitedDR(ratioDiff, ratio - 1);
			}
			return ratio + ratioDiff;
		},
		singleBuildPossible: function (data, prices, priceRatio, source) {
			let pricesDiscount = game.getLimitedDR(game.getEffect(data.name + "CostReduction"), 1);
			let priceModifier = 1 - pricesDiscount;
			for (let price in prices) {
				let Res = prices[price];
				let name = Res.name;
				let resPriceDiscount = game.getLimitedDR(game.getEffect(name + "CostReduction"), 1);
				let resPriceModifier = 1 - resPriceDiscount;
				let rightPrice = Res.val * priceModifier * resPriceModifier;
				if (data.name === 'cryochambers' && name === 'karma') {
					rightPrice *= (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
				}
				if (source === 'space' && name === 'oil') {
					rightPrice *= (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
					priceRatio = 1.05;
				}
				let resValue = this.craftManager.getValueAvailable(name, true);
				if (source === 'time' && name === 'timeCrystal') {
					resValue -= 300;
				}
				if (resValue < rightPrice * Math.pow(priceRatio, data.val)) {return false;}
			}
			return true;
		}
	};

	// Trading Manager
	// ===============

	let TradeManager = function () {
		this.craftManager = new CraftManager();
		this.manager = new TabManager('Trade');
	};

	TradeManager.prototype = {
		craftManager: undefined,
		manager: undefined,
		trade: function (name, amount) {
			if (!name || amount < 1) {warning(name + '-' + amount + '贸易可能出点问题');}

			let race = this.getRace(name);
			let button = this.getTradeButton(race.name);
			let leader = (options.auto.cache.trait['merchant']) ? '商人小猫与 ' : '小猫与 ';

			if (!button.model.enabled) {
				return button.controller.updateEnabled(button.model);
			}
			if (name !== 'sharks' && !options.auto.trade.items[name].enabled) {warning('贸易可能出点问题');}

			game.diplomacy.tradeMultiple(race, amount);
			game.stats.getStat("totalClicks").val += 1;
			storeForSummary(leader + ' ' + race.title, amount, 'trade');
			iactivity('act.trade', [game.getDisplayValueExt(amount), leader + ucfirst(race.title)], 'tradeFilter');
		},
		getProfitability: function (name) {
			let tick, doTrade;
			let race = this.getRace(name);
			let solar = Religion.getSolarRevolutionRatio();
			if (name === 'leviathans') {
				// if (game.time.getCFU("ressourceRetrieval").val && resPercent('unobtainium') > 0.6) {return true;}
				let a = resMap['relic'].value < (solar > 0) * 5 || resMap['timeCrystal'].value < 200 * (1 + 50 * game.getEffect('shatterTCGain'));
				if (a) {return true;}
			}
			let materials = this.getMaterials(name);
			let cost = 0;
			let rrTrade = false;

			let season = game.calendar.season;
			let geodesy = Workshop.get("geodesy").researched;

			for (let mat in materials) {
				if (mat === 'ivory') {continue;}
				tick = this.craftManager.getTickVal(this.craftManager.getResource(mat), rrTrade);
				if (name === 'zebras') {
					if (geodesy) {
						if (season === 1) {
							if (resMap['ship'].value > 460) {
								tick *= 1.04;
							} else {
								tick *= 0.8;
							}
						} else {
							if (resMap['ship'].value < 300 || solar < 0.2) {
								tick *= 0.2;
							}
							if (season === 3) {
								tick *= 0.01;
							}
						}
					} else {
						if (solar > 0.03 && solar < 0.5 && resMap['titanium'].value < 250 && season !== 3) {
							tick *= 1.04;
						}
						if (solar) {
							if (season !== 1) {
								tick *= 0.2;
							} else if (season > 2) {
								tick *= 0.2;
							}
						}
					}
				}
				if (tick <= 0) {
					if (name === 'leviathans' && mat === 'gold') {continue;}
					return false;
				}
				cost += materials[mat] / tick;
			}
			let output = this.getAverageTrade(race);
			let profit = 0;
			for (let prod in output) {
				let res = resMap[prod];
				tick = this.craftManager.getTickVal(res);
				if (tick === 'ignore' || !tick) {continue;}
				if (prod === 'catnip') {
					if (resPercent('catnip') > 0.1 + 0.1 * geodesy - 0.05 * (season < 2)) {
						continue;
					}
				}
				if (tick < 0) {doTrade = true;}
				profit += (res.maxValue > 0) ? Math.min(output[prod], Math.max(res.maxValue - res.value, 0)) / tick : output[prod] / tick;
			}
			let prof = true;
			let spice = resMap['spice'].value + 100 * game.getResourcePerTick('spice', true) < 0;
			let titaniumTri = resPercent('titanium');
			let titanium = resMap['titanium'];
			let titaniumVal = titanium.value;
			if (name === 'nagas') {
				if (!resMap['concrate'].unlocked && !game.ironWill) {prof = false;}
				if (race.embassyLevel < 10 && !game.ironWill) {return false;}
				let production = 1 + game.prestige.getParagonProductionRatio();
				if (spice && production < 1) {prof = true;}
				let Val = resMap['concrate'].value;
				if (Val < 100 * production * (1 + solar + 10 * (titaniumVal > 1e4)) && race.embassyLevel > 10 && Val && (resMap['titanium'].value > 30 * production || (spice && game.calendar.festivalDays) || Val < 50)) {doTrade = true;}
				if (geodesy && !Religion.getRU("basilica").on && resMap['faith'].value > 0) {return false;}
				if (Val > 250 * (1 + solar) * production * (1 + solar) && titaniumTri < 0.8 && resMap['slab'].value > 3e3) {prof = false;}
			}
			if (name === 'griffins') {
				if (!game.getEffect('standingRatio') && resMap['blueprint'].value > 2 && !resMap['paragon'].value) {return false;}
				if (season === 2) {
					if (resMap['iron'].value < 1200 && resMap['gold'].value > 100 + 600 * game.getEffect('priceRatio') && !game.science.get('theology').researched && game.getEffect('priceRatio') > -0.05 && resPercent('iron') < 0.9) {doTrade = true;}
					if (titaniumVal < 500 && solar > 1.3 && solar) {prof = false;}
					if (game.challenges.isActive("blackSky") && titaniumVal < 500 && Religion.getRU("basilica").on) {doTrade = true;}
					// 缺铁贸易狮鹫
					if (resMap['steel'].value > 5 * resMap['plate'].value && titaniumVal > 500) {doTrade = true;}
					if (geodesy && !Religion.getRU("basilica").on && resMap['faith'].value > 0) {return false;}
				} else {
					if (resMap['ship'].value && (resMap['ship'].value > 200 || game.getEffect("productionRatio"))) {prof = false;}
				}
				doTrade = (doTrade || (spice && game.calendar.festivalDays));
			}
			if (name === 'zebras') {
				let calciner = game.bld.getBuildingExt('calciner').meta.val;
				let griffins = options.auto.trade.items.griffins;
				if (griffins.enabled && griffins.autumn && season === 2 && calciner > 2 && prof) {
					let iron = this.craftManager.getTickVal(resMap['iron']);
					let titaniumProfit = Math.min(Math.max(titanium.maxValue - titaniumVal, 0), output['titanium']) / titanium.perTickCached;
					let autumnIron = this.getAverageTrade(this.getRace('griffins'))['iron'] / iron < output['iron'] / iron + titaniumProfit;
					prof = autumnIron && titaniumTri < 0.3;
				}

				let glass = resMap['gold'].value > 200 || (resMap['faith'].value > 40 && Religion.faith > 1e4);
				if (glass && !Religion.getRU("stainedGlass").on && solar) {return;}
				let basilica = Religion.getRU("basilica").on;
				if (basilica) {
					if (titaniumVal < 30 || options.auto.cache.resUpg['alloy'] < 1e3) {
						doTrade = true;
					}
				} else {
					if (calciner && solar > 3.5) {
						prof = false;
					}
				}
				if (season === 1) {
					if (geodesy && resPercent('titanium') < 0.5 && resMap['slab'].value > 1e4) {doTrade = true;}
					let shipVal = resMap['ship'].value;
					if (shipVal > 40) {
						if (titaniumVal < 5 && resMap['science'].maxValue < 55e3) {doTrade = true;}
						if (resMap['ship'].value > 240) {
							if (resMap['steel'].value > resMap['plate'].value || titaniumTri < 0.5) {doTrade = true;}
						}
					}
				}
				if (geodesy) {
					if (solar && !basilica || (calciner === 1 && resMap['ship'].value < 243 && titaniumVal > 500 && season !== 1)) {return false;}
					// 待定采矿钻
					let cal = game.getEffect('calcinerRatio');
					if ((cal && cal < 2.7) || this.craftManager.getUnResearched("concreteHuts") || (game.getEffect('productionRatio')
						&& titaniumVal * 1.35 < resMap['plate'].value && resPercent('titanium') < 0.93)
						|| (resPercent('iron') < 0.2 && calciner > 1)) {
						doTrade = true;
					}
				}
				if (titaniumVal && !this.craftManager.getValueAvailable('titanium', true) && season !== 3) {doTrade = true;}
				if (!Workshop.get('caravanserai').researched && solar < 4 && output['titanium'] < 1) {return false;}
				doTrade = (doTrade || (spice && game.calendar.festivalDays));
			}
			if (name === 'spiders') {
				if (season === 2) {
					prof = titaniumTri > 0.4;
				} else {
					prof = titaniumTri > 0.5 && resPercent('coal') < 0.5;
				}
				if (season === 3) {prof = titaniumTri > 0.9 && resPercent('coal') < 0.5 && resPercent('gold') > 0.95;}
				if (!doTrade) {
					let production = game.prestige.getParagonProductionRatio() + 1;
					let coal = resPercent('coal') < 1 && resMap['steel'].value < 0.8 * production * resMap['plate'].value;
					doTrade = coal && titanium.value > 600 * (1 + solar) * production && resMap['iron'].value > 1e4 + 1e4 * solar;
					if (!prof && !doTrade) {doTrade = game.challenges.isActive('atheism') && race.embassyLevel > 4;}
				}
				if (resMap['scaffold'].value < 7000 + 7e3 * solar) {return false;}
			}
			if (name === 'dragons') {
				let unlocked = game.science.get('nanotechnology').researched;
				prof = (game.space.getProgram('centaurusSystemMission').on && titaniumTri > 0.5) || (unlocked && resPercent('uranium') < 0.35 && resPercent('iron') > 0.1) || (resMap['ship'].value > 200 && !solar);
				doTrade = doTrade && unlocked && resMap['titanium'].value > 5e3 * solar;
			}
			if (name === 'sharks') {
				if (game.prestige.getParagonProductionRatio() > 2 && !resMap['titanium'].value && resMap['furs'].value) {return false;}
			}
			return doTrade || (cost <= profit && prof);
		},
		getAverageTrade: function (race) {
			// standingRatio
			let standRat = game.getEffect("standingRatio") + game.diplomacy.calculateStandingFromPolicies(race.name, game);
			// raceRatio
			let rRatio = 1 + race.energy * 0.02;
			// tradeRatio
			let tRatio = 1 + game.diplomacy.getTradeRatio() + game.diplomacy.calculateTradeBonusFromPolicies(race.name, game) + game.challenges.getChallenge("pacifism").getTradeBonusEffect(game);
			let failedRat = (race.standing < 0) ? (race.standing + standRat) : 0;
			let successRat = (failedRat < 0) ? (1 + failedRat) : 1;
			let bonusRat = (race.standing > 0) ? Math.min(race.standing + standRat / 2, 1) : 0;

			let output = {};
			for (let item of race.sells) {
				if (!this.isValidTrade(item, race)) {continue;}
				let tradeChance = (item.minLevel) ? item.chance * (1 + game.getLimitedDR(0.01 * race.embassyLevel, 0.75)) : item.chance;
				let sRatio = (item.seasons) ? 1 + item.seasons[game.calendar.getCurSeason().name] : 1;
				let normBought = (successRat - bonusRat) * Math.min(tradeChance, 1);
				let normBonus = bonusRat * Math.min(tradeChance, 1);
				let mean = (normBought + 1.25 * normBonus) * item.value * rRatio * sRatio * tRatio;
				output[item.name] = mean;
			}
			if (race.name === "zebras") {
				let shipCount = resMap["ship"].value;
				let zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
				let titanProb = Math.min(0.15 + shipCount * 0.0035, 1);
				output["titanium"] = (1.5 + shipCount * 0.03) * (1 + zebraRelationModifierTitanium) * titanProb * successRat;
				if (Religion.getSolarRevolutionRatio() < 1 && shipCount < 50 && game.getEffect('titaniumPerTickAutoprod') < 0.003) {output["titanium"] *= 0.5;}
			}

			let spiceChance = (race.embassyPrices) ? 0.35 * (1 + 0.01 * race.embassyLevel) : 0.35;
			let spiceTradeAmount = successRat * Math.min(spiceChance, 1);
			output['spice'] = 25 * spiceTradeAmount + 50 * spiceTradeAmount * tRatio / 2;

			output['blueprint'] = 0.1 * successRat;

			return output;
		},
		isValidTrade: function (item, race) {
			return (!(item.minLevel && race.embassyLevel < item.minLevel)
				&& (resMap[item.name].unlocked || item.name === 'titanium' || item.name === 'uranium' || race.name === 'leviathans'));
		},
		getLowestTradeAmount: function (name, limited, trigConditions) {
			let total, amount, highestCapacity, i;
			let materials = this.getMaterials(name);
			let race = this.getRace(name);

			for (i in materials) {
				if (i === "manpower") {
					total = this.craftManager.getValueAvailable(i, true) / materials[i];
				} else {
					total = this.craftManager.getValueAvailable(i, !limited, options.auto.trade.trigger) / materials[i];
				}

				amount = (amount === undefined || total < amount) ? total : amount;
			}

			amount = Math.floor(amount);

			if (amount === 0) {return 0;}

			if (race === null || options.auto.trade.items[name].allowCapped) {return amount;}

			let plateMore = resMap['plate'].value > resMap['steel'].value || !trigConditions;

			// Loop through the items obtained by the race, and determine
			// which good has the most space left. Once we've determined this,
			// reduce the amount by this capacity. This ensures that we continue to trade
			// as long as at least one resource has capacity, and we never over-trade.

			let tradeOutput = this.getAverageTrade(race);
			let sells = race.sells;
			for (let s in sells) {
				let item = sells[s].name;
				let resource = this.craftManager.getResource(item);

				// No need to process resources that don't cap
				if (!resource.maxValue) {continue;}

				let max = tradeOutput[item];
				let factor = (plateMore || item !== 'iron') ? 1 : 0;
				let capacity = Math.max((resource.maxValue - resource.value - Math.max(0, factor * (options.interval / 200 + 2) * resource.perTickCached)) / max, 0);
				highestCapacity = (capacity < highestCapacity) ? highestCapacity : capacity;
			}

			// We must take the ceiling of capacity so that we will trade as long
			// as there is any room, even if it doesn't have exact space. Otherwise,
			// we seem to starve trading altogether.
			highestCapacity = Math.ceil(highestCapacity);

			if (highestCapacity === 0) {return 0;}

			// Now that we know the most we *should* trade for, check to ensure that
			// we trade for our max cost, or our max capacity, whichever is lower.
			// This helps us prevent trading for resources we can't store. Note that we
			// essentially ignore blueprints here. In addition, if highestCapacity was never set,
			// then we just

			amount = (highestCapacity < amount) ? Math.max(highestCapacity - 1, 1) : amount;

			return Math.floor(amount);
		},
		getMaterials: function (name) {
			let modifier = (game.challenges.isActive("postApocalypse")) ? game.bld.getPollutionLevel() : 1;
			let materials = {
				manpower: modifier * (50 - game.getEffect("tradeCatpowerDiscount")),
				gold: modifier * (15 - game.getEffect("tradeGoldDiscount"))
			};

			if (name === undefined) {return materials;}

			let prices = this.getRace(name).buys;

			for (const i in prices) {
				let price = prices[i];

				materials[price.name] = price.val;
			}

			return materials;
		},
		getRace: function (name) {
			if (name === undefined) {return null;} else {return game.diplomacy.get(name);}
		},
		getTradeButton: function (race) {
			for (let i in this.manager.tab.racePanels) {
				let panel = this.manager.tab.racePanels[i];

				if (panel.race.name === race) {return panel.tradeBtn;}
			}
		},
		singleTradePossible: function (name) {
			let materials = this.getMaterials(name);
			for (let mat in materials) {
				if (this.craftManager.getValueAvailable(mat, true) < materials[mat]) {return false;}
			}
			return true;
		}
	};

	// Cache Manager
	// ===============

	let CacheManager = function () {};

	CacheManager.prototype = {
		pushToCache: function (data) {
			let cacheSum = options.auto.cache.cacheSum;
			let materials = data['materials'];
			for (let mat in materials) {
				if (!cacheSum[mat]) {cacheSum[mat] = 0;}
				cacheSum[mat] += materials[mat];
			}
		},
		getResValue: function (res) {
			let cache = options.auto.cache;
			let dataTimer = cache.dataTimer;
			let cacheSum = cache.cacheSum;
			if (!cacheSum[res]) {return 0;}
			let startingTick = dataTimer.ticksTotal;
			let currentTick = game.timer.ticksTotal;
			let value = cacheSum[res] / (currentTick - startingTick);

			return value;
		},
	};

	// ==============================
	// Configure overall page display
	// ==============================

	// 插入cssRule
	let addRule = function (rule) {
		const sheets = document.styleSheets;
		sheets[0].insertRule(rule, 0);
	};
	 {
		let defaultSelector = 'body[data-ks-style]:not(.scheme_sleek)';

		addRule('body {' // low priority. make sure it can be covered by the theme
			+ 'font-family: inherit;'
			+ 'font-size: inherit;'
			+ '}');

		addRule(defaultSelector + ' #game {'
			// + 'font-family: monospace;'
			// + 'font-size: 12px;'
			+ 'min-width: 1300px;'
			+ 'top: 32px;'
			+ '}');

		// addRule(defaultSelector + ' {'
		//     + 'font-family: monospace;'
		//     + 'font-size: 12px;'
		//     + '}');

		addRule(defaultSelector + ' .column {'
			+ 'min-height: inherit;'
			+ 'max-width: inherit !important;'
			+ 'padding: 1%;'
			+ 'margin: 0;'
			+ 'overflow-y: auto;'
			+ '}');

		addRule(defaultSelector + ' #leftColumn {'
			+ 'height: 92%;'
			+ 'width: 26%;'
			+ '}');

		addRule(defaultSelector + ' #midColumn {'
			// + 'margin-top: 1% !important;'
			+ 'height: 90%;'
			+ 'width: 49%;'
			+ '}');

		addRule(defaultSelector + ' #rightColumn {'
			+ 'overflow-y: auto;'
			+ 'height: 92%;'
			+ 'width: 19%;'
			+ 'top: 5px;'
			+ 'font-size: 12px;'
			+ 'font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;'
			+ '}');

		addRule('body #gamePageContainer #game #rightColumn {'
			+ 'overflow-y: auto;'
			+ '}');

		// addRule(defaultSelector + ' #gameLog .msg {'
		//     + 'display: block;'
		//     + '}');

		addRule(defaultSelector + ' #gameLog {'
			+ 'overflow-y: hidden !important;'
			+ 'width: 100% !important;'
			+ 'padding-top: 5px !important;'
			+ '}');

		addRule(defaultSelector + ' #resContainer .maxRes {'
			+ 'color: #676766;'
			+ '}');

		addRule(defaultSelector + ' #game .btn {'
			+ 'border-radius: 0px;'
			+ 'font-family: monospace;'
			+ 'font-size: 12px !important;'
			+ 'margin: 0 5px 7px 0;'
			+ 'width: 290px;'
			+ '}');

		addRule(defaultSelector + ' #game .map-viewport {'
			+ 'height: 340px;'
			+ 'max-width: 500px;'
			+ 'overflow: visible;'
			+ '}');

		addRule(' #game .map-dashboard {'
			+ 'height: 120px;'
			+ 'width: 292px;'
			+ '}');

		addRule('#ks-options ul {'
			+ 'list-style: none;'
			+ 'margin: 0 0 5px;'
			+ 'padding: 0;'
			+ '}');

		addRule('#ks-options ul:after {'
			+ 'clear: both;'
			+ 'content: " ";'
			+ 'display: block;'
			+ 'height: 0;'
			+ '}');

		addRule('#ks-options ul li {'
			+ 'display: block;'
			+ 'float: left;'
			+ 'width: 100%;'
			+ '}');

		addRule('#ks-options #toggle-list-resources .stockWarn *,'
			+ '#ks-options #toggle-reset-list-resources .stockWarn * {'
			+ 'color: ' + options.stockWarnColor + ';'
			+ '}');

		addRule('.right-tab {'
			+ 'height: unset !important;'
			+ '}');
	}

	// Local Storage
	// =============

	let kittenStorageVersion = 3;

	let kittenStorage;
	let resetKittenStorage = () => {
		kittenStorage = {
			version: kittenStorageVersion,
			toggles: {},
			items: {},
			resources: {},
			triggers: {},
			reset: {
				reset: false,
				times: 0,
				paragonLastTime: 0,
				paragonTotal: 0,
				karmaLastTime: 0,
				karmaTotal: 0
			},
			policies: []
		};
	};
	resetKittenStorage();

	let toggles = ['build','space','craft','upgrade','trade','faith','time','timeCtrl','distribute','options','filter'];
	let initializeKittenStorage = function () {
		toggles.forEach((name) => {
			$("#items-list-" + name).find("input[id^='toggle-']").each(function () {
				let dom = $(this);
				if (dom.attr("type") !== 'radio') {
					kittenStorage.items[dom.attr("id")] = dom.prop("checked");
				}
			});
		});
		kittenStorage.items['toggle-leaderJob-woodcutter'] = true;
		kittenStorage.items['toggle-leaderTrait-manager'] = true;

		if (!game.ironWill) {
			if (game.stats.getStat("totalResets").val > 1) {game.msg('注意：非钢铁意志模式，故勾上了喵喵建筑', 'alert');}
			['hut', 'logHouse', 'mansion'].forEach((name) => {
				if (!options.auto.build.items[name].enabled) {$('#toggle-' + name).click();}
			});
		}

		saveToKittenStorage();
	};

	let saveToKittenStorage = function () {
		kittenStorage.toggles = {
			build: options.auto.build.enabled,
			space: options.auto.space.enabled,
			craft: options.auto.craft.enabled,
			upgrade: options.auto.upgrade.enabled,
			trade: options.auto.trade.enabled,
			faith: options.auto.faith.enabled,
			time: options.auto.time.enabled,
			timeCtrl: options.auto.timeCtrl.enabled,
			distribute: options.auto.distribute.enabled,
			options: options.auto.options.enabled,
			filter: options.auto.filter.enabled
		};
		kittenStorage.resources = options.auto.resources;
		kittenStorage.triggers = {
			faith: options.auto.faith.trigger,
			time: options.auto.time.trigger,
			build: options.auto.build.trigger,
			space: options.auto.space.trigger,
			craft: options.auto.craft.trigger,
			trade: options.auto.trade.trigger
		};
		kittenStorage.policies = options.policies;

		localStorage['cbc.kitten-scientists'] = JSON.stringify(kittenStorage);
	};

	let loadFromKittenStorage = function () {
		let saved = JSON.parse(localStorage['cbc.kitten-scientists'] || 'null');
		if (!saved || saved.version > kittenStorageVersion) {
			let msg = game.msg('你只需要勾需要的大项目，项目内max和启用Cheney已经帮你精心勾选好了<br>要对大家...保密哦🤍 <br>如需不知道点什么政策 升级里可以勾选自动推荐政策<br>默认设置可以一直以最快速度用到毕业<br>已经勾选的项目都已经是自动化了');
			$(msg.span).css('color', "#ff589c");
			return initializeKittenStorage();
		}

		if (saved.version === 1) {
			saved.version = 2;
			saved.reset = {
				reset: false,
				times: 0,
				paragonLastTime: 0,
				paragonTotal: 0,
				karmaLastTime: 0,
				karmaTotal: 0
			};
		}

		if (saved.version === 2) {
			saved.version = 3;
			saved.policies = [];
		}

		if (saved.version === kittenStorageVersion) {
			kittenStorage = saved;
			let el;
			if (saved.toggles) {
				for (const toggle in saved.toggles) {
					if (toggle !== 'engine' && options.auto[toggle]) {
						options.auto[toggle].enabled = !!saved.toggles[toggle];
						el = $('#toggle-' + toggle);
						el.prop('checked', options.auto[toggle].enabled);
					}
				}
			}

			for (const item in kittenStorage.items) {
				let value = kittenStorage.items[item];
				el = $('#' + item);
				let option = el.data('option');
				let name = item.split('-');

				if (option === undefined) {
					delete kittenStorage.items[item];
					continue;
				}

				if (name[0] === 'set') {
					el[0].title = value;
					if (name[name.length - 1] === 'max') {
						el.text(i18n('ui.max', [value]));
					} else if (name[name.length - 1] === 'min') {
						el.text(i18n('ui.min', [value]));
					}
				} else {
					el.prop('checked', value);
				}

				if (name.length === 2) {
					option.enabled = value;
				} else if (name[1] === 'reset' && name.length >= 4) {
					let type = name[2];
					let itemName = name[3];
					switch (name[0]) {
						case 'toggle':
							options.auto[type].items[itemName].checkForReset = value;
							break;
						case 'set':
							options.auto[type].items[itemName].triggerForReset = value;
							break;
					}
				} else {
					if (name[1] === 'limited') {
						option.limited = value;
					} else if (name[1] === 'leaderJob' && value) {
						option[name[1]] = name[2];
					} else if (name[1] === 'leaderTrait'&& value) {
						option[name[1]] = name[2];
					} else {
						option[name[2]] = value;
					}
				}
			}

			let resourcesList = $("#toggle-list-resources");
			let resetList = $("#toggle-reset-list-resources");
			for (const resource in kittenStorage.resources) {
				let res = kittenStorage.resources[resource];

				if (res.enabled) {
					if ($('#resource-' + resource).length === 0) {resourcesList.append(addNewResourceOption(resource, undefined));}
					if ('stock' in res) {setStockValue(resource, res.stock);}
					if ('consume' in res) {setConsumeRate(resource, res.consume);}
				}
				if (res.checkForReset) {
					if ($('#resource-reset-' + resource).length === 0) {resetList.append(addNewResourceOption(resource, undefined, true));}
					if ('stockForReset' in res) {setStockValue(resource, res.stockForReset ? res.stockForReset : Infinity, true);}
				}
			}

			if (saved.triggers) {
				options.auto.faith.trigger = saved.triggers.faith;
				options.auto.time.trigger = saved.triggers.time;
				options.auto.build.trigger = saved.triggers.build;
				options.auto.space.trigger = saved.triggers.space;
				options.auto.craft.trigger = saved.triggers.craft;
				options.auto.trade.trigger = saved.triggers.trade;

				$('#trigger-faith')[0].title = options.auto.faith.trigger;
				$('#trigger-time')[0].title = options.auto.time.trigger;
				$('#trigger-build')[0].title = options.auto.build.trigger;
				$('#trigger-space')[0].title = options.auto.space.trigger;
				$('#trigger-craft')[0].title = options.auto.craft.trigger;
				$('#trigger-trade')[0].title = options.auto.trade.trigger;
			}
			options.policies = saved.policies;
		}
	};

	let ucfirst = function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	let roundToTwo = function (n) {
		return +(Math.round(+(n + "e+2")) + "e-2");
	};

	// css
	let Css = {
		cursor:'pointer',
		display:'inline-block',
		float: 'right',
		paddingRight:'5px',
		textShadow:'3px 3px 4px gray'
	};
	// 工艺 资源
	let setStockWarning = function(name, value, forReset = false) {
		// simplest way to ensure it doesn't stick around too often; always do
		// a remove first then re-add only if needed
		let path = forReset ? '#resource-reset-' + name : '#resource-' + name;
		$(path).removeClass("stockWarn");

		let maxValue = game.resPool.resources.filter(i => i.name === name)[0].maxValue;
		if ((value > maxValue && !(maxValue === 0)) || value === Infinity) {$(path).addClass("stockWarn");}
	};

	let setStockValue = function (name, value, forReset = false) {
		let path;
		let n = Number(value);

		if (isNaN(n) || n < 0) {
			warning('ignoring non-numeric or invalid stock value ' + value);
			return;
		}

		if (!options.auto.resources[name]) {options.auto.resources[name] = {};}
		if (forReset) {
			path = '#resource-reset-' + name + ' #stock-value-' + name;
			n = n < 0 ? Infinity : n;
			options.auto.resources[name].checkForReset = true;
			options.auto.resources[name].stockForReset = n;
		} else {
			path = '#resource-' + name + ' #stock-value-' + name;
			options.auto.resources[name].enabled = true;
			options.auto.resources[name].stock = n;
		}
		$(path).text(i18n('resources.stock', [n === Infinity ? '∞' : game.getDisplayValueExt(n)]));

		setStockWarning(name, n, forReset);
	};

	let setConsumeRate = function (name, value) {
		let n = parseFloat(value);

		if (isNaN(n) || n < 0.0 || n > 1.0) {
			warning('ignoring non-numeric or invalid consume rate ' + value);
			return;
		}

		if (!options.auto.resources[name]) {options.auto.resources[name] = {};}
		options.auto.resources[name].consume = n;
		$('#consume-rate-' + name).text(i18n('resources.consume', [n.toFixed(2)]));
	};

	let removeResourceControl = function (name, forReset = false) {
		let opt = options.auto.resources[name];
		if (forReset) {opt.checkForReset = false;} else {opt.enabled = false;}

		if (!opt.enabled && !opt.checkForReset) {delete options.auto.resources[name];}
	};

	let addNewResourceOption = function (name, title, forReset = false) {
		let stock;
		let Res = resMap[name];
		title = title || Res.title || ucfirst(name);
		let res = options.auto.resources[name];
		if (forReset && res && res.stockForReset) {
			stock = res.stockForReset;} else if (!forReset && res && res.stock) {
			stock = res.stock;} else {
			stock = 0;}
		let consume = res && (res.consume !== undefined) ? res.consume : options.consume;

		let container = $('<div/>', {
			id: (forReset ? 'resource-reset-' : 'resource-') + name,
			css: {display: 'inline-block', width: '100%'},
		});

		let Color;
		if (Res.type === "uncommon") {Color = "#FF7F50";}
		if (Res.type === "rare") {Color = "#FFA500";}
		Color = Res.color || Color;
		let label = $('<div/>', {
			id: 'resource-label-' + name,
			text: title,
			css: {display: 'inline-block', color: Color, width: '95px'},
		});

		stock = $('<div/>', {
			id: 'stock-value-' + name,
			text: i18n('resources.stock', [stock === Infinity ? '∞' : game.getDisplayValueExt(stock)]),
			css: {cursor: 'pointer', display: 'inline-block', width: '80px'},
		});

		consume = $('<div/>', {
			id: 'consume-rate-' + name,
			text: i18n('resources.consume', [consume.toFixed(2)]),
			css: {cursor: 'pointer', display: 'inline-block'},
		});

		let del = $('<div/>', {
			id: 'resource-delete-' + name,
			text: i18n('resources.del'),
			css: Css
		});

		if (forReset) {container.append(label, stock, del);} else {container.append(label, stock, consume, del);}

		// once created, set color if relevant
		if (res !== undefined && res.stock !== undefined) {setStockWarning(name, res.stock);}

		(function (stock, forReset) {
			stock.on('click', function () {
				engine.stop(false);
				let value = window.prompt(i18n('resources.stock.set', [title]));
				if (options.auto.engine.enabled) {
					engine.start(false);
				}
				if (value !== null) {
					setStockValue(name, value, forReset);
					saveToKittenStorage();
				}
			});
		})(stock, forReset);

		consume.on('click', function () {
			engine.stop(false);
			let value = window.prompt(i18n('resources.consume.set', [title]));
			if (options.auto.engine.enabled) {
				engine.start(false);
			}
			if (value !== null) {
				setConsumeRate(name, value);
				saveToKittenStorage();
			}
		});

		(function (del, forReset) {
			del.on('click', function () {
				if (title === '毛皮') {return;}
				if (window.confirm(i18n('resources.del.confirm', [title]))) {
					container.remove();
					removeResourceControl(name, forReset);
					saveToKittenStorage();
				}
			});
		})(del, forReset);

		return container;
	};

	// ui 设置
	let ksUi = true;
	if (ksUi) {
		let autoI18nLabel = true;
		if (autoI18nLabel) {
			['workshopTab', 'libraryTab', 'villageTab'].forEach((tab) => {
				if (game[tab] && game.ui.activeTabId !== game[tab].tabId && !game[tab]._inherited) {
					game[tab].render();
				}
			});
			let iOpt = () => {
				let buildOption, spaceOption, build, buildItem;
				// Grab button labels for religion options
				let religionM = new ReligionManager();
				let items = options.auto.faith.items;
				for (buildOption in items) {
					buildItem = items[buildOption];
					build = religionM.getBuild(buildItem.name || buildOption, buildItem.variant);
					if (build) {
						items[buildOption].label = build.label;
					}
				}

				// Grab button labels for time options
				let timeM = new TimeManager();
				items = options.auto.time.items;
				for (buildOption in items) {
					buildItem = items[buildOption];
					build = timeM.getBuild(buildItem.name || buildOption, buildItem.variant);
					if (build) {
						items[buildOption].label = build.label;
					}
				}

				// Grab button labels for build options
				let buildM = new BuildManager();
				items = options.auto.build.items;
				for (buildOption in items) {
					buildItem = items[buildOption];
					build = buildM.getBuild(buildItem.name || buildOption);
					if (build) {
						if ("stage" in buildItem) {
							items[buildOption].label = build.meta.stages[buildItem.stage].label;
						} else {
							items[buildOption].label = build.meta.label;
						}
					}
				}

				// Grab button labels for space options
				let spaceM = new SpaceManager();
				items = options.auto.space.items;
				for (spaceOption in items) {
					build = spaceM.getBuild(spaceOption);
					if (build) {
						let title = build.title ? build.title : build.label;
						items[spaceOption].label = title;
					}
				}
			};
			iOpt();
			iOpt = null;
		}

		let getAvailableResourceOptions = function (forReset) {
			let items = [];
			let idPrefix = forReset ? '#resource-reset-' : '#resource-';
			let Res = game.resPool.resources;
			let Resources = options.auto.resources;
			let Filter = ['elderBox','burnedParagon','blackcoin','gflops','hashrates','wrappingPaper','kittens','paragon','alicorn','zebras'];
			for (let i in Res) {
				let res = Res[i];
				let name = res.name;
				let autoRes = Resources[name];
				autoRes = autoRes && autoRes.enabled;
				if (!forReset && (Filter.indexOf(res.name) > -1 || autoRes)) {continue;}
				// Show only new resources that we don't have in the list and that are
				// visible. This helps cut down on total size.
				if (name && $(idPrefix + name).length === 0) {
					let Color;
					if (res.type === "uncommon") {Color = "#FF7F50";}
					if (res.type === "rare") {Color = "#FFA500";}
					Color = res.color || Color;
					let item = $('<div/>', {
						id: 'resource-add-' + name,
						text: ucfirst(res.title ? res.title : name),
						css: {cursor: 'pointer', color: Color},
					});

					// Wrapper function needed to make closure work
					(function (res, item, forReset) {
						item.on('click', function () {
							item.remove();
							if (!Resources[name]) {Resources[name] = {};}
							if (forReset) {
								Resources[name].checkForReset = true;
								Resources[name].stockForReset = Infinity;
								$('#toggle-reset-list-resources').append(addNewResourceOption(name, res.title, forReset));

							} else {
								Resources[name].enabled = true;
								Resources[name].stock = 0;
								Resources[name].consume = options.consume;
								$('#toggle-list-resources').append(addNewResourceOption(name, res.title, forReset));
							}
							saveToKittenStorage();
						});
					})(res, item, forReset);

					items.push(item);
				}
			}

			return items;
		};

		let getResourceOptions = function (forReset = false) {
			let list = $('<ul/>', {
				id: forReset ? 'toggle-reset-list-resources' : 'toggle-list-resources',
				css: {display: 'none', paddingLeft: '20px'}
			});

			let add = $('<div/>', {
				id: 'resources-add',
				text: i18n('resources.add'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					textShadow: '3px 3px 4px gray',
					borderBottom: '1px solid rgba(185, 185, 185, 0.7)' },
			});

			let allResources = $('<ul/>', {
				id: 'available-resources-list',
				css: {display: 'none', paddingLeft: '20px'}
			});

			(function (add, forReset) {
				add.on('click', function () {
					allResources.toggle();
					allResources.empty();
					if (allResources[0].style.display !== 'none') {
						getAvailableResourceOptions(forReset).forEach(element=>{allResources.append(element);});
					}
				});
			})(add, forReset);

			if (forReset) {list.append(add, allResources);} else {list.append(add, allResources);}

			// Add all the current resources
			for (let name in options.auto.resources) {
				let res = options.auto.resources[name];
				if ((forReset && res.checkForReset) || (!forReset && res.enabled)) {list.append(addNewResourceOption(name, undefined, forReset));}
			}

			return list;
		};

		let getOptionHead = function (toggleName) {
			let list = $('<ul/>', {
				id: 'items-list-' + toggleName,
				css: {display: 'none', paddingLeft: '20px'}
			});

			let filter = ['distribute', 'space','time'];
			if (filter.indexOf(toggleName) !== -1) {return list;}
			let disableAll = $('<div/>', {
				id: 'toggle-all-items-' + toggleName,
				text: i18n('ui.disable.all'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					textShadow: '3px 3px 4px gray',
					marginRight: '8px'}
			});

			disableAll.on('click', function () {
				// can't use find as we only want one layer of checkboxes
				let items = list.children().children(':checkbox');
				items.prop('checked', false);
				items.change();
				list.children().children(':checkbox').change();
			});

			list.append(disableAll);

			let enableAll = $('<div/>', {
				id: 'toggle-all-items-' + toggleName,
				text: i18n('ui.enable.all'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					textShadow: '3px 3px 4px gray'}
			});

			enableAll.on('click', function () {
				// can't use find as we only want one layer of checkboxes
				let items = list.children().children(':checkbox');
				items.prop('checked', true);
				items.change();
				list.children().children(':checkbox').change();

				if (toggleName === 'filter' && options.auto.filter.items.miscFilter.enabled) {
					$('#toggle-miscFilter').click();
				}
			});

			list.append(enableAll);
			return list;
		};

		let getAdditionOptions = function () {
			let toggleName = 'faith-addition';
			let list = getOptionHead(toggleName);

			let addi = options.auto.faith.addition;
			for (let itemName in addi) {
				let label = addi[itemName];
				let node = getOption(itemName, label);

				if (itemName === 'bestUnicornBuilding') {
					node.children('label').prop('title', i18n('option.faith.best.unicorn.desc'));
					let input = node.children('input');
					input.unbind('change');
					input.on('change', (e) => {
						let bub = addi.bestUnicornBuilding;
						if (e.target.checked && !bub.enabled) {
							bub.enabled = true;
							// enable all unicorn buildings
							//for (var unicornName in options.auto.unicorn.items) {
							//	var building = $('#toggle-' + unicornName);
							//	building.prop('checked', true);
							//	building.trigger('change');
							//}
							imessage('status.sub.enable', [i18n('option.faith.best.unicorn')]);
							imessage('option.faith.best.unicorn.desc');
						} else if (!e.target.checked && bub.enabled) {
							bub.enabled = false;
							imessage('status.sub.disable', [i18n('option.faith.best.unicorn')]);
						}
						kittenStorage.items[e.target.id] = bub.enabled;
						saveToKittenStorage();
					});
				}

				let sub = label.subTrigger;
				if (sub !== undefined) {

					let triggerButton = $('<div/>', {
						id: 'set-' + itemName + '-subTrigger',
						text: i18n('ui.trigger'),
						title: sub,
						css: Css
					}).data('option', label);

					(function (itemName, triggerButton) {
						if (itemName === 'adore' || itemName === 'autoPraise' || itemName === 'tcRefine') {
							triggerButton.on('click', function () {
								let value;
								engine.stop(false);
								value = window.prompt(i18n(itemName + '.trigger.set'), sub + '');
								if (options.auto.engine.enabled) {
									engine.start(false);
								}

								if (value !== null) {
									label.subTrigger = parseFloat(value);
									kittenStorage.items[triggerButton[0].id] = label.subTrigger;
									saveToKittenStorage();
									triggerButton[0].title = label.subTrigger;
								}
							});
						}
					})(itemName, triggerButton);
					node.append(triggerButton);
				}

				list.append(node);
			}

			return list;
		};

		let getToggle = function (toggleName) {
			let list, itemName, toggle, button;
			let itext = ucfirst(i18n('ui.' + toggleName));

			let auto = options.auto[toggleName];
			let element = $('<li/>', {id: 'ks-' + toggleName});

			let label = $('<label/>', {
				'for': 'toggle-' + toggleName,
				text: itext
			});

			let input = $('<input/>', {
				id: 'toggle-' + toggleName,
				type: 'checkbox'
			});

			if (auto.enabled) {
				input.prop('checked', true);
			}

			// engine needs a custom toggle
			if (toggleName !== 'engine') {
				input.on('change', function () {
					if (input.is(':checked') && !auto.enabled) {
						auto.enabled = true;
						if (toggleName === 'filter' || toggleName === 'options') {
							imessage('status.sub.enable', [itext]);
						} else {
							imessage('status.auto.enable', [itext]);
						}
						saveToKittenStorage();
					} else if ((!input.is(':checked')) && auto.enabled) {
						auto.enabled = false;
						if (toggleName === 'filter' || toggleName === 'options') {
							imessage('status.sub.disable', [itext]);
						} else {
							imessage('status.auto.disable', [itext]);
						}
						saveToKittenStorage();
					}
				});
			}

			element.append(input, label);

			if (auto.items) {
				// Add a border on the element
				element.css('borderBottom', '1px  solid rgba(185, 185, 185, 0.7)');

				toggle = $('<div/>', {
					css: {display: 'inline-block', float: 'right'}
				});

				button = $('<div/>', {
					id: 'toggle-items-' + toggleName,
					text: i18n('ui.items'),
					css: Css
				});

				element.append(button);

				list = getOptionHead(toggleName);

				// merge unicorn to faith
				if (toggleName === 'faith') {
					for (itemName in options.auto.unicorn.items) {list.append(getOption(itemName, options.auto.unicorn.items[itemName]));}
				}

				// fill out list with toggle items
				for (itemName in auto.items) {
					switch (toggleName) {
						case 'trade':
							list.append(getTradeOption(itemName, auto.items[itemName]));
							break;
						case 'craft':
							list.append(getCraftOption(itemName, auto.items[itemName]));
							break;
						case 'timeCtrl':
							list.append(getTimeCtrlOption(itemName, auto.items[itemName]));
							break;
						case 'options':
							list.append(getOptionsOption(itemName, auto.items[itemName]));
							break;
						case 'upgrade':
							list.append(getUpgradeOption(itemName, auto.items[itemName]));
							break;
						case 'distribute':
							list.append(getDistributeOption(itemName, auto.items[itemName]));
							break;
						case 'build':
						case 'faith':
						case 'space':
							list.append(getLimitedOption(itemName, auto.items[itemName]));
							break;
						case 'time':
							list.append(getLimitedOption(itemName, auto.items[itemName]));
							break;
						default:
							list.append(getOption(itemName, auto.items[itemName]));
							break;

					}
				}

				button.on('click', function () {
					list.toggle();
				});
			}

			if (auto.trigger !== undefined) {
				let triggerButton = $('<div/>', {
					id: 'trigger-' + toggleName,
					text: i18n('ui.trigger'),
					title: auto.trigger,
					css: Css
				});

				triggerButton.on('click', function () {
					let value;
					engine.stop(false);
					if (toggleName === 'faith') {
						value = window.prompt(i18n('ui.trigger.set', [itext + "(" + $I("resources.faith.title") + ")"]), auto.trigger.toString());
					} else if (toggleName === 'trade') {
						value = window.prompt(i18n('ui.trigger.set', [itext + " 的触发值\n需同时满足 种族触发资源 和 " + $I("resources.gold.title") + " 的"] ), auto.trigger.toString());
					} else {
						value = window.prompt(i18n('ui.trigger.set', [itext]), auto.trigger.toString());
					}
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						auto.trigger = parseFloat(value);
						saveToKittenStorage();
						triggerButton[0].title = auto.trigger;
					}
				});

				element.append(triggerButton);
			}

			if (toggleName === 'craft') {
				// Add resource controls for crafting, sort of hack
				const resources = $('<div/>', {
					id: 'toggle-resource-controls',
					text: i18n('ui.craft.resources'),
					css: Css
				});

				const resourcesList = getResourceOptions();

				// When we click the items button, make sure we clear resources
				button.on('click', function () {
					resourcesList.toggle(false);
				});

				resources.on('click', function () {
					list.toggle(false);
					resourcesList.toggle();
				});

				element.append(resources);
				element.append(resourcesList);
			} else if (toggleName === 'faith') {
				// Add additional controls for faith, sort of hack again
				const addition = $('<div/>', {
					id: 'toggle-addition-controls',
					text: i18n('ui.faith.addition'),
					title: "太阳教团的自动化项目",
					css: Css
				});

				const additionList = getAdditionOptions();

				button.on('click', function () {
					additionList.toggle(false);
				});

				addition.on('click', function () {
					list.toggle(false);
					additionList.toggle();
				});

				element.append(addition);

				// disable auto the best unicorn building when unicorn building was disabled
				for (const unicornName in options.auto.unicorn.items) {
					const ub = list.children().children('#toggle-' + unicornName);
					ub.on('change', function(e) {
						if (!$(e.target).is(':checked')) {
							const b = $('#toggle-bestUnicornBuilding');
							b.prop('checked', false);
							b.trigger('change');
						}
					});
				}

				element.append(additionList);
			}

			if (auto.items) {element.append(toggle, list);}

			return element;
		};

		let getTradeOption = function (name, option) {
			let iname = ucfirst(i18n('$trade.race.' + name));

			let element = getOption(name, option, iname);
			element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

			//Limited Trading
			let label = $('<label/>', {
				'for': 'toggle-limited-' + name,
				title: i18n('trade.limited', [iname]),
				text: i18n('ui.tradeLimit')
			});

			let input = $('<input/>', {
				id: 'toggle-limited-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.limited) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && option.limited === false) {
					option.limited = true;
					imessage('trade.limited', [iname]);
				} else if ((!input.is(':checked')) && option.limited) {
					option.limited = false;
					let require = (option.require) ? '需同时满足资源黄金和' + resMap[option.require].title + '的触发条件才' : '资源满足黄金的触发条件就会';
					imessage('trade.unlimited', [iname, require]);
				}
				kittenStorage.items[input.attr('id')] = option.limited;
				saveToKittenStorage();
			});

			element.append(input, label);
			//Limited Trading End

			let button = $('<div/>', {
				id: 'toggle-seasons-' + name,
				text: i18n('trade.seasons'),
				css: Css
			});

			let list = $('<ul/>', {
				id: 'seasons-list-' + name,
				css: {display: 'none', paddingLeft: '20px'}
			});

			// fill out the list with seasons
			list.append(getSeason(name, 'spring', option));
			list.append(getSeason(name, 'summer', option));
			list.append(getSeason(name, 'autumn', option));
			list.append(getSeason(name, 'winter', option));

			button.on('click', function () {
				list.toggle();
			});

			element.append(button, list);

			return element;
		};

		let getSeason = function (name, season, option) {
			let iname = ucfirst(i18n('$trade.race.' + name));
			let iSeason = ucfirst(i18n('$calendar.season.' + season));

			let element = $('<li/>');

			let label = $('<label/>', {
				'for': 'toggle-' + name + '-' + season,
				text: ucfirst(iSeason)
			});

			let input = $('<input/>', {
				id: 'toggle-' + name + '-' + season,
				type: 'checkbox'
			}).data('option', option);

			if (option[season]) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option[season]) {
					option[season] = true;
					imessage('trade.season.enable', [iname, iSeason]);
				} else if ((!input.is(':checked')) && option[season]) {
					option[season] = false;
					imessage('trade.season.disable', [iname, iSeason]);
				}
				kittenStorage.items[input.attr('id')] = option[season];
				saveToKittenStorage();
			});

			element.append(input, label);

			return element;
		};

		let getSeasonForTimeSkip = function (season, option) {
			let iSeason = ucfirst(i18n('$calendar.season.' + season));

			let element = $('<li/>');

			let label = $('<label/>', {
				'for': 'toggle-timeSkip-' + season,
				text: ucfirst(iSeason)
			});

			let input = $('<input/>', {
				id: 'toggle-timeSkip-' + season,
				type: 'checkbox'
			}).data('option', option);

			if (option[season]) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option[season]) {
					option[season] = true;
					imessage('time.skip.season.enable', [iSeason]);
				} else if ((!input.is(':checked')) && option[season]) {
					option[season] = false;
					imessage('time.skip.season.disable', [iSeason]);
				}
				kittenStorage.items[input.attr('id')] = option[season];
				saveToKittenStorage();
			});

			element.append(input, label);

			return element;
		};

		let getOption = function (name, option, iname) {
			let element = $('<li/>');
			let elementLabel = iname || option.label || ucfirst(name);
			let require = option.require;
			require = (require) ? game.resPool.get(require).title : i18n('ui.none');
			let titleName = i18n('ui.trigger.resource') + ": " + require;
			if (option.require === undefined) {
				titleName = null;
			}

			let label = $('<label/>', {
				'for': 'toggle-' + name,
				text: elementLabel,
				title: titleName,
				css: {display: 'inline-block', minWidth: '80px'}
			});

			let input = $('<input/>', {
				id: 'toggle-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.enabled) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option.enabled) {
					option.enabled = true;
					if (name.indexOf('Filter') > -1) {
						imessage('filter.enable', [elementLabel]);
					} else if (option.misc) {
						imessage('status.sub.enable', [elementLabel]);
					} else {
						imessage('status.auto.enable', [elementLabel]);
						if (name === 'wood') {
							imessage('msg.catnip');
						}
					}
				} else if ((!input.is(':checked')) && option.enabled) {
					option.enabled = false;
					if (name.indexOf('Filter') > -1) {
						imessage('filter.disable', [elementLabel]);
					} else if (option.misc) {
						imessage('status.sub.disable', [elementLabel]);
					} else {
						imessage('status.auto.disable', [elementLabel]);
					}
				}
				kittenStorage.items[input.attr('id')] = option.enabled;
				if (name !== "saves") {
					saveToKittenStorage();
				}
			});

			element.append(input, label);

			return element;
		};

		let getPoliciesOptions = function (forReset) {
			let items = [];

			for (let i in options.policies) {
				let policy = options.policies[i];
				// typo in game code
				if (policy === 'authocracy') {policy = 'autocracy';}
				items.push($('<div/>', {
					id: 'policy-' + policy,
					text: i18n('$policy.' + policy + '.label'),
					css: {cursor: 'pointer',
						textShadow: '3px 3px 4px gray'}
				}));
			}
			return items;
		};

		let getUpgradeOption = function (name, option) {
			let iname = i18n('ui.upgrade.' + name);
			let element = getOption(name, option, iname);

			if (name === 'policies') {
				let list = $('<ul/>', {
					id: 'items-list-policies',
					css: {display: 'none', paddingLeft: '20px'}
				});
				let autoLabel = $('<label/>', {
					'for': 'toggle-policies-auto',
					text: '自动推荐政策',
					css: {
						display: 'inline-block', minWidth: '80px', color: '#FF6600',
					}
				});

				let autoInput = $('<input/>', {
					id: 'toggle-policies-auto',
					type: 'checkbox'
				}).data('option', option);

				if (option.auto) {
					autoInput.prop('checked', true);
				}

				autoInput.on('change', function () {
					if (autoInput.is(':checked') && !option.auto) {
						engine.stop(false);
						let again = window.confirm('珂学家自动根据Cheney写的萌新指导和政策解析自动点推荐的政策\n不重置的慎用建议看百科\n注意确认后会优先自动的而不是读取的列表(挑战模式自动会取消勾选政策)\n如需想自己选政策请按取消\n\n让聪明的猫猫来帮你选择吧❤');
						if (options.auto.engine.enabled) {
							engine.start(false);
						}
						if (again) {
							option.auto = true;
							message('自动点推荐政策(代替列表)');
						}
					} if ((!autoInput.is(':checked')) && option.auto) {
						option.auto = false;
						message('取消自动点推荐政策代替列表');
					}
					kittenStorage.items[autoInput.attr('id')] = option.auto;
					saveToKittenStorage();
				});

				element.append(autoInput, autoLabel);
				let wikiButton = $('<a/>', {
					id: 'toggle-upgrade-policies-wiki',
					text: '政策推荐',
					href: 'https://petercheney.gitee.io/baike/?file=000-%E7%8C%AB%E5%9B%BD%E8%90%8C%E6%96%B0%E6%8C%87%E5%AF%BC/02-%E6%94%BF%E7%AD%96%E6%95%88%E6%9E%9C%E8%A7%A3%E6%9E%90#%E5%86%85%E4%BA%8B',
					target: '_blank',
					css: Css
				});

				let loadButton = $('<div/>', {
					id: 'toggle-upgrade-policies-load',
					text: i18n('ui.upgrade.policies.load'),
					css: Css
				});

				let showButton = $('<div/>', {
					id: 'toggle-upgrade-policies-show',
					text: i18n('ui.upgrade.policies.show'),
					css: Css
				});
				// resetBuildList.append(getResetOption(item, 'build', options.auto.build.items[item]));

				loadButton.on('click', function() {
					const plist = [];
					for (const i in game.science.policies) {
						let policy = game.science.policies[i];
						if (policy.researched) {
							plist.push(policy.name);
						}
					}

					options.policies = plist;
					saveToKittenStorage();

					list.empty();
					getPoliciesOptions().forEach(element=>{list.append(element);});
				});

				showButton.on('click', function() {
					list.toggle();
					list.empty();
					getPoliciesOptions().forEach(element=>{list.append(element);});
				});

				element.append(showButton, loadButton, wikiButton, list);
			}

			if (option.subTrigger !== undefined && name === 'missions') {
				let triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: Css
				}).data('option', option);

				triggerButton.on('click', function () {
					let value;
					engine.stop(false);
					if (name === 'missions') {value = window.prompt(i18n('ui.trigger.missions.set'), option.subTrigger.toString());} else{value = window.prompt(i18n('ui.trigger.set'), option.subTrigger.toString());}
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						option.subTrigger = parseFloat(value);
						kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
						saveToKittenStorage();
						triggerButton[0].title = option.subTrigger;
					}
				});

				element.append(triggerButton);
			}

			if (name === 'upgrades' || name === 'techs') {
				let LimitedLabel = $('<label/>', {
					'for': 'toggle-limited-' + name,
					text: i18n('ui.upgradesLimit')
				});

				let LimitedInput = $('<input/>', {
					id: 'toggle-limited-' + name,
					type: 'checkbox'
				}).data('option', option);

				if (option.limited) {
					LimitedInput.prop('checked', true);
				}

				LimitedInput.on('change', function () {
					if (LimitedInput.is(':checked') && !option.limited) {
						option.limited = true;
						imessage('upgrade.limited', [iname]);
					} else if ((!LimitedInput.is(':checked')) && option.limited) {
						option.limited = false;
						imessage('upgrade.unlimited', [iname]);
					}
					kittenStorage.items[LimitedInput.attr('id')] = option.limited;
					saveToKittenStorage();
				});

				element.append(LimitedInput, LimitedLabel);
			}

			return element;
		};

		let getLimitedOption = function (name, option, iname) {
			let element = $('<li/>');
			let elementLabel = iname || option.label || ucfirst(name);
			let require = option.require;
			require = (require) ? game.resPool.get(option.require).title : i18n('ui.none');
			let titleName = require;

			let label = $('<label/>', {
				'for': 'toggle-' + name,
				text: elementLabel,
				title: i18n('ui.trigger.resource') + ": " + titleName,
				css: {display: 'inline-block', minWidth: '80px'}
			});

			let input = $('<input/>', {
				id: 'toggle-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.enabled) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option.enabled) {
					option.enabled = true;
					if (name.indexOf('Filter') > -1) {
						imessage('filter.enable', [elementLabel]);
					} else if (option.misc) {
						imessage('status.sub.enable', [elementLabel]);
					} else {
						imessage('status.auto.enable', [elementLabel]);
						if (name === 'field') {
							imessage('msg.catnip');
						}
					}
				} else if ((!input.is(':checked')) && option.enabled) {
					option.enabled = false;
					if (name.indexOf('Filter') > -1) {
						imessage('filter.disable', [elementLabel]);
					} else if (option.misc) {
						imessage('status.sub.disable', [elementLabel]);
					} else {
						imessage('status.auto.disable', [elementLabel]);
					}
				}
				kittenStorage.items[input.attr('id')] = option.enabled;
				saveToKittenStorage();
			});

			let maxButton = $('<div/>', {
				id: 'set-' + name + '-max',
				text: i18n('ui.max', [option.max]),
				title: option.max,
				css: Css
			}).data('option', option);

			maxButton.on('click', function () {
				let value;
				engine.stop(false);
				value = window.prompt(i18n('ui.max.set', [option.label]) + '\n -1为没有上限', option.max.toString());
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					option.max = parseInt(value);
					kittenStorage.items[maxButton.attr('id')] = option.max;
					saveToKittenStorage();
					maxButton[0].title = option.max;
					maxButton[0].innerText = i18n('ui.max', [option.max]);
				}
			});

			element.append(input, label, maxButton);

			return element;
		};

		let getCraftOption = function (name, option) {
			let iname = ucfirst(i18n('$resources.' + name + '.title'));
			if (name === "ship") {
				iname = ucfirst(i18n('$workshop.crafts.' + name + '.label'));
			}

			let element = getOption(name, option, iname);
			if (name === 'parchment') {return element;}

			let label = $('<label/>', {
				'for': 'toggle-limited-' + name,
				title: i18n("craft.limitedTitle"),
				text: i18n('ui.craftLimit')
			});

			let input = $('<input/>', {
				id: 'toggle-limited-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.limited) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option.limited) {
					option.limited = true;
					imessage('craft.limited', [iname]);
					msgSummary('craftLimited');
				} else if ((!input.is(':checked')) && option.limited) {
					option.limited = false;
					let require = (option.require) ? resMap[option.require].title + '满足触发资源的触发条件才会制作，' : '无，当资源满足制作条件就会制作';
					imessage('craft.unlimited', [iname, require]);
				}
				kittenStorage.items[input.attr('id')] = option.limited;
				saveToKittenStorage();
			});

			element.append(input, label);

			return element;
		};

		let getCycle = function (index, option) {
			let cycle = game.calendar.cycles[index];
			let element = $('<li/>');

			let label = $('<label/>', {
				'for': 'toggle-timeSkip-' + index,
				text: cycle.title
			});

			let input = $('<input/>', {
				id: 'toggle-timeSkip-' + index,
				type: 'checkbox'
			}).data('option', option);

			if (option[index]) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option[index]) {
					option[index] = true;
					imessage('time.skip.cycle.enable', [cycle.title]);
				} else if ((!input.is(':checked')) && option[index]) {
					option[index] = false;
					imessage('time.skip.cycle.disable', [cycle.title]);
				}
				kittenStorage.items[input.attr('id')] = option[index];
				saveToKittenStorage();
			});

			element.append(input, label);

			return element;
		};

		let getResetOption = function (name, type, option) {
			let element = $('<li/>');
			let elementLabel = option.label;

			let label = $('<label/>', {
				'for': 'toggle-reset-' + type + '-' + name,
				text: elementLabel,
				css: {display: 'inline-block', minWidth: '80px'}
			});

			let input = $('<input/>', {
				id: 'toggle-reset-' + type + '-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.checkForReset) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option.checkForReset) {
					option.checkForReset = true;
					imessage('status.reset.check.enable', [elementLabel]);
				} else if ((!input.is(':checked')) && option.checkForReset) {
					option.checkForReset = false;
					imessage('status.reset.check.disable', [elementLabel]);
				}
				kittenStorage.items[input.attr('id')] = option.checkForReset;
				saveToKittenStorage();
			});

			let minButton = $('<div/>', {
				id: 'set-reset-' + type + '-' + name + '-min',
				text: i18n('ui.min', [option.triggerForReset]),
				title: option.triggerForReset,
				css: Css
			}).data('option', option);

			minButton.on('click', function () {
				let value;
				value = window.prompt(i18n('reset.check.trigger.set', [option.label]), option.triggerForReset.toString());

				if (value !== null) {
					option.triggerForReset = parseInt(value);
					kittenStorage.items[minButton.attr('id')] = option.triggerForReset;
					saveToKittenStorage();
					minButton[0].title = option.triggerForReset;
					minButton[0].innerText = i18n('ui.min', [option.triggerForReset]);
				}
			});


			element.append(input, label, minButton);

			return element;
		};

		let getTimeCtrlOption = function (name, option) {
			let triggerButton;
			let element = getOption(name, option);

			if (name === 'timeSkip') {
				triggerButton = $('<div/>', {
					id: 'set-timeSkip-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: Css
				}).data('option', option);
				triggerButton.on('click', function () {
					let value;
					engine.stop(false);
					value = window.prompt(i18n('time.skip.trigger.set', []), option.subTrigger);
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						option.subTrigger = parseFloat(value);
						kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
						saveToKittenStorage();
						triggerButton[0].title = option.subTrigger;
					}
				});

				let maximumButton = $('<div/>', {
					id: 'set-timeSkip-maximum',
					text: i18n('ui.maximum'),
					title: option.max,
					css: Css
				}).data('option', option);
				maximumButton.on('click', function () {
					let value;
					engine.stop(false);
					value = window.prompt(i18n('ui.max.set', ["每次燃烧时间水晶"]), option.maximum.toString());
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						option.maximum = parseFloat(value);
						kittenStorage.items[maximumButton.attr('id')] = option.maximum;
						saveToKittenStorage();
						maximumButton[0].title = option.maximum;
					}
				});

				let cyclesButton = $('<div/>', {
					id: 'toggle-cycle-' + name,
					text: i18n('ui.cycles'),
					css: Css
				});

				let cyclesList = $('<ul/>', {
					id: 'cycles-list-' + name,
					css: {display: 'none', paddingLeft: '20px'}
				});

				for (let i in game.calendar.cycles) {cyclesList.append(getCycle(i, option));}


				let seasonsButton = $('<div/>', {
					id: 'toggle-seasons-' + name,
					text: i18n('trade.seasons'),
					css: Css
				});


				let seasonsList = $('<ul/>', {
					id: 'seasons-list-' + name,
					css: {display: 'none', paddingLeft: '20px'}
				});

				// fill out the list with seasons
				seasonsList.append(getSeasonForTimeSkip('spring', option));
				seasonsList.append(getSeasonForTimeSkip('summer', option));
				seasonsList.append(getSeasonForTimeSkip('autumn', option));
				seasonsList.append(getSeasonForTimeSkip('winter', option));

				cyclesButton.on('click', function () {
					cyclesList.toggle();
					seasonsList.toggle(false);
				});

				seasonsButton.on('click', function () {
					cyclesList.toggle(false);
					seasonsList.toggle();
				});

				element.append(cyclesButton, seasonsButton, maximumButton, triggerButton, cyclesList, seasonsList);

			} else if (name === 'reset') {

				let item;
				let resetBuildList     = getOptionHead('reset-build');
				let resetSpaceList     = getOptionHead('reset-space');
				let resetResourcesList = getResourceOptions(true);
				let resetReligionList  = getOptionHead('reset-religion');
				let resetTimeList      = getOptionHead('reset-time');

				for (item in options.auto.build.items)              {resetBuildList.append(getResetOption(item, 'build', options.auto.build.items[item]));}
				for (item in options.auto.space.items)              {resetSpaceList.append(getResetOption(item, 'space', options.auto.space.items[item]));}
				for (item in options.auto.unicorn.items)            {resetReligionList.append(getResetOption(item, 'unicorn', options.auto.unicorn.items[item]));}
				for (item in options.auto.faith.items)              {resetReligionList.append(getResetOption(item, 'faith', options.auto.faith.items[item]));}
				for (item in options.auto.time.items)               {resetTimeList.append(getResetOption(item, 'time', options.auto.time.items[item]));}

				let buildButton = $('<div/>', {id: 'toggle-reset-build', text: i18n('ui.build'),
					css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
				let spaceButton = $('<div/>', {id: 'toggle-reset-space', text: i18n('ui.space'),
					css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
				let resourcesButton = $('<div/>', {id: 'toggle-reset-resources', text: i18n('ui.craft.resources'),
					css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
				let religionButton = $('<div/>', {id: 'toggle-reset-religion', text: i18n('ui.faith'),
					css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
				let timeButton = $('<div/>', {id: 'toggle-reset-time', text: i18n('ui.time'),
					css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});

				buildButton.on('click', function() {resetBuildList.toggle(); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
				spaceButton.on('click', function() {resetBuildList.toggle(false); resetSpaceList.toggle(); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
				resourcesButton.on('click', function() {resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(); resetReligionList.toggle(false); resetTimeList.toggle(false);});
				religionButton.on('click', function() {resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(); resetTimeList.toggle(false);});
				timeButton.on('click', function() {resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle();});

				element.append(buildButton, spaceButton, resourcesButton, religionButton, timeButton,
					resetBuildList, resetSpaceList, resetResourcesList, resetReligionList, resetTimeList);
			} else {
				triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: Css
				}).data('option', option);

				triggerButton.on('click', function () {
					let value;
					value = window.prompt(i18n('ui.trigger.set', [option.label]), option.subTrigger);

					if (value !== null) {
						option.subTrigger = parseFloat(value);
						kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
						saveToKittenStorage();
						triggerButton[0].title = option.subTrigger;
					}
				});
				element.append(triggerButton);
			}

			return element;
		};

		let getOptionsOption = function (name, option) {
			if (name === 'festival') {return;}
			let input;
			let element = getOption(name, option);

			// hack for style.
			// If there are more UI options, split it to "getUIOption"
			if (name === 'style') {
				input = element.children('input');
				input.unbind('change');
				input.on('change', function (e) {
					option.enabled = input.prop('checked');
					kittenStorage.items[input.attr('id')] = option.enabled;
					if (e.originalEvent) {saveToKittenStorage();}
					let style = document.getElementById('toggleCenter').style;
					if (option.enabled) {
						document.body.setAttribute('data-ks-style', '');
						if (!game.ui.isCenter) {
							style.display = 'none';
						}
					} else {
						document.body.removeAttribute('data-ks-style');
						style.display = '';
					}
				});
			}

			if (name === 'useWorkers') {
				input = element.children('input');
				input.on('click', function () {
					let a = confirm(i18n('ui.trigger.useWorkers.alert'));
					if (a && !option.enabled) {
						engine.stop();
						option.enabled = true;
						kittenStorage.items[input.attr('id')] = option.enabled;
						if (options.auto.engine.enabled) {
							engine.start();
						}
					} else if (a && option.enabled) {
						engine.stop();
						option.enabled = false;
						kittenStorage.items[input.attr('id')] = option.enabled;
						if (options.auto.engine.enabled) {
							engine.start();
						}
					}
				});
			}

			if (name === 'saves') {
				input = element.children('input');
				input.on('click', function () {
					engine.stop(false);
					let confirm = window.confirm("点击确认会导出珂学家的配置.txt文件");
					if (confirm) {
						let $link = $("#download-link");
						let data = JSON.stringify(window.localStorage['cbc.kitten-scientists']);
						let b = game.compressLZData(data, false);
						let blob = new Blob([b], {type: "text/plain"});
						$link.attr("href", window.URL.createObjectURL(blob));
						let filename = "小猫珂学家配置" + (game.stats.getStat("totalResets").val + 1) + "周目";
						$link.attr("download", filename + ".txt");
						$link.get(0).dispatchEvent(new MouseEvent("click"));
					}
					if (options.auto.engine.enabled) {
						engine.start(false);
					}
				});

				let loadKS = $('<div/>', {
					id: 'loadKS',
					text: "导入配置",
					css: Css
				}).data('option', option);

				loadKS.on('click', function () {
					engine.stop(false);
					let b = window.prompt('窗口内填入后你需要导入的珂学家配置，确认后会导入配置', '');
					if (options.auto.engine.enabled) {
						engine.start(false);
					}
					if (b && b.length >= 10) {
						let ksSave;
						if (b.charAt(0) !== "{") {
							ksSave = JSON.parse(LZString.decompressFromBase64(b));
						}
						window.localStorage['cbc.kitten-scientists'] = ksSave;
						loadFromKittenStorage();
					}
				});

				let resetKs = $('<div/>', {
					id: 'ressetKS',
					text: "恢复初始默认配置",
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						color: '#FF6347',
					}
				});

				resetKs.on('click', function () {
					if (confirm('确定要初始化珂学家配置吗，点击确认后初始化珂学家配置\n已经替你完美配置好不需要你改任何设置\n只需勾上你需要的对应的大项目就是最快速度发展了\n\n为了照顾钢铁模式，默认配置小屋、木屋、宅邸默认不勾，请有需要的自行勾上')) {
						engine.stop();
						let cbc = sessionStorage.getItem('options');
						delete localStorage['cbc.kitten-scientists'];
						if (cbc) {
							$("#ks-options").remove();
							options.auto = JSON.parse(cbc).auto;
							resetKittenStorage();
							optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px'}});
							optionsListElement = $('<ul/>');
							optionsListElement.append(getToggle('engine'));
							toggles.forEach((name) => {
								optionsListElement.append(getToggle(name));
							});
							optionsElement.append(optionsListElement);
							right.prepend(optionsElement);
							engineOn();
							initializeKittenStorage();
						} else {
							game.save();
							window.location.reload();
						}
					}
				});

				element.append(loadKS);
				element.append(resetKs);
			}

			if (name === 'donate') {
				input = element.children('input');
				input.unbind('change');
				input.on('change', function (e) {
					option.enabled = input.prop('checked');
					kittenStorage.items[input.attr('id')] = option.enabled;
					if (e.originalEvent) {saveToKittenStorage();}
					let style = document.getElementById('ks-donate').style;
					if (option.enabled) {
						style.display = 'block';
					} else {
						style.display = 'none';
					}
					style = null;
				});
			}

			if (name === 'wiki') {
				let label = $('<a/>', {
					css: { display: 'inline-block', transformOrigin:'bottom',
						fontStyle:'italic', transform: 'scale(0.63)'},
					href: 'https://petercheney.gitee.io/',
					target: '_blank',
					text: 'Cheney'
				});
				element.append(label);
				input = element.children('input');
				input.on('click', function () {
					let tempWindow = window.open();
					tempWindow.location = 'https://petercheney.gitee.io/baike/?file=004-%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7/02-%E5%B0%8F%E7%8C%AB%E7%A7%91%E5%AD%A6%E5%AE%B6';
					printout(['如果还有问题可以在猫国群询问，有BUG或意见可以联系Cheney。初始默认配置即推荐挂机高效配置','ks-default', options.activityColor]);
				});
			}

			if (option.subTrigger !== undefined) {
				let triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: Css
				}).data('option', option);

				triggerButton.on('click', function () {
					let value;
					engine.stop(false);
					if (name === 'crypto') {
						value = window.prompt(i18n('ui.trigger.crypto.set', [option.label]), option.subTrigger);
					} else if (name === 'filterGame') {
						value = window.prompt(i18n('ui.trigger.filterGame.set'), option.subTrigger);
					} else {
						value = window.prompt(i18n('ui.trigger.set', [option.label]), option.subTrigger);
					}
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						if (name === 'crypto') {
							option.subTrigger = value;
						} else if (name === 'filterGame') {
							option.subTrigger = parseFloat(value);
							gameMaxMsg();
						} else {
							option.subTrigger = parseFloat(value);
						}
						kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
						saveToKittenStorage();
						triggerButton[0].title = option.subTrigger;
					}
				});

				element.append(triggerButton);
			}

			return element;
		};

		let getDistributeOption = function (name, option) {
			if (name === "leader") {return getLeader(name, option);}
			let iname = ucfirst(i18n('$village.job.' + name));

			let element = getOption(name, option, iname);
			element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

			//Limited Distribution
			let label = $('<label/>', {
				'for': 'toggle-limited-' + name,
				text: i18n('ui.distributeLimit')
			});

			let input = $('<input/>', {
				id: 'toggle-limited-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.limited) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && !option.limited) {
					option.limited = true;
					imessage('distribute.limited', [iname]);
				} else if ((!input.is(':checked')) && option.limited) {
					option.limited = false;
					imessage('distribute.unlimited', [iname]);
				}
				kittenStorage.items[input.attr('id')] = option.limited;
				saveToKittenStorage();
			});

			element.append(input, label);

			let maxButton = $('<div/>', {
				id: 'set-' + name + '-max',
				text: i18n('ui.max', [option.max]),
				title: option.max,
				css: Css
			}).data('option', option);

			(function (iname) {
				maxButton.on('click', function () {
					let value;
					engine.stop(false);
					value = window.prompt(i18n('ui.max.set', [iname]) + ' （按max比例分配）', option.max.toString());
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						option.max = Math.max(0, parseInt(value));
						kittenStorage.items[maxButton.attr('id')] = option.max;
						saveToKittenStorage();
						maxButton[0].title = option.max;
						maxButton[0].innerText = i18n('ui.max', [option.max]);
					}
				});
			})(iname);

			element.append(maxButton);

			return element;
		};

		let getLeader = function (name, option) {
			let i;
			let iname = ucfirst(i18n('distribute.makeLeader'));
			let element = getOption(name, option, iname);
			element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

			let traitList = $('<ul/>', {
				id: 'items-list-traits',
				css: {display: 'none', paddingLeft: '20px'}
			});

			let traitShowButton = $('<div/>', {
				id: 'toggle-leaderTrait' + name,
				text: i18n('$village.trait.filter.all'),
				css: Css
			});

			for (i in window["com"]["nuclearunicorn"].game.village.Kitten().traits) {
				traitList.append(getLeaderTrait(i, option));
			}

			traitShowButton.on('click', function () {
				jobList.toggle(false);
				traitList.toggle();
			});

			let jobList = $('<ul/>', {
				id: 'items-list-jobs',
				css: {display: 'none', paddingLeft: '20px'}
			});

			let jobShowButton = $('<div/>', {
				id: 'toggle-leaderJob' + name,
				text: i18n('$village.panel.job'),
				css: Css
			});

			for (i in game.village.jobs) {
				jobList.append(getLeaderJob(i, option));
			}

			jobShowButton.on('click', function () {
				traitList.toggle(false);
				jobList.toggle();
			});

			element.append(traitShowButton, jobShowButton, traitList, jobList);

			return element;
		};

		let getLeaderJob = function (index, option) {
			let jobs = game.village.jobs;
			let job = jobs[index];

			let element = $('<li/>');

			let label = ($('<label/>', {
				'for': 'toggle-leaderJob-' + job.name,
				text: job.title,
				css: {cursor: 'pointer',
					textShadow: '3px 3px 4px gray'}
			}));

			let input = $('<input/>', {
				id: 'toggle-leaderJob-' + job.name,
				name: 'leaderJob',
				value: job.name,
				type: 'radio'
			}).data('option', option);

			if (input.prop("value") === option.leaderJob) {
				input.prop("checked", true);
			}

			input.on('change', function () {
				imessage('distribute.leaderJob', [job.title]);
				option.leaderJob = $("input[name='leaderJob']:checked").val();
				jobs.forEach((i) => {
					delete kittenStorage.items['toggle-leaderJob-' + i.name];
				});
				kittenStorage.items['toggle-leaderJob-' + option.leaderJob] = true;
				saveToKittenStorage();
			});
			element.append(input, label);

			return element;
		};

		let getLeaderTrait = function (index, option) {
			let traits = window["com"]["nuclearunicorn"].game.village.Kitten().traits;
			const trait = traits[index];

			const element = $('<li/>');

			const label = ($('<label/>', {
				'for': 'toggle-leaderTrait-' + trait.name,
				text: trait.title,
				css: {
					cursor: 'pointer',
					textShadow: '3px 3px 4px gray'
				}
			}));

			const input = $('<input/>', {
				id: 'toggle-leaderTrait-' + trait.name,
				name: 'leaderTrait',
				value: trait.name,
				type: 'radio'
			}).data('option', option);

			if (input.prop("value") === option.leaderTrait) {
				input.prop("checked", true);
			}

			input.on('change', function () {
				imessage('distribute.leaderTrait', [trait.title]);
				option.leaderTrait = $(this).val();
				traits.forEach((i) => {
					delete kittenStorage.items['toggle-leaderTrait-' + i.name];
				});
				kittenStorage.items['toggle-leaderTrait-' + option.leaderTrait] = true;
				saveToKittenStorage();
			});
			element.append(input, label);

			return element;
		};

		let right = $('#rightColumn');
		let optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px'}});
		let optionsListElement = $('<ul/>');
		optionsListElement.append(getToggle('engine'));
		toggles.forEach((name) => {
			optionsListElement.append(getToggle(name));
		});

		// Donation Button
		let showD = function() {
			const address = '1HDV6VEnXH9m8PJuT4eQD7v8jRnucbneaq';
			let donate = $('<li/>', {id: "ks-donate"}).append($('<a/>', {
				href: 'bitcoin:' + address + '?amount=0.00048&label=Kittens Donation',
				target: '_blank',
				text: address
			})).prepend($('<img alt="bit" src="https://s1.ax1x.com/2022/04/30/OSmUAK.png" height="15px" />', {
				css: {
					height: '15px',
					width: '15px',
					padding: '3px 4px 0 4px',
					verticalAlign: 'bottom'
				},
			}));

			// Add some padding above the donation item
			donate.css('padding', '5px');

			optionsListElement.append(donate);
		};
		showD();
		// add the options above the game log
		optionsElement.append(optionsListElement);
		right.prepend(optionsElement);
	}

	// 渲染完后把建筑重要建筑排前面
	let buildItems = options.auto.build.items;
	options.auto.build.items = Object.assign({
		amphitheatre: buildItems['amphitheatre'],
		reactor: buildItems['reactor'],
		magneto: buildItems['magneto'],
		steamworks: buildItems['steamworks'],
	}, buildItems);

	// 渲染完后把科研船、月球前哨排太空前面
	buildItems = options.auto.space.items;
	options.auto.space.items = Object.assign({
		researchVessel: buildItems['researchVessel'],
		moonOutpost: buildItems['moonOutpost'],
	}, buildItems);
	buildItems = null;

	//建筑日志提示
	let msgSummary = (build, isDelete, filter)=> {
		if (isDelete) {
			activitySummary.other['auto.' + build] = null;
		} else {
			if (activitySummary.other['auto.' + build]) {
				return true;
			} else {
				if (!filter) {
					filter = 'miscFilter';
				}
				activity(i18n('summary.auto.' + build), filter);
				storeForSummary('auto.' + build);
			}
		}
	};
	// 小猫总结消耗资源
	let storePrices = (prices) => {
		for (let i in prices) {
			let price = prices[i];
			storeForSummary(price.name, price.val, 'resConsume');
		}
	};

	let activitySummary;
	let resetActivitySummary = function () {
		let Calendar = game.calendar;
		activitySummary = {
			lastYear: Calendar.year,
			lastTrueYear: Calendar.trueYear(),
			lastDay:  Calendar.day,
			lastSeason:  Calendar.season,
			// gameTime: 0,
			ksTime: 0,
			totalTicks: 0,
			praise: [0,0],
			adore: [0,0],
			craft:    {},
			trade:    {},
			build:    {},
			other:    {},
			resGain: {},
			resConsume: {},
			research: {},
		};
	};
	resetActivitySummary();

	let storeForSummary = function (name, amount, section) {
		if (amount === undefined) {amount = 1;}
		if (section === undefined) {section = 'other';}

		if (activitySummary[section] === undefined) {activitySummary[section] = {};}

		if (activitySummary[section][name] === undefined) {
			activitySummary[section][name] = parseFloat(amount);
		} else {
			activitySummary[section][name] += parseFloat(amount);
		}
	};

	let displayActivitySummary = function () {
		// 最多总结会有300条日志
		if (game.console.messages.length > game.console.maxMessages - 250) {game.clearLog();}
		// 提示库存
		msgStock();

		let equal = '='.repeat(24);
		let l, name, msg;

		let gain = activitySummary.resGain;
		for (name in gain) {
			let val = gain[name];
			if (!val) {continue;}
			msg = game.msg('小喵共获得了 ' + game.getDisplayValueExt(val) + ' ' + $I("resources." + name +".title"), null, null, true);
			$(msg.span).css('color', "#ff589c");
		}
		if (msg) {
			game.msg(equal, 'notice');
			msg = null;
		}

		let consume = activitySummary.resConsume;
		let resources = game.resPool.resources;
		for (let i = resources.length - 1; i  > 0; i--) {
			if (!consume) {break;}
			name = resources[i].name;
			let val = consume[name];
			if (!val) {continue;}
			msg = game.msg('小喵共消耗了 ' + game.getDisplayValueExt(val) + ' ' + $I("resources." + name +".title"), null, null, true);
			$(msg.span).css('color', "#DC143C");
		}
		if (msg) {game.msg(equal, 'notice');}

		let other = activitySummary.other;
		for (const i in other) {
			let j = other[i];
			if (j) {
				j = (typeof j === 'number') ? game.getDisplayValueExt(j) : j;
				iSummary('summary.' + i, [j]);
			}
		}

		// 赞美太阳 赞美群星
		displaySolar('praise');
		displaySolar('adore');

		let teach = activitySummary.research;
		for (name in teach) {
			l = teach[name];
			l = (l) ? '科学家' : '';
			iSummary('summary.tech', [l + '小猫研究了 ' + ucfirst(name)]);
		}

		// Upgrades
		for (name in activitySummary.upgrade) {
			l = activitySummary.upgrade[name];
			l = (l) ? '科学家' : '';
			iSummary('summary.upgrade', [l + '小猫发明了 ' + ucfirst(name)]);
		}


		let items = ['faith', 'build', 'craft', 'craftLeader', 'trade'];
		items.forEach((item) => {
			let summary = activitySummary[item];
			for (let i in summary) {
				iSummary('summary.' + item, [game.getDisplayValueExt(summary[i]), ucfirst(i)]);
			}
		});

		// Show time since last run. Assumes that the day and year are always higher.
		let lastYear = activitySummary.lastYear;
		let lastDay = activitySummary.lastDay;
		if (lastYear + lastDay) {
			let Calendar = game.calendar;
			let years = Calendar.year - lastYear;
			let days = Calendar.day - lastDay;
			let trueYears = Calendar.trueYear() - activitySummary.lastTrueYear;
			let seasons = Calendar.season - activitySummary.lastSeason;

			let daysPerSeason = Calendar.daysPerSeason;
			let seasonsPerYear = Calendar.seasonsPerYear;

			days += years * 400;
			days += seasons * daysPerSeason;
			let duration = '';
			if (days >= 400) {
				duration += years + ' ';
				duration += (years === 1) ? i18n('summary.year') : i18n('summary.years');
			}

			if (days >= 0) {
				if (years > 0) {duration += i18n('summary.separator');}
				duration += roundToTwo(days % 400) + ' ';
				duration += (days === 1) ? i18n('summary.day') : i18n('summary.days');
			}

			iSummary('summary.head', [duration]);

			if (trueYears > 0) {
				let realTime = game.toDisplaySeconds(trueYears * seasonsPerYear * daysPerSeason * Calendar.ticksPerDay / game.ticksPerSecond);
				if (realTime) {summary('总共 ' + realTime + ' 的小喵种田时间');}
			}
		}

		// 提示日志过滤
		let filter = options.auto.filter;
		if (!filter.enabled || !filter.items['craftFilter'].enabled || !filter.items['buildFilter'].enabled
			|| game.console.filters['faith'].enabled || game.console.filters['astronomicalEvent'].enabled) {
			game.msg('喵喵提示：游戏(珂学家)日志消耗性能会比较多!', "alert");
		}

		// 处理耗时
		let ksTime = activitySummary.ksTime;
		if (ksTime) {
			let totalTicks = activitySummary.totalTicks;
			// let gameTime = activitySummary.gameTime;
			let numberFix = Math.pow(10, 2 + game.opts.forceHighPrecision);
			let displaySecond = (time) => {
				let millisecond = Math.round(time * numberFix) / numberFix;
				let number = Math.round(time % 1000 * numberFix) / numberFix;
				if (time > 1e3) {
					number = game.toDisplaySeconds(Math.floor(millisecond / 1000)) + number;
				}
				return number;
			};
			summary(i18n('time.ks', [totalTicks, displaySecond(ksTime), Math.round(ksTime * numberFix / totalTicks) / numberFix]));
			// if (gameTime) {summary(i18n('time.game', [displaySecond(gameTime)]));}
			summary(equal);
		}
		// Clear out the old activity
		resetActivitySummary();
	};

	let displaySolar = (name) => {
		let summary = activitySummary[name];
		let time = summary[0];
		let totalNumber = game.getDisplayValueExt(summary[1]);
		if (time) {
			iSummary('summary.' + name, [game.getDisplayValueExt(time), totalNumber]);
		}
	};

	let activityBox = $('<div/>', {
		id: 'activity-box',
		css: {
			display: 'inline-block',
			verticalAlign: 'top'
		}
	});

	let showActivity = $('<a/>', {
		id: 'showActivityHref',
		text: i18n('summary.show'),
		href: '#',
		css: {
			verticalAlign: 'top'
		}
	});

	showActivity.on('click', displayActivitySummary);

	activityBox.append(showActivity);

	$('#clearLog').append(activityBox);

	const messageBox = $('<div/>', {
		id: 'important-msg-box',
		class: 'dialog help',
		css: {
			display: 'none',
			width: 'auto',
			height: 'auto'
		}
	});
	let mbClose = $('<a/>', {text: i18n('ui.close'), href: '#', css: {position: 'absolute', top: '10px', right: '15px'}});
	mbClose.on('click', function () {messageBox.toggle(); });
	let mbTitle = $('<h1/>', {id: 'mb-title', text: 'test text'});
	let mbContent = $('<h1/>', {id: 'mb-content', text: 'test text'});
	messageBox.append(mbClose, mbTitle, mbContent);
	$('#gamePageContainer').append(messageBox);

	let showMessageBox = (title, content) => {
		mbTitle.html(title);
		mbContent.html(content);
		messageBox.toggle();
	};

	// Initialize and set toggles for Engine
	// =====================================

	let engine = new Engine();

	let toggleEngine;
	let engineOn = () => {
		toggleEngine = $('#toggle-engine');
		toggleEngine.on('change', function () {
			let Engine = options.auto.engine;
			if (toggleEngine.is(':checked')) {
				Engine.enabled = true;
				engine.start();
				msgStock();
				setTimeout(()=>{
					if (Engine.enabled) {
						message('如需查看小喵做过什么，可以点击小猫总结(清空日志旁边)');
						message('如需没网络也能离线打开珂学家，可以点击左上角 ML 右边第一个 C 进入Cheney的备用站,该网站离线可以用珂学家');
					}
				}, 4000);
				// 提示节日开启
				if (options.auto.options.enabled) {
					activity('小喵杂项已开启~智慧喵喵<br>1. 喵喵自动节日已开启<br>2. 喵喵冬季最后一天的能源管理<br>3. 喵喵自动打开因资源耗尽关闭的工业建筑');
				}
				if (game.getEffect('priceRatio') > -0.03 && Religion.transcendenceTier < 4) {
					msgSummary('ksHelp', false, 'noFilter');
					msgSummary('ksHelp2', false, 'noFilter');
					if (!game.stats.getStat("totalResets").val && Religion.faith > 1e4) {msgSummary('ksHelp3', false, 'noFilter');}
					msgSummary('ksHelp4', false, 'noFilter');
					msgSummary('ksHelp5', false, 'noFilter');
				}
				msgSummary('miao', false, 'noFilter');
			} else {
				Engine.enabled = false;
				engine.stop();
			}
		});
		// 插入版本号
		let optionsTitleElement = $('<a/>', {
			css: { display: 'inline-block', textShadow: '1px 1px 1px gray', transformOrigin:'bottom',
				fontStyle:'italic',
				transform: 'scale(0.8)',
				paddingLeft: '3px',},
			text: version,
			target: '_blank',
			href: 'https://petercheney.gitee.io/scientists/updateLog.html?v=' + new Date().getDate(),
		});
		$('#ks-engine').append(optionsTitleElement);
	};
	engineOn();

	// 记录初始数据
	options.auto.cache.dataTimer['trueYear'] = game.calendar.trueYear();
	options.auto.cache.dataTimer['ticksTotal'] = game.timer.ticksTotal;
	options.auto.cache.dataTimer['saveId'] = game.telemetry.guid;

	sessionStorage.setItem('options', JSON.stringify(options));
	loadFromKittenStorage();

	// 游戏日志长度
	let gameMaxMsg = () => {
		game.console.maxMessages = Math.min(Math.max(300, options.auto.options.items.filterGame.subTrigger), 2000);
	};
	gameMaxMsg();

	// hack for style.
	// If there are more UI options, split it to "updateUI"
	$('#toggle-style').trigger('change');
	$('#toggle-donate').trigger('change');
	$('#ks-donate')[0].style.display = 'none';

	if (console && console.log) {console.log(kg_version + " loaded");}
	game._publish("kitten_scientists/ready", kg_version);
	// 提示库存
	let msgStock = () => {
		let resources = options.auto.resources;
		let filter;
		for (let i in resources) {
			let res = resources[i];
			if (res.enabled) {
				if (res.stock) {
					if (i === 'furs' && res.stock === 350) {continue;}
					filter = true;
					let msg = game.msg($I("resources." + i +".title") + '库存：' + game.getDisplayValueExt(res.stock), null, null, true);
					$(msg.span).css('color', "#ff589c");
				} else if (res.consume === 0.6) {
					delete options.auto.resources[i];
				}
			}
		}
		if (filter) {
			activity('小喵留下设置好的库存：');
			message('可爱的猫猫珂学家提示设置库存会影响挂机效率');
		}
		msgSummary('ksHelp4');
	};

	if (kittenStorage.reset && kittenStorage.reset.reset) {
		// calc paragon and karma
		kittenStorage.reset.karmaTotal += resMap['karma'].value - Number(kittenStorage.reset.karmaLastTime);
		kittenStorage.reset.paraonTotal += resMap['paragon'].value - Number(kittenStorage.reset.paragonLastTime);
		kittenStorage.reset.reset = false;

		// show messagebox
		showMessageBox(
			i18n('summary.time.reset.title', [kittenStorage.reset.times]),
			i18n('summary.time.reset.content', [kittenStorage.reset.karmaTotal, kittenStorage.reset.paragonTotal])
		);
		// auto start
		toggleEngine.prop('checked', true);
		toggleEngine.trigger('change');
		imessage('reset.after');
	} else {
		kittenStorage.reset = {
			reset: false,
			times: 0,
			paragonLastTime: 0,
			paragonTotal: 0,
			karmaLastTime: 0,
			karmaTotal: 0
		};
	}

	saveToKittenStorage();

	const autoOpen = function () {
		if (!options.auto.engine.enabled && options.auto.options.items.autoScientists.enabled) {
			let countdown = (options.countdown);
			if (countdown === 0) {
				toggleEngine.click();
				clearInterval(autoOpenTime);
				imessage('reset.after');
			} else if (countdown > 10) {
				if (countdown % 60 === 0) {
					imessage('auto.tip');
				}
				if (countdown % 10 === 0) {
					iactivity('auto.countdown', [countdown]);
				}
				options.countdown -= 1;
			} else if (countdown <= 10) {
				imessage('reset.countdown.' + countdown);
				options.countdown -= 1;
			}
		} else {
			clearInterval(autoOpenTime);
		}
	};
	let autoOpenTime = setInterval(autoOpen, 1000);
};

window.loadTest = function () {
	let host = window.location.host;
	let whiteList = ['gitee','127','localhost','lolita','kittensgame'];
	let down;
	whiteList.forEach(function(url){
		if (host.indexOf(url) > -1) {
			down = true;
		}
	});
	if (!down) {
		let text = '不在最新正确的网址\n如需要使用请输入正确密码或者导入到推荐到最新网站';
		let check = window.prompt(text);
		if (check !== 'Cheney_MR') {
			return;
		}
	}
	if (typeof gamePage === 'undefined' || typeof i18nLang === 'undefined') {
		// Test if kittens game is already loaded or wait 2s and try again
		setTimeout(function () {
			window.loadTest();
		}, 1000);
	} else {
		let upgrades = game.workshop.upgrades;
		for (let i in upgrades) {
			let Upg = upgrades[i];
			game.workshop.metaCache[Upg.name] = Upg;
		}
		game.workshop.metaCache['undefined'] = null;
		delete game.workshop.metaCache['undefined'];
		// 暂定资源进度条
		if (localStorage['zh.kgp.enable'] !== 'disable') {
			$('<style id="KGPBorder">.res-table { border-spacing: 0 3px; }</style>').appendTo('head');
		}
		let policies = game.science.policies;
		game.science.policyMetaCache = {};
		for (let i in policies) {
			let pol = policies[i];
			game.science.policyMetaCache[pol.name] = pol;
		}
		// Kittens loaded, run Kitten Scientist's Automation Engine
		window.run();
		window.loadTest = null;
		window.run = null;
	}
};
setTimeout(function () {
	window.loadTest();
}, 1000);