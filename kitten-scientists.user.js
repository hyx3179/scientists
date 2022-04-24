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
let run = function() {
	const version = '15.19';
	const kg_version = "小猫珂学家版本" + version;
	const lang = (localStorage["com.nuclearunicorn.kittengame.language"] === 'zh') ? 'zh' : 'en';
	// Initialize and set toggles for Engine
	// =====================================
	const i18nData = {
		'en': {
			'option.observe': 'Observe Astro Events',
			'option.festival': 'Hold Festivals',
			'option.praise': 'Auto Praise',
			'option.shipOverride': 'Force Ships to 243',
			'option.autofeed': 'Feed Leviathans',
			'option.hunt': 'Hunt',
			'option.crypto': 'Trade Blackcoin',
			'option.embassies': 'Build Embassies (Beta)',
			'option.style': 'View Full Width',
			'option.steamworks': 'Turn on Steamworks',

			'filter.build': 'Building',
			'filter.craft': 'Crafting',
			'filter.upgrade': 'Upgrading',
			'filter.research': 'Researching',
			'filter.trade': 'Trading',
			'filter.hunt': 'Hunting',
			'filter.praise': 'Praising',
			'filter.faithBld': 'Order of the Sun',
			'filter.festival': 'Festivals',
			'filter.star': 'Astronomical Events',
			'filter.misc': 'Miscellaneous',

			'dispose.necrocorn': 'Kittens disposed of inefficient necrocorns',
			'blackcoin.buy': 'Kittens sold your Relics and bought {0} Blackcoins',
			'blackcoin.sell': 'Kittens sold your Blackcoins and bought {0} Relics',
			'act.feed': 'Kittens fed the Elders. The elders are pleased',
			'act.observe': 'Kitten Scientists have observed a star',
			'act.hunt': 'Sent {1} on {0} hunts',
			'act.build': 'Kittens have built a new {0}',
			'act.builds': 'Kittens have built a new {0} {1} times.',
			'act.craft': 'Kittens have crafted {0} {1}',
			'act.trade': 'Kittens have traded {0}x with {1}',

			'upgrade.space.mission': 'Kittens conducted a mission to {0}',
			'upgrade.space': 'Kittens conducted a {0}',
			'upgrade.race': 'Kittens met the {0}',
			'upgrade.building.pasture': 'Upgraded pastures to solar farms!',
			'upgrade.building.aqueduct': 'Upgraded aqueducts to hydro plants!',
			'upgrade.building.library': 'Upgraded libraries to data centers!',
			'upgrade.building.amphitheatre': 'Upgraded amphitheatres to broadcast towers!',
			'upgrade.upgrade': 'Kittens have bought the upgrade {0}',
			'upgrade.limited': 'Optimize {0}',
			'upgrade.unlimited': 'All {0}',
			'upgrade.tech': 'Kittens have bought the tech {0}',
			'upgrade.policy': 'Kittens have passed {0}',

			'festival.hold': 'Kittens begin holding a festival',
			'festival.extend': 'Kittens extend the festival',

			'build.embassy': 'Built {0} embassy for {1}',
			'build.embassies': 'Built {0} embassies for {1}',

			'act.praise': 'Praised the sun! Accumulated {0} faith to {1} worship',
			'act.sun.discover': 'Kittens have discovered {0}',
			'act.sun.discovers': 'Kittens have discovered {0} {1} times.',

			'ui.items': 'items',
			'ui.disable.all': 'disable all',
			'ui.enable.all': 'enable all',
			'ui.craft.resources': 'resources',
			'ui.trigger': 'trigger',
			'ui.trigger.set': 'Enter a new trigger value for {0}. Should be in the range of 0 to 1.',
			'ui.limit': 'Limited',
			'ui.trigger.shipOverride.set': 'Enter a new trigger value for {0}. Corresponds to the amount of ship needed before the exchange is made.',
			'ui.trigger.missions.set': 'Enter a new trigger value for missions. Should be in the range of 0 to 13. Corresponds to each planet sort',
			'ui.trigger.crypto.set': 'Enter a new trigger value for {0}. Corresponds to the amount of Relics needed before the exchange is made.',
			'ui.engine': 'Enable Scientists',
			'ui.build': 'Bonfire',
			'ui.space': 'Space',
			'ui.craft': 'Crafting',
			'ui.upgrade': 'Unlocking',
			'ui.trade': 'Trading',
			'ui.faith': 'Religion',
			'ui.time': 'Time',
			'ui.options': 'Options',
			'ui.filter': 'Filters',
			'ui.distribute': 'Kitten Resources',
			'ui.max': 'Max: {0}',

			'ui.upgrade.upgrades': 'Upgrades',
			'ui.upgrade.techs': 'Techs',
			'ui.upgrade.races': 'Races',
			'ui.upgrade.missions': 'Missions',
			'ui.upgrade.buildings': 'Buildings',
			'ui.upgrade.policies': 'Policies',
			'ui.upgrade.policies.load': 'Load',
			'ui.upgrade.policies.show': 'Show',

			'ui.faith.addtion': 'addition',
			'option.faith.best.unicorn': 'Build Best Unicorn Building First',
			'option.faith.best.unicorn.desc': 'Include auto Sacrifice Unicorns if tears are not enough to build the best unicorn building',
			'option.faith.transcend': 'Auto Transcend',
			'act.transcend': 'Spend {0} epiphany, Transcend to T-level: {1}',
			'summary.transcend': 'Transcend {0} times',
			'filter.transcend': 'Transcend',
			'option.faith.adore': 'Auto Adore the Galaxy',
			'act.adore': 'Adore the galaxy! Accumulated {0} worship to {1} epiphany',
			'summary.adore': 'Accumulated {0} epiphany by adore the galaxy',
			'filter.adore': 'Adoring',
			'adore.trigger.set': 'Enter a new trigger value for AutoAdore. Should be in the range of 0 to 1.\nKS will AutoAdore if the Solar Revolution Bonus brought by praising the sun once after adore can reach the trigger of maximum.\n\nNote: The solar revolution bonus will diminish after reaching 75% of the maximum.',

			'resources.add': 'add resources',
			'resources.clear.unused': 'clear unused',
			'resources.stock': 'Stock: {0}',
			'resources.consume': 'Consume: {0}',
			'resources.del': 'del',
			'resources.stock.set': 'Stock for {0}',
			'resources.consume.set': 'Consume rate for {0}',
			'resources.del.confirm': 'Delete resource controls for {0}?',

			'status.ks.enable': 'Enabling the kitten scientists!',
			'status.ks.disable': 'Disabling the kitten scientists!',
			'status.sub.enable': 'Enabled {0}',
			'status.auto.enable': 'Enable Auto {0}',
			'status.sub.disable': 'Disabled {0}',
			'status.auto.disable': 'Disable Auto {0}',

			'trade.limited': 'Trading with {0}: limited to only occur when profitable based off relative production time',
			'trade.unlimited': 'Trading with {0}: unlimited',
			'trade.seasons': 'seasons',
			'trade.season.enable': 'Enabled trading with {0} in the {1}',
			'trade.season.disable': 'Disabled trading with {0} in the {1}',

			'filter.enable': 'Enable {0} Filter',
			'filter.disable': 'Disabled {0} Filter',

			'craft.limited': 'Crafting {0}: limited to be proportional to cost ratio',
			'craft.unlimited': 'Crafting {0}: unlimited',

			'distribute.limited': 'Distribute to {0}: stop when reach max',
			'distribute.unlimited': 'Distribute to {0}: unlimited',
			'distribute.leaderJob': 'Leader Job: {0} ',
			'distribute.leaderTrait': 'Choose {0} Leader',
			'distribute.makeLeader': 'Make Leader',
			'act.distribute': 'Distribute a kitten to {0}',
			'act.distributeLeader': 'Make a {0} kitten leader',
			'ui.max.set': 'Maximum for {0}',
			'summary.distribute': 'Help {0} kittens to find job',
			'filter.distribute': 'Distribute',

			'option.promote': 'Promote Leader',
			'act.promote': 'Kittens\' leader has been promoted to rank {0}',
			'filter.promote': 'Promote leader',
			'summary.promote': 'Promoted leader {0} times',

			'ui.timeCtrl': 'Time Control',
			'option.accelerate': 'Tempus Fugit',
			'act.accelerate': 'Accelerate time!',
			'filter.accelerate': 'Tempus Fugit',
			'summary.accelerate': 'Accelerate time {0} times',
			'option.time.skip': 'Time Skip',
			'act.time.skip': 'Kittens combust Time crystal, {0} years skipped!',
			'ui.cycles': 'cycles',
			'ui.maximum': 'Maximum',
			'time.skip.cycle.enable': 'Enable time skip in cycle {0} and allow skip over this cycle',
			'time.skip.cycle.disable': 'Disable time skip in cycle {0} and disallow skip over this cycle',
			'time.skip.season.enable': 'Enable time skip in the {0}',
			'time.skip.season.disable': 'Disable time skip in the {0}',
			'time.skip.trigger.set': 'Enter a new trigger value for Time Skip (Combust time crystal). Should be a positive integer.',
			'summary.time.skip': 'Skip {0} years',
			'filter.time.skip': 'Time Skip',
			'option.time.reset': 'Reset Timeline (Danger!)',
			'status.reset.check.enable': 'Enable check {0} before Reset Timeline',
			'status.reset.check.disable': 'Disable check {0} before Reset Timeline',
			'ui.min': 'Min: {0}',
			'reset.check.trigger.set': 'Enter a new trigger value for {0}.\n-1 meaning must build this building until exceeding resource limit.',
			'reset.check': 'Trigger for {0} : {1}, you have {2}',
			'reset.checked': 'All conditions are met, the timeline will restart in next few seconds!',
			'reset.tip': 'You can cancel this reset by disable "Kitten Scientists" or "Time Control" or "Reset Timeline"',
			'reset.countdown.10': '10 - Harvesting catnip',
			'reset.countdown.9': '&nbsp;9 - Sacrificing Unicorns',
			'reset.countdown.8': '&nbsp;8 - Releasing lizards',
			'reset.countdown.7': '&nbsp;7 - Disassembling rail-guns',
			'reset.countdown.6': '&nbsp;6 - Starting time engines',
			'reset.countdown.5': '&nbsp;5 - Melting blackcoins',
			'reset.countdown.4': '&nbsp;4 - Turning off satellite',
			'reset.countdown.3': '&nbsp;3 - Opening temporal rifts',
			'reset.countdown.2': '&nbsp;2 - Boosting the chronoforge',
			'reset.countdown.1': '&nbsp;1 - Time engine start',
			'reset.countdown.0': '&nbsp;0 - Temporal rifts opened!',
			'reset.last.message': 'See you next poinciana recurrence',
			'reset.after': 'Nice to meet you, the cute Kittens Scientists will serve you',
			'reset.cancel.message': 'Timeline Reset canceled.',
			'reset.cancel.activity': 'Meoston, We Have a Problem.',
			'summary.time.reset.title': 'Summary of the last {0} timelines',
			'summary.time.reset.content': 'Gain {0} Karma.<br>Gain {1} Paragon.',
			'ui.close': 'close',

			'option.fix.cry': 'Fix Cryochamber',
			'act.fix.cry': 'Kittens fix {0} Cryochambers',
			'summary.fix.cry': 'Fix {0} Cryochambers',

			'summary.festival': 'Held {0} festivals',
			'summary.stars': 'Observed {0} stars',
			'summary.praise': 'Accumulated {0} worship by praising the sun',
			'summary.hunt': 'Sent adorable kitten hunters on {0} hunts',
			'summary.embassy': 'Built {0} embassies',
			'summary.feed': 'Fed the elders {0} necrocorns',
			'summary.tech': 'Researched: {0}',
			'summary.upgrade': 'Upgraded: {0}',
			'summary.building': 'Built: +{0} {1}',
			'summary.sun': 'Discovered: +{0} {1}',
			'summary.craft': 'Crafted: +{0} {1}',
			'summary.trade': 'Traded: {0}x {1}',
			'summary.year': 'year',
			'summary.years': 'years',
			'summary.separator': ' and ',
			'summary.day': 'day',
			'summary.days': 'days',
			'summary.head': 'Summary of the last {0}',
			'summary.show': 'Show activity',
		},
		'zh': {
			'option.observe': '观测天文现象',
			'option.festival': '举办节日',
			'option.praise': '赞美太阳',
			'option.shipOverride': '强制贸易船',
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
			'act.observe': '小猫观测了天文现象',
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

			'festival.hold': '呜呼，小猫的节日开始了',
			'festival.extend': '小猫加了一年钟',

			'build.embassy': '在 {1} 设立了 {0} 个大使馆',
			'build.embassies': '在 {1} 设立了 {0} 个大使馆',

			'act.praise': '赞美太阳! 转化 {0} 信仰为 {1} 虔诚',
			'parise.trigger.set': '输入新的赞美太阳的触发值，取值范围为 0 到 1的纯小数\n 当为0.98时且点出太阳革命，若虔诚太少小猫每天赞美太阳',
			'summary.praise.msg': '虔诚的小猫每天都会赞美太阳，直到太阳革命加成大于 {0} % (说你了虔诚太低了!)',
			'act.sun.discover': '小猫在宗教祷告了 {0} ',
			'act.sun.discovers': '小猫在宗教祷告了 {0} {1} 次',
			'act.sun.discovers.leader': '哲学家小猫在宗教祷告了 {0} {1} 次',

			'ui.infinity': '无限流',
			'ui.infinity.buildChronosphere': '修建传送仪',
			'ui.infinity.cryoFix': '冷冻仓修复',
			'ui.infinity.autoReset': '自动重置',
			'ui.infinity.autohunt': '无限打猎',
			'ui.infinity.autoTransform': '无限遗物',
			'ui.infinity.autoCT': '无限奥秘',
			'ui.infinity.skiptime': '燃烧时间水晶',
			'ui.infinity.chronosphere': '传送仪：{0} 不足以再修建 {1} 个传送仪',
			'ui.trigger.buildChronosphere.set': '输入一个新的 修建传送仪 触发值，大于等于 0 的整数。\n默认值 67 ，自动重置会强制检查数量。\n目前无自动调整，无限流前期使用需注意调整。\n可以稳定建造 666 以上传送仪时建议配合冷冻仓，\n使用 冷冻仓修复 功能，可同步获得大量业力。',
			'ui.trigger.cryoFix.set': '输入一个新的 冷冻仓修复 触发值，大于等于 0 的整数。\n建议小于等于已拥有的冷冻仓数量，\n仅在消耗业力 ＜1 且未开启 神圣灭绝 时会自动建造新的冷冻仓。',
			'ui.trigger.autohunt.set': '输入一个新的 无限打猎 触发值，取值范围为 0 到 1 的纯小数。\n设置为 0 时打猎次数为不消耗喵力的最大数量。\n仅在毛皮、象牙、独角兽中有 0 时触发。',
			'ui.trigger.autoTransform.set': '输入一个新的 无限遗物 触发值，取值范围为 0 到 1 的纯小数。\n设置为 0 时精炼次数为不消耗 时间水晶 的最大数量。\n遗物小于 ∞ 时触发。',
			'ui.trigger.skiptime.set': '输入一个新的 燃烧时间水晶 触发值， 在 [0,2^62] 内的整数。\n其值为需要到达的游戏日历年，默认为 40K。\n游戏规则内 能到达的最大日历年为\n2^62 = 第4,611,686,018,427,388,000年，\n最大真实年为 2^53 = 第9,007,199,254,740,992年\n本功能需要 时间水晶 超过 1e100 才允许使用',
			'ui.trigger.autoCT.set': '输入一个新的 无限奥秘 触发值，\n支持3个参数：-符号隔开数字参数。\n第一个数字：0-9，分别对应 10 个奥秘神学\n第二个数字：每轮升级次数（最大为 1000 ）\n第三个数字：需要达到的等级（最大 2^53）\n默认为空，必须自行设置\n只有拥有 ∞ 的时间水晶才能使用\n会自动清除精炼时间水晶产生的大量日志',
			'ui.items': '项目',
			'ui.disable.all': '全部禁用',
			'ui.enable.all': '全部启用',
			'ui.craft.resources': '资源',
			'ui.trigger': '触发条件',
			'ui.trigger.set': '输入新的 {0} 触发条件，取值范围为 0 到 1 的小数。\n\n 触发条件：当前触发资源 / 触发资源上限\n鼠标移动到该项目名字上能看到触发资源',
			'ui.trigger.resource': '触发资源为',
			'ui.none': '无',
			'ui.limit': '限制',
			'ui.craftLimit': 'AI平衡',
			'ui.upgradesLimit': '优选',
			'ui.trigger.filterGame.set': '设置游戏日志数量上限',
			'ui.trigger.shipOverride.set': '输入一个新的 强制贸易船 触发值，\n即当贸易船数量低于触发条件时，相当于未勾选贸易船AI平衡\n由于贸易船没有触发资源，不勾平衡相当于有资源就会合成贸易船',
			'ui.trigger.missions.set': '输入一个新的 探索星球 触发值,取值范围为 0 到 13 的整数。\n分别对应13颗星球。\n\n默认优先碧池探索，会暂时跳过沙丘',
			'ui.trigger.crypto.set': '输入一个新的 {0} 触发值，\n支持3个参数：-符号隔开数字参数\n第一个数字：当遗物数量大于触发值才会进行黑币交易\n第二个数字：买入的最高价（超过这价格就不会买了）\n第三个数字：卖出最低的价格。（低于这价格就不会卖出）\n默认10000-881-1060',
			'ui.engine': '启用小猫珂学家',
			'ui.build': '营火',
			'ui.space': '太空',
			'ui.craft': '工艺',
			'ui.upgrade': '升级',
			'ui.trade': '贸易',
			'ui.faith': '宗教',
			'ui.time': '时间',
			'ui.options': '小喵选项',
			'ui.filter': '日志过滤',
			'ui.distribute': '喵喵管理',
			'ui.max': 'Max: {0}',

			'msg.catnip': '如果寒冬猫薄荷产量低于0，小猫珂学家会停止消耗猫薄荷',

			'ui.upgrade.upgrades': '工坊升级',
			'ui.upgrade.techs': '科学科技',
			'ui.upgrade.races': '探险者出发!',
			'ui.upgrade.missions': '探索星球',
			'ui.upgrade.buildings': '升级建筑',
			'ui.upgrade.policies': '政策',
			'ui.upgrade.policies.load': '读取',
			'ui.upgrade.policies.show': '列表',

			'ui.faith.addtion': '宗教附加',
			'option.faith.best.unicorn': '自动最佳独角兽建筑',
			'option.faith.best.unicorn.desc': '自动献祭独角兽，并会以独角兽或象牙来决定建造独角兽牧场~象牙塔...太阳尖顶<br>当象牙不足时会切换成象牙模式具体可以点击小猫总结看到(概览还未更新象牙模式)',
			'unicornSacrifice' : '小猫让 {0} 个独角兽群返回了天上的维度，收集了 {1} 滴独角兽的眼泪',

			'option.faith.transcend': '自动最佳次元超越',
			'summary.transcend.catnip': '喵喵喵，你也不想次元超越再赞美群星后让小喵饿死吧？（猫薄荷产量将是：{0}）',
			'act.transcend': '消耗 {0} 顿悟，达到次元超越 {1}',
			'summary.transcend': '次元超越了 {0} 次',

			'option.faith.adore': '赞美群星',
			'act.adore': '赞美群星! 转化 {0} 虔诚为 {1} 顿悟',
			'act.adore.last': '下次小猫赞美群星，会等到虔诚大于 {0} ',
			'summary.adore': '赞美群星了 {0} 次，共积累了 {1} 顿悟',
			'summary.adore.catnip': '喵喵喵，你也不想赞美群星后让小喵饿死吧？（猫薄荷产量将是：{0}）',
			'summary.adore.solar': '聪明的小猫已经会算期望了，当太阳革命加成到达：{0}% 后才会赞美群星',
			'summary.adore.last': '下次赞美群星会等到虔诚大于{0} ',
			'adore.trigger.set': '赞美群星再赞美太阳后的太阳革命加成 ≥ 触发条件 * 1000%，\n触发条件取值范围为 0 到 1 的小数（0.001为自动模式）\n\n同时满足以下条件珂学家将自动赞美群星。\n1. 当前信仰 / 信仰上限 ≥ 0.98(赞美太阳触发条件设置0.98配合使用)\n2.有月球前哨\n3.赞美群星后的猫薄荷产量＞0。\n推荐启用该功能多放几个农民，喵喵保护协会不允许饿死喵喵喵\n优先次元超越 => 赞美群星 => 赞美太阳',

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

			'craft.force': '为了研究{1}，喵喵偷偷拿了资源合成了{0}，她才不会心痛了',
			'craft.forceSteel': '小猫为了工坊升级{0}，偷偷多使用了一些材料合成了钢',
			'craft.limited': '平衡{0}（理解为小猫AI控制触发条件、消耗率，挂机效率会比较高）',
			'craft.limitedTitle': '根据原材料和目标材料的数量',
			'craft.unlimited': '触发资源：{1}{0}',
			'craft.winterCatnip': '呐呐呐，你也不想让寒冬时小喵饿死吧？喵粮上交',

			'distribute.limited': '分配 {0} 不会超过Max',
			'distribute.leaderJob': '领袖工作为 {0} ',
			'distribute.leaderTrait': '领袖的特质为 {0} ',
			'distribute.unlimited': '分配 {0} 允许超过MAX',
			'distribute.makeLeader': '分配领袖',
			'act.distribute': '抓住一只空闲猫猫分配为 {0}',
			'act.distribute.catnip': '担心你的猫猫没有猫薄荷吸并强制分配到农民',
			'act.distributeLeader': '分配一只 {0} 猫猫领袖',
			'ui.max.set': '设置 {0} 的最大值',
			'summary.distribute': '帮助 {0} 只偷吃猫薄荷的猫猫找到工作',
			'set.leader': '{0}，喵喵喵！',

			'option.promote': '提拔领袖小猫',
			'act.promote': '花费了 {1} 黄金，小猫领袖被提拔到 {0} 级',
			'summary.promote': '提拔领袖 {0} 次',

			'ui.trigger.useWorkers.alert': '比如天文事件没观测、烧水晶慢，珂学家后台大概10才运行1次\n勾选将会在后台满速运行，注意会导致使用内存增多。\n电脑不好、内存< 8G的建议禁用\n推荐过滤全部日志会减少性能的消耗。\n\n需满足浏览器支持且游戏选项的web worker启用。\n确认后会自动重新勾选启用珂学家',
			'ui.timeCtrl': '时间操纵',
			'option.accelerate': '光阴似箭',
			'act.accelerate': '固有时制御，二倍速!',
			'act.accelerate.acl': '抓稳了，猫猫要开始加速了!',
			'act.accelerate.slow': '不行了，要减速了',
			'summary.accelerate': '小猫加速时间 {0} 次',
			'option.time.skip': '时间跳转',
			'act.time.skip': '燃烧时间水晶, 跳过接下来的 {0} 年!',
			'ui.cycles': '周期',
			'ui.maximum': '单次数量',
			'time.skip.cycle.enable': '启用在 {0} 跳转时间并允许跳过该周期',
			'time.skip.cycle.disable': '停止在 {0} 跳转时间并禁止跳过该周期',
			'time.skip.season.enable': '启用在 {0} 跳转时间',
			'time.skip.season.disable': '停止在 {0} 跳转时间',
			'time.skip.trigger.set': '拥有时间水晶数量大于该触发值才会燃烧时间水晶，取值范围为正整数。\n注意会计算时间水晶库存\n周期默认全勾就行，珂学家会自动判断是否停在红月\n每2秒烧水晶次数固定为 0.04x时计炉(无千禧年0.02)，故单次数量进一法就行\n如果资源回复后资源一直是满的，建议过滤大部分日志\n\n故长挂推荐：触发条件500，单次数量1，周期全勾',
			'summary.time.skip': '跳过 {0} 年',

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
			'auto.tip': '你可以通过取消 "首次自启珂学家" 以取消此次自动开启',

			'option.fix.cry': '修复冷冻仓',
			'act.fix.cry': '小猫修复了 {0} 个冷冻仓',
			'summary.fix.cry': '修复了 {0} 个冷冻仓',

			'summary.auto.academy': '小猫当科学快满了才会继续建造研究院',
			'summary.auto.biolab': '小猫为了节省合金发展，轨道测地学前不建造，太空制造前生物实验室优先级降低',
			'summary.auto.bls': '小猫存眼泪提炼悲伤(当然是在幸福度边上)',
			'summary.auto.broadcastTower': '小猫为了节省钛用来发展，太空制造解锁后建造更多的广播塔',
			'summary.auto.caravanserai': '储存黄金为了商队驿站。~打败斑马的第一步',
			'summary.auto.changeLeader': '如需对应项目-自动切换对应领袖特质<br>比如工艺项目切换到工匠合成更多材料、升级切换到科学家减少科学价格等等<br>但需同时勾选 提拔领袖小猫 和喵喵管理中的 分配领袖',
			'summary.auto.craftLimited': '每次运行都会合成工艺(即无视触发条件)，数量AI自动。挂机发展速度会远大于触发条件的。',
			'summary.auto.crossbow': '铁当然是要来用来改良弩，喵用喵说好',
			'summary.auto.harbor': '港口需要的金属板太多，小猫会少造亿点点(一定是斑马的阴谋',
			'summary.auto.hunter': '未发明弩和导航学，小猫当猎人欲望降低',
			'summary.auto.ironFactory': '如果钢的合成数量偏少，推荐关闭煅烧炉的自动化',
			'summary.auto.ironwood': '喵喵喵把铁收起来，希望住上向往的铁木小屋',
			'summary.auto.kittens': '计划生育! 猫粮产量不够了',
			'summary.auto.lag': '喵喵砖家提示你，燃烧时间水晶：最好不要设置工程师、在挑战页面挂机可以减少卡顿',
			'summary.auto.leader': '喵喵自觉顶替领袖，做特质相关项目。（领袖特质的具体效果可以参考右下角：百科-游戏标签-村庄-猫口普查）',
			'summary.auto.leaderPriest': '已经是成熟的小猫了，该学会好好念经了，领袖职业改为牧师',
			'summary.auto.lower': '未研究轨道测地学，小猫为了发展更快，故降低牧场、水渠、图书馆、研究院、粮仓、港口、油井、仓库的优先度',
			'summary.auto.lumberMill': '喵喵觉得木头已经发展好了，减少木材厂的建造',
			'summary.auto.magnetos': '也许没有石油了导致磁电机自动关机，小猫还是选择打开了它',
			'summary.auto.marker': '没有黑金字塔小猫拒绝了神印的建造',
			'summary.auto.mansion': '小猫为了节省钛和钢用来发展，宅邸优先度降低（2倍多资源）',
			'summary.auto.oxidation': '为菈妮氧化反应，小猫把钢全存起来了',
			'summary.auto.parchment': '还未研究地质学，毛皮用不了那么多，喵喵喵把毛皮存起来了',
			'summary.auto.pasture': '喵喵喵嫌弃了牧场，木材还是用来发展的好，真的是最后1个了',
			'summary.auto.religion': '大教堂前继续限制神殿和交易所(如果有问题的话',
			'summary.auto.reinforcedSaw': '用铁给木材厂升级换成加强锯，更加锋利的捏',
			'summary.auto.scholar': '科学产量可能有点不够，学者猫咪数量上限增至24~',
			'summary.auto.steamworks': '小猫曰：蒸汽工房要与磁电机成双成对',
			'summary.auto.templars': '没有足够的黄金和铁产量哪什么祷告圣殿骑士呢',
			'summary.auto.temple': '祷告太阳革命后才会建造神殿，真的不是偷懒喵',
			'summary.auto.tradepost': '祷告太阳革命前，交易所开摆',
			'summary.auto.workshop': '工坊只是解锁升级的 猫玩具罢了，现在小猫只愿意造1个工坊哦',
			'summary.auto.sattelite': '小猫足够虔诚，于是会先造卫星回回血',
			'summary.auto.scienceBld': '天文台、研究院、生物实验室科学上限快满了才会建造。',
			'summary.auto.spaceTrigger': '小猫发展飞快，把星图留给探索碧池星',
			'summary.auto.steelSaw': '小喵存着钢给木材厂换精钢锯，更加锋利了喵',
			'summary.auto.smelter': '神学前，冶炼专精的小猫会根据木材和矿物产量来控制熔炉上限',
			'summary.auto.tear': '小喵都做了什么?! 独角兽的眼泪加小猫幸福度的捏',
			'summary.auto.unicorn': '最佳独角兽建筑：{0}',
			'summary.auto.upgPasture': '当勾选太阳能发电站了，并有足够钛的产量、且缺电、且猫薄荷产量足够高时，小猫会贴心的帮你卖出全部牧场后，升级太阳能发电站!',
			'summary.auto.upgAqueduct': '当勾选水电站了，有太阳能发电站、且缺电、且猫薄荷产量足够高时，小猫会贴心的帮你卖出全部水渠后，升级水电站!',
			'summary.auto.upgLibrary': '当勾选数据中心了，概要数量大于 150X图书馆数量 时，小猫会贴心的帮你卖出全部图书馆后，升级数据中心!',
			'summary.auto.upgAmphitheatre': '当有贸易船或者钛产量足够高时，小猫会贴心的帮你卖出全部剧场后，升级广播塔!',
			'summary.upgrade.building.pasture': '卖出牧场 并升级为 太阳能发电站 !',
			'summary.upgrade.building.aqueduct': '卖出水渠 并升级为 水电站 !',
			'summary.upgrade.building.library': '卖出图书馆 并升级为 数据中心!',
			'summary.upgrade.building.amphitheatre': '卖出剧场 并升级为 广播塔!',

			'summary.resource': '小猫自动调整资源: {0} 的消耗率',
			'summary.moon': '小猫停在红月周期散热 {0} 次',
			'summary.time.skip.moon': '由于燃烧时间水晶支出大于收入，小猫决定攒难得素，停留在红月 {0} 次!',

			'summary.blackcoin.buy': '小猫出售遗物并买入 {0} 次黑币',
			'summary.blackcoin.sell': '小猫出售黑币并买入了 {0} 次遗物',

			'summary.accelerator': '电量寄了，大概只有加速器能关闭了（不会影响库存',
			'summary.catnip': '呐，你的猫猫没有猫薄荷吸并强制分配 {0} 个农民',
			'summary.calciner': '小猫因为你工坊升级了钢铁工厂，故关闭了煅烧炉自动化（其效果铁和煤转化钢没有100%~具体右下角参考百科）（她真的好温柔，😭）',
			'summary.mint': '秋梨膏别开铸币厂了，它现在真的很不行（具体右下角参考百科 游戏标签-其它建筑-铸币厂，其转化效率与喵力上限有关）',
			'summary.pumpjack': '小猫担心冬季电不够并关闭了 {0} 次油井自动化',
			'summary.biolab': '小猫担心冬季电不够并关闭了 {0} 个生物实验室(关了后科学上限和科学加成还会加成)',
			'summary.biolab.test': ' {0} 个生物实验室(非常没用的工坊升级)',
			'summary.temporalAccelerator': '小猫担心卡顿打开了时空加速器的自动化',
			'summary.reactor': '小猫向反应堆投入了铀开始发光呐',
			'summary.factory': '小猫为了空间的发展，把工厂全部启用呐',
			'summary.steamworks': '小猫向蒸汽工房加了煤开始排蒸汽呐',
			'summary.breweryOn': '已举办文化节，喵星人重新打开了酿酒厂~嗝',
			'summary.breweryOff': '节日没呐，小猫拒奢守俭，暂时关闭了酿酒厂',
			'summary.brewery': '小猫根据节日调整了 {0} 次酿酒厂',
			'summary.chronocontrolOn': '小猫开启了时间操纵延长时间悖论的持续天数',
			'summary.chronocontrolOff': '小猫关闭了时间操纵节省电力',
			'summary.chronocontrol': '小猫根据时间悖论调整了 {0} 次时间操纵',

			'summary.festival': '举办了 {0} 次节日',
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
			'summary.head': '猫国过去 {0} 的总结',
			'summary.show': '小猫总结',
		},
	};
	if (!i18nData[lang]) {
		console.error(lang + ' not found');
		i18nData[lang] = i18nData['en'];
	}

	const i18n = function (key, args) {
		// i18n('$xx') mean load string from game
		// i18n('xx') mean load string from ks
		if (key[0] === "$") {
			return $I(key.slice(1));
		}
		let value = i18nData[lang][key];
		if (typeof value === 'undefined') {
			value = i18nData['en'][key];
			if (!value) {
				console.error('key "' + key + '" not found');
				return '$' + key;
			}
			console.error('Key "' + key + '" not found in ' + lang);
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
		msgcolor: '#aa50fe', // dark purple
		// The color for activity summaries.
		summarycolor: '#009933', // light green
		// The color for log messages that are about activities (like festivals and star observations).
		activitycolor: '#E65C00', // orange
		// The color for resources with stock counts higher than current resource max
		stockwarncolor: '#DD1E00',
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
			// 无限流 infinity
			infinity: {
				enabled: false,
				allow: false,
				items: {
					buildChronosphere:    {enabled: false, subTrigger: 67, doneMark: false},
					cryoFix:              {enabled: false, subTrigger: 0, doneMark: false},
					autohunt:             {enabled: false, subTrigger: 0},
					autoTransform:        {enabled: false, subTrigger: 0},
					autoCT:               {enabled: false, subTrigger: ''},
					skiptime:             {enabled: false, subTrigger: 4e4, doneMark: false},
					autoReset:            {enabled: false},
				},
			},
			// Settings related to KS itself.
			engine: {
				// Should any automation run at all?
				enabled: false
			},
			// split form faith to make "Best Unicorn Building" easily
			unicorn: {
				items: {
					unicornPasture:     {require: false,         enabled: true,  variant: 'zp', label: i18n('$buildings.unicornPasture.label'), checkForReset: true, triggerForReset: -1},
					unicornTomb:        {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.unicornTomb.label'), checkForReset: true, triggerForReset: -1},
					ivoryTower:         {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.ivoryTower.label'), checkForReset: true, triggerForReset: -1},
					ivoryCitadel:       {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.ivoryCitadel.label'), checkForReset: true, triggerForReset: -1},
					skyPalace:          {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.skyPalace.label'), checkForReset: true, triggerForReset: -1},
					unicornUtopia:      {require: 'gold',        enabled: false, variant: 'z',  label: i18n('$religion.zu.unicornUtopia.label'), checkForReset: true, triggerForReset: -1},
					sunspire:           {require: 'gold',        enabled: false, variant: 'z',  label: i18n('$religion.zu.sunspire.label'), checkForReset: true, triggerForReset: -1},
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
					adore:                  {enabled: true, misc: true, label: i18n('option.faith.adore'), subTrigger: 0.001},
					transcend:              {enabled: true, misc: true, label: i18n('option.faith.transcend')},
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
					marker:             {require: 'unobtainium', enabled: false, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
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
					blackObelisk:       {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackNexus:         {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackCore:          {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					singularity:        {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackLibrary:       {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackRadiance:      {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blazar:             {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
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
					factory:        {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
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
					quarry:         {require: false,         enabled: true, max:300,checkForReset: true, triggerForReset: -1},

					// science
					observatory:    {require: 'iron',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					academy:        {require: 'wood',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					biolab:         {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					library:        {require: 'wood',        enabled: true, max:-1, stage: 0, checkForReset: true, triggerForReset: -1},
					dataCenter:     {require: false,         enabled: true, max:150, stage: 1, name: 'library', checkForReset: true, triggerForReset: -1},

					pasture:        {require: 'catnip',      enabled: true, max:150, stage: 0, checkForReset: true, triggerForReset: -1},
					solarFarm:      {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'pasture', checkForReset: true, triggerForReset: -1},
					aqueduct:       {require: 'minerals',    enabled: true, max:250, stage: 0, checkForReset: true, triggerForReset: -1},
					hydroPlant:     {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'aqueduct', checkForReset: true, triggerForReset: -1},

					// other
					amphitheatre:   {require: 'minerals',    enabled: true, max:60, stage: 0, checkForReset: true, triggerForReset: -1},
					broadcastTower: {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'amphitheatre', checkForReset: true, triggerForReset: -1},
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
				// seperately, because the game internals are slightly different.
				trigger: 0,
				items: {
					// Cath
					spaceElevator:  {require: 'unobtainium', enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					sattelite:      {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					spaceStation:   {require: 'oil',         enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// Moon
					moonOutpost:    {require: 'uranium',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					moonBase:       {require: 'unobtainium', enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

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
					heatsink:           {require: 'thorium', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					sunforge:           {require: false,     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// T-Minus
					cryostation:    {require: 'eludium',     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Kairo
					spaceBeacon:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Yarn
					terraformingStation: {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					hydroponics:         {require: 'kerosene',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Umbra
					hrHarvester:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Charon
					entangler:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

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
					temporalBattery:     {require: false,          enabled: false, max:0,  variant: 'chrono', checkForReset: true, triggerForReset: -1},
					blastFurnace:        {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					timeBoiler:          {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalAccelerator: {require: false,          enabled: false, max: 1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalImpedance:   {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					ressourceRetrieval:  {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
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
					timeSkip:           {enabled: true, subTrigger: 500,     misc: true, label: i18n('option.time.skip'), maximum: 1,
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
					thorium:    {require: 'uranium',     max: 0, limited: false, limRat: 0.5, enabled: true}
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
					dragons:    {enabled: false,  require: 'titanium',    allowCapped: false,    limited: true,
						summer:  false,  autumn:  true,  winter:  true,          spring:      true},

					zebras:     {enabled: true,   require: false,         allowCapped: false,    limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true},

					lizards:    {enabled: false,  require: 'minerals',    allowCapped: false,    limited: true,
						summer:  true,  autumn:  false, winter:  false,         spring:      false},

					sharks:     {enabled: false,  require: 'iron',        allowCapped: false,    limited: true,
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
					techs:     {enabled: true, limited: true},
					upgrades:  {enabled: true, limited: true, cache: false},
					policies:  {enabled: false},
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
					hunt:               {enabled: true,  subTrigger: 0.97, require: 'manpower', misc: true, label: i18n('option.hunt')},
					buildEmbassies:     {enabled: true,  subTrigger: 0.94, require: 'culture', misc: true, label: i18n('option.embassies')},
					shipOverride:       {enabled: true,  subTrigger: 170,  misc: true, label: i18n('option.shipOverride')},
					festival:           {enabled: true,                    misc: true, label: i18n('option.festival')},
					promote:            {enabled: true,                    misc: true, label: i18n('option.promote')},
					autofeed:           {enabled: true,                    misc: true, label: i18n('option.autofeed')},
					observe:            {enabled: true,                    misc: true, label: i18n('option.observe')},
					filterGame:         {enabled: true,  subTrigger: 300,  misc: true, label: '游戏日志过滤'},
					crypto:             {enabled: false, subTrigger: 1e4,  misc: true, label: i18n('option.crypto')},
					fixCry:             {enabled: false,                   misc: true, label: i18n('option.fix.cry')},
					//_steamworks:        {enabled: true,                   misc: true, label: i18n('option.steamworks')},
					saves:              {enabled: false,                   misc: true, label: '导出配置文件'},
					donate:             {enabled: false,                   misc: true, label: '显示捐赠原作者图标'},
					useWorkers:         {enabled: false,                   misc: true, label: i18n('option.useWorkers')},
					wiki:               {enabled: false,                   misc: true, label: '珂学家使用说明书（百科链接🐱）'},
					autoScientists:     {enabled: false,                   misc: true, label: '首次自启珂学家'},
				}
			},
			distribute: {
				religion: false,
				// Should KS automatically distribute free kittens
				enabled: false,
				items: {
					// dynamic priority. distribute to the job which have lowest (job.val / job.max) value.
					// if all jobs reach the max, then distribute kittens to unlimited job.
					woodcutter: {enabled: true, max: 29, limited: true},
					farmer:     {enabled: true, max: 1, limited: true},
					scholar:    {enabled: true, max: 9, limited: true},
					hunter:     {enabled: true, max: 24, limited: true},
					miner:      {enabled: true, max: 24, limited: true},
					priest:     {enabled: true, max: 3, limited: false},
					geologist:  {enabled: true, max: 40, limited: true},
					engineer:   {enabled: false, max: 0, limited: false},
					leader:     {enabled: true, leaderJob: 'farmer', leaderTrait: 'manager'},
				}

			},
			filter: {
				//What log messages should be filtered?
				enabled: false,
				console: {},
				items: {
					buildFilter:             {enabled: false,  label: i18n('filter.build'),     },
					researchFilter:          {enabled: false,  label: i18n('filter.research'),  },
					upgradeFilter:           {enabled: false,  label: i18n('filter.upgrade'),   },
					craftFilter:             {enabled: false,  label: i18n('filter.craft'),     },
					spaceFilter:             {enabled: false,  label: i18n('filter.space'),     },
					policyFilter:            {enabled: false,  label: i18n('filter.policy'),    },
					upgBldFilter:            {enabled: false,  label: i18n('filter.upgBld'),    },
					tradeFilter:             {enabled: false,  label: i18n('filter.trade'),     },
					embassyFilter:           {enabled: false,  label: i18n('filter.embassy'),   },
					huntFilter:              {enabled: false,  label: i18n('filter.hunt'),      },
					unicornSacrificeFilter:  {enabled: false,  label: i18n('filter.sacrifice'), },
					faithBuildFilter:        {enabled: false,  label: i18n('filter.faithBld'),  },
					// 赞美太阳 faith => parise
					faithFilter:             {enabled: false,  label: i18n('filter.praise'),    },
					adoreFilter:             {enabled: false,  label: i18n('filter.adore'),     },
					transcendFilter:         {enabled: false,  label: i18n('filter.transcend'), },
					accelerateFilter:        {enabled: false,  label: i18n('filter.accelerate'),},
					tcShatterFilter:         {enabled: false,  label: i18n('filter.time.skip'), },
					festivalFilter:          {enabled: false,  label: i18n('filter.festival'),  },
					astronomicalEventFilter: {enabled: false,  label: i18n('filter.star'),      },
					distributeFilter:        {enabled: false,  label: i18n('filter.distribute'),},
					leaderFilter:            {enabled: false,  label: i18n('filter.leader'),    },
					miscFilter:              {enabled: false,  label: i18n('filter.misc'),      }
				}
			},
			resources: {
				furs:        {enabled: true,  stock: 350, checkForReset: false, stockForReset: Infinity},
				coal:        {enabled: true,  stock: 0,   consume: 1},
				timeCrystal: {enabled: false, stock: 0,   checkForReset: true,  stockForReset: 500000}
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
			},
		}
	};

	// 无限流条件判断
	if (game.resPool.get('timeCrystal').value > 1e8 &&
		game.resPool.get('burnedParagon').value > 7e5 &&
		game.resPool.get('unobtainium').value > 8e9 ||
		game.resPool.get('timeCrystal').value > 1e100) {
		options.auto.infinity.allow = true;
	}
	if (!options.auto.infinity.allow) {
		options.auto.infinity.enabled = false;
	}

	// 游戏资源对象(方便引用
	let resMap = game.resPool.resourceMap;

	const printoutput = function (args) {
		let filter = args[1];
		let filters = options.auto.filter;
		if (filters.enabled && filter) {
			let items = filters.items;
			let item = items[filter];
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
		args.push(options.msgcolor);
		printoutput(args);
	};

	const activity = function () {
		let args = Array.prototype.slice.call(arguments);
		let activityClass = args.length > 1 ? args.pop() : 'miscFilter';
		args.push(activityClass);
		args.push(options.activitycolor);
		printoutput(args);
	};

	const summary = function () {
		const args = Array.prototype.slice.call(arguments);
		args.push('ks-summary');
		args.push(options.summarycolor);
		printoutput(args);
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
	const isummary = function(key, args, t) { summary(i18n(key, args), t); };
	//var iwarning = function(key, args, t) { warning(i18n(key, args), t); };

	// 缓存upgrade
	const cacheUpgrades = (metaUpgrades) => {
		let cache = options.auto.cache;
		if (!cache.upgrade) {cache.upgrade = {};}
		let Upg = cache.upgrade;
		for (let i in metaUpgrades) {
			if (!Upg[i]) {Upg[i] = [];}
			let upgrade = Upg[i];
			for (let j in metaUpgrades[i]) {
				let metaUpgrade = metaUpgrades[i][j];
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
		toolText: undefined,
		leaderTimer: undefined,
		time: undefined,
		start: function (msg = true) {
			options.interval = Math.ceil (100 / game.getTicksPerSecondUI()) * 100;
			if (game.isWebWorkerSupported() && game.useWorkers && options.auto.options.items.useWorkers.enabled) {
				if (this.worker) {return;}
				const blob = new Blob([
					"onmessage = function(e) { setInterval(function(){postMessage('miaowu')}, '" + options.interval + "' ); }"
				]);
				const blobURL = window.URL.createObjectURL(blob);

				this.worker = new Worker(blobURL);
				this.worker.addEventListener('message', this.iterate.bind(this));
				this.worker.postMessage("miaowu");
				if(msg) {message('后台珂学家上钟了~ ＞▽＜');}
			} else {
				if (this.loop) {return;}
				this.loop = setInterval(this.iterate.bind(this), options.interval);
				if(msg) {imessage('status.ks.enable');}
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
			if (!game.mobileSaveOnPause || game.loadingSave || game.isPaused)               {return;}
			let refresh = 0;
			this.time = performance.now();
			let auto = options.auto;
			let subOptions = auto.options;
			if (subOptions.enabled && subOptions.items.observe.enabled)                     {this.observeStars();}
			if (auto.upgrade.enabled)                                                       {refresh += ~~this.upgrade();}
			if (subOptions.enabled && subOptions.items.festival.enabled)                    {this.holdFestival();}
			if (auto.timeCtrl.enabled)                                                      {refresh += ~~this.timeCtrl();}
			if (auto.build.enabled)                                                         {refresh += ~~this.build();}
			if (auto.space.enabled)                                                         {refresh += ~~this.space();}
			if (auto.faith.enabled)                                                         {refresh += ~~this.worship();}
			if (refresh > 0 || auto.cache.upgrade)                                          {this.gameUpgrade();}
			if (auto.craft.enabled)                                                         {this.craft();}
			if (subOptions.enabled && subOptions.items.hunt.enabled)                        {this.delay();}
			if (subOptions.enabled && subOptions.items.autofeed.enabled)                    {this.autofeed();}
			if (auto.trade.enabled)                                                         {this.trade();}
			if (auto.time.enabled)                                                          {refresh += ~~this.chrono();}
			if (subOptions.enabled && subOptions.items.crypto.enabled)                      {this.crypto();}
			if (options.copyTrait)                                                          {this.setTrait();}
			if (subOptions.enabled && subOptions.items.promote.enabled)                     {this.promote();}
			if (subOptions.enabled)                                                         {refresh += ~~this.miscOptions();}
			if (auto.distribute.enabled)                                                    {refresh += ~~this.distribute();}
			if (refresh > 0)                                                                {this.delay('render');}
			this.calculateTime();
			//if (options.auto.timeCtrl.enabled && options.auto.timeCtrl.items.reset.enabled) {await this.reset();}
			// 防止合并冲突
			var inf = options.auto.infinity;
			var infItems = inf.items;
			if (inf.enabled && infItems.skiptime.enabled && !infItems.skiptime.doneMark)    {this.skiptime();}
			if (inf.enabled && infItems.autoCT.enabled)                                     {this.autoCT();}
			if (inf.enabled && infItems.autoTransform.enabled)                              {this.autoTransform();}
			if (inf.enabled && infItems.autohunt.enabled)                                   {this.autohunt();}
			if (inf.enabled && infItems.buildChronosphere.enabled &&
				!infItems.buildChronosphere.doneMark)                                       {this.buildChronosphere();}
			if (inf.enabled && infItems.cryoFix.enabled && !infItems.cryoFix.doneMark)      {this.cryoFix();}
			if (inf.enabled && infItems.autoReset.enabled)                                  {await this.infinityReset();}
		}, // 防止合并冲突
		autoCT: async function () {
			if (game.resPool.get('timeCrystal').value !== Infinity) {
				if (options.auto.infinity.items.autoCT.enabled) { $('#toggle-autoCT').click(); }
				message('无限奥秘：时间水晶太少');
				return;
			}
			subTrigger = options.auto.infinity.items.autoCT.subTrigger.split('-')
			if (subTrigger.length !== 3) {
				if (options.auto.infinity.items.autoCT.enabled) { $('#toggle-autoCT').click(); }
				message('无限奥秘：触发值设置错误');
				return;
			}
			var CT = game.religionTab.ctPanel.children[0].children[parseInt(subTrigger[0])];
			if (!CT || !CT.model.visible) {
				if (options.auto.infinity.items.autoCT.enabled) { $('#toggle-autoCT').click(); }
				message('无限奥秘：' + subTrigger[0] + ' 对应的奥秘神学未解锁。');
				return;
			}
			if (CT.model.metadata.val >= parseInt(subTrigger[2])) {
				if (options.auto.infinity.items.autoCT.enabled) { $('#toggle-autoCT').click(); }
				message('无限奥秘：' + CT.model.metadata.label + ' 以达到 ' + CT.model.metadata.val);
				return;
			}
			if (CT.model.metadata.upgrades) {
				var cache = CT.model.metadata.upgrades;
				delete CT.model.metadata.upgrades;
			} // 删除 upgrade 属性减少卡顿
			var refineTCBtn = game.religionTab.refineTCBtn;
			var transformCount = Math.floor(Number.MAX_VALUE / 25);
			var max = Math.min(parseInt(subTrigger[1]), parseInt(subTrigger[2]) - CT.model.metadata.val);
			for (var i = 0, k = 0; i < max && k < 10000; k++) {
				if (game.resPool.get('relic').value == Infinity) { i += CT.controller.build(CT.model, 1); }
				refineTCBtn.controller._transform(refineTCBtn.model, transformCount);
			}
			$("#clearLogHref").click()
			if (cache) { CT.model.metadata.upgrades = cache; }
			storeForSummary(CT.model.metadata.label, i, 'faith');
		}, // 防止合并冲突
		skiptime: async function () {
			if (game.resPool.get('timeCrystal').value < 1e100) {
				if (options.auto.infinity.items.skiptime.enabled) { $('#toggle-skiptime').click(); }
				message('燃烧时间水晶：时间水晶太少');
				return;
			}
			if (!game.workshop.get('chronoforge').researched) { return; }
			var year = game.calendar.year;
			if (year >= Math.pow(2, 62)) {
				options.auto.infinity.items.skiptime.doneMark = true;
				message('燃烧时间水晶：游戏日历年以达到最大值');
				return;
			}
			var shatter = game.timeTab.cfPanel.children[0].children[0];
			if (game.time.heat <= game.getEffect("heatMax")) {
				shatter.controller.doShatterAmt(shatter.model, 500);
				return;
			}
			var willSkip = Math.min(options.auto.infinity.items.skiptime.subTrigger, Math.pow(2, 62));
			willSkip -= year;
			if (willSkip > 0) {
				shatter.controller.doShatterAmt(shatter.model, willSkip);
				storeForSummary('time.skip', willSkip);
			} else {
				options.auto.infinity.items.skiptime.doneMark = true;
				message('燃烧时间水晶：游戏日历年以达到设定值');
				return;
			}
		}, // 防止合并冲突
		autohunt: async function () {
			if (game.resPool.get('furs').value > 0 &&
				game.resPool.get('ivory').value > 0 &&
				game.resPool.get('unicorns').value > 0
			) { return; }
			var huntTrigger = options.auto.infinity.items.autohunt.subTrigger;
			if (game.resPool.get('manpower').value == Infinity) {
				var huntCount = Math.floor(Number.MAX_VALUE / 100);
			} else if (huntTrigger > 0) {
				var huntCount = Math.floor(game.resPool.get('manpower').value * huntTrigger / 100);
			} else {
				var huntCount = Math.floor(game.resPool.get('manpower').value / 1e20);
			}
			if (huntCount) {
				game.resPool.addResEvent('manpower', -huntCount * 100);
				game.village.gainHuntRes(huntCount);
			}
		}, // 防止合并冲突
		autoTransform: async function () {
			if (game.resPool.get('relic').value == Infinity) { return; }
			var timeCrystal = game.resPool.get('timeCrystal').value;
			if (timeCrystal < 1e100) {
				if (options.auto.infinity.items.autoTransform.enabled) { $('#toggle-autoTransform').click(); }
				message('无限遗物：时间水晶太少');
				return;
			}
			var refineTCBtn = game.religionTab.refineTCBtn;
			if (refineTCBtn == undefined) { return; }
			var transformTrigger = options.auto.infinity.items.autoTransform.subTrigger;
			if (timeCrystal == Infinity) {
				var transformCount = Math.floor(Number.MAX_VALUE / 25);
			} else if (transformTrigger > 0) {
				var transformCount = Math.floor(timeCrystal * transformTrigger / 25);
			} else {
				var transformCount = Math.floor(timeCrystal / 1e20);
			}
			refineTCBtn.controller._transform(refineTCBtn.model, transformCount)
		}, // 防止合并冲突
		cryoFix: async function () {
			// 检查需要的功能是否全部开启
			if (!game.workshop.get('chronoforge').researched || !game.workshop.get('turnSmoothly').researched) {
				message('检查 时间锻造 和 时间波动 是否解锁');
				return;
			}
			// 建造新的冷冻仓
			var vsPanel = game.timeTab.vsPanel.children[0].children;
			var cryo = game.time.getVSU('cryochambers');
			var usedCryo = game.time.getVSU('usedCryochambers').on;
			var cryoPanel = vsPanel[1].model;
			var postApocalypse = gamePage.challenges.getChallenge('postApocalypse').on;
			if (!cryo.val && options.auto.infinity.items.cryoFix.subTrigger > usedCryo) {
				if (game.religion.getHGScalingBonus() == 1) {
					var buildCryo = options.auto.infinity.items.cryoFix.subTrigger - usedCryo;
					var canBuildCryo = Math.floor(Math.log(1 / cryoPanel.prices[0].val) / Math.log(cryo.priceRatio));
					var minCryo = Math.min(buildCryo, canBuildCryo);
					if (game.bld.get('chronosphere').on + postApocalypse < minCryo) {
						if (this.buildChronosphere(minCryo - postApocalypse) == undefined) { return; }
					}
					for (var i = 0; i < minCryo; i++) {
						vsPanel[1].controller.buyItem(cryoPanel, {}, function () { });
					}
				} else { message('冷冻仓：已开启神圣灭绝，不新建冷冻仓'); }
			}
			// 准备传送仪（数量= 拥有冷冻仓数量 - 后启示录完成次数）
			var cryochambers = cryo.val + usedCryo;
			var chronosphereMax = cryochambers - postApocalypse;
			if (this.buildChronosphere(chronosphereMax) == undefined) { return; }
			// 跳时间获取时间通量
			var shatter = game.timeTab.cfPanel.children[0].children[0];
			var temporalFlux = game.resPool.get('temporalFlux').maxValue - game.resPool.get('temporalFlux').value;
			if (temporalFlux > 0) {
				var willSkip = Math.ceil(temporalFlux / chronosphereMax);
				if (game.time.heat <= game.getEffect("heatMax")) { willSkip = Math.min(willSkip, 500); }
				shatter.controller.doShatterAmt(shatter.model, willSkip);
				storeForSummary('time.skip', willSkip);
			}
			// 修复冷冻仓
			var maxbuy = Math.floor(game.resPool.get('temporalFlux').value / 3000);
			for (var i = 0; i < Math.min(maxbuy, vsPanel[2].model.on); i++) {
				vsPanel[0].controller.buyItem(vsPanel[0].model, {}, function () { });
			}
			storeForSummary('fix.cry', i);
			// 判断条件
			if (cryo.on == cryochambers && game.resPool.get('temporalFlux').maxValue == game.resPool.get('temporalFlux').value) {
				if (game.village.sim.kittens.length < cryochambers) {
					message('缺少猫猫');
				} else { options.auto.infinity.items.cryoFix.doneMark = true; }
			}
		}, // 防止合并冲突
		buildChronosphere: function (chronosphereMax) {
			chronosphereMax = chronosphereMax == undefined ? options.auto.infinity.items.buildChronosphere.subTrigger : chronosphereMax;
			options.auto.build.items.chronosphere.max = chronosphereMax
			if (game.bld.get('chronosphere').on < chronosphereMax) {
				var chronosphere = chronosphereMax - game.bld.get('chronosphere').on;
				var returnValue = this.readyChronosphereRes(chronosphere);
				switch (returnValue) {
					case 'Infinity':
						options.auto.build.items.chronosphere.max = -1;
						return;
					case 'done':
						break;
					case 'manager':
						return; // 等待切换领袖
					case 'nagas':
						message('利维坦提前到来导致贸易标签无法解锁，请手动刷新界面');
						return;
					case 'manpower':
						message('传送仪：喵力不足以在打猎后和娜迦交易获得足够的蓝图');
						return;
					default:
						imessage('ui.infinity.chronosphere', [game.resPool.get(returnValue).title, chronosphere]);
						return;
				}
			}
			if (chronosphereMax == undefined) {
				options.auto.infinity.items.buildChronosphere.doneMark = true;
			} else { return 'done'; }
		}, // 防止合并冲突
		readyChronosphereRes: function (chronosphere) {
			var chronospherePrices = game.bld.getPrices('chronosphere', chronosphere);
			var infCount = 0;
			for (var i in chronospherePrices) { infCount += game.resPool.get(chronospherePrices[i].name).value == Infinity ? 1 : 0; }
			if (infCount == chronospherePrices.length) { return 'Infinity'; }
			if (game.village.leader.trait.name !== 'manager') {
				$('#toggle-leaderTrait-manager').click();
				return 'manager';
			} // 切换管理者领袖
			var race = game.diplomacy.get('nagas');
			if (!race.unlocked) { return 'nagas'; }
			for (var i in chronospherePrices) {
				if (chronospherePrices[i].name === 'blueprint') {
					var tradeCount = (chronospherePrices[i].val - game.resPool.get('blueprint').value) * 10;
					if (tradeCount > 0) {
						if (game.resPool.get('ivory').value != Infinity) {
							var ivory = race.buys[0].val * tradeCount == Infinity ? 1e307 : race.buys[0].val * tradeCount - game.resPool.get('ivory').value;
							var hunterRatio = game.getEffect('hunterRatio') + game.village.getEffectLeader('manager', 0);
							var huntCount = ivory / hunterRatio;
							if (huntCount > 0) {
								if (game.resPool.get('manpower').value - huntCount * 100 - tradeCount * game.diplomacy.getManpowerCost() > 0) {
									game.resPool.addResEvent('manpower', -huntCount * 100);
									game.village.gainHuntRes(huntCount);
								} else { return 'manpower'; }
							}
						}
						game.diplomacy.tradeAll(race);
					}
					continue;
				}
				if (!(game.resPool.get(chronospherePrices[i].name).value / 10 > chronospherePrices[i].val)) { return chronospherePrices[i].name; }
			} // 检查修建传送仪需要的资源，蓝图不足打猎后和娜迦交易，其他不足直接返回
			return 'done';
		}, // 防止合并冲突
		infinityReset: async function () {
			var items = options.auto.infinity.items;
			var enabledCount = 0;
			var doneCount = 0;
			for (var itemName in items) {
				if (items[itemName].doneMark == undefined) { continue; }
				if (items[itemName].enabled) {
					enabledCount++;
					if (items[itemName].doneMark) { doneCount++ } else { return; }
				}
			}
			if (doneCount != enabledCount) { return; }
			if (!game.workshop.get('fluxCondensator').researched) {
				message('通量冷凝器 未解锁不允许重置');
				return;
			}
			if (game.time.getVSU('usedCryochambers').on) {
				message('有 用过的冷冻仓 不允许重置');
				return;
			}
			if (game.bld.get('chronosphere').on < options.auto.infinity.items.buildChronosphere.subTrigger) {
				message('传送仪数量 < 修建传送仪触发值 不允许重置');
				return;
			}
			// 所有启用的选项全部标记为完成
			// 通量冷凝器 解锁
			// 没有 用过的冷冻仓
			// 传送仪数量 >= 修建传送仪触发值
			// 满足以上条件才允许重置
			game.resetAutomatic();
		},
		delay: function (render) {
			if (render) {
				let tool = dojo.byId('tooltip').textContent;
				if (options.renderTime + 6e5 < Date.now() || this.toolText !== tool) {
					msgSummary('changeLeader', true, 'noFilter');
					this.renderID = setTimeout(() => {
						let active = game.ui.activeTabId;
						if (active === 'Village' || active === 'Nummon') {return;}
						options.renderTime = Date.now();
						this.toolText = tool;
						game.ui.render();
					}, Math.min(197, 197 - Date.now() + game.timer.timestampStart));
				}
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
			for (var i = 0; i < game.challenges.challenges.length; i++){
				game.challenges.challenges[i].pending = false;
			}
			game.resetAutomatic();
			//=============================================================
			*/
		},
		timeCtrl: function () {
			const optionVals = options.auto.timeCtrl.items;
			let refreshRequired = 0;

			// Tempus Fugit
			if (optionVals.accelerateTime.enabled && game.science.get("calendar").researched) {
				const tf = resMap['temporalFlux'];
				if (tf.value >= Math.max(tf.maxValue * optionVals.accelerateTime.subTrigger, 1) && !game.time.isAccelerated) {
					game.time.isAccelerated = true;
					iactivity('act.accelerate', [], 'accelerateFilter');
					storeForSummary('accelerate', 1);
				}
				if (options.interval !== Math.ceil (100 / game.getTicksPerSecondUI()) * 100) {
					engine.stop(false);
					if (options.auto.engine.enabled) {
						if (options.interval === 2000) {
							iactivity('act.accelerate.acl');
						} else {
							iactivity('act.accelerate.slow');
						}
						engine.start(false);
					}
				}
			}

			// Combust time crystal
			TimeSkip:
			if (optionVals.timeSkip.enabled && game.workshop.get('chronoforge').researched) {
				let timeCrystalValue = resMap['timeCrystal'].value;
				let timeSkipMaximum = optionVals.timeSkip.maximum;
				const heatMax = game.getEffect('heatMax');
				let heatNow = game.time.heat;
				if (!timeSkipMaximum) {return 0;}
				let factor = game.challenges.getChallenge("1000Years").researched ? 5 : 10;
				if (heatNow - 15 * game.getEffect('heatPerTick') < 0.5 * heatMax) {
					timeSkipMaximum = Math.ceil(Math.max(50 / factor * game.getEffect('heatPerTick') / game.getTicksPerSecondUI() , timeSkipMaximum));
				}
				const subTrigger = optionVals.timeSkip.subTrigger;
				let cost = Math.max(subTrigger, this.craftManager.getStock('timeCrystal'), timeSkipMaximum);

				const currentCycle = game.calendar.cycle;
				const currentYear = game.calendar.year;
				const currentDay = game.calendar.day;

				if (timeCrystalValue < cost || currentDay < 0 || !optionVals.timeSkip[currentCycle] || heatNow >= heatMax) {
					break TimeSkip;
				}

				// 红月判断收支平衡
				let prestige = game.prestige.getPerk("numerology").researched;
				if (currentCycle === 5 && optionVals.timeSkip[currentCycle] && prestige && game["nummon"]){
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
						if (cycleYear !== optionVals.timeSkip.moonMsg) {
							optionVals.timeSkip.moonMsg = cycleYear;
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
				let wait = optionVals.timeSkip.wait;
				if (!optionVals.timeSkip[game.calendar.seasons[season].name] || (wait !== false && currentCycle === 5)) {
					if (wait === 1 && currentCycle === 5) {
						optionVals.timeSkip.wait = game.calendar.year;
						break TimeSkip;
					} else if (wait === false || wait === currentYear || wait === 1) {
						break TimeSkip;
					} else if (wait !== currentYear) {
						optionVals.timeSkip.wait = false;
					}
				}

				let heatMin = 4 * timeSkipMaximum * factor;
				let booleanForHeat = (game.time.heat > game.getEffect('heatMax') - Math.min(heatMin, 20 * game.time.getCFU("blastFurnace").on + 20));
				let moonBoolean = optionVals.timeSkip[5];
				if (moonBoolean && prestige && optionVals.timeSkip.wait === false && booleanForHeat) {
					optionVals.timeSkip.wait = 1;
					iactivity('summary.moon', [1]);
					storeForSummary('moon', 1);
				}

				let yearsPerCycle = game.calendar.yearsPerCycle;
				let remainingYearsCurrentCycle = yearsPerCycle - game.calendar.cycleYear;
				let cyclesPerEra = game.calendar.cyclesPerEra;
				let canSkip = Math.min(Math.floor((heatMax - heatNow) / factor), timeSkipMaximum);
				let willSkip = 0;
				if (canSkip < remainingYearsCurrentCycle){
					willSkip = canSkip;
				} else {
					willSkip += remainingYearsCurrentCycle;
					canSkip -= remainingYearsCurrentCycle;
					let skipCycles = 1;
					while (canSkip > yearsPerCycle && optionVals.timeSkip[(currentCycle + skipCycles) % cyclesPerEra]) {
						willSkip += yearsPerCycle;
						canSkip -= yearsPerCycle;
						skipCycles += 1;
					}
					if (optionVals.timeSkip[(currentCycle + skipCycles) % cyclesPerEra] && canSkip > 0) {willSkip += canSkip;}
				}
				if (willSkip > 0) {
					willSkip = Math.min(willSkip, Math.max(2500 , game.getEffect("temporalPressCap") * 25));

					if (game.time.getCFU("ressourceRetrieval").val) {
						optionVals.timeSkip.adore = true;
						options.auto.options.items.hunt.time = true;

						// 调整消耗率到1
						let addCraft = optionVals.timeSkip;
						if (!addCraft.craft) {
							const resList = ['catnip', 'coal', 'iron', 'oil', 'uranium', 'science'];
							let name = '';
							resList.forEach((res) => {
								options.auto.craft.autoConsume[res] = true;
								name = name + resMap[res].title + '，';
							});
							addCraft.craft = true;
							activity(i18n('summary.resource', [name]));
							storeForSummary('resource');
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
			let village = game.village;
			let leader = village.leader;
			if (game.science.get('civil').researched && leader) {
				if (village.jobs[5].unlocked) {leader.exp += 5 * game.getEffect("skillXP");}
				let Distribute = options.auto.distribute;
				let optionLeader = Distribute.items.leader;
				let countDown = this.leaderTimer;
				if (optionLeader.enabled && leader.trait === optionLeader.leaderTrait && countDown) {this.leaderTimer++;}
				// 5分钟
				if (!leader.rank && resMap['gold'].value < 8e3 && countDown < 31 && countDown) {return;}

				let rank = leader.rank;
				let gold = this.craftManager.getValueAvailable('gold', true);

				// game.village.sim.goldToPromote will check gold
				// game.village.sim.promote check both gold and exp
				if (village.sim.goldToPromote(rank, rank + 1, gold)[0] && village.sim.promote(leader, rank + 1) === 1) {
					let census = game['villageTab'].censusPanel.census;
					iactivity('act.promote', [rank + 1, 25 + 25 * rank], 'leaderFilter');
					census.renderGovernment(census.container);
					census.update();
					if (optionLeader.enabled && leader.trait === optionLeader.leaderTrait) {this.leaderTimer = 1;}
					storeForSummary('gold', 25 + 25 * rank, 'resConsume');
					storeForSummary('promote', 1);
				}
			}
		},
		distribute: function () {
			const distributeItem = options.auto.distribute.items;
			let leaderVals = distributeItem.leader;
			let refreshRequired = 0;
			let village = game.village;
			if (leaderVals.enabled && game.science.get('civil').researched && !game.challenges.isActive("anarchy") && !options.copyTrait) {
				let traitName = leaderVals.leaderTrait;
				let leaderJobName = leaderVals.leaderJob;

				let Leader = village.leader;
				if (leaderJobName === 'farmer' && traitName === 'manager' && game.getEffect('priceRatio') && village.getJob('priest').unlocked) {
					leaderJobName = 'priest';
					if (Leader && Leader.job !== 'priest') {msgSummary('leaderPriest');}
				}

				if (Leader === null && village.sim.kittens.length) {
					return game["villageTab"].censusPanel.census.makeLeader(village.sim.kittens[0]);
				}
				let optionsTheocracy = false;
				if (options.auto.upgrade.items.policies.enabled) {
					optionsTheocracy = (options.policies === undefined) ? false : options.policies.some(obj => obj === 'theocracy');
				}
				if (optionsTheocracy || game.science.getPolicy('theocracy').researched) {leaderJobName = "priest";}
				let distributeJob = village.getJob(leaderJobName);
				if (Leader == null || !(Leader.job === leaderJobName && Leader.trait.name === traitName)) {
					let traitKittens = village.sim.kittens.filter(kitten => kitten.trait.name === traitName);
					if (traitKittens.length !== 0) {
						if (distributeJob.unlocked && distributeJob.value < village.getJobLimit(leaderJobName)) {
							let correctLeaderKitten = traitKittens.sort(function(a, b) {return b.rank - a.rank === 0 ? b.exp - a.exp : b.rank - a.rank;})[0];
							if (distributeJob.value >= distributeItem[leaderJobName].max && distributeItem[leaderJobName].limited && distributeJob.value) {
								village.sim.removeJob(leaderJobName, 1);
							}
							village.unassignJob(correctLeaderKitten);
							correctLeaderKitten.job = leaderJobName;
							village.getJob(leaderJobName).value++;
							game["villageTab"].censusPanel.census.makeLeader(correctLeaderKitten);
							refreshRequired += 1;
							iactivity('act.distributeLeader', [i18n('$village.trait.' + traitName)], 'distributeFilter');
							storeForSummary('distribute', 1);
						}
					}
				}
			}

			let minerItem = options.auto.distribute.items.miner;
			let agriculture = game.science.get("agriculture").researched;
			let happiness = village.happiness;
			let normalWinterCatnip = (this.craftManager.getPotentialCatnip(false) <= 0.85 * happiness || (village.jobs[1].value === 0 && distributeItem['farmer'].enabled));
			let freeKittens = village.getFreeKittens();
			let miner = village.jobs[4];
			let religionCatnip = options.auto.distribute;
			if (!freeKittens) {
				let woodcutter = village.getJob('woodcutter').value;
				if (minerItem.enabled && miner.unlocked && !miner.value && woodcutter > 1 && village.sim.kittens.length) {village.sim.removeJob('woodcutter');}
				if (religionCatnip.religion && woodcutter > 2) {
					village.sim.removeJob('woodcutter');
				} else {
					return refreshRequired;
				}
			}

			let resCatnip = resMap["catnip"];
			let resKitten = resMap["kittens"];
			let catnipValue = (resCatnip.value - (1800 * happiness * resKitten.value) < 0 || resKitten.maxValue - resKitten.value === 1 || freeKittens > 1);
			if (religionCatnip.religion || (normalWinterCatnip && agriculture && catnipValue && resCatnip.value <= resCatnip.maxValue)) {
				religionCatnip.religion = false;
				village.assignJob(village.getJob("farmer"), 1);
				iactivity('act.distribute.catnip', [], 'distributeFilter');
				iactivity('act.distribute', [i18n('$village.job.' + "farmer")], 'distributeFilter');
				storeForSummary('catnip', 1);
				return refreshRequired;
			}

			let jobName = '';
			let minRatio = Infinity;
			let currentRatio = 0;
			let revolution = game.religion.getSolarRevolutionRatio();
			let expect = options.auto.faith.addition.autoPraise.expect;
			let scholar = game.workshop.get('spaceManufacturing').researched || game.challenges.isActive("blackSky")
				|| (resMap['starchart'].value > 1e5 && game.calendar.year < 10);
			expect = expect && expect > 5 && revolution < expect * 0.3 && village.jobs[5].unlocked;
			for (let i = village.jobs.length - 1; i >= 0; i--) {
				let job = village.jobs[i];
				let unlocked = job.unlocked;
				if (!unlocked) {continue;}

				let name = job.name;
				let jobItem = distributeItem[name];
				if (!jobItem.enabled) {continue;}

				let maxGame = village.getJobLimit(name);
				let val = job.value;
				if (val >= maxGame) {continue;}

				let maxKS = Math.max(0, jobItem.max);
				let limited = jobItem.limited;
				if (name === 'hunter') {
					let manpowerJobRatio = game.getEffect('manpowerJobRatio');
					if (manpowerJobRatio < 0.5) {
						maxKS = (village.maxKittens > 10) ? 2 : 0;
					} else if ((manpowerJobRatio <= 0.75 && !game.science.get('navigation').researched) || expect) {
						maxKS = Math.round(maxKS * 0.42);
						if (!expect && !activitySummary.other['auto.hunter'] && val >= maxKS -1) {
							let div = game.msg($I("village.job.hunter.flavor"), null, null, true);
							$(div.span).css('color', "#ff589c");
							msgSummary('hunter');
						}
					} else {
						msgSummary('hunter', true);
					}
				} else if (game.challenges.isActive("atheism")) {
					limited = false;
					// 无神论
				}
				if (name === 'geologist') {
					let geodesy = game.workshop.get("geodesy").researched;
					if (!geodesy && resMap['iron'].perTickCached < 50) {maxKS = Math.round(maxKS * 0.5);}
					if (!game.science.get('mechanization').unlocked && !geodesy) {maxKS = 1;}
					if (resMap['starchart'].value > 1e5 && !game['diplomacyTab'].visible) {maxKS = 1;}
				}
				if (name === 'scholar' && limited) {
					let more;
					if (!game.getEffect('shatterTCGain') && scholar) {
						more = true;
					}

					if (resPercent('science') > 0.4) {
						maxKS = 0;
					} else if (more) {
						maxKS = Math.max(maxKS, 24);
						if (val < maxKS) {msgSummary('scholar');}
					}
				}
				if (name === 'miner' && !game.science.get('writing').researched) {maxKS = Math.round(maxKS * 0.3);}
				if (name === 'priest' && resMap['starchart'].value > 1e4 && revolution < 3) {maxKS = Math.max(maxKS, 20);}
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
			const levi = game.diplomacy.get("leviathans");
			const nCorn = resMap["necrocorn"];
			if (!(levi.unlocked && nCorn.value > 0)) {return;}
			if (levi.energy === game.diplomacy.getMarkerCap()) {return;}
			if (nCorn.value >= 1) {
				game.diplomacy.feedElders();
				iactivity('act.feed', [] , 'unicornSacrificeFilter');
				storeForSummary('feed', 1);
			} else if (0.25 * (1 + game.getEffect("corruptionBoostRatio")) < 1) {
				storeForSummary('feed', nCorn.value);
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
			let subTrigger = (crypto.subTrigger == null) ? "10000-860-1060" : options.auto.options.items.crypto.subTrigger.toString().split('-');
			//var isNumber = /^\d+(\.\d+)?$/;

			let relicTrigger = parseFloat(subTrigger[0]);
			let minCoinPrice = parseFloat(subTrigger[1]);
			let maxCoinPrice = parseFloat(subTrigger[2]);

			if (subTrigger.length !== 3 || !relicTrigger || !minCoinPrice || !maxCoinPrice) {
				if (!relicTrigger) {
					relicTrigger = 10000;
				}
				options.auto.options.items.crypto.subTrigger = relicTrigger + "-881-1060";
				//kittenStorage.items['set-crypto-subTrigger'] = JSON.stringify(relic + "-881-1060");
				//$("#set-crypto-subTrigger")[0].title = relic;
				return saveToKittenStorage();
			}

			// Exchanges up to a certain threshold, in order to keep a good exchange rate, then waits for a higher treshold before exchanging for relics.
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
			let religion = game.religion;
			let refreshRequired = 0;
			let noPastureCopy, i;
			let voidOrder = game.prestige.getPerk("voidOrder").researched;
			let rrVal = game.time.getCFU("ressourceRetrieval").val;

			if (option.bestUnicornBuilding.enabled) {
				let btn = this.getBestUnicornBuilding();
				let zigguratOn = game.bld.get('ziggurat').on;
				let tearHave = resMap['tears'].value;
				let unicorns = resMap['unicorns'].value;
				let blackPyramid = religion.getZU("blackPyramid");
				let sunspire = religion.getZU('sunspire').on;
				if (btn) {
					let oneTear = !tearHave && unicorns >= 1000 && zigguratOn && !game.ironWill;
					let buttonPrices;
					let blackPyramidVal = blackPyramid.getEffectiveValue(game);
					let black = builds['blackPyramid'].enabled && blackPyramidVal && blackPyramid.unlocked;
					let bls = sunspire > 1 && resMap['sorrow'].value < 5 && !black && resMap['unobtainium'].maxValue > 5e3;
					// 精炼5悲伤
					if (bls) {
						msgSummary('bls');
						if (resMap['tears'].value >= 10e3) {
							resMap['tears'].value -= 10e3;
							resMap['sorrow'].value += 1;
							activity('小喵把眼泪炼成悲伤');
						}
					}
					if (btn.name === "unicornPasture" && !oneTear && !bls) {
						if (unicorns >= Math.pow(btn.priceRatio + game.getEffect("priceRatio"), btn.val) * 2) {
							buildManager.build(btn.name, undefined, 1);
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
						if (blackPyramidVal && builds['marker'].enabled) {
							let marker = religion.getZU('marker').on;
							let tearPrice = 5e3 * Math.pow(1.15, marker);
							if (tearHave < tearPrice  && sunspire > Math.min(9 + marker, 19)) {tearNeed = Math.min(tearPrice, tearNeed);}
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
								//game.religionTab.sacrificeBtn.controller._transform(game.religionTab.sacrificeBtn.model, needSacrifice);
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
				if (!resMap['alicorn'].unlock || option.bestUnicornBuilding.confirm < 2) {
					$('#toggle-bestUnicornBuilding').click();
					option.bestUnicornBuilding.confirm += 1;
				}
				//builds = Object.assign({}, builds, Object.fromEntries(Object.entries(options.auto.unicorn.items).filter(([k,v]) => v.variant != 'zp')));
				if (options.auto.unicorn.items.unicornPasture.enabled) {
					this.build({unicornPasture: {require: false, enabled: true}});
				}
				noPastureCopy = JSON.parse(JSON.stringify(options.auto.unicorn.items));
				noPastureCopy = Object.assign(noPastureCopy, options.auto.faith.items);
				delete noPastureCopy.unicornPasture;
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
			let epiphanyInc = worship / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			let epiphanyAfterAdore = epiphany + epiphanyInc;
			let worshipAfterAdore = 0.01 + resourceFaith.value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			let solarRevolutionAdterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, maxSolarRevolution);

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
			if (moonBoolean && booleanForAdore && praiseLess && PraiseSubTrigger) {option.autoPraise.subTrigger = 0.98;}

			// 超越 和 赞美群星
			if (Math.min(0.999, Math.max(0.98, PraiseSubTrigger)) <= rate || doAdoreAfterTimeSkip) {
				// Transcend
				if (option.transcend.enabled && transcendenceReached) {
					let TranscendTimes;
					let nextLevelCatnip = religion._getTranscendTotalPrice(tt + 1) - religion._getTranscendTotalPrice(tt);
					let transcendCatnip = this.catnipForReligion(nextLevelCatnip);
					transcendCatnip = transcendCatnip > 0 || (transcendCatnip < 0 && resMap['catnip'].value + 400 * transcendCatnip > 0);
					if (tt > 10) {
						TranscendTimes = 1;
					} else if (tt < 11 && moonBoolean && worship > 1e5 && apocripha && transcendCatnip) {
						TranscendTimes = 4;
					} else {
						TranscendTimes = 0;
					}

					while (TranscendTimes) {
						epiphany = religion.faithRatio;
						tt = religion.transcendenceTier;

						// Epiphany Recommend
						let adoreIncreaseRatio = Math.pow((tt + 2) / (tt + 1), 2);
						let needNextLevel = religion._getTranscendTotalPrice(tt + 1) - religion._getTranscendTotalPrice(tt);
						let x = needNextLevel;
						let blackObelisk = religion.getTU("blackObelisk").val;
						let obeliskRatio = ((tt + 1) * 5 * blackObelisk + 1000) / (tt * 5 * blackObelisk + 1000);
						let k = adoreIncreaseRatio * obeliskRatio;
						let epiphanyRecommend = (1 - k + Math.sqrt(80 * (k * k - 1) * x + (k - 1) * (k - 1))) * k / (40 * (k + 1) * (k + 1) * (k - 1)) + x + x / (k * k - 1);

						// Transcend Condition
						let booleanEpiphany = (epiphany > epiphanyRecommend && worship > Math.min((tt - 3) * 1e6, 0) + 1e6);
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
							blackObelisk = religion.getTU("blackObelisk");
							blackObelisk.calculateEffects(blackObelisk, game);
							game.msg($I("religion.transcend.msg.success", [religion.transcendenceTier]));
							// ========================================================================================================
							// DO TRANSCEND END
							// ========================================================================================================
							tt = religion.transcendenceTier;
							if (tt < 8) {
								forceStep = true;
							}
							for (let i = 0; i < religion.transcendenceUpgrades.length; i++) {
								let upgrade = religion.transcendenceUpgrades[i];
								if (!upgrade.unlocked && tt >= upgrade.tier && upgrade.name !== 'mausoleum') {
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
					printoutput(['小猫贴心得无视超越按钮禁用','ks-default', options.activitycolor]);
				}

				// Adore
				let adoreFactor = (!religion.faithRatio || tt);
				let catnipAdore = this.catnipForReligion();
				catnipAdore = catnipAdore > 0 || (catnipAdore < 0 && resMap['catnip'].value + 400 * catnipAdore > 0);
				catnipAdore = transcendenceTier > 9 || catnipAdore;
				// 期望太阳革命加成赞美群星
				let production = game.prestige.getParagonProductionRatio();
				let paragonFactor = (production < 2) ? Math.max(2 / game.prestige.getParagonProductionRatio(), 2) : 1;
				let transformTier = 0.5 * Math.log(religion.faithRatio) + 3.45;
				let factor = (adoreFactor < 11 || rrVal) ? 1.92 + Math.log1p(solarRLimit) : 1.32;
				let expectSolarRevolutionRatio = game.getLimitedDR(paragonFactor * factor * Math.pow(Math.E, 0.65 * transformTier) , 100 * maxSolarRevolution);
				let adoreTri = option.adore.subTrigger;
				let expect = solarRatio * 1e2 < expectSolarRevolutionRatio;
				if (adoreTri === 0.001 && booleanForAdore && expect && tt) {
					let solarAdore = solarRevolutionAdterAdore <= Math.max(1, expectSolarRevolutionRatio * 0.01 - 0.5);
					if (solarAdore) {booleanForAdore = false;}
					expectSolarRevolutionRatio = Math.floor(expectSolarRevolutionRatio * 1e2) / 100;
					let filter = !rrVal || !voidOrder;
					if (expectSolarRevolutionRatio !== activitySummary.other['adore.solar'] && filter && solarAdore) {
						activity(i18n('summary.adore.solar', [expectSolarRevolutionRatio]));
						activitySummary.other['adore.solar'] = expectSolarRevolutionRatio;
					}
				}
				if (booleanForAdore && adoreTri !== 0.001) {
					booleanForAdore = adoreTri * 10 < solarRevolutionAdterAdore;
				}
				if ((booleanForAdore && catnipAdore) || forceStep) {
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
			let factor = (voidOrder || activitySummary['adore'][0]) ? 1 : 0.3;
			factor = factor * (game.prestige.getPerk('vitruvianFeline').researched) ? 1 : 0.5;
			factor = (game.workshop.get('spaceManufacturing').researched) ? 5 : factor;
			let maxPercent = (resMap['starchart'].value > 2e5) ? 90 : 80;
			let expectSolarRevolutionRatio = game.getLimitedDR(0.3 * Math.pow(Math.E, transformTier) * factor, maxPercent * maxSolarRevolution);
			option.autoPraise.expect = expectSolarRevolutionRatio * 0.01;
			let solarRevolution = religion.getRU('solarRevolution').on;
			// 彩色玻璃
			let glass = religion.getRU("stainedGlass").on || resMap['gold'].value < 250 || resourceFaith.perTickCached < 2
				|| game.getEffect('culturePerTickBase') < 0.9;
			// 大教堂
			let basilica = religion.getRU("basilica").on || resMap['gold'].value < 750 || resourceFaith.perTickCached < 6
				|| game.getEffect('culturePerTickBase') < 2.7;
			praiseLess = !praiseLess && PraiseSubTrigger <= 1;
			if (solarRevolution && praiseLess && solarRatio < expectSolarRevolutionRatio * 0.01 && glass && basilica) {
				PraiseSubTrigger = 0;
			}

			// 无盛典点出阳光赞歌
			let fR = (1 + game.getUnlimitedDR(epiphany, 0.1) * 0.1);
			let praiseForSolar = !solarRatio && !voidOrder;
			let fPraise = resourceFaith.value > (1000 - worship) / fR && worship < 1000;
			fPraise = fPraise || (resourceFaith.value > (150 - worship) / fR && worship < 150 && !voidOrder);
			fPraise &= praiseForSolar;
			// Praise
			let fistReset = (rate < 0.98 || !voidOrder || solarRevolution);
			let booleanForPraise = (autoPraiseEnabled && rate >= PraiseSubTrigger && resourceFaith.value > 0.001 && fistReset);
			if (booleanForPraise || forceStep || fPraise) {
				if (praiseLess && !forceStep && rate < 0.98 && Date.now() > option.autoPraise.time + 4e5 && !timeSkipAdore) {
					option.autoPraise.time = Date.now();
					let expectSolar = game.getDisplayValueExt(expectSolarRevolutionRatio);
					activity(i18n('summary.praise.msg', [expectSolar]));
					activitySummary.other['praise.msg'] = expectSolar;
				}
				let apocryphaBonus = religion.getApocryphaBonus();
				let val = resourceFaith.value;
				let worshipInc = val * (1 + apocryphaBonus);
				activitySummary['praise'][1] += worshipInc;
				activitySummary['praise'][0] += 1;
				storeForSummary('faith', val, 'resConsume');
				iactivity('act.praise', [game.getDisplayValueExt(resourceFaith.value), game.getDisplayValueExt(worshipInc)], 'faithFilter');
				religion.praise();
				let faithMap = resMap['faith'];
				faithMap.value = Math.max(Math.min(resMap['faith'].maxValue, faithMap.value + 2 * resMap['faith'].perTickCached), 0);
			}
			return refreshRequired;
		},
		_worship: function (builds) {
			let faithItems = options.auto.faith.items;
			let copyBuilds = JSON.parse(JSON.stringify(builds || options.auto.faith.items));
			let buildManager = this.religionManager;
			let bulkManager = this.bulkManager;
			let Religion = game.religion;
			let solarMeta = Religion.getRU('solarRevolution');
			let Unlocked = (Religion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched) && resMap['faith'].maxValue > 750 && resMap['gold'].maxValue > 500;
			let trigger = (!solarMeta.on && Unlocked && Religion.getRU('solarchant').on && Religion.transcendenceTier) ? 1.1 : options.auto.faith.trigger;

			this.setTrait('wise');
			let leaderRatio = 1 - game.getLimitedDR(0.09 + 0.01 * (1 + game.prestige.getBurnedParagonRatio()), 1.0);
			if (!solarMeta.on && Unlocked && faithItems.solarRevolution.enabled && Religion.faith > solarMeta.faith) {
				buildManager.build("solarRevolution", "s", 1);
			}
			if (!Religion.getRU('solarchant').on && resMap['faith'].value > 100 && Religion.faith > 150) {buildManager.build("solarchant", "s", 1);}
			if (!game.religion.getRU("sunAltar").on && Religion.getRU("basilica").on) {copyBuilds['goldenSpire'].enabled = false;}
			if (!Religion.getRU("basilica").on && copyBuilds['basilica'].enabled) {
				if (game.religion.faith > 5e4) {
					copyBuilds['sunAltar'].enabled = false;
					copyBuilds['goldenSpire'].enabled = false;
				}
				if (!game.religion.getRU("stainedGlass").on && resMap['science'].maxValue > 65e3) {copyBuilds['scholasticism'].enabled = false;}
			}
			// 圣殿骑士
			if (!game.ironWill && !game.workshop.get('orbitalGeodesy').researched) {
				copyBuilds['templars'].enabled = false;
				if (!Religion.getRU("templars").on && game.religion.faith > 75e3) {msgSummary('templars');}
			}

			if (Religion.getSolarRevolutionRatio() > 9.98 + 0.9 * game.getEffect("solarRevolutionLimit") && game.workshop.get('spaceManufacturing').researched && activitySummary['adore'][0]) {
				let noMax = ['scholasticism','goldenSpire','stainedGlass','basilica','templars'];
				noMax.forEach(index => {copyBuilds[index].max = -1;});
			}
			// 神印
			let marker = Religion.getZU("marker");
			if (!Religion.getZU("blackPyramid").getEffectiveValue(game) && game.resPool.hasRes(marker.prices) && marker.unlocked) {
				msgSummary('marker');
				copyBuilds['marker'].enabled = false;
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			let metaData = {};
			for (let name in copyBuilds) {
				let build = copyBuilds[name];
				let metabuild = buildManager.getBuild(name, build.variant);
				let faithEnabled = (metabuild.on && metabuild.noStackable) || Religion.faith < metabuild.faith;
				if (build.variant === 's' && faithEnabled) {build.enabled = false;}
				if (build.variant === "z" && !game.bld.getBuildingExt("ziggurat").meta.on) {build.enabled = false;}
				if (build.variant === 'c' && !game.science.get('cryptotheology').researched) {build.enabled = false;}
				metaData[name] = metabuild;
			}

			const buildList = bulkManager.bulk(copyBuilds, metaData, trigger);

			let refreshRequired = 0;
			let count;
			for (let entry in buildList) {
				if (buildList[entry].count > 0) {
					count = (Religion.getRU('solarRevolution').on) ? buildList[entry].count : 1;

					buildManager.build(buildList[entry].id, buildList[entry].variant, count);
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
			let cryoLimited = game.bld.get("chronosphere").on + game.getEffect("cryochamberSupport");
			cryochambers.max = (cryochambersMax === -1) ? cryoLimited : Math.min(cryoLimited, cryochambersMax);
			let RR = builds['ressourceRetrieval'];
			let rrMax = RR.max;
			RR.max = (rrMax === -1) ? 100 : Math.min(100, rrMax);
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			const metaData = {};
			for (let name in builds) {
				let build = builds[name];
				if (build.variant === 'chrono' && !game.workshop.get('chronoforge').researched) {build.enabled = false;}
				if (build.variant === 'void' && !game.science.get('voidSpace').researched) {build.enabled = false;}
				metaData[name] = buildManager.getBuild(name, build.variant);

				// let button = buildManager.getBuildButton(name, build.variant);
				// if (!button || !button.model.metadata) {
				// 	if (name === "cryochambers") {continue;}
				// 	game["timeTab"].render();
				// 	continue;
				// }
				// if (!button.model.enabled) {
				// 	button.controller.updateEnabled(button.model);
				// 	continue;
				// }
				// let model = button.model;
				// metaData[name].tHidden = (!model.visible || !model.enabled);
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger);

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
			let revolutionRatio = game.religion.getSolarRevolutionRatio();
			let refreshRequired = 0;

			this.setTrait('scientist');
			//upgradeManager.workManager.render();
			//upgradeManager.sciManager.render();
			if (upgrades.techs.enabled && game["libraryTab"].visible) {
				const tech = game.science.techs;
				upgrades.techs.limited = true;
				let nanotechnology = game.science.get('nanotechnology').researched;
				techLoop:
				for (let upg of tech) {
					if (upg.researched || !upg.unlocked) {continue;}
					if (upgrades.techs.limited) {
						let name = upg.name;
						let titanium = resMap['titanium'].value;
						if (name === 'biology' && titanium < 3000) {continue;}
						if (name === 'biochemistry' && resMap['compedium'].value < 2e3) {continue;}
						if (name === 'ecology' && titanium < 6000) {continue;}
						if (name === 'ai' && titanium < 10000) {continue;}
						if (name === 'oilProcessing' && !nanotechnology && titanium < 10e3) {continue;}
						if (name === 'drama' && craftManager.getTickVal(craftManager.getResource('parchment'), true) < 1) {continue;}
						if (name === 'cryptotheology' && resMap['relic'].value < 105) {continue;}
						if (name === 'particlePhysics' && !nanotechnology && titanium < 1000) {continue;}
						if (name === 'antimatter' && !game.workshop.get('chronoforge').researched) {continue;}
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
				upgrades.upgrades.limited = true;
				let noup = [];
				if (upgrades.upgrades.limited) {
					let resStarchart = resMap['starchart'];
					let isFilter;
					noup = ['biofuel','gmo','invisibleBlackHand', 'steelPlants'];
					if (!game.bld.getBuildingExt('pasture').meta.on || game.bld.getBuildingExt('pasture').meta.stage === 0) {
						noup = noup.concat(['photovoltaic', 'thinFilm', 'qdot']);
					}
					if (!game.bld.getBuildingExt('aqueduct').meta.on || game.bld.getBuildingExt('aqueduct').meta.stage === 0) {
						noup.push('hydroPlantTurbines');
					}

					if (game.getEffect('priceRatio')) {noup.push('register');}
					let autoM = ['factoryAutomation','advancedAutomation','pneumaticPress'];
					let pacifism = game.challenges.isActive("pacifism");
					if (game.bld.get('steamworks').on < 6 && !pacifism) {
						noup = noup.concat(['printingPress','offsetPress','photolithography'], autoM);
						if (!game.bld.get('steamworks').on) {noup.push('combustionEngine');}
					} else if (!game.opts.enableRedshift) {
						noup = noup.concat(autoM);
					}
					// 和平主义
					if (pacifism) {noup = noup.concat(['bolas',"huntingArmor","steelArmor","alloyArmor","nanosuits"]);}
					// 碳封存
					let magneto = game.bld.getBuildingExt('magneto').meta;
					if (magneto.val && magneto.on === magneto.val) {noup.push('carbonSequestration');}
					if (game.village.getJob('engineer').value < 5 && !game.workshop.getCraft('eludium').value) {
						noup = noup.concat(['spaceEngineers','aiEngineers','chronoEngineers','amFission','factoryRobotics','factoryOptimization']);
					}
					// 太阳革命
					if (!game.religion.getRU('solarRevolution').on && resMap['faith'].maxValue >= 750 && game.religion.faith > 1000) {
						noup.push('caravanserai');
					}
					// 缺电过滤碳封存
					if (game.resPool.energyProd - game.resPool.energyCons <= 50) {
						noup = noup.concat(['carbonSequestration', 'pumpjack']);
					}
					// 过滤钛升级
					if (game.globalEffectsCached['titaniumPerTickAutoprod'] < 0.006 && resMap['ship'].value < 40 && revolutionRatio > 1){
						noup = noup.concat(['titaniumAxe','silos','combustionEngine','astrolabe']);
					}
					// 过滤测地学
					isFilter = revolutionRatio > 8 || orbitalGeodesy;
					if (isFilter && !game.space.meta[0].meta[3].val && resStarchart.value < 1600 && revolutionRatio > 6) {
						noup.push('geodesy');
						if (resPercent('coal') > 0.8 && !orbitalGeodesy) {
							noup.push('fuelInjectors');
						}
					}
					// 没测地学过滤 地外计划
					if (revolutionRatio < 7 && !geodesy && resStarchart.value > 400) {noup.push('titaniumSaw');}
					// 冷藏
					if (!geodesy) {
						noup = noup.concat(['seti','refrigeration']);
					}
					// 印刷机 光刻机
					if (resMap['oil'].value < 7.5e4 && !geodesy) {
						noup = noup.concat(['offsetPress','photolithography']);
						if (resPercent('coal') > 0.8 && resPercent('oil') < 0.95 && !orbitalGeodesy) {
							noup.push('fuelInjectors');
						}
					}
					if (game.bld.getBuildingExt('factory').meta.val < 3) {noup.push('factoryLogistics');}
					// 微型亚空间
					if (!game.workshop.get('mWReactor').researched) {
						noup = noup.concat(['eludiumReflectors', 'amBases', 'coldFusion', 'amReactors','cryocomputing']);
					}
					// 星链 上行
					if (game.bld.getBuildingExt('library').meta.stage === 0) {
						noup = noup.concat(['starlink', 'uplink', 'cryocomputing']);
					}
					// 加速器
					if (game.bld.getBuildingExt('accelerator').meta.val < 5) {
						noup = noup.concat(['darkEnergy', 'stasisChambers', 'voidEnergy', 'tachyonAccelerators', 'lhc']);
					}
					// AI核心
					if (game.bld.getBuildingExt('aiCore').meta.val < 5) {
						noup = noup.concat(['machineLearning', 'aiBases']);
					}
					// 反应堆槽
					if (!game.bld.getBuildingExt('reactor').meta.val || resMap['ship'].value < 169) {noup = noup.concat(['reactorVessel', 'enrichedUranium']);}
					// 太阳能卫星
					if (game.space.getBuilding('sattelite').val < 6) {
						noup = noup.concat(['solarSatellites', 'satelliteRadio']);
					}
					// 星图产出
					if (resStarchart.perTickCached) {
						if (game.challenges.isActive('blackSky') && resStarchart.perTickCached < 1) {
							noup = noup.concat(['geodesy']);
						}
					} else {
						noup = noup.concat(['hubbleTelescope']);
					}
					// 钍反应堆
					if (resMap['thorium'].value < 3e4) {noup.push('thoriumReactors');}
					// 天体观测仪
					isFilter = resMap['science'].maxValue > 19e4 && resStarchart.value < 2075;
					if (isFilter || resMap['titanium'].value < 30) {
						noup = noup.concat(['astrolabe','unobtainiumReflectors','lhc','titaniumMirrors']);
					}
					// 无政府挑战
					if (game.challenges.isActive("anarchy")) {
						noup = noup.concat(['logistics', 'augumentation', 'internet', 'neuralNetworks','register']);
					}
					// 钢铁意志
					if (game.ironWill) {
						noup = noup.concat(['logistics','augumentation','internet','neuralNetworks','mineralHoes','ironHoes','miningDrill',
							'mineralAxes','ironAxes','steelAxe','titaniumAxe','alloyAxe','ironwood','concreteHuts',
							'unobtainiumHuts','eludiumHuts', 'geodesy','register','unobtainiumDrill','assistance',
							'astrophysicists','register']);
					} else if (!game.workshop.get('concreteHuts').researched) {
						noup = noup.concat(['concreteWarehouses', 'concreteBarns']);
					}
				}

				workLoop:
				for (let upg of work) {
					if (upg.researched || !upg.unlocked) {continue;}
					let upgName = upg.name;
					if (noup.indexOf(upgName) !== -1) {continue;}

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
				(function (){
					const policies = game.science.policies;
					let lastIndex = i = 0;
					const length = policies.length;
					const toResearch = [];
					let ratio = (game.science.get('astronomy').researched) ? 1 : 3;

					// A **little** more efficient than game.science.getPolicy if options.policies is right order
					for (i in options.policies) {
						let targetName = options.policies[i];
						for (let j in policies) {
							j = parseInt(j); // fuck js
							let policy = policies[(j + lastIndex) % length];
							if (policy.name === targetName) {
								lastIndex = j + lastIndex + 1;
								if (!policy.researched) {
									if (policy.blocked) {break;}
									if (policy.unlocked) {
										if (policy.requiredLeaderJob === undefined ||
											(game.village.leader != null && game.village.leader.job === policy.requiredLeaderJob)
										){
											toResearch.push(policy);
										}
									}
								}
								break;
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
				if (subTrigger === 4 && resMap['alicorn'].value && manu && resMap['starchart'].value > 1e5) {subTrigger = 12;}
				let index = 0;
				let skip = !orbitalGeodesy && !game.ironWill && !geodesy;
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
					if (!game["diplomacyTab"].racePanels.length || maxRaces === 'render') {game["diplomacyTab"].render();}
				}
			}

			if (upgrades.buildings.enabled) {
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				let energy = (winterProd && winterProd - 5 < game.resPool.energyCons);
				let pastureMeta = game.bld.getBuildingExt('pasture').meta;
				let pastures = (pastureMeta.stage === 0) ? pastureMeta.val : 0;
				let aqueductMeta = game.bld.getBuildingExt('aqueduct').meta;
				let aqueducts = (aqueductMeta.stage === 0) ? aqueductMeta.val : 0;
				let upgradeBuilding = (name, meta) => {
					let prices = meta.stages[1].prices;
					if (bulkManager.singleBuildPossible(meta, prices, 1 )) {
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
						game.bld.getBuildingExt(name)._metaCacheStage = 1;
						buildManager.manager.render();
						iactivity('summary.upgrade.building.' + name, [] , 'upgBldFilter');
						storeForSummary('upgrade.building.' + name);
						msgSummary('upg' + name.charAt(0).toUpperCase() + name.slice(1), true);
						return 2;
					}
				};

				if (pastureMeta.stage === 0) {
					if (pastureMeta.stages[1].stageUnlocked) {
						let broadcastTower = game.bld.getBuildingExt('amphitheatre').meta.stage === 1;
						let boolean = (energy && broadcastTower && game.getResourcePerTick('titanium', true) > 25);
						if (craftManager.getPotentialCatnip(true, 0, aqueducts) > 45 && boolean && options.auto.build.items.solarFarm.enabled) {
							return upgradeBuilding('pasture', pastureMeta);
						} else {
							msgSummary('upgPasture', '', 'upgBldFilter');
						}
					}
				}

				if (aqueductMeta.stage === 0) {
					if (aqueductMeta.stages[1].stageUnlocked) {
						let catnip = craftManager.getPotentialCatnip(true, pastures, 0) > 90;
						if (catnip && energy && pastureMeta.stage === 1 && options.auto.build.items.hydroPlant.enabled) {
							return upgradeBuilding('aqueduct', aqueductMeta);
						} else {
							msgSummary('upgAqueduct', '', 'upgBldFilter');
						}
					}
				}

				let libraryMeta = game.bld.getBuildingExt('library').meta;
				let scienceBldMax = 0.1 * libraryMeta.totalEffectsCached.scienceMax / (1 + game.prestige.getParagonProductionRatio());
				if (libraryMeta.stage === 0) {
					if (libraryMeta.stages[1].stageUnlocked) {
						let ratio = 1 + game.bld.get('biolab').val * 0.01;
						let paragon = Math.max(1 + game.prestige.getParagonProductionRatio(), 2) / 2;
						ratio = resMap['compedium'].value * 3 > scienceBldMax / ratio && game.bld.getEffect('scienceMax') > 1e6;
						ratio |= craftManager.getTickVal(resMap['concrate']) > 600 * paragon;
						if (ratio && options.auto.build.items.dataCenter.enabled) {
							if (winterProd >= game.resPool.energyCons + 150 && !game.challenges.isActive("energy")) {
								return upgradeBuilding('library', libraryMeta);
							}
						} else {
							msgSummary('upgLibrary', '', 'upgBldFilter');
						}
					}
				}

				let amphitheatreMeta = game.bld.getBuildingExt('amphitheatre').meta;
				if (amphitheatreMeta.stage === 0) {
					if (amphitheatreMeta.stages[1].stageUnlocked) {
						if (game.getResourcePerTick('titanium', true) > 2 || resMap['ship'].value > 200) {
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
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.build.trigger;
			let refreshRequired = 0;
			let blackSky = game.challenges.isActive('blackSky');
			let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
			let atheism = game.challenges.isActive('atheism');
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let spaceManufacturing = game.workshop.get('spaceManufacturing').researched;

			let solarMeta = game.religion.getRU('solarRevolution');
			let revolutionRatio = game.religion.getSolarRevolutionRatio();

			let science = game.science;
			let theology = science.get('theology').researched;
			let build2 = {};
			let copyItem;
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			// 每次由iterate第一次运行builds为空
			if (typeof builds != 'object') {
				let Production = game.prestige.getParagonProductionRatio();
				copyItem = {};
				let items = JSON.parse(JSON.stringify(options.auto.build.items));

				let scienceMap = resMap['science'];
				let scienceTrigger = scienceMap.value / scienceMap.maxValue;
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
							bld.max = (bldMax === -1) ? game.bld.getBuildingExt(name).meta.val + 2 : bldMax;
						}
					}
				};
				if (revolutionRatio < 50) {
					let number = (resMap['starchart'].value > 1e5) ? 200 : 300;
					scienceBuild('observatory', number, 0.96);
					scienceBuild('academy', Math.max(22 * (Production + 1), 100), 0.98);
					scienceBuild('biolab', 200, 0.99);
				}

				let winterTick = craftManager.getPotentialCatnip(false);
				let machinery = science.get('machinery').researched;
				let astronomy = science.get('astronomy');
				let set = game.stats.getStat("totalResets").val && !astronomy.researched;
				if (scienceTrigger < 0.98 && set && (!machinery || astronomy.unlocked) && resMap['minerals'].value) {
					items['academy'].max = 6 * (Production + 1);
					msgSummary('academy');
				}
				// 粮仓
				if (spaceManufacturing && items['barn'].max < 16) {items['barn'].max = -1;}
				//图书馆牧场
				let pasture = items['pasture'];
				let smelter = items['smelter'];
				if (theology) {
					msgSummary('smelter', true);
					msgSummary('pasture', true);
				} else {
					let smelterM = game.bld.getBuildingExt('smelter').meta;
					smelter.max = 1;
					if (Math.ceil(resMap['wood'].perTickCached * 2) > smelterM.val && Math.ceil(resMap['minerals'].perTickCached) > smelterM.val) {
						smelter.max = smelterM.val + 1;
						msgSummary('smelter');
					}
					let pastureMeta = game.bld.getBuildingExt('pasture').meta;
					if (pastureMeta.unlocked && pastureMeta.val > 10) {
						msgSummary('pasture');
					}
					if (!winterTick) {
						items['pasture'].max = 20;
					}
					let hutVal = game.bld.getBuildingExt('hut').meta.val - 2;
					items['library'].max = (hutVal > 0) ? Math.floor(hutVal * 11) : items['library'].max;
				}
				// 工坊
				if (!science.get('writing').researched && resMap['minerals'].value) {
					items['workshop'].max = 1;
					msgSummary('workshop');
				} else {
					msgSummary('workshop', true);
				}

				//熔炉
				if (!game["workshopTab"].visible && !game.challenges.isActive('winterIsComing') && science.get('animal').researched) {
					smelter.max = 0;
					if (pasture.max === -1) {
						items['pasture'].enabled = false;
						msgSummary('pasture');
					}
				}
				// 没铀不造反应堆
				let reactor = items['reactor'];
				let sattelite = game.space.getBuilding('sattelite').on;
				if (!spaceManufacturing && resMap['titanium'].maxValue > 125000 || !sattelite) {reactor.max = 25 + 10 * blackSky;}
				if (resMap['uranium'].value < 100) {reactor.max = 0;}

				// 采石场
				if (resMap['oil'].maxValue < 55e3) {items['quarry'].max = 40 / (1 + Production);}
				// 庙塔
				let priceRatio = game.getEffect("priceRatio");
				let zigguratM = game.bld.getBuildingExt('ziggurat').meta;
				let factor = Math.pow(zigguratM.priceRatio + priceRatio, zigguratM.val);
				if (zigguratM.val > 10 && resMap['blueprint'].value < 3 * factor && !resMap['alicorn'].unlocked) {items['ziggurat'].max = 0;}
				// 天文台
				if (blackSky && resMap['science'].maxValue > 3e5 && !orbitalGeodesy) {items['observatory'].max = 0;}

				// 解锁磁电机才会造蒸汽工房
				let steamW = items['steamworks'];
				if (!game.challenges.isActive("pacifism") && !game.bld.get('magneto').val) {
					if (game.bld.get('steamworks').unlocked && steamW.enabled && resMap['gear'].value > 19) {
						msgSummary('steamworks');
						steamW.enabled = false;
					}
				} else {
					msgSummary('steamworks', true);
				}
				// 无节日不造酿酒厂
				let Brewery = items['brewery'];
				if (!science.get('metalurgy').researched || resMap['spice'].value < 2e3) {Brewery.max = 5;}
				if (!game.calendar.festivalDays) {Brewery.max = 0;}

				let temple = items['temple'];
				let tradepost = items['tradepost'];
				let solarUnlocked = (game.religion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched);
				let goldTri = resMap['gold'].value / resMap['gold'].maxValue;
				if (!blackSky && resMap['titanium'].value < 25) {
					temple.max = Math.max(30, 10 * (1 + revolutionRatio));
				}
				// 商队驿站
				let caravanserai = game.workshop.get('caravanserai');
				if (caravanserai.unlocked && !caravanserai.researched && resMap['ivory'].value > 1e4) {
					temple.enabled = false;
					tradepost.max = 21;
					msgSummary('caravanserai');
				}
				let religionRU = game.religion.getRU("stainedGlass").on && game.religion.getRU("basilica").on && game.religion.getRU("sunAltar").on;
				let expect = options.auto.faith.addition.autoPraise.expect;
				if (!religionRU && game.religion.faith > 2e4 && resMap['gold'].maxValue > 780 && revolutionRatio) {
					temple.max = 25 - Math.min(13, revolutionRatio * 11);
					tradepost.max = 40 - Math.min(22, revolutionRatio * 12);
					msgSummary('religion');
				}
				// 测地学 交易所
				if (!geodesy && !revolutionRatio) {
					tradepost.max = 30;
				}
				// 太阳革命前不造交易所和神殿
				if (!solarMeta.on && !atheism && theology) {
					if (options.auto.faith.items.solarRevolution.enabled && resMap['faith'].maxValue > 750 && resMap['gold'].maxValue > 560) {
						if (science.get('philosophy').researched) {
							msgSummary('temple');
							temple.max = Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio()));
							if (resMap['gold'].value > 560) {
								temple.max = game.bld.getBuildingExt('temple').meta.val + 1;
							}
						}
					}
					if (game.religion.transcendenceTier) {
						tradepost.max = 12;
						if (resMap['gold'].value > 525) {tradepost.max = Math.min(18, game.bld.getBuildingExt('tradepost').meta.val + 1);}
					}
					msgSummary('tradepost');
				} else if (theology) {
					msgSummary('temple', true);
					msgSummary('tradepost', true);
				}
				// 神学前 交易所神殿
				if (!theology && science.get('philosophy').researched && goldTri < 0.96 && !atheism) {
					let one = game.village.happiness < 4 && game.bld.get('temple').val === 1 && game.prestige.getPerk('renaissance').researched;
					temple.max = (one) ? 1 : Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio()));
					tradepost.max = 12;
					msgSummary('tradepost');
				}

				// 油井 ===> 预计与煅烧 数量关系
				// 煅烧炉
				let calciner = items['calciner'];
				let calcinerMax = calciner.max;
				if (orbitalGeodesy) {
					if (!spaceManufacturing || !sattelite) {
						calciner.max = (calcinerMax === -1) ? Math.min(47 + 47 * game.getEffect("productionRatio"), 95 - 30 * blackSky)
							: Math.min(50, calcinerMax);
					}
				} else {
					if (scienceMap.maxValue > 150000 && resMap['oil'].maxValue > 35000) {
						calciner.max = (calcinerMax === -1) ? 25 : Math.min(25, calcinerMax);
					} else {
						let amt = (1 + Production * 7) * Math.max(1, Math.log(revolutionRatio));
						calciner.max = (calcinerMax === -1) ? amt : Math.min(amt, calcinerMax);
					}
				}
				if (game.getResourcePerTick('oil', true) < 0.6) {
					calciner.max = 0;
					items['magneto'].max = 0;
				}

				// 太阳能
				let solarFarm = items['solarFarm'];
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				if (!spaceManufacturing && resMap['titanium'].maxValue > 125000 && winterProd > game.resPool.energyCons) {
					solarFarm.enabled = false;
				}

				// 广播塔 宅邸
				let mansion = items['mansion'];
				let broadcastTower = items['broadcastTower'];
				let archeology = science.get('archeology').researched;
				let shipVal = resMap['ship'].value;
				let titaniumMore = (orbitalGeodesy || shipVal > 600);
				if (science.get('electronics').researched && !spaceManufacturing) {
					msgSummary('broadcastTower');
					broadcastTower.max = 8;
					mansion.max = 80;
				} else {
					msgSummary('broadcastTower', true);
				}
				// 宅邸生物实验室
				let titaniumMap = resMap['titanium'];
				let biolab = items['biolab'];
				if (!geodesy && !orbitalGeodesy) {
					if (!blackSky && titaniumMap.value > 1 && mansion.max) {
						mansion.max = 12;
					}
					if (resMap['alloy'].value > 25 && science.get('biology').researched) {
						biolab.max = 2;
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
					} else {
						biolab.max = 10 * revolutionRatio;
						if (resPercent('titanium') < 0.96) {
							biolab.max = 10;
							let bTowerMax = broadcastTower.max;
							broadcastTower.max = (bTowerMax === -1) ? 30 : Math.max(30, bTowerMax);
							mansion.max = Math.max(135 - game.village.maxKittens, Math.floor(17 * (Production + 1)));
						}
					}
				}
				if (resMap['starchart'].value > 1e5 && !spaceManufacturing && !game.calendar.festivalDays && !game.ironWill) {
					items['observatory'].max = 50;
					items['amphitheatre'].max = 17;
					items['academy'].max = 60;
					items['logHouse'].max = game.bld.getBuildingExt('logHouse').meta.val + 1;
					items['hut'].max = game.bld.getBuildingExt('hut').meta.val + 1;
					smelter.max = 60;
					items['ziggurat'].max = 1;
				}

				//铸币厂
				if (!game.challenges.isActive("pacifism")) {
					let mint = items['mint'];
					let manpower = resMap['manpower'].maxValue;
					let mintV = game.bld.getBuildingExt('mint').meta.val;
					if (manpower <= 2e4) {
						mint.enabled = false;
					} else if (!mintV) {
						mint.max = 2;
					} else if (!orbitalGeodesy && (!geodesy || !game.workshop.get("miningDrill").researched)) {
						mint.enabled = false;
					}
				}

				// 挑战等3个传送仪一起造
				if (priceRatio && resMap['unobtainium'].value < 8794 && game.calendar.futureSeasonTemporalParadox < 0) {
					items['chronosphere'].enabled = false;
				}

				// 黑暗天空造煅烧炉
				let calcinerMeta = game.bld.getBuildingExt('calciner').meta;
				if (blackSky && options.auto.build.items.calciner.enabled && calcinerMeta.unlocked && !calcinerMeta.val) {
					buildManager.build("calciner", undefined, 1);
				}
				let optimize = ['library','academy','pasture','barn','harbor','oilWell','warehouse','broadcastTower','accelerator','mansion','quarry','aqueduct','chapel', 'lumberMill','factory','biolab'];
				for (let name in items) {
					let item = items[name];
					if (!item.enabled || !item.max) {continue;}
					if (optimize.indexOf(name) === -1) {
						copyItem[name] = item;
					} else {
						build2[name] = item;
					}
				}
			}

			const metaData = {};
			builds = copyItem || builds;
			let hasLeader = game.village.leader;
			for (let name in builds) {
				let build = builds[name];
				let meta = buildManager.getBuild(build.name || name).meta;
				if (meta.almostLimited && !geodesy && hasLeader) {build.enabled = false;}
				if (meta.stage !== build.stage) {build.enabled = false;}
				metaData[name] = meta;
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger, 'bonfire');

			if (buildList) {
				for (let i = 0; i < buildList.length; i++) {
					let count = buildList[i].count;
					let id = buildList[i].id;
					count = buildManager.count(id, count);
					if (count > 0) {
						buildManager.build(buildList[i].name || id, buildList[i].stage, count);
						refreshRequired += 1;
					}
				}
			}

			// 低优先度的后计算资源数量
			if (JSON.stringify(build2) !== "{}") {
				refreshRequired += this.build(build2);
			}

			return refreshRequired;
		},
		space: function () {
			if (!game["spaceTab"].visible) {return;}
			const builds = JSON.parse(JSON.stringify(options.auto.space.items));
			const buildManager = this.spaceManager;
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.space.trigger;
			let blackSky = game.challenges.isActive("blackSky");
			let solarRevolution = game.religion.getSolarRevolutionRatio();
			let starchartVal = resMap['starchart'].value;
			this.setTrait('chemist');
			// 自动项目
			{
				let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
				if (blackSky) {
					builds['researchVessel'].enabled = false;
					if (builds['spaceStation'].enabled) {
						$('#toggle-spaceStation').click();
					}
				} else if (!trigger && solarRevolution > 2 && !game.space.meta[0].meta[3].val && starchartVal < 2000) {
					trigger = 9;
					msgSummary('spaceTrigger');
				}

				let blackOrSolar = blackSky || solarRevolution > 5;
				let sattelite = game.space.getBuilding('sattelite').val;
				if (!trigger) {
					let station = game.space.getBuilding('spaceStation').val;
					let spaceStation = 3e3 * Math.pow(1.12, station);
					let FiveSattelite = 2300 * Math.pow(1.12, sattelite);
					if (starchartVal > FiveSattelite && solarRevolution < 2) {builds['sattelite'].max = sattelite + 1;}
					if (starchartVal < FiveSattelite && solarRevolution < 2 || !game.workshop.get('orbitalGeodesy').researched) {builds['sattelite'].max = 0;}
					if (starchartVal > spaceStation) {builds['spaceStation'].max = station + 1;}
					if (starchartVal < spaceStation) {builds['spaceStation'].max = 0;}
					if (resPercent('unobtainium') < 0.9) {builds['moonBase'].max = 0;}
					else {builds['moonBase'].max = game.space.getBuilding('moonBase').val + 1;}
					if (!game.getEffect('lunarOutpostRatio')) {
						builds['spaceElevator'].max = 11;
						if (!vitruvianFeline && resPercent('unobtainium') < 0.5) {builds['spaceElevator'].max = 0;}
					} else if (!solarRevolution) {
						builds['spaceElevator'].max = 22;
					}

					// 收容室 散热器
					let itemChamber = builds['containmentChamber'];
					let itemHeatsink = builds['heatsink'];
					let antimatter = resMap['antimatter'];
					let heatsink = game.space.getBuilding("heatsink").val;
					let containmentChamber = game.space.getBuilding("containmentChamber").val;
					itemHeatsink.max = heatsink + 1;
					itemChamber.max = containmentChamber + 1;
					let ChamberCons = 50 * (1 + heatsink * 0.01);
					let energyExtra = (game.resPool.energyProd < game.resPool.energyCons + ChamberCons);
					if (antimatter.value + 50 * game.getEffect('antimatterProduction') < antimatter.maxValue || energyExtra) {
						itemChamber.enabled = false;
						itemHeatsink.enabled = false;
					}

					// 轨道阵列
					let Array = builds['orbitalArray'];
					let Nummon = game["nummon"];
					if (Nummon) {
						let ArrayVal = game.space.getBuilding('orbitalArray').val;
						if (Nummon.getBestUnobtainiumBuilding() === $I("space.planet.piscine.orbitalArray.label")) {
							Array.max = ArrayVal + 1;
						} else if (Array.max < 0) {
							Array.max = 0;
						}
					}
				}
				if (game.ironWill) {builds['spaceStation'].max = 0;}
				if (sattelite < 3 + 2 * (solarRevolution > 9.7) && blackOrSolar) {
					buildManager.build("sattelite", 1);
					msgSummary('sattelite');
				}
				if (blackOrSolar) {
					if (!blackSky && game.space.getBuilding('researchVessel').val < 1 && builds.sattelite.enabled) {
						buildManager.build("researchVessel", 1);
					}
					if (game.space.getBuilding('researchVessel').val < 4) {builds['spaceStation'].max = 0;}
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
				if (item.count > 0) {
					buildManager.build(item.id, item.count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		craft: function () {
			const crafts = options.auto.craft.items;
			const manager = this.craftManager;
			const craftsItem = ['ship','beam','wood','slab','alloy','gear','concrate','steel','plate','scaffold','tanker','parchment','manuscript','compedium','blueprint','kerosene','megalith','eludium','thorium'];
			let trigger = options.auto.craft.trigger;
			let craftUnlock = !game.science.get("construction").researched || !game.bld.getBuildingExt('workshop').meta.on;
			let amount, craft, require;

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
				// Craft the resource if we meet the trigger requirement
				if (require === 'noRequire' || (require.value / require.maxValue >= trigger && require.value <= 2 * require.maxValue)) {
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
			if (!game.science.get('drama').researched || game.calendar.festivalDays >= 400) {return;}
			if (!game.prestige.getPerk('carnivals').researched && game.calendar.festivalDays > 0) {return;}
			if (game.village.getKittens() < 5 && !resMap["zebras"].value) {return;}

			let craftManager = this.craftManager;
			let catpowProf = 4000 * craftManager.getTickVal(resMap['manpower'], true) > 1500;
			let cultureProf = 4000 * craftManager.getTickVal(resMap['culture'], true) > 5000;
			let parchProf = 4000 * craftManager.getTickVal(resMap['parchment'], true) > 2500 * 2;

			if (!(catpowProf && cultureProf && (resMap['parchment'].value >= 7500 || parchProf))) {return;}

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
				game.village.holdFestival(1);
				options.auto.trade.festival = undefined;

				storeForSummary('festival', 1);
				storePrices(price);
				if (game.calendar.festivalDays > 400) {
					iactivity('festival.extend', [], 'festivalFilter');
				} else {
					iactivity('festival.hold', [], 'festivalFilter');
				}
			} else {
				options.auto.trade.festival = true;
			}
		},
		observeStars: function () {
			let calendar = game.calendar;
			if (calendar.observeBtn != null && !game.workshop.get("seti").researched){
				let sci = resMap['science'].value;
				let star = resMap['starchart'].value;
				if (game.calendar.observeRemainingTime < 270 && game.ticks > 600) {activity('珂学家可能进入了后台，运行速度缓慢(最好别最小化挂机)');}
				calendar.observeHandler();
				storeForSummary('science', resMap['science'].value - sci, 'resGain');
				storeForSummary('starchart', resMap['starchart'].value - star, 'resGain');
				iactivity('act.observe', [], 'astronomicalEventFilter');
				storeForSummary('stars', 1);
			}
		},
		hunt: function () {
			// clearTimeout(this.huntID);
			let manpower = this.craftManager.getResource('manpower');
			if (manpower.value < 100 || game.challenges.isActive("pacifism")) {return;}
			if (resPercent('manpower') > 3 && game.getEffect('hunterRatio') < 3) {return;}

			// 无独角兽牧场 强制打猎
			let unicornValue = resMap['unicorns'].value;
			let unicorn = game.achievements.get('unicornConspiracy').unlocked || unicornValue;
			let unicornPasture = game.bld.getBuildingExt('unicornPasture').meta.val;
			let unicornHunt = (!unicornPasture && unicorn && manpower.value > 1e3 && unicornValue < 3 && game.getEffect("craftRatio") > 0.06);

			let itemHunt = options.auto.options.items.hunt;
			let subTrigger = itemHunt.subTrigger;
			let manpowerBoolean = itemHunt.subTrigger <= manpower.value / manpower.maxValue;
			let tradeCache = !manpowerBoolean && options.auto.trade.cache;

			// 铸币厂前加速打猎
			let aveOutput = this.craftManager.getAverageHunt();
			manpower.value += Math.max(manpower.perTickCached * 2 * (subTrigger > 0.9), 0);
			let huntCount = Math.floor(manpower.value / 100);
			let architecture = game.science.get('writing').researched;
			let preCount = (!resMap['furs'].value || resMap['parchment'].value < 25) ? Math.max(30 , Math.floor(0.5 * huntCount)) : 0;
			let mint = (architecture && huntCount > preCount && preCount > 0 && resPercent('culture') !== 1);

			if (manpowerBoolean || mint || unicornHunt || tradeCache || itemHunt.time) {
				if (mint) {
					huntCount = preCount;
					iactivity('act.hunt.mint', '', 'huntFilter');
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
					iactivity('act.hunt', ['管理者派出' + huntCount, hunter], 'huntFilter');
					storeForSummary('hunt.manager', huntCount);
				} else {
					storeForSummary('hunt', huntCount);
					iactivity('act.hunt', [huntCount, hunter], 'huntFilter');
				}

				const trueOutput = {};

				for (let out in aveOutput) {
					const res = this.craftManager.getResource(out);
					trueOutput[out] = aveOutput[out] * huntCount;
					storeForSummary(out, resMap[out].value - a[out], 'resGain');
				}

				this.cacheManager.pushToCache({'materials': trueOutput});

				//game.village.huntAll();
			}
		},
		trade: function () {
			let cacheSummary = {};
			let Ratio = (options.auto.options.items.promote.enabled && options.auto.distribute.enabled) ? 2 : 0;
			for (let res in resMap) {
				let Res = resMap[res];
				game.resPool.addRes(Res, Math.max(Ratio * Res.perTickCached + game.getEffect(res + 'PerTickCon'), 0), false);
				cacheSummary[res] = Res.value;
			}
			let i;
			const craftManager = this.craftManager;
			const tradeManager = this.tradeManager;
			const cacheManager = this.cacheManager;
			let gold = craftManager.getResource('gold');
			let trades = [];
			let optionTrade = options.auto.trade;
			let requireTrigger = optionTrade.trigger;

			if (!tradeManager.singleTradePossible(undefined)) {return;}

			let Calendar = game.calendar;
			let season = Calendar.getCurSeason().name;
			let goldTrigger = requireTrigger <= gold.value / gold.maxValue;

			let isLimited;
			this.setTrait('merchant');
			let index = 0;
			let solarRevolution = game.religion.getSolarRevolutionRatio();
			let challenge = game.challenges.anyChallengeActive() && Calendar.year > 2;
			let renaissance = game.prestige.getPerk('renaissance').researched;
			let solar = solarRevolution || challenge || !renaissance;
			let skipNagas = Calendar.year > 2e3 || game.workshop.get('spaceManufacturing').researched;
			// Determine how many races we will trade this cycl
			let trade, race, name, require;
			let items = optionTrade.items;
			for (name in items) {
				trade = items[name];

				// Check if the race is in season, enabled, unlocked, and can actually afford it
				race = tradeManager.getRace(name);
				if (!race.unlocked) {continue;}
				if (!game["diplomacyTab"].racePanels[index]) {game["diplomacyTab"].render();}
				index++;
				if (!trade.enabled) {continue;}
				let Season = trade[season];
				if (!Season) {continue;}
				let button = tradeManager.getTradeButton(race.name);

				// || !tradeManager.singleTradePossible(name)
				if (!button) {continue;}

				require = trade.require ? craftManager.getResource(trade.require) : false;

				// If we have enough to trigger the check, then attempt to trade
				let prof = tradeManager.getProfitability(name);
				if (name === 'nagas' && !game.ironWill && skipNagas) {continue;}
				if (name === 'zebras' && !prof && Calendar.season === 2 && resPercent('titanium') > 0.5) {continue;}
				if (name === 'sharks' && race.embassyLevel < 10) {prof = false;}
				if (name === 'dragons' && solarRevolution > 2 && !prof) {continue;}

				// 优先太阳革命
				let faithValue = resMap['faith'].value;

				// 有采矿钻和登红月后优先点出超越和赞美群星
				let transcendence = (game.religion.getRU("transcendence").on || !options.auto.faith.items.transcendence.enabled);
				let apocripha = (game.religion.getRU('apocripha').on || !options.auto.faith.items.apocripha.enabled);
				let miningDrill = game.workshop.get('miningDrill').researched;
				let tier = (transcendence && apocripha) || game.religion.transcendenceTier > 2;
				let Moon = tier || !game.space.getBuilding('moonOutpost').val || !miningDrill;
				if (trade.limited && prof && solar && Moon) {
					trades.push(name);
					isLimited = true;
				} else if ((!require || requireTrigger <= require.value / require.maxValue) && goldTrigger) {
					trades.push(name);
				}
			}

			let catnipNow = resMap['catnip'].value + 100 * game.getResourcePerTick("catnip", true);
			let sharksAmt = tradeManager.getLowestTradeAmount('sharks');
			if (catnipNow < 0 && sharksAmt && game.deadKittens < 1e3) {
				let sharks = game.diplomacy.get('sharks');
				let catnip = tradeManager.getAverageTrade(sharks).catnip;
				tradeManager.trade('sharks', Math.max(Math.ceil(catnipNow / -catnip), sharksAmt));
				iactivity('trade.catnip');
			}

			if (trades.length === 0) {return;}

			isLimited = (isLimited && !goldTrigger) ? 0.25 : 1;
			// Figure out how much we can currently trade
			let maxTrades = Math.floor(tradeManager.getLowestTradeAmount(undefined, true, false) * isLimited);

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
				let trigConditions = ((!require || requireTrigger <= require.value / require.maxValue) && requireTrigger <= gold.value / gold.maxValue);
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

			let TC = !game.getEffect('shatterTCGain');
			let Spiders = resMap['steel'].value > resMap['plate'].value && !TC && Calendar.season !== 2;
			let Dragons = resPercent('uranium') > 0.4 && tradesLength > 1;
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
				if (name === 'spiders' && Spiders) {minTrades = Math.floor(0.5 * minTrades);}
				if (name === 'dragons' && Dragons) {minTrades = Math.floor(0.3 * minTrades);}
				if (!tradesDone[name]) {tradesDone[name] = 0;}
				tradesDone[name] += minTrades;
				maxTrades -= minTrades;
				trades.splice(minTradePos, 1);
				maxByRace.splice(minTradePos, 1);
			}
			if (tradesDone.length === 0) {return;}

			const tradeNet = {};
			for (name in tradesDone) {
				race = tradeManager.getRace(name);
				let amt = goldTrigger ? 1 : tradesDone[name] * 0.6;

				let materials = tradeManager.getMaterials(name);
				for (let mat in materials) {
					if (!tradeNet[mat]) {tradeNet[mat] = 0;}
					tradeNet[mat] -= materials[mat] * amt;
				}

				let meanOutput = tradeManager.getAverageTrade(race);
				for (let out in meanOutput) {
					let res = craftManager.getResource(out);
					if (!tradeNet[out]) {tradeNet[out] = 0;}
					tradeNet[out] += (res.maxValue > 0) ? Math.min(meanOutput[out] * amt, Math.max(res.maxValue - res.value, 0)) : meanOutput[out] * amt;
				}
			}

			cacheManager.pushToCache({'materials': tradeNet});

			if (resPercent('gold') >= 0.98) {optionTrade.cache = true;}

			for (let name in tradesDone) {
				if (tradesDone[name] > 0) {
					tradeManager.trade(name, tradesDone[name]);
				}
			}
			for (let res in resMap) {
				let a = resMap[res].value - cacheSummary[res];
				if (a > 0) {storeForSummary(res, a, 'resGain');}
				if (a < 0) {storeForSummary(res, -a, 'resConsume');}
			}
			//iactivity('time', [game.getDisplayValueExt(performance.now() - this.now), i18n('ui.trade')], 'tradeFilter');
		},
		miscOptions: function () {
			const craftManager = this.craftManager;
			const buildManager = this.buildManager;
			const optionVals = options.auto.options.items;
			let refreshRequired = 0;

			// 检查是否换存档了
			let cache = options.auto.cache;
			let dataTimer = cache.dataTimer;
			let currentTick = game.timer.ticksTotal;
			let startingTick = dataTimer.ticksTotal;
			let trueYear = game.calendar.trueYear();
			let guid = game.telemetry.guid;
			// 初始时间 、真实年 、 存档ID
			if (currentTick - startingTick < 0 || dataTimer['trueYear'] > trueYear || dataTimer['saveId'] !== guid) {
				cache.dataTimer = null;
				cache.dataTimer = {};
				cache.cacheSum = null;
				cache.cacheSum = {};
				options.auto.filter.console = null;
				options.auto.filter.console = {};
				resetActivitySummary();
				msgStock();
				cache.resUpg = null;
				cache.resUpg = {};
				this.leaderTimer = 0;
				options.auto.upgrade.items.upgrades.cache = null;
				let dataTimer = cache.dataTimer;
				dataTimer['saveId'] = guid;
				dataTimer['ticksTotal'] = currentTick;
				dataTimer['trueYear'] = trueYear;
			}
			if (currentTick - startingTick > 2e4) {
				dataTimer.ticksTotal = currentTick;
			}

			// 游戏日志过滤
			let filter = options.auto.filter;
			if (optionVals.filterGame.enabled && filter.enabled) {
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
			if (optionVals.buildEmbassies.enabled && !!game.diplomacy.races[0].embassyPrices) {
				let culture = craftManager.getResource('culture');
				let cultureTri = culture.value / culture.maxValue;
				let subTrigger = optionVals.buildEmbassies.subTrigger;
				// let b = !subTrigger || cultureTri >= 0.98;
				let b = cultureTri >= 0.98;
				let cultureForce = culture.value > 2e4;
				if (optionVals.buildEmbassies.subTrigger <= cultureTri && cultureTri < 2 || cultureForce) {
					let i, name, race, emBulk;
					const racePanels = game["diplomacyTab"].racePanels;
					let cultureVal = craftManager.getValueAvailable('culture', true);

					const embassyBulk = {};
					const bulkTracker = [];

					const racesLength = racePanels.length - ((game.diplomacy.get('leviathans').unlocked) ? 1 : 0);
					let tradeItem = options.auto.trade.items;
					for (i = racesLength - 1; i > -1; i--) {
						if (!racePanels[i].embassyButton) {
							game["diplomacyTab"].render();
							continue;
						}
						name = racePanels[i].race.name;
						race = game.diplomacy.get(name);
						if (!b && !tradeItem[name].enabled) {continue;}
						let priceCoeficient = 1 - game.getEffect("embassyCostReduction");
						embassyBulk[name] = {'val': 0, 'basePrice': race.embassyPrices[0].val * priceCoeficient, 'currentEm': race.embassyLevel, 'priceSum': 0, 'race': race};
						bulkTracker.push(name);
					}

					if (bulkTracker.length === 0) {break AutoEmbassy;}

					while (bulkTracker.length > 0) {
						for (i = 0; i < bulkTracker.length; i++) {
							name = bulkTracker[i];
							emBulk = embassyBulk[name];
							let embassyVal = emBulk.currentEm + emBulk.val;
							let nextPrice = emBulk.basePrice * Math.pow(1.15, embassyVal + game.getEffect("embassyFakeBought"));
							embassyVal = b || (embassyVal < 15 && game.science.get('astronomy').researched);
							if (nextPrice <= cultureVal && embassyVal) {
								cultureVal -= nextPrice;
								emBulk.priceSum += nextPrice;
								emBulk.val += 1;
								if (b) {
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
			if (optionVals.fixCry.enabled && game.time.getVSU("usedCryochambers").val > 0) {
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
			let msg = (name, number, onAll) => {
				activity(i18n('summary.' + name, [number]));
				storeForSummary(name, number);
				if (onAll) {
					button = buildManager.getBuildButton(name);
					if (button) {button.controller.onAll(button.model);}
				}
			};
			let mint = game.bld.getBuildingExt('mint').meta;
			if (mint.on !== mint.val && resMap['manpower'].maxValue > 2e4) {
				mint.on = mint.val;
			}
			if (mint.on && resMap['manpower'].maxValue < 2e4 && !game.challenges.isActive("pacifism")) {
				if (mint.on > 2 && !game.opts.enableRedshift) {
					mint.on = 0;
					msg('mint');
				}
			}

			// 自动打开工厂
			let fa = game.bld.getBuildingExt('factory').meta;
			if (fa.val && fa.on !== fa.val && game.workshop.get('spaceManufacturing').researched) {msg('factory', undefined, true);}
			// 自动打开磁电机
			let ma = game.bld.getBuildingExt('magneto').meta;
			let oil = game.getResourcePerTick("oil",true) > 0.05 * ma.val;
			let pollution = game.bld.cathPollution > 5e6 && game.bld.cathPollutionPerTick > 50;
			if (ma.val && !ma.on && oil && pollution && !fa.isAutomationEnabled) {msg('magneto', undefined, true);}
			// 自动打开蒸汽工房
			let st = game.bld.getBuildingExt('steamworks').meta;
			if (st.val && st.on !== st.val && ma.on > 9) {msg('steamworks', undefined, true);}
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
			// 缺电
			// let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
			let Prod = game.resPool.energyProd;
			let biolab = game.bld.getBuildingExt('biolab').meta;
			let biofuel = biolab.on && game.workshop.get('biofuel').researched;
			let catnipTick = craftManager.getPotentialCatnip();
			catnipTick = options.auto.distribute.religion || (catnipTick < 0 && resMap['catnip'].value + 400 * catnipTick > 0);
			if (biofuel && catnipTick) {
				activity(i18n('summary.biolab.test') + "(猫薄荷产量过低)");
				biolab.on = 0;
			}
			if (Prod && Prod < game.resPool.energyCons + 1) {
				if (biofuel && biolab.on) {
					let msg = '冬季产出电:' + game.getDisplayValueExt(Prod) + '，消耗电:' + game.getDisplayValueExt(game.resPool.energyCons) + '，小猫担心电不够并关闭了';
					let number = biolab.on;
					iactivity('summary.biolab.test', [msg + number]);
					biolab.on = 0;
					storeForSummary('biolab.test', msg + number);
					return 1;
				}
				let oilWell = game.bld.getBuildingExt('oilWell').meta;
				if (oilWell.isAutomationEnabled && game.workshop.get('pumpjack').researched) {
					oilWell.isAutomationEnabled = false;
					game.upgrade({buildings: ['oilWell']});
					game.resPool.update();
					msg('pumpjack', 1);
					return 1;
				}
				let accelerator = game.bld.getBuildingExt('accelerator').meta;
				if (accelerator.on) {
					accelerator.on = 0;
					msg('accelerator', 1);
				}
			}
			// 自动控制 时间操纵 酿酒厂 开关
			const list = [{
				name: 'brewery',
				metadata: game.bld.get('brewery'),
				Button: buildManager.getBuildButton('brewery'),
				conditionOn: game.calendar.festivalDays,
				conditionOff: game.bld.get('brewery').on,
			}];
			if (!game.opts.enableRedshift) {
				// 开启离线进度时不调整时间操纵
				list.push({
					name: 'chronocontrol',
					metadata: game.time.getVSU('chronocontrol'),
					Button: this.timeManager.getBuildButton('chronocontrol'),
					conditionOn: game.calendar.futureSeasonTemporalParadox < 1 && game.calendar.day > 98,
					conditionOff: game.time.getVSU('chronocontrol').on && game.calendar.day > 0,
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
			let diffTime = performance.now() - Time;
			activitySummary.ksTime += diffTime;
			activitySummary.totalTicks++;
		},
		setTrait: function (trait) {
			let vLeader = game.village.leader;
			let Auto = options.auto;
			let distribute = Auto.distribute;
			if (!Auto.options.items.promote.enabled || !distribute.enabled || !distribute.items.leader.enabled) {
				if (vLeader) {return msgSummary('changeLeader', '', 'noFilter');}
			}
			if (trait) {
				if (game.science.get('civil').researched && vLeader && !game.challenges.isActive("anarchy")) {
					let cache = options.auto.cache;
					let hasTrait = game.village.traits.some(obj => {return obj.title === $I("village.trait." + trait);});
					if (!cache.trait[trait]) {
						if (hasTrait) {
							cache.trait[trait] = true;
							let traitDesc = $I('village.bonus.desc.' + trait);
							let leaderMsg = ['当' + traitDesc.slice(0,2) + "项目时" + $I('village.trait.' + trait) + "猫猫自觉顶替当前领袖，其效果为" + traitDesc];
							if (game.ticks > 1e4) {
								msgSummary('leader',true);
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
					if (hasTrait || options.copyTrait === trait) {vLeader.trait.name = trait;}
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
			let transcendenceReached = game.religion.getRU("transcendence").on;
			let tt = transcendenceReached ? game.religion.transcendenceTier : 0;
			if (value) {
				tt += 1;
			}
			let epiphany = game.religion.faithRatio;
			let epiphanyInc = game.religion.faith / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			let epiphanyAfterAdore = epiphany + epiphanyInc - value;
			let worshipAfterAdore = 0.01 + resMap['faith'].value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			let solarRevolutionAdterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, 10 + game.getEffect("solarRevolutionLimit"));
			if (tt < 10) {
				catnipTick = game.village.getResConsumption()['catnip'] * (1 + game.getEffect("catnipDemandRatio"));
				if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
					catnipTick += catnipTick * Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0) * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
				}
				let solarRevolutionRatio = 1 + game.religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);
				catnipTick = ((resMap['catnip'].perTickCached - catnipTick) * (1 + solarRevolutionAdterAdore) / solarRevolutionRatio) + catnipTick + game.globalEffectsCached.catnipPerTickCon;
			}
			if (catnipTick < 0 && resMap['catnip'].value + 1000 * catnipTick < 0) {
				let optionFaith = options.auto.faith;
				if (!options.auto.distribute.religion) {
					options.auto.distribute.religion = true;
				}
				// 次元超越猫薄荷
				if (value) {
					iactivity('summary.transcend.catnip', [game.getDisplayValueExt(catnipTick * 5)]);
					activitySummary.other['transcend.catnip'] = catnipTick * 5;
				}
				// 赞美群星猫薄荷
				if (!value) {
					iactivity('summary.adore.catnip', [game.getDisplayValueExt(catnipTick * 5)]);
					activitySummary.other['adore.catnip'] = catnipTick * 5;
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
				let btn = game.religion.meta[0].meta[i];
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

			if (!button.model.enabled) {
				button.model.prices = button.controller.getPrices(button.model);
				button.controller.updateEnabled(button.model);
				if (!button.model.enabled) {return;}
			}

			//var amountTemp = amount;
			amount = this.bulkManager.construct(button.model, button, amount);
			//if (amount !== amountTemp) {
			//    warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			//}

			if (amount === 0) {return;}
			storePrices(button.model.prices);
			game.stats.getStat("totalClicks").val += 1;

			let label = build.label;
			if (variant === "s") {
				if (options.auto.cache.trait['wise']) {
					storeForSummary('哲学家小猫祷告了 ' + label, amount, 'faith');
					return iactivity('act.sun.discovers.leader', [label, amount], 'faithBuildFilter');
				}
				if (amount === 1) {
					iactivity('act.sun.discover', [label], 'faithBuildFilter');
				} else {
					iactivity('act.sun.discovers', [label, amount], 'faithBuildFilter');
				}
				storeForSummary('小猫祷告了 ' + label, amount, 'faith');
			} else {
				storeForSummary(label, amount, 'build');
				if (amount === 1) {
					iactivity('act.build', [label], 'buildFilter');
				} else {
					iactivity('act.builds', [label, amount], 'buildFilter');
				}
			}
		},
		getBuild: function (name, variant) {
			switch (variant) {
				case 'z':
					return game.religion.getZU(name);
				case 's':
					return game.religion.getRU(name);
				case 'c':
					return game.religion.getTU(name);
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

			if (amount === 1) {
				iactivity('act.build', [label], 'buildFilter');
			} else {
				iactivity('act.builds', [label, amount], 'buildFilter');
			}
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
				if (game.village.leader && metaData.requiredLeaderJob && game.village.leader.job !== metaData.requiredLeaderJob){
					let jobTitle = game.village.getJob(metaData.requiredLeaderJob).title;
					game.msg($I("msg.policy.wrongLeaderJobForResearch", [metaData.label, jobTitle]), "important");
					return;
				} else if (metaData.name === "transkittenism" && game.bld.getBuildingExt("aiCore").meta.effects["aiLevel"] >= 15){
					game.msg($I("msg.policy.aiNotMerges"),"alert", "ai");
					return;
				} else if (metaData.blocked === false) {
					for(i = 0; i < metaData.blocks.length; i++){
						if (game.science.getPolicy(metaData.blocks[i]).researched){
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
				if (name === itemsUpgrades.cache) {
					itemsUpgrades.cache = false;
					let Upg = options.auto.cache.resUpg;
					for (let i in options.auto.cache.resUpg) {
						delete Upg[i];
					}
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
				if (name === 'science' && resMap['steel'].value > 5e3) {stock += 1e5;}
				if (name === 'steel') {stock += 5e3;}
			}
			if (name === 'titanium' && upgrade !== 'rotaryKiln') {
				if (upgrade !== 'rotaryKiln') {
					if (!game.workshop.metaCache['rotaryKiln'].researched && game.workshop.get('orbitalGeodesy').researched) {stock += 5000;}
				}
				if (cache === 'orbitalGeodesy' && cache !== upgrade) {stock += 1e3;}
			}
			if (name === 'iron' && upgrade !== 'ironwood') {
				if (activitySummary.other['auto.ironwood']) {stock += 3000;}
			}
			if (name === 'alloy') {
				if (cache && cache !== upgrade) {stock += options.auto.cache.resUpg[name];}
			}
			if (name === 'oil') {
				if (upgrade !== 'orbitalGeodesy' && game.bld.get('calciner').val > 20 && !game.workshop.metaCache['orbitalGeodesy'].researched) {
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
		build: function (name, stage, amount) {
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
			game.stats.getStat("totalClicks").val += 1;

			if (amount === 1) {
				iactivity('act.build', [label], 'buildFilter');
			} else{
				iactivity('act.builds', [label, amount], 'buildFilter');
			}
		},
		count: function(id, count) {
			if (!count) {return;}
			let halfCount;
			let atheism = game.challenges.isActive('atheism');
			let solarMeta = game.religion.getRU('solarRevolution');
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let spaceManufacturing = game.workshop.get('spaceManufacturing').researched;
			let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
			let mineralsCap = (resMap['minerals'].value > resMap['minerals'].maxValue * 0.94);
			let woodCap = (resMap['wood'].value > resMap['wood'].maxValue * 0.94);
			let TitaniumCap = resMap['titanium'].value >= 0.9 * resMap['titanium'].maxValue;
			let scienceMetaCache = game.science.metaCache;
			let catnipTick = this.crafts.getPotentialCatnip(false);
			let amphitheatre = game.bld.getBuildingExt('amphitheatre').meta;
			let moonM = game.space.getProgram('moonMission');
			switch (id) {
				case 'chapel':
					if (id === 'chapel') {
						if (game.bld.getBuildingExt(id).meta.val < 18) {
							break;
						} else {
							if (!game.calendar.festivalDays) {count = 0;}
							if (!orbitalGeodesy) {
								count = Math.floor(count * 0.4);
								halfCount = true;
							}
						}
					}
					break;
				case 'aqueduct':
					if (catnipTick < 2 || game.challenges.isActive('winterIsComing')) {break;}
					else if (!spaceManufacturing) {count = Math.floor(count * 0.4);}
				// falls through
				case 'library':
					if (id === 'library' && !scienceMetaCache['writing'].unlocked) {break;}
				// falls through
				case 'academy':
				case 'pasture':
				case 'barn':
					if (id === 'barn' && resMap['minerals'].maxValue < 1600) {break;}
					if (mineralsCap && woodCap) {break;}
				// falls through
				case 'warehouse':
					if (id === 'warehouse') {
						if (resMap['minerals'].maxValue < 5e4) {
							if (game.workshop.get('deepMining').researched || game.bld.getBuildingExt(id).meta.val < 20) {break;}
						}
						else if (vitruvianFeline && !spaceManufacturing) {count = Math.floor(count * 0.3);}
					}
				// falls through
				case 'lumberMill':
					if (id === 'lumberMill') {
						if (game.bld.getBuildingExt(id).meta.val < 55 - 10 * !vitruvianFeline - 10 * !orbitalGeodesy) {
							if (!game.getEffect('lumberMillRatio') && game.bld.getEffect('woodRatio') > 3.1 && resMap['iron'].maxValue > 1200) {
								count = 0;
							}
							if (resMap['gold'].value || game.getEffect('ironPerTickAutoprod') < 0.3) {
								break;
							}
						} else if (!spaceManufacturing && resPercent('iron') < 0.9) {
							halfCount = true;
							msgSummary('lumberMill');
						}
					}
				// falls through
				case 'oilWell':
					if (id === 'oilWell') {
						let meta = game.bld.getBuildingExt(id).meta.val;
						if (meta < 8 || resMap['oil'].maxValue < 2e4) {break;}
						if (resMap['oil'].maxValue > 55e3 && resMap['oil'].value > 3e4 && meta < 199) {count = Math.floor(count * 0.5);}
						if (game.bld.getBuildingExt('calciner').meta.val > 20 && !orbitalGeodesy) {break;}
					}
				// falls through
				case 'quarry' :
					if (vitruvianFeline) {
						if (!orbitalGeodesy && game.bld.get(id).val) {
							halfCount = true;
							msgSummary('lower');
						} else if (orbitalGeodesy) {msgSummary('lower', true);}
					}
					break;
				case 'harbor':
					if (id === 'harbor') {
						if (game.bld.getBuildingExt(id).meta.val < 8){
							msgSummary('harbor');
							halfCount = true;
						} else if (game.bld.getBuildingExt('reactor').meta.val < 20 && game.religion.getSolarRevolutionRatio() > 7.5) {halfCount = true;}
						else if (!orbitalGeodesy && !game.workshop.get('geodesy').researched) {halfCount = true;}
						else if (spaceManufacturing) {msgSummary('harbor', true);}
						if (game.bld.getBuildingExt(id).meta.val > 50 && resMap['plate'].value < 6e3) {count = Math.floor(count * 0.5);}
					}
					break;
				case 'logHouse':
					if (!amphitheatre.stage && amphitheatre.val < 5 && game.village.happiness < 3 && game.village.maxKittens > 18) {halfCount = true;}
					break;
				case 'biolab':
					if (!spaceManufacturing) {
						count = 1;
					}
					break;
				case 'factory':
					if (!vitruvianFeline) {break;}
					if (spaceManufacturing) {
						if (!game.space.getBuilding('sattelite').val && game.bld.get(id).val && !atheism) {
							options.auto.space.items['sattelite'].enabled = true;
							count = 0;
						}
					} else {
						let val = game.bld.getBuildingExt(id).meta.val;
						if (resMap['titanium'].maxValue < 1.3e5 && val && resMap['titanium'].perTickCached < 70 && !TitaniumCap) {count = 0;}
						if (val > 2 && !TitaniumCap) {
							count = Math.floor(0.4 * count);
							halfCount = true;
						}
					}
					break;
				// falls through
				case 'accelerator':
					if (!vitruvianFeline) {break;}
					if (!game.workshop.get('energyRifts').researched) {
						count = 0;
					}
					if (!spaceManufacturing && resMap['titanium'].maxValue > 1.3e5) {
						count = 0;
					}
					break;
				// falls through
				case 'mansion':
					vitruvianFeline = vitruvianFeline || (!vitruvianFeline && game.workshop.get('geodesy').researched && id === 'mansion' && game.village.sim.kittens.length < 130);
					if (!spaceManufacturing && game.stats.getStat("totalResets").val > 1 && !TitaniumCap && vitruvianFeline) {
						msgSummary('mansion');
						halfCount = true;
					}
					if (resMap['starchart'].perTickCached < 4 && id === 'mansion' && !TitaniumCap && vitruvianFeline) {
						halfCount = true;
					}
					break;
			}
			if (halfCount) {
				count = Math.floor(count * 0.5);
			} else if (!solarMeta.on && !atheism) {
				count = Math.ceil(count * 0.5);
			}
			catnipTick = catnipTick < 0.85 && resMap['catnip'].value / Math.abs(catnipTick) < 1000;
			catnipTick &= resMap['kittens'].value > 2 && options.auto.distribute.items.farmer.enabled;
			if ((id === 'hut' || id === 'logHouse') && count) {
				if (catnipTick) {
					count = 0;
					msgSummary('kittens');
				} else {msgSummary('kittens', true);}
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
				if (haystack.indexOf(label) !== -1){
					return buttons[i];
				}
			}
		},
		getSumPrices: function (build, price) {
			let currentRatio = (build.priceRatio) ? build.priceRatio : build.stages[build.stage].priceRatio;
			let buildRatio = currentRatio + game.getEffect("priceRatio");
			return (price.val - price.val * Math.pow(buildRatio, build.val - 1)) / (1 - buildRatio);
		},
		sellBuild: function (name) {
			let build = this.getBuild(name).meta;
			let prices = build.stages[build.stage].prices;
			for(let i = 0; i < prices.length; i++){
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

			if (!build.unlocked || !options.auto.space.items[name].enabled) {return;}
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

			if (amount === 1) {
				iactivity('act.build', [label], 'spaceFilter');
			} else {
				iactivity('act.builds', [label, amount], 'spaceFilter');
			}
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
			let leader = (trait) ? '工匠小猫制作了 ' : '小猫制作了 ';

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
				let engineer = game.village.getEffectLeader("engineer", 0);
				if (trait && resMap[name].tag === "metallurgist" && options.auto.cache.trait['metallurgist']) {
					craftAmt += amount * engineer;
					leader = '冶金学家小猫制作了 ';
				}
				if (resMap[name].tag === "chemist" && options.auto.cache.trait['chemist']) {
					craftAmt += 0.5 * amount * engineer;
					leader = '化学家小猫制作了 ';
				}
			}
			game.resPool.payPrices(prices);
			game.resPool.addResEvent(craft.name, craftAmt);
			// storeForSummary(craft.name, craftAmt, 'resGain');
			if (craft.upgrades) {cacheUpgrades(craft.upgrades);}
			game.stats.getStat("totalCrafts").val++;
			game.stats.getStatCurrent("totalCrafts").val++;
			game.stats.getStat("totalClicks").val += 1;

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
			let workshop = game.workshop;
			let materials = this.getMaterials(name);
			// Safeguard if materials for craft cannot be determined.
			if (!materials) {return 0;}
			// 跳过资源达到无限的情况
			if (resMap[name].value === Infinity) { return 0; }

			let resValue = this.getValueAvailable(name, true);
			let i, force, delta;

			const temple = game.bld.getBuildingExt('temple').meta;
			let priceRatio = Math.pow(temple.priceRatio + game.getEffect("priceRatio"), temple.val);
			let renaissance = game.prestige.getPerk('renaissance').researched;

			let craft = this.getCraft(name);
			let Craft = options.auto.craft;
			let ratio = game.getResCraftRatio(craft.name) + 1;
			let trigger = Craft.trigger;
			let shipValue = resMap['ship'].value;
			if (name === 'ship') {
				// 准备自动 强制
				let optionShipVal = options.auto.options.items.shipOverride.subTrigger;
				force = shipValue < Math.max(100, 0.5 * optionShipVal) || resMap['science'].maxValue > 1e5;
				force &= options.auto.options.enabled && options.auto.options.items.shipOverride.enabled;
				let geodesy = workshop.get("geodesy").researched;
				let solar = game.religion.getSolarRevolutionRatio();
				optionShipVal = (geodesy) ? Math.max(243, optionShipVal) : 60 / Math.max(0.3, Math.log1p(solar));
				force &= (!workshop.get('oxidation').researched && !Craft.oxidation) || !solar;
				force = force && shipValue < optionShipVal;
			}

			// 默认数量设为可达无限的最小值
			let amount = Number.MAX_VALUE / ratio + Number.MAX_VALUE / Math.pow(2, 53) / ratio;

			let Science = game.science;
			let scienceMeta = Science.meta[0];
			let navigation = Science.get('navigation').researched;
			let indexMax;
			let cache = options.auto.cache;
			let msgScience = (name) => {
				let scienceName = (cache.science) ? cache.science : "科学";
				force = true;
				if (scienceName === '油气处理') {return;}
				if (!options.auto.filter.items.miscFilter.enabled) {
					let msg = game.msg(i18n("craft.force", [resMap[name].title, scienceName]), null, null, true);
					$(msg.span).css('color', "#ff589c");
				}
				storeForSummary('craft' + ucfirst(name), 1);
			};

			if (name === 'beam' || name === 'slab') {
				i = Object.keys(materials)[0];
				if (resPercent(i) < 2) {
					Craft.autoConsume[i] = 0;
					if (resMap['scaffold'].value > 500 && trigger > 0.9 && limited) {
						Craft.autoConsume[i] = 1;
						trigger = 0.9;
					}
					if (!resMap[name].value && resMap['slab'].value) {force = true;}
				}
			}
			if (name === 'megalith'&& limited && resMap[name].unlocked && game.diplomacy.get('nagas').embassyLevel > 15
				&& !game.calendar.season && !resValue) {
				autoMax = 1;
				force = true;
			}

			let itemHunt = options.auto.options.items.hunt;
			let huntTime = itemHunt.time === 'fullIron' && itemHunt.enabled;
			if (name === 'plate' && limited && Craft.items['steel'].enabled) {
				let coalTick = game.getResourcePerTick('coal', true);
				let coalTri = this.getResource('coal').maxValue * trigger;
				let reactMeta = game.bld.getBuildingExt('reactor').meta;
				let reactRatio = Math.pow(game.getEffect("priceRatio") + reactMeta.priceRatio, reactMeta.val);
				let react = resMap['titanium'].value > 3500 * reactRatio && resMap['uranium'].value > 300 && resValue < 5000 * reactRatio;
				if (coalTick > 0 && resMap['iron'].value !== resMap['iron'].maxValue && resValue > 150 && !react) {
					if (this.getValueAvailable('plate') / this.getValueAvailable('steel') > 0.8) {
						let ironInTime = ((coalTri - this.getValue('coal')) / coalTick) * Math.max(game.getResourcePerTick('iron', true), 0);
						autoMax = 0.008 * (this.getValueAvailable('iron') - Math.max(coalTri - ironInTime, 0));
					}
				}
				if (react) {force = true;}
				if (resMap['faith'].maxValue < 750 && resMap['gold'].value > 30 && resMap[name].value < 23 && ratio > 3) {force = true;}
				if (!shipValue && ratio > 3 && resMap['starchart'].value >= 25 && resValue < 150) {
					autoMax = Math.ceil(Math.min(resMap['iron'].value / 100, (150 - resValue) / ratio));
					force = true;
				}
				// 有资源回复燃烧时间水晶全部用完铁
				if (huntTime) {force = true;}
			}

			let scienceVal = this.getValueAvailable('science', true);
			let scienceTri = resMap['science'].value / resMap['science'].maxValue;
			let cultrueTri = resMap['culture'].value / resMap['culture'].maxValue;
			if (name === 'manuscript' && limited) {
				let cacheManuscript = cache.resources['manuscript'];
				indexMax = (cacheManuscript) ? 17 : 19;
				for (i = 16; i < indexMax; i++) {
					let meta = scienceMeta.meta[i];
					let price = cacheManuscript || meta.prices[1].val;
					if (!meta.researched || cacheManuscript > 0) {
						let buildTemple = (i === 16 && game.village.happiness < 4 && temple.val === 1 && renaissance);
						buildTemple = buildTemple || resMap['faith'].maxValue > 750 || resMap['plate'].value < 15;
						price = (buildTemple) ? price : 10 * priceRatio;
						let craftPrices = (game.science.getPolicy("tradition").researched) ? 20 : 25;
						autoMax = Math.ceil((price - resValue) / ratio);
						let resVal = this.getValueAvailable('parchment', true);
						if (resVal > autoMax * craftPrices && autoMax >= 1 && resMap['culture'].value > craftPrices * 16 * autoMax) {
							cache.science = (cacheManuscript > 0) ? cache.science : meta.label;
							cache.science = (buildTemple) ? cache.science : "神殿";
							msgScience('manuscript');
							cache.resources['manuscript'] = 0;
						}
						break;
					}
				}
				if (cultrueTri > 0.9 && (this.getTickVal(resMap['parchment'], true) < 1.25 || !navigation)) {
					force = true;
				}
			}

			let religion = resMap['gold'].maxValue < 500 || game.religion.getRU('solarRevolution').on || game.religion.faith < 2000;
			if (name === 'compedium' && limited && navigation && religion) {
				let cacheCompedium = cache.resources['compedium'];
				indexMax = (cacheCompedium) ? 19 : 27;
				for (i = 18; i < indexMax; i++) {
					if (game.prestige.getPerk("numerology").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) {break;}
					let meta = scienceMeta.meta[i];
					if (!meta.researched || cacheCompedium > 0) {
						if (meta.name === 'metaphysics' || meta.name === 'drama') {
							continue;
						}
						if (meta.prices[1].name === name || cacheCompedium) {
							let price = (cacheCompedium || meta.prices[1].val);
							autoMax = Math.ceil((price - resValue) / ratio);
							let resVal = this.getValueAvailable('manuscript', true);
							let scienceCheck = scienceVal > 1e4 * autoMax || scienceTri >= 1;
							if (resVal > autoMax * 50 && autoMax >= 1 && scienceCheck) {
								cache.science = (cacheCompedium > 0) ? cache.science : meta.label;
								msgScience('compedium');
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
				if (!scienceMeta.meta[32].researched && cultrueTri > 0.98 && resValue < 100 && scienceTri > 0.98) {
					force = true;
				}
			}

			if (name === 'blueprint' && limited && Science.get('electricity').researched) {
				//indexMax = (game.village.maxKittens > 130) ? 44 : 34;
				for (i = 30; i < 44; i++) {
					let meta = scienceMeta.meta[i];
					if (!meta.researched) {
						let metaName = meta.name;
						let filterName = ['quantumCryptography', 'blackchain', 'ecology', 'ai'];
						if (filterName.indexOf(metaName) > -1) {
							continue;
						}
						if (meta.prices[1].name === name) {
							autoMax = Math.ceil((meta.prices[1].val - resValue) / ratio);
							let resVal = this.getValueAvailable('compedium', true);
							let scienceCheck = scienceVal > 2.5e4 * autoMax || scienceTri >= 1;
							if (resVal > autoMax * 25 && autoMax >= 1 && scienceCheck) {
								cache.science = meta.label;
								msgScience('blueprint');
								cache.resources['manuscript'] = 0;
								cache.resources['compedium'] = 0;
							} else if (autoMax >= 1) {
								cache.resources['compedium'] = autoMax * 25;
								cache.science = meta.label;
							}
						}
						break;
					}
				}
			}

			let useRatio = this.getLimRat(name, limited, limRat);

			if (name === 'parchment') {
				limited = ratio < 2.1;
				if (!resMap[name].value && ratio > 1.5) {
					force= true;
					autoMax = 2;
				}
				if (!navigation) {
					if (resValue > 300) {limited = true;}
					if (resValue > 500) {
						autoMax = 0;
						msgSummary('parchment');
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
				let steelValAva = this.getValueAvailable('steel');
				// let ironHut = !game.ironWill && resMap['iron'].maxValue > 3000 && this.getUnResearched('ironwood');
				// ironHut = resValue > 250 * ratio || ironHut;
				let ironCoalRatio = 0.3 * Math.min(1, resMap['coal'].perTickCached / resMap['iron'].perTickCached);
				if (resMap['plate'].value < 1.25 * ironCoalRatio * resMap['steel'].value && !Craft.oxidation) {amount = 0;}
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
							if (prices[Res].name === 'steel') {steelPrice = prices[Res].val;}
						}
						let amt = Math.ceil((steelPrice - resValue) / ratio);
						// let checkRes = (this.getValueAvailable('iron', true) > 100 * amt && this.getValueAvailable('coal', true) > 100 * amt);
						let checkRes = resMap['iron'].value > 100 * amt && resMap['coal'].value > 100 * amt;
						if (amt > 0 && checkRes) {
							amount = amt;
							force = true;
							if (name) {activity(i18n("craft.forceSteel", [workshopMeta.label]));}
						}
					}
				};
				forceSteel('steelSaw');
				forceSteel('steelAxe');
				forceSteel('steelArmor');
				let oxid =  this.getUnResearched('oxidation');
				let calVal = calciner.on;
				if (calVal) {
					if (calciner.isAutomationEnabled) {
						msgSummary('ironFactory');
					} else {
						let calAmount = 0.0015 * (1 + game.bld.get("reactor").on * 0.1) * (game.getEffect("calcinerRatio") + 1)
							* game.bld.getAutoProductionRatio() * (game.getEffect("ironPolicyRatio") + 1)
							* game.calendar.cycleEffectsFestival({iron : 1})['iron'] * calVal;
						amount = Math.max(0, amount) + calAmount;
						let minAmount = Math.min(resMap['coal'].value, resMap['iron'].value) * 0.01;
						if (amount > minAmount) {amount = minAmount;}
					}
					forceSteel('oxidation');
					let cacheUpg = options.auto.upgrade.items.upgrades;
					// 氧化反应
					if (oxid) {
						let Amt = Math.ceil((5000 - resValue) / ratio);
						// 8分钟 5 * 60 * 8
						let coalR = (Amt * 100 - resMap['coal'].value) / resMap['coal'].perTickCached;
						let ironR = (Amt * 100 - resMap['iron'].value) / resMap['iron'].perTickCached;
						if (Math.min(coalR, ironR) < 2400) {
							Craft.oxidation = true;
							msgSummary('oxidation');
						}
					}
					let alloyVal = resMap['alloy'].value;
					let orb = this.getUnResearched('orbitalGeodesy');
					if (orb && resMap['oil'].value > 1.7e4 && resMap['oil'].maxValue > 3.5e4 && resMap['uranium'].value < 1e3) {
						let a = Math.ceil((1000 - alloyVal) / ratio);
						let isCache = resMap['titanium'].value > a * 5 || (resMap['alloy'].value > 300 && calVal > 20) ;
						if (a > 0 && isCache && !cacheUpg.cache && a / resMap['titanium'].perTickCached < 100) {
							options.auto.cache.resUpg['alloy'] = 1000;
							cacheUpg.cache = 'orbitalGeodesy';
						}
					}
					let flu = this.getUnResearched('fluidizedReactors');
					if (flu && !cacheUpg.cache) {
						let a = Math.ceil((200 - alloyVal) / ratio);
						let b = resMap['titanium'].value > a * 10 || resMap['alloy'].value > 50 || a / resMap['titanium'].perTickCached < 60;
						if (a > 0 && calVal > 6 && b) {
							options.auto.cache.resUpg['alloy'] = 200;
							cacheUpg.cache = 'fluidizedReactors';
						}
					}
					let alloyCache = options.auto.cache.resUpg['alloy'];
					if (alloyCache) {
						let b = Math.ceil((alloyCache - alloyVal) / ratio);
						forceSteel('', [{name:'steel',val:b*75}]);
					}
				} else if (game.challenges.isActive("blackSky")) {
					forceSteel('', [{name:'steel',val:1100}]);
				}
				if (!oxid) {
					Craft.oxidation = null;
					msgSummary('oxidation', true);
				}
				// 资源回复满的铁触发消耗完铁
				if (itemHunt.time && resPercent('iron') > 0.98) {itemHunt.time = 'fullIron';}
			}

			if (name === 'alloy' && limited) {
				let forceAlloy = (name, price) => {
					let workshopMeta = workshop.get(name);
					if (workshopMeta.researched || !workshopMeta.unlocked) {return;}
					let amt = Math.ceil((price - resMap['alloy'].value) / ratio);
					if (amt > 1 && resMap['steel'].value > amt * 75 && resMap['titanium'].value > amt * 10) {
						amount = amt;
						force = true;
						activity(i18n('craft.forceSteel', [workshopMeta.label]));
					}
				};
				if (resMap['oil'].value > 35000) {
					forceAlloy('orbitalGeodesy', 1000);
				}
				forceAlloy('fluidizedReactors', 200);
				forceAlloy('alloyAxe', 25);
			}

			if (name === 'eludium' && limited && !aboveTrigger && resPercent('unobtainium') > 0.1) {
				if (huntTime && game.time.getCFU("ressourceRetrieval").on > 8 - renaissance * 2) {
					amount = Math.max(amount, 1);
				}
			}

			if (amount < 1) {return 0;}
			// If we have a maximum value, ensure that we don't produce more than
			// this value. This should currently only impact wood crafting, but is
			// written generically to ensure it works for any craft that produces a
			// good with a maximum value.

			let maxValue = resMap[name].maxValue;
			let value = resMap[name].value;
			if (maxValue > 0 && amount * ratio > (maxValue - value)) {
				amount = (maxValue - value) / ratio;
			}

			if (limited && !force && (!aboveTrigger || aboveTrigger === 'noRequire')) {
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
			let prod = game.getResourcePerTick(res.name, true);
			if (res.name === 'timeCrystal') {
				let aliChance = game.getEffect("alicornChance");
				let alicornTick = game.getResourcePerTick("alicorn");
				let tcRefineRatio = 0.04 * (1 + game.getEffect("tcRefineRatio"));
				aliChance *= 1 + game.getLimitedDR(game.getEffect("alicornPerTickRatio"), 1.2);
				let aliChanceTick = Math.min(aliChance, 1) * 0.2 * (1 + game.timeAccelerationRatio());
				prod += (aliChanceTick + alicornTick) * tcRefineRatio;
			}
			if (res.craftable) {
				let minProd = Number.MAX_VALUE;
				let materials = this.getMaterials(res.name);
				for (let mat in materials) {
					let rat = (1 + game.getResCraftRatio(res.name)) / materials[mat];
					//Currently preTrade is only true for the festival stuff, so including furs from hunting is ideal.
					let addProd = this.getTickVal(this.getResource(mat));
					minProd = Math.min(addProd * rat, minProd);
				}
				prod += (minProd === Number.MAX_VALUE) ? 0 : minProd;
			}
			let ignore = (res.name === 'spice' || res.name === 'blueprint');
			if (prod <= 0 && ignore) {return 'ignore';}
			let timeSkip = activitySummary['other']['time.skip'];
			let ratio = 1;
			if (!preTrade) {
				if (res.name === 'unobtainium' && timeSkip) {ratio = 0.4;}
				prod += this.cacheManager.getResValue(res.name) * ratio;
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
			let res = options.auto.resources[name];
			let stock = (res && res.enabled) ? res.stock : 0;

			if (!game.workshop.get('spaceManufacturing').researched) {
				let workshop = game.workshop;
				let orbGeodesy = workshop.get('orbitalGeodesy').researched;
				let cacheAlloy = options.auto.cache.resUpg[name];
				switch (name) {
					case 'iron': {
						let lumberMill = game.bld.get('lumberMill').val > 19 - 40 * game.getEffect("priceRatio");
						let a = resMap['gold'].value < 50 && lumberMill;
						if (game.bld.getBuildingExt('temple').meta.on > 2 || resMap['faith'].maxValue > 749 || a || resMap['plate'].value > 18) {
							let stockIron = (isStock, price, name) => {
								if (isStock && resMap['iron'].value < 1e4) {
									stock += price;
									msgSummary(name);
								}
							};
							let reinforcedSaw = this.getUnResearched('reinforcedSaw') && resMap[name].value > 200 && resMap[name].maxValue > 1e3;
							let crossbow = this.getUnResearched('crossbow') && lumberMill && resMap[name].maxValue > 1500;
							let ironwood = this.getUnResearched('ironwood') && resMap[name].value > 800 && resMap[name].maxValue > 3000
								&& resMap['science'].maxValue > 3e4 && !game.ironWill;

							stockIron(reinforcedSaw, 1000, 'reinforcedSaw');
							stockIron(crossbow, 1500, 'crossbow');
							stockIron(ironwood, 3000, 'ironwood');
							if (workshop.get('orbitalGeodesy').researched) {
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
						let steelAxe = this.getUnResearched('steelAxe') && resMap['coal'].value > 3000;
						if (steelAxe && (game.bld.get('lumberMill').val > 30 || resMap[name].value > 10)) {
							stock += 75;
						}
						// 精钢锯
						let steelSaw = this.getUnResearched('steelSaw') && resMap[name].value > 250 && !resMap['titanium'].perTickCached;
						if (steelSaw) {
							stock += 750;
							msgSummary('steelSaw');
						}
						if (options.auto.craft.oxidation && this.getUnResearched('oxidation')) {stock += 5000;}

						if (game.challenges.isActive("blackSky") && !resMap['titanium'].perTickCached && resMap['steel'].value < 1100 && resMap['oil'].value > 6e3) {
							stock += 1100;
						}

						let cacheSteel = options.auto.cache.resUpg['steel'];
						if (cacheSteel) {stock += cacheSteel;}
						if (cacheAlloy) {stock += cacheAlloy * 75 / (1 + game.getEffect("craftRatio"));}
						break;
					}
					case 'titanium':
						if (this.getUnResearched('rotaryKiln') && orbGeodesy) {stock += 5000;}
						// if (unResearched('augumentation') && resMap['uranium'].value > 50 && game.village.leader && workshop.get('rotaryKiln').researched) {stock += 5000;}
						if (this.getUnResearched('spaceManufacturing') && game.bld.get('reactor').val > 24 && resMap['titanium'].maxValue > 125e3) {stock += 13e5;}
						break;
					case 'gear':
						if (this.getUnResearched('rotaryKiln') && orbGeodesy && resMap['titanium'].value > 5e3) {stock += 5000;}
						if (this.getUnResearched('fuelInjectors') && resPercent('coal') < 0.8 && resMap['oil'].value > 2e4) {stock += 250;}
						break;
					case 'beam':
						if (this.getUnResearched('deepMining') && resMap['iron'].value > 1200) {stock += 5000;}
						break;
				}
			}
			return stock ? stock : 0;
		},
		getValueAvailable: function (name, all, typeTrigger) {
			let value = this.getValue(name);
			let stock = this.getStock(name);
			// 有上限资源可用数量最大为 MAX_VALUE
			value = this.getResource(name).maxValue !== 0 && value == Infinity ? Number.MAX_VALUE : value;

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
					stock -= resPerTick * 1500;
					// 600秒
					if (options.auto.options.catnipMsg + 6e5 < Date.now()) {
						if (game.stats.getStat("totalResets").val < 5) {activity(i18n('msg.catnip'));}
						activity(i18n('craft.winterCatnip'));
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
					value = this.getResource(name).value;// fix unobtainium carfting to eludium
				}
			}

			return value;
		},
		getUnResearched: function(name) {
			let meta = game.workshop.metaCache[name];
			return (meta.unlocked && !meta.researched);
		},
		getLimRat: function (name, limited, limRat) {
			if (!limited) {return limRat;}
			let navigation = game.science.get('navigation');

			let res = resMap[name];
			let shipValue = resMap['ship'].value;
			let space = game.space;
			let piscine = space.getProgram('piscineMission');

			let renaissance = game.prestige.getPerk('renaissance').researched;
			let reactor = game.bld.get('reactor');
			let priceRatio = game.getEffect("priceRatio");
			let steamworks = game.bld.get("steamworks");
			let magneto = game.bld.get('magneto');
			const temple = game.bld.getBuildingExt('temple').meta;
			let templeFactor = Math.pow(temple.priceRatio + priceRatio, temple.val);
			let sloar = game.religion.getSolarRevolutionRatio();

			let factor;
			switch(name) {
				case 'wood':
					limRat = (0.09 + res.perTickCached < resMap['catnip'].perTickCached / game.workshop.getCraft("wood").prices[0].val && this.getPotentialCatnip()) ? 1 : limRat;
					break;
				case 'beam': {
					let craftBeam = navigation.unlocked || resMap['gold'].maxValue < 500 || (resMap['iron'].value > 1000 && !resMap['coal'].value);
					limRat = (craftBeam) ? limRat : 5e-3;
					limRat = (resMap['scaffold'].value < 500) ? limRat : 0.02;
					break;
				}
				case 'slab': {
					let a = resMap['faith'].maxValue < 750 && res.value < 51 && resMap['gold'].value > 35;
					limRat = (resMap['scaffold'].value || a || (reactor.val && res.value < 2500)) ? limRat : 5e-3;
					limRat = (resMap['scaffold'].value < 500) ? limRat : 0.1;
					limRat = (resMap['scaffold'].value > 2500 && res.value > 2500) ? 0.02 : limRat;
					break;
				}
				case 'ship': {
					let shipLimit = 5 * reactor.val + 225;
					let titaniumMax = resMap['titanium'].maxValue;
					let satnav = !piscine.on && space.getBuilding('sattelite').val < 9 && res.value;
					let manufacture = satnav && sloar > 6 && titaniumMax < 125e3 && !piscine.val;
					satnav = satnav && sloar > 6 && titaniumMax > 120e3;
					limRat = (shipValue > shipLimit * 0.75 && sloar > 2 && resMap['starchart'].value < 1e5) ? 0.3 : limRat;
					// (shipValue > shipLimit * 5 && sloar > 5) ||
					limRat = (manufacture || resPercent('titanium') > 0.9) ? 0.05 : limRat;
					limRat = (satnav && (!game.workshop.get('satnav').researched || titaniumMax > 123e3)) ? 0 : limRat;
					limRat = (shipValue > Math.max(400, titaniumMax)) ? 0 : limRat;
					break;
				}
				case 'plate': {
					let titan = resMap['titanium'].value > 3500 && resMap['uranium'].value > 250 && !reactor.val;
					let Temple = temple.on && temple.on < 12 && sloar && res.value < templeFactor * 15;
					limRat = (game.getEffect('calcinerRatio') || Temple) ? limRat : 0.3;
					limRat = ((res.value < 150 && navigation.researched && resMap['starchart'].value > 10 && resMap['scaffold'].value > 50)
						|| titan) ? 0.9 : limRat;
					limRat = (options.auto.craft.oxidation && !game.workshop.get('oxidation').researched) ? 0 : limRat;
					break;
				}
				case 'alloy': {
					let titaniumTick = game.globalEffectsCached['titaniumPerTickAutoprod'];
					let calcinerVal = game.bld.getBuildingExt('calciner').meta.val;
					factor = Math.pow(magneto.priceRatio + priceRatio, magneto.val);
					limRat = (steamworks.on < magneto.on || calcinerVal < 2) ? limRat : 0.75;
					limRat = (res.value > Math.max(1250, 10 * factor) && options.auto.build.items.magneto.enabled) ? 0.01 : limRat;
					limRat = ((resMap['titanium'].value < 17 && !calcinerVal) || (calcinerVal < 2 && game.challenges.isActive('blackSky'))) ? 0 : limRat;
					break;
				}
				case 'steel':
					limRat = (options.auto.craft.oxidation) ? 1 : limRat;
					break;
				case 'eludium': {
					let RR = game.time.getCFU("ressourceRetrieval").on > 5;
					limRat = (RR) ? 0.1 : 0.6;
					limRat = (res.value < 125 && game.getEffect('hutPriceRatio') > -1.06) ? 1 : limRat;
					break;
				}
				case 'megalith': {
					let ziggurat = game.bld.getBuildingExt('ziggurat').meta;
					factor = Math.pow(ziggurat.priceRatio + priceRatio, ziggurat.val);
					let reactorFactor = Math.pow(reactor.priceRatio + priceRatio, reactor.val);
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
					factor = Math.pow(reactor.priceRatio + priceRatio, reactor.val);
					let dataCenter = game.bld.getBuildingExt('library').meta;
					let dataFactor = Math.pow(dataCenter.priceRatio + priceRatio, dataCenter.val) * dataCenter.stage;
					limRat = (reactor.val) ? limRat : 0.25;
					limRat = (res.value > Math.max(moon, 50 * factor, 10 * dataFactor)) ? 0.01 : limRat;
					limRat = (!res.unlocked && game.diplomacy.get('nagas').embassyLevel > 10 && !game.calendar.season && resMap['titanium'].value > 500) ? 1 : limRat;
					break;
				}
				case 'gear': {
					factor = Math.pow(steamworks.priceRatio + priceRatio, steamworks.val);
					let logistics = game.workshop.get('logistics');
					let fuel = game.workshop.get('fuelInjectors');
					fuel = !fuel.researched && fuel.unlocked;
					let fuelInjectors = resMap['oil'].value > 2e4 && resPercent('coal') < 0.5 && res.value < 250 && fuel;
					limRat = (res.value > 30 && (!logistics.unlocked && logistics.researched)) ? 0.3 : limRat;
					limRat = (fuelInjectors) ? 0.7 : limRat;
					limRat = (res.value > Math.max(500, 20 * factor)) ? 5e-3 : limRat;
					limRat = (steamworks.val || game.science.get('chemistry').researched) ? limRat : 0;
					break;
				}
				case 'kerosene':
					limRat = 0.25;
					limRat = (!piscine.val && resMap['starchart'].value > 1400 && res.value < 250 && sloar > 3) ? 0.8 : limRat;
					limRat = (!piscine.on && res.value > 250) ? 0 : limRat;
					limRat = (space.getProgram('moonMission').val) ? limRat : 0;
					break;
				case 'manuscript': {
					limRat = (game.prestige.getPerk("numerology").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) ? 0.25 : limRat;
					let chapel = game.bld.getBuildingExt('chapel').meta;
					chapel = Math.pow(chapel.priceRatio + priceRatio, chapel.val);
					let brewery = game.bld.getBuildingExt('brewery').meta;
					if (resMap['culture'].maxValue > Math.pow(brewery.priceRatio + priceRatio, brewery.val) && resPercent('culture') > 0.5) {
						limRat = (resMap['parchment'].value > Math.max(1e6, 250 * chapel) && reactor.val) ? 1 : limRat;
					}
					break;
				}
				case 'compedium':
					limRat = (game.science.get('architecture').unlocked) ? limRat : 0;
					limRat = (resMap['manuscript'].value > Math.max(10e3, 100 * templeFactor)) ? 0.9 : limRat;
					if (res.value * 10 > Math.max(2e4, this.getCompendiaMax()) && resPercent('science') === 1) {limRat = 0;}
					break;
				case 'blueprint':
					limRat = (game.science.get('industrialization').unlocked) ? limRat : 0;
					if (resMap['compedium'].value * 10 > Math.max(2e4, this.getCompendiaMax()) && resPercent('science') === 1) {limRat = 1;}
					break;
				case 'scaffold': {
					let observatory = game.bld.get('observatory');
					factor = Math.pow(observatory.priceRatio + priceRatio, observatory.val);
					limRat = (res.value < 100 && game.science.get('navigation').unlocked && resMap['iron'].value > 750) ? 1 : limRat;
					limRat = (game.science.get('navigation').unlocked) ? limRat : 0;
					//limRat = (res.value < 50 * factor && res.value > 85 && resMap['science'].value < 15e4) ? 1 : limRat;
					break;
				}
				case 'tanker':
					limRat = 0.1;
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
				let blackLibrary = game.religion.getTU("blackLibrary");
				let ttBoostRatio = 1 + blackLibrary.val * (blackLibrary.effects["compendiaTTBoostRatio"] + game.getEffect("blackLibraryBonus"));
				scienceBldMax *= 1 + 0.05 * ttBoostRatio * game.religion.transcendenceTier;
			}
			return scienceBldMax + compCap;
		},
		getPotentialCatnip: function (worstWeather, pastures, aqueducts) {
			let fieldProd = game.getEffect('catnipPerTickBase');
			if (worstWeather) {
				fieldProd *= 0.1;
				fieldProd *= 1 + game.getLimitedDR(game.getEffect("coldHarshness"),1);

				if (game.science.getPolicy("communism").researched) {fieldProd = 0;}

			} else {
				//fieldProd *= game.calendar.getWeatherMod({name: "catnip"});
				let calendar = (game.calendar.year < 4) ? 0 : 0.15;
				fieldProd *= game.calendar.seasons[3].modifiers.catnip - calendar;
			}
			let vilProd = (game.village.getResProduction().catnip) ? game.village.getResProduction().catnip * (1 + game.getEffect('catnipJobRatio')) : 0;
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

			baseProd *= 1 + game.religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);

			//if (!game.opts.disableCMBR) {baseProd *= (1 + game.getCMBRBonus());}

			baseProd *= 1 + (game.getEffect('blsProductionBonus') * resMap['sorrow'].value);

			baseProd = game.calendar.cycleEffectsFestival({catnip: baseProd})['catnip'];

			baseProd *= 1 + game.bld.pollutionEffects["catnipPollutionRatio"];

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
			baseProd += baseDemand;

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
			let nextPriceCheck;
			let data, prices, priceRatio, i, build;
			const bList = [];
			const countList = [];
			let counter = 0;
			for (const name in builds) {
				build = builds[name];
				data = metaData[name];
				if (!build.enabled) {continue;}
				// 建筑数量大于等于max时 或者等于0时跳过
				if (build.max !== -1 && build.max <= data.val) { continue; }
				if (data.unlocked === false) {continue;}
				let require = build.require ? this.craftManager.getResource(build.require) : false;
				if (!require || trigger <= require.value / require.maxValue) {
					let prices = (data.stages) ? data.stages[data.stage].prices : data.prices;
					if (build.variant === 's') {prices = game.village.getEffectLeader("wise", dojo.clone(data.prices));}
					priceRatio = this.getPriceRatio(data, source);
					bList[counter] = {};
					bList[counter].id = name;
					bList[counter].label = build.label;
					bList[counter].name = build.name;
					bList[counter].stage = build.stage;
					bList[counter].variant = build.variant;
					countList[counter] = {};
					countList[counter].id = name;
					countList[counter].name = build.name;
					countList[counter].count = 0;
					countList[counter].spot = counter;
					countList[counter].prices = [];
					let pricesDiscount = game.getLimitedDR(game.getEffect(name + "CostReduction"), 1);
					let priceModifier = 1 - pricesDiscount;
					for (i in prices) {
						let price = prices[i];
						let resPriceDiscount = game.getLimitedDR(game.getEffect(price.name + "CostReduction"), 1);
						let resPriceModifier = 1 - resPriceDiscount;
						countList[counter].prices.push({
							val: price.val * priceModifier * resPriceModifier,
							name: price.name
						});
					}

					countList[counter].priceRatio = priceRatio;
					countList[counter].source = source;
					countList[counter].limit = (isNaN(build.max)) ? -1 : build.max;
					countList[counter].val = data.val;
					if (this.singleBuildPossible(data, countList[counter].prices, priceRatio, source)) {
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
			while (countList.length !== 0) {
				bulkLoop:
				for (let j = 0; j < countList.length; j++) {
					let build = countList[j];
					data = metaData[build.id];
					let dataVal = data.val;
					prices = build.prices;
					priceRatio = build.priceRatio;
					source = build.source;
					for (let p = 0; p < prices.length; p++) {
						let spaceOil, cryoKarma, oilPrice, karmaPrice = false;
						if (source && source === 'space' && prices[p].name === 'oil') {
							spaceOil = true;
							oilPrice = prices[p].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
						} else if (build.id === 'cryochambers' && prices[p].name === 'karma') {
							cryoKarma = true;
							karmaPrice = prices[p].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
						}

						if (spaceOil) {
							nextPriceCheck = (tempPool['oil'] < oilPrice * Math.pow(1.05, k + dataVal));
						} else if (cryoKarma) {
							nextPriceCheck = (tempPool['karma'] < karmaPrice * Math.pow(priceRatio, k + dataVal));
						} else {
							let price = prices[p].val * Math.pow(priceRatio, k + dataVal);
							nextPriceCheck = tempPool[prices[p].name] < price;
						}
						if (nextPriceCheck || (data.noStackable && (k + dataVal) >= 1) || (build.id === 'ressourceRetrieval' && k + dataVal >= 100)
						  || (build.id === 'cryochambers' && game.bld.getBuildingExt('chronosphere').meta.val <= k + dataVal)) {
							for (let p2 = 0; p2 < p; p2++) {
								if (source && source === 'space' && prices[p2].name === 'oil') {
									let oilPriceRefund = prices[p2].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
									tempPool['oil'] += oilPriceRefund * Math.pow(1.05, k + dataVal);
								} else if (build.id === 'cryochambers' && prices[p2].name === 'karma') {
									let karmaPriceRefund = prices[p2].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
									tempPool['karma'] += karmaPriceRefund * Math.pow(priceRatio, k + dataVal);
								} else {
									let refundVal = prices[p2].val * Math.pow(priceRatio, k + dataVal);
									tempPool[prices[p2].name] += (prices[p2].name === 'void') ? Math.ceil(refundVal) : refundVal;
								}
							}
							if (build.limit !== -1) {
								build.count = Math.max(0, Math.min(build.count, (build.limit - build.val)));
							}
							bList[countList[j].spot].count = countList[j].count;
							countList.splice(j, 1);
							j--;
							continue bulkLoop;
						}
						if (spaceOil) {
							tempPool['oil'] -= oilPrice * Math.pow(1.05, k + dataVal);
						} else if (cryoKarma) {
							tempPool['karma'] -= karmaPrice * Math.pow(priceRatio, k + dataVal);
						} else {
							let pVal = prices[p].val * Math.pow(priceRatio, k + dataVal);
							tempPool[prices[p].name] -= (prices[p].name === 'void') ? Math.ceil(pVal) : pVal;
							// 检查 NaN
							tempPool[prices[p].name] = tempPool[prices[p].name] ? tempPool[prices[p].name] : 0;
						}
					}
					countList[j].count++;
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
			if (source && source === 'bonfire') {
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
				let resPriceDiscount = game.getLimitedDR(game.getEffect(prices[price].name + "CostReduction"), 1);
				let resPriceModifier = 1 - resPriceDiscount;
				let rightPrice = prices[price].val * priceModifier * resPriceModifier;
				if (source && source === 'space' && prices[price].name === 'oil') {
					let oilPrice = rightPrice * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
					if (this.craftManager.getValueAvailable('oil', true) < oilPrice * Math.pow(1.05, data.val)) {return false;}
				} else if (data.name === 'cryochambers' && prices[price].name === 'karma') {
					let karmaPrice = rightPrice * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
					if (this.craftManager.getValueAvailable('karma', true) < karmaPrice * Math.pow(priceRatio, data.val)) {return false;}
				} else {
					if (this.craftManager.getValueAvailable(prices[price].name, true) < rightPrice * Math.pow(priceRatio, data.val)) {return false;}
				}
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
			let leader = (options.auto.cache.trait['merchant']) ? '商人小猫与' : '小猫与';

			if (!button.model.enabled) {
				return button.controller.updateEnabled(button.model);
			}
			if (name !== 'sharks' && !options.auto.trade.items[name].enabled) {warning('贸易可能出点问题');}

			game.diplomacy.tradeMultiple(race, amount);
			game.stats.getStat("totalClicks").val += 1;
			storeForSummary(leader + ' ' + race.title, amount, 'trade');
			iactivity('act.trade', [amount, leader + ucfirst(race.title)], 'tradeFilter');
		},
		getProfitability: function (name) {
			let tick, doTrade;
			let race = this.getRace(name);

			let materials = this.getMaterials(name);
			let cost = 0;
			let rrTrade = false;
			if (name === 'leviathans' && game.time.getCFU("ressourceRetrieval").val && resPercent('unobtainium') > 0.6) {return true;}
			for (let mat in materials) {
				if (mat === 'ivory') {continue;}
				tick = this.craftManager.getTickVal(this.craftManager.getResource(mat), rrTrade);
				if (tick <= 0) {return false;}
				cost += materials[mat] / tick;
			}

			let output = this.getAverageTrade(race);
			let profit = 0;
			for (let prod in output) {
				let res = this.craftManager.getResource(prod);
				tick = this.craftManager.getTickVal(res);
				if (tick === 'ignore') {continue;}
				if (tick <= 0) {doTrade = true;}
				profit += (res.maxValue > 0) ? Math.min(output[prod], Math.max(res.maxValue - res.value, 0)) / tick : output[prod] / tick;
			}
			let prof = true;
			let season = game.calendar.season;
			let spice = resMap['spice'].value + 60 * game.getResourcePerTick('spice', true) < 0;
			if (name === 'nagas') {
				if (!resMap['concrate'].unlocked && !game.ironWill) {prof = false;}
				if (resMap['ship'].value < 30 && race.embassyLevel < 10 && !game.ironWill) {prof = false;}
				let production = 1 + game.prestige.getParagonProductionRatio();
				if (resMap['concrate'].value < 100 * production && race.embassyLevel > 10 && resMap['concrate'].value) {doTrade = true;}
			}
			let solar = game.religion.getSolarRevolutionRatio();
			let titanium = resMap['titanium'];
			if (name === 'griffins') {
				if (resMap['ship'].value && season !== 2 && (resMap['ship'].value > 200 || game.getEffect("productionRatio"))) {prof = false;}
				if (titanium.value && titanium.value < 500 && season === 2 && solar > 1) {prof = false;}
				doTrade = spice && game.calendar.festivalDays;
			}
			if (name === 'zebras') {
				let calciner = game.bld.getBuildingExt('calciner').meta.val;
				let griffins = options.auto.trade.items.griffins;
				let iron = this.craftManager.getTickVal(resMap['iron']);
				// / this.craftManager.getTickVal(titanium
				let titaniumProfit = Math.min(Math.max(titanium.maxValue - titanium.value, 0), output['titanium']) / titanium.perTickCached;
				let autumnIron = this.getAverageTrade(this.getRace('griffins'))['iron'] / iron < output['iron'] / iron + titaniumProfit;
				if (griffins.enabled && griffins.autumn && season === 2 && calciner) {
					prof = prof && autumnIron && resPercent('titanium') < 0.95;
				}

				if (solar > 1.5 && !game.religion.getRU("stainedGlass").on) {prof = false;}
				if (calciner > 1 && solar > 3 && !game.religion.getRU("basilica").on) {prof = false;}
				doTrade = spice && game.calendar.festivalDays;
				doTrade = doTrade && game.workshop.get('caravanserai').researched;
			}
			if (name === 'spiders') {
				if (season !== 2) {prof = resPercent('titanium') > 0.5 && resPercent('coal') < 0.5;}
				if (season === 3) {prof = resPercent('titanium') > 0.9 && resPercent('coal') < 0.5 && resPercent('gold') > 0.95;}
				if (!prof && !doTrade) {
					doTrade = resPercent('titanium') > 0.1 && resPercent('coal') < 1;
					doTrade = game.challenges.isActive('atheism') && race.embassyLevel > 4;
				}
			}
			if (name === 'dragons') {
				prof = game.space.getProgram('centaurusSystemMission').on && resPercent('titanium') > 0.5 || resPercent('uranium') < 0.4;
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
				//var item = race.sells[s];
				if (!this.isValidTrade(item, race)) {continue;}
				//var resource = this.craftManager.getResource(item.name);
				let mean = 0;
				let tradeChance = (item.minLevel) ? item.chance * (1 + game.getLimitedDR(0.01 * race.embassyLevel, 0.75)) : item.chance;
				let sRatio = (item.seasons) ? 1 + item.seasons[game.calendar.getCurSeason().name] : 1;
				let normBought = (successRat - bonusRat) * Math.min(tradeChance, 1);
				let normBonus = bonusRat * Math.min(tradeChance, 1);
				mean = (normBought + 1.25 * normBonus) * item.value * rRatio * sRatio * tRatio;
				output[item.name] = mean;
			}
			if (race.name === "zebras") {
				let shipCount = resMap["ship"].value;
				let zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
				let titanProb = Math.min(0.15 + shipCount * 0.0035, 1);
				//let modifier = (shipCount < 230) ? Math.log(shipCount) * shipCount * 0.00084 - 0.01 : 1;
				output["titanium"] = (1.5 + shipCount * 0.03) * (1 + zebraRelationModifierTitanium) * titanProb * successRat;
				if (game.religion.getSolarRevolutionRatio() < 1 && shipCount < 40 && game.getEffect('titaniumPerTickAutoprod') < 0.002) {output["titanium"] = 0;}
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
					total = total == Infinity ? Number.MAX_VALUE / materials[i] : total;
				} else {
					total = this.craftManager.getValueAvailable(i, !limited, options.auto.trade.trigger) / materials[i];
					total = total == Infinity ? Number.MAX_VALUE / materials[i] : total;
				}

				amount = (amount === undefined || total < amount) ? total : amount;
			}

			amount = Math.floor(amount);

			if (amount === 0) {return 0;}

			if (race === null || options.auto.trade.items[name].allowCapped) {return amount;}

			// Loop through the items obtained by the race, and determine
			// which good has the most space left. Once we've determined this,
			// reduce the amount by this capacity. This ensures that we continue to trade
			// as long as at least one resource has capacity, and we never over-trade.

			let tradeOutput = this.getAverageTrade(race);
			for (let s in race.sells) {
				let item = race.sells[s];
				let resource = this.craftManager.getResource(item.name);
				let max = 0;

				// No need to process resources that don't cap
				if (!resource.maxValue) {continue;}

				max = tradeOutput[item.name];

				let capacity = Math.max((resource.maxValue - resource.value - Math.max(0, 9 * resource.perTickCached)) / max, 0);

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
	if (addRule) {
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
			+ 'margin-top: 1% !important;'
			+ 'height: 90%;'
			+ 'width: 49%;'
			+ '}');

		addRule(defaultSelector + ' #rightColumn {'
			+ 'overflow-y: auto;'
			+ 'height: 92%;'
			+ 'width: 19%;'
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
			+ 'color: ' + options.stockwarncolor + ';'
			+ '}');

		addRule('.right-tab {'
			+ 'height: unset !important;'
			+ '}');
	}

	// Local Storage
	// =============

	let kittenStorageVersion = 3;

	let kittenStorage = {
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

	let toggles = ['build','space','craft','upgrade','trade','faith','time','timeCtrl','distribute','options','filter'];
	let initializeKittenStorage = function () {
		toggles.forEach((name) => {
			$("#items-list-" + name).find("input[id^='toggle-']").each(function () {
				let dom = $(this);
				if ($(this).attr("type") !== 'radio') {
					kittenStorage.items[dom.attr("id")] = dom.prop("checked");
				}
			});
		});
		kittenStorage.items['toggle-leaderJob-farmer'] = true;
		kittenStorage.items['toggle-leaderTrait-manager'] = true;
		saveToKittenStorage();
	};

	let saveToKittenStorage = function () {
		kittenStorage.toggles = {
			infinity: options.auto.infinity.enabled,
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
			initializeKittenStorage();
			return;
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
					if ($('#resource-' + resource).length === 0) {resourcesList.append(addNewResourceOption(resource));}
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
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'},
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
				if (window.confirm(i18n('resources.del.confirm', [title]))) {
					container.remove();
					removeResourceControl(name, forReset);
					saveToKittenStorage();
				}
			});
		})(del, forReset);

		return container;
	};

	let ksUi = true;
	if (ksUi) {
		let autoI18nLabel = true;
		if (autoI18nLabel) {
			['workshopTab', 'libraryTab', 'villageTab'].forEach((tab) => {
				if (game[tab] && game.ui.activeTabId !== game[tab].tabId && !game[tab]._inherited) {
					game[tab].render();
				}
			});
			(() => {
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
			})();
		}

		let getAvailableResourceOptions = function (forReset) {
			let items = [];
			let idPrefix = forReset ? '#resource-reset-' : '#resource-';
			let Res = game.resPool.resources;
			let Resources = options.auto.resources;
			for (let i in Res) {
				let res = Res[i];
				let name = res.name;
				let autoRes = Resources[name];
				autoRes = autoRes && autoRes.enabled;
				if (!forReset && (res.persists || autoRes)) {continue;}
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

			let clearunused = $('<div/>', {
				id: 'resources-clear-unused',
				text: i18n('resources.clear.unused'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray' },
			});

			clearunused.on('click', function () {
				for (let name in options.auto.resources) {
					// Only delete resources with unmodified values. Require manual
					// removal of resources with non-standard values.
					if (!options.auto.resources[name].stock &&
						options.auto.resources[name].consume === options.consume ||
						options.auto.resources[name].consume === undefined) {
						$('#resource-' + name).remove();
					}
				}
			});

			let allResources = $('<ul/>', {
				id: 'available-resources-list',
				css: {display: 'none', paddingLeft: '20px'}
			});

			(function (add, forReset) {
				add.on('click', function () {
					allResources.toggle();
					allResources.empty();
					if (allResources[0].style.display !== 'none') {allResources.append(getAvailableResourceOptions(forReset));}
				});
			})(add, forReset);

			if (forReset) {list.append(add, allResources);} else {list.append(add, clearunused, allResources);}

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

			let disableAll = $('<div/>', {
				id: 'toggle-all-disable-items-' + toggleName,
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
				id: 'toggle-all-enable-items-' + toggleName,
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
			});

			list.append(enableAll);
			return list;
		};

		let getAdditionOptions = function () {
			let toggleName = 'faith-addition';
			let list = getOptionHead(toggleName);

			let addi = options.auto.faith.addition;
			for (let itemName in addi) {
				let node = getOption(itemName, addi[itemName]);

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

				if (addi[itemName].subTrigger !== undefined) {

					let triggerButton = $('<div/>', {
						id: 'set-' + itemName + '-subTrigger',
						text: i18n('ui.trigger'),
						title: addi[itemName].subTrigger,
						css: {cursor: 'pointer',
							display: 'inline-block',
							float: 'right',
							paddingRight: '5px',
							textShadow: '3px 3px 4px gray'}
					}).data('option', addi[itemName]);

					(function (itemName, triggerButton) {
						if (itemName === 'adore') {
							triggerButton.on('click', function () {
								let value;
								engine.stop(false);
								value = window.prompt(i18n('adore.trigger.set'), addi[itemName].subTrigger);
								if (options.auto.engine.enabled) {
									engine.start(false);
								}

								if (value !== null) {
									addi[itemName].subTrigger = parseFloat(value);
									kittenStorage.items[triggerButton[0].id] = addi[itemName].subTrigger;
									saveToKittenStorage();
									triggerButton[0].title = addi[itemName].subTrigger;
								}
							});

						} else if (itemName === 'autoPraise') {
							triggerButton.on('click', function () {
								let value;
								engine.stop(false);
								value = window.prompt(i18n('parise.trigger.set', [i18n('option.praise')]), addi[itemName].subTrigger);
								if (options.auto.engine.enabled) {
									engine.start(false);
								}

								if (value !== null) {
									addi[itemName].subTrigger = parseFloat(value);
									kittenStorage.items[triggerButton[0].id] = addi[itemName].subTrigger;
									saveToKittenStorage();
									triggerButton[0].title = addi[itemName].subTrigger;
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
						if (toggleName === 'infinity') {
							var autoall = options.auto;
							for (var i in autoall) {
								if (autoall[i].enabled && i !== 'infinity') { $('#toggle-' + i).click(); }
							} // 禁用所有功能
							$('#toggle-all-disable-items-infinity').click(); // 禁用所有无限流相关功能
							$('#toggle-all-disable-items-options').click(); // 禁用所有选项
							$('#toggle-all-enable-items-filter').click(); // 开启所有日志过滤
							$('#toggle-useWorkers').click(); // 开启Workers
							$('#toggle-options').click();
							$('#toggle-filter').click();
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
					css: {
						cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'
					}
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
						case 'infinity':
							list.append(getInfinityOption(itemName, auto.items[itemName]));
							break;
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
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
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
					css: {
						cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'
					},
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
					text: i18n('ui.faith.addtion'),
					title: "太阳教团的自动化项目",
					css: {
						cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '2px 2px 5px gray'
					},
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

		// start
		var getInfinityOption = function (name, option) {
			var iname = i18n('ui.infinity.' + name);
			var element = getInfinityOptionOption(name, option, iname);

			if (option.subTrigger !== undefined) {

				var triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: {
						cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'
					}
				}).data('option', option);

				triggerButton.on('click', function () {
					var value;
					engine.stop(false);
					value = window.prompt(i18n('ui.trigger.' + name + '.set'), option.subTrigger);
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						option.subTrigger = value.split('-').length == 1 ? parseFloat(value) : value;
						kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
						saveToKittenStorage();
						triggerButton[0].title = option.subTrigger;
					}
				});

				element.append(triggerButton);
			}

			return element;
		};

		var getInfinityOptionOption = function (name, option, iname) {
			var element = $('<li/>');
			var elementLabel = iname;

			var label = $('<label/>', {
				'for': 'toggle-' + name,
				text: elementLabel,
				css: { display: 'inline-block', minWidth: '80px' }
			});

			var input = $('<input/>', {
				id: 'toggle-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.enabled) {
				input.prop('checked', true);
			}

			input.on('change', function () {
				if (input.is(':checked') && option.enabled == false) {
					option.enabled = true;
					var autoall = options.auto;
					// 各项目的单独设置
					switch (name) {
						case 'cryoFix':
							if (autoall.infinity.items['buildChronosphere'].enabled) { $('#toggle-buildChronosphere').click(); }
							// time
							$('#toggle-all-disable-items-time').click();
							var temporalBattery = game.time.getCFU('temporalBattery');
							// 不消耗时间水晶，极限值在 1e17 左右，具体原理查看 IEEE 754
							var timeCrystal = game.resPool.get('timeCrystal').value / 1e20;
							timeCrystal = timeCrystal == Infinity ? Number.MAX_VALUE : timeCrystal;
							options.auto.time.items.temporalBattery.max =
								Math.floor(Math.log(timeCrystal / temporalBattery.prices[0].val) / Math.log(temporalBattery.priceRatio));
							kittenStorage.items['set-temporalBattery-max'] = options.auto.time.items.temporalBattery.max;
							options.auto.time.items.chronocontrol.max = 1;
							kittenStorage.items['set-chronocontrol-max'] = options.auto.time.items.chronocontrol.max;
							$('#toggle-temporalBattery').click();
							$('#toggle-chronocontrol').click();
							if (!autoall['time'].enabled) { $('#toggle-time').click(); }
							break;
						case 'buildChronosphere':
							if (autoall.infinity.items['cryoFix'].enabled) { $('#toggle-cryoFix').click(); }
							if (autoall['time'].enabled) { $('#toggle-time').click(); }
							break;
						default:
							break;
					}
					switch (name) {
						case 'autohunt':
						case 'autoTransform':
						case 'autoCT':
						case 'skiptime':
						case 'autoReset':
							break;
						default:
							// build
							$('#toggle-all-disable-items-build').click();
							options.auto.build.items.workshop.max = 1;
							kittenStorage.items['set-workshop-max'] = options.auto.build.items.workshop.max;
							options.auto.build.items.chronosphere.max = 1;
							kittenStorage.items['set-chronosphere-max'] = options.auto.build.items.chronosphere.max;
							$('#toggle-workshop').click();
							$('#toggle-chronosphere').click();
							if (!autoall['build'].enabled) { $('#toggle-build').click(); }
							// upgrade
							$('#toggle-all-enable-items-upgrade').click();
							$('#toggle-policies').click();
							if (!autoall['upgrade'].enabled) { $('#toggle-upgrade').click(); }
							// distribute
							$('#toggle-all-disable-items-distribute').click();
							$('#toggle-farmer').click();
							$('#toggle-leader').click();
							$('#toggle-leaderTrait-manager').click();
							if (!autoall['distribute'].enabled) { $('#toggle-distribute').click(); }
							break;
					}
					imessage('status.sub.enable', [elementLabel]);
				} else if ((!input.is(':checked')) && option.enabled == true) {
					option.enabled = false;
					imessage('status.sub.disable', [elementLabel]);
				}
				kittenStorage.items[input.attr('id')] = option.enabled;
				saveToKittenStorage();
			});

			element.append(input, label);

			return element;
		};
		// end

		let getTradeOption = function (name, option) {
			let iname = ucfirst(i18n('$trade.race.' + name));

			let element = getOption(name, option, iname);
			element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

			//Limited Trading
			let label = $('<label/>', {
				'for': 'toggle-limited-' + name,
				title: i18n('trade.limited', [iname]),
				text: i18n('ui.limit')
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
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'},
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
			let iseason = ucfirst(i18n('$calendar.season.' + season));

			let element = $('<li/>');

			let label = $('<label/>', {
				'for': 'toggle-' + name + '-' + season,
				text: ucfirst(iseason)
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
					imessage('trade.season.enable', [iname, iseason]);
				} else if ((!input.is(':checked')) && option[season]) {
					option[season] = false;
					imessage('trade.season.disable', [iname, iseason]);
				}
				kittenStorage.items[input.attr('id')] = option[season];
				saveToKittenStorage();
			});

			element.append(input, label);

			return element;
		};

		let getSeasonForTimeSkip = function (season, option) {
			let iseason = ucfirst(i18n('$calendar.season.' + season));

			let element = $('<li/>');

			let label = $('<label/>', {
				'for': 'toggle-timeSkip-' + season,
				text: ucfirst(iseason)
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
					imessage('time.skip.season.enable', [iseason]);
				} else if ((!input.is(':checked')) && option[season]) {
					option[season] = false;
					imessage('time.skip.season.disable', [iseason]);
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
			require = (require) ? game.resPool.get(option.require).title : i18n('ui.none');
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

				let loadButton = $('<div/>', {
						id: 'toggle-upgrade-policies-load',
						text: i18n('ui.upgrade.policies.load'),
						css: {
							cursor:'pointer',
							display:'inline-block',
							float:'right',
							paddingRight:'5px',
							textShadow:'3px 3px 4px gray'}
					}
				);

				let showButton = $('<div/>', {
						id: 'toggle-upgrade-policies-show',
						text: i18n('ui.upgrade.policies.show'),
						css: {
							cursor:'pointer',
							display:'inline-block',
							float:'right',
							paddingRight:'5px',
							textShadow:'3px 3px 4px gray'}
					}
				);
				// resetBuildList.append(getResetOption(item, 'build', options.auto.build.items[item]));

				loadButton.on('click', function(){
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
					list.append(getPoliciesOptions());
				});

				showButton.on('click', function(){
					list.toggle();
					list.empty();
					list.append(getPoliciesOptions());
				});

				element.append(showButton, loadButton, list);
			}

			if (option.subTrigger !== undefined && name === 'missions') {
				let triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
				}).data('option', option);

				triggerButton.on('click', function () {
					let value;
					engine.stop(false);
					if (name === 'missions'){value = window.prompt(i18n('ui.trigger.missions.set'), option.subTrigger.toString());} else{value = window.prompt(i18n('ui.trigger.set'), option.subTrigger.toString());}
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
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
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
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
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
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
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
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
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
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'},
				});

				let cyclesList = $('<ul/>', {
					id: 'cycles-list-' + name,
					css: {display: 'none', paddingLeft: '20px'}
				});

				for (let i in game.calendar.cycles) {cyclesList.append(getCycle(i, option));}


				let seasonsButton = $('<div/>', {
					id: 'toggle-seasons-' + name,
					text: i18n('trade.seasons'),
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'},
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

				buildButton.on('click', function(){resetBuildList.toggle(); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
				spaceButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
				resourcesButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(); resetReligionList.toggle(false); resetTimeList.toggle(false);});
				religionButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(); resetTimeList.toggle(false);});
				timeButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle();});

				element.append(buildButton, spaceButton, resourcesButton, religionButton, timeButton,
					resetBuildList, resetSpaceList, resetResourcesList, resetReligionList, resetTimeList);
			} else {
				triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: {
						cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'
					}
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
					if (e.isTrusted) {saveToKittenStorage();}
					let style = document.getElementById('toggleCenter').style;
					if (option.enabled) {
						document.body.setAttribute('data-ks-style', '');
						game.ui.fullWidth = true;
						if (!game.ui.isCenter) {
							style.display = 'none';
						}
					} else {
						document.body.removeAttribute('data-ks-style');
						style.display = '';
						game.ui.fullWidth = undefined;
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
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
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

				let ressetKS = $('<div/>', {
					id: 'ressetKS',
					text: "恢复默认配置",
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
				}).data('option', option);

				ressetKS.on('click', function () {
					if (confirm('确定要初始化珂学家配置吗，点击确认后初始化珂学家配置(最好刷新下页面)\n为了照顾钢铁模式，默认配置小屋、木屋、宅邸默认不勾，请有需要的自行勾上')){
						engine.stop();
						let cbc = sessionStorage.getItem('options');
						delete localStorage['cbc.kitten-scientists'];
						if (cbc) {
							$("#ks-options").remove();
							options.policies = [];
							options['auto'] = JSON.parse(cbc).auto;
							optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px'}});
							optionsListElement = $('<ul/>');
							optionsListElement.append(getToggle('engine'));
							if (options.auto.engine.enabled) {
								engine.start();
							}
							toggles.forEach((name) => {
								optionsListElement.append(getToggle(name));
							});
							right.prepend(optionsElement.append(optionsListElement));
							engineOn();
							loadFromKittenStorage();
							activity('为了照顾钢铁模式，小屋、木屋、宅邸默认不勾，请有需要的自行勾上');
						} else {
							game.save();
							window.location.reload();
						}
					}
				});

				element.append(loadKS);
				element.append(ressetKS);
			}

			if (name === 'donate') {
				input = element.children('input');
				input.unbind('change');
				input.on('change', function (e) {
					option.enabled = input.prop('checked');
					kittenStorage.items[input.attr('id')] = option.enabled;
					if (e.isTrusted) {saveToKittenStorage();}
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
				input = element.children('input');
				input.on('click', function () {
					let tempWindow = window.open();
					tempWindow.location = 'https://petercheney.gitee.io/baike/?file=004-%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7/02-%E5%B0%8F%E7%8C%AB%E7%A7%91%E5%AD%A6%E5%AE%B6';
					printoutput(['如果还有问题可以在猫国群询问，有BUG或意见可以联系Cheney。默认配置即推荐配置：文艺复兴玄学下默认配置能2小时冲出轨道。','ks-default', options.activitycolor]);
				});
			}

			if (option.subTrigger !== undefined) {
				let triggerButton = $('<div/>', {
					id: 'set-' + name + '-subTrigger',
					text: i18n('ui.trigger'),
					title: option.subTrigger,
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
				}).data('option', option);

				triggerButton.on('click', function () {
					let value;
					engine.stop(false);
					if (name === 'crypto') {
						value = window.prompt(i18n('ui.trigger.crypto.set', [option.label]), option.subTrigger);
					} else if (name === 'filterGame') {
						value = window.prompt(i18n('ui.trigger.filterGame.set'), option.subTrigger);
					} else if (name === 'shipOverride') {
						value = window.prompt(i18n('ui.trigger.shipOverride.set', [option.label]), option.subTrigger);
					} else {
						value = window.prompt(i18n('ui.trigger.set', [option.label]), option.subTrigger);
					}
					if (options.auto.engine.enabled) {
						engine.start(false);
					}

					if (value !== null) {
						if (name === 'crypto') {
							option.subTrigger = value;
						} else if (name === 'filterGame'){
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
				text: i18n('ui.limit')
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
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);

			(function (iname){
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
				css: {
					cursor:'pointer',
					display:'inline-block',
					float:'right',
					paddingRight:'5px',
					textShadow:'3px 3px 4px gray'}
			});

			for (i in window["com"]["nuclearunicorn"].game.village.Kitten().traits){
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
				css: {
					cursor:'pointer',
					display:'inline-block',
					float:'right',
					paddingRight:'5px',
					textShadow:'3px 3px 4px gray'}
			});

			for (i in game.village.jobs){
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
		let optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px', display: 'none'}});
		let optionsListElement = $('<ul/>');
		optionsListElement.append(getToggle('engine'));
		if (options.auto.infinity.allow) { optionsListElement.append(getToggle('infinity')); }
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
			/*})).prepend($('<img alt="bit" src="https://s1.ax1x.com/2022/04/30/OSmUAK.png" height="15px" />', {
				css: {
					height: '15px',
					width: '15px',
					padding: '3px 4px 0 4px',
					verticalAlign: 'bottom'
				},*/
			}));

			// Add some padding above the donation item
			donate.css('padding', '5px');

			optionsListElement.append(donate);
		};
		showD();
		// add the options above the game log
		right.prepend(optionsElement.append(optionsListElement));

		let optionsTitleElement = $('<a/>', {
			css: { display: 'inline-block', textShadow: '1px 1px 1px gray', transformOrigin:'bottom',
				fontStyle:'italic', transform: 'scale(0.8)', paddingLeft: '3px'},
			text: version,
			target: '_blank',
			href: 'https://petercheney.gitee.io/scientists/updateLog.html?v=' + new Date().getDate(),
		});
		$('#ks-engine').append(optionsTitleElement);
	}

	// 渲染完后把建筑重要建筑排前面
	let buildItems = options.auto.build.items;
	options.auto.build.items = Object.assign({
		amphitheatre:buildItems['amphitheatre'],
		reactor:buildItems['reactor'],
		magneto:buildItems['magneto'],
		steamworks:buildItems['steamworks'],
	}, buildItems);
	buildItems = null;

	//建筑日志提示
	let msgSummary = (build, isDelete, filter)=> {
		if (isDelete) {
			activitySummary.other['auto.' + build] = null;
		} else {
			if (!activitySummary.other['auto.' + build]) {
				if (!filter) {filter = 'miscFilter';}
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
			lastyear: Calendar.year,
			lastTrueYear: Calendar.trueYear(),
			lastday:  Calendar.day,
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
				isummary('summary.' + i , [j]);
			}
		}

		// 赞美太阳 赞美群星
		displaySolar('praise');
		displaySolar('adore');

		let teach = activitySummary.research;
		for (name in teach) {
			l = teach[name];
			l = (l) ? '科学家' : '';
			isummary('summary.tech', [l + '小猫研究了 ' + ucfirst(name)]);
		}

		// Upgrades
		for (name in activitySummary.upgrade) {
			l = activitySummary.upgrade[name];
			l = (l) ? '科学家' : '';
			isummary('summary.upgrade', [l + '小猫发明了 ' + ucfirst(name)]);
		}


		let items = ['faith', 'build', 'craft', 'craftLeader', 'trade'];
		items.forEach((item) => {
			let summary = activitySummary[item];
			for (let i in summary) {
				isummary('summary.' + item, [game.getDisplayValueExt(summary[i]), ucfirst(i)]);
			}
		});

		// Show time since last run. Assumes that the day and year are always higher.
		let lastYear = activitySummary.lastyear;
		let lastDay = activitySummary.lastday;
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

			isummary('summary.head', [duration]);

			if (trueYears > 0) {
				let realTime = game.toDisplaySeconds(trueYears * seasonsPerYear * daysPerSeason * Calendar.ticksPerDay / game.ticksPerSecond);
				summary('总共 ' + realTime + ' 的小喵种田时间');
			}
		}

		// 提示日志过滤
		let filter = options.auto.filter;
		if (!filter.enabled || !filter.items['craftFilter'].enabled || !filter.items['buildFilter'].enabled
			|| game.console.filters['faith'].enabled || game.console.filters['astronomicalEvent'].enabled) {
			summary(equal);
			game.msg('喵喵提示：游戏(珂学家)日志消耗性能会比较多', "alert");
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
			// if (gameTime) {summary(i18n('time.game', [diplaySecond(gameTime)]));}
		}
		// Clear out the old activity
		resetActivitySummary();
	};

	let displaySolar = (name) => {
		let summary = activitySummary[name];
		let time = summary[0];
		let totalNumber = game.getDisplayValueExt(summary[1]);
		if (time) {
			isummary('summary.' + name, [game.getDisplayValueExt(time), totalNumber]);
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
						if (Engine.enabled) {message('如需查看小喵做过什么，可以点击小猫总结(清空日志旁边)');}
					}, 2000);
			} else {
				Engine.enabled = false;
				engine.stop();
			}
		});
	};
	engineOn();

	// 记录初始数据
	options.auto.cache.dataTimer['trueYear'] = game.calendar.trueYear();
	options.auto.cache.dataTimer['ticksTotal'] = game.timer.ticksTotal;
	options.auto.cache.dataTimer['saveId'] = game.telemetry.guid;

	sessionStorage.setItem('options',JSON.stringify(options));
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

	if (console && console.log) {console.log(kg_version + " loaded");}
	game._publish("kitten_scientists/ready", kg_version);
	// 提示库存
	let msgStock = () => {
		let resources = options.auto.resources;
		let filter;
		for (let i in resources) {
			let res = resources[i];
			if (res.enabled && res.stock) {
				if (i === 'furs' && res.stock === 350) {continue;}
				filter = true;
				let msg = game.msg($I("resources." + i +".title") + '库存：' + game.getDisplayValueExt(res.stock), null, null, true);
				$(msg.span).css('color', "#ff589c");
			}
		}
		if (filter) {
			activity('小喵的库存：');
			message('可爱的猫猫珂学家提示挂机尽量别设置库存');
		}
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

	if (options.auto.infinity.enabled && options.auto.infinity.allow) {
		if (!options.auto.engine.enabled) { toggleEngine.click(); }
	}

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

let loadTest = function () {
	if (typeof gamePage === 'undefined' || typeof i18nLang === 'undefined') {
		// Test if kittens game is already loaded or wait 2s and try again
		setTimeout(function () {
			loadTest();
		}, 1000);
	} else {
		let upgrades = game.workshop.upgrades;
		for (let i in upgrades) {
			let Upg = upgrades[i];
			game.workshop.metaCache[Upg.name] = Upg;
		}
		game.workshop.metaCache['undefined'] = null;
		delete game.workshop.metaCache['undefined'];
		// Kittens loaded, run Kitten Scientist's Automation Engine
		run();
		loadTest = run = null;
	}
};
setTimeout(function () {
	loadTest();
}, 1000);