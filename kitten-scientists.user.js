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

var kg_version = "小猫珂学家版本1.5.0";
var address = '1HDV6VEnXH9m8PJuT4eQD7v8jRnucbneaq';
var lang = (localStorage["com.nuclearunicorn.kittengame.language"] === 'zh') ? 'zh' : 'en';
var run = function() {

	var i18nData = {
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
			'filter.faith': 'Order of the Sun',
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
			'adore.trigger.set': 'Enter a new trigger value for AutoAdore. Should be in the range of 0 to 1.\nKS will AutoAdore if the Solor Revolutuin Bonus brought by praising the sun once after adore can reach the trigger of maximum.\n\nNote: The solar revolution bonus will diminish after reaching 75% of the maximum.',

			'resources.add': 'add resources',
			'resources.clear.unused': 'clear unused',
			'resources.stock': 'Stock: {0}',
			'resources.consume': 'Comsume: {0}',
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
			'act.time.skip': 'Kittens combuste Time crystal, {0} years skiped!',
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
			'reset.countdown.7': '&nbsp;7 - Disassembling railguns',
			'reset.countdown.6': '&nbsp;6 - Starting time engines',
			'reset.countdown.5': '&nbsp;5 - Melting blackcoins',
			'reset.countdown.4': '&nbsp;4 - Turning off satellite',
			'reset.countdown.3': '&nbsp;3 - Opening temporal rifts',
			'reset.countdown.2': '&nbsp;2 - Boosting the chronoforge',
			'reset.countdown.1': '&nbsp;1 - Time engine start',
			'reset.countdown.0': '&nbsp;0 - Temporal rifts opened!',
			'reset.last.message': 'See you next poincaré recurrence',
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
			'option.shipOverride': '无视贸易船平衡',
			'option.autofeed': '献祭死灵兽',
			'option.hunt': '派出猎人',
			'option.crypto': '黑币交易',
			'option.embassies': '建造大使馆',
			'option.style': '占满屏幕',
			//'option.steamworks': '启动蒸汽工房',
			'option.useWorkers': '启用后台满速珂学家',

			'filter.build': '建筑',
			'filter.craft': '工艺制作',
			'filter.upgrade': '工坊升级',
			'filter.research': '科学研究',
			'filter.policy': '政策',
			'filter.upgBld': '营火建筑升级',
			'filter.trade': '贸易',
			'filter.embassy': '大使馆',
			'filter.hunt': '狩猎',
			'filter.praise': '赞美太阳',
			'filter.sacrifice': '献祭',
			'filter.faith': '太阳教团',
			'filter.festival': '举办节日',
			'filter.star': '天文现象',
			'filter.misc': '喵喵喵',

			'dispose.necrocorn': '小猫帮你处理掉了影响效率的多余死灵兽',
			'act.feed': '小猫向上古神献上祭品。上古神很高兴',
			'blackcoin.buy': '小猫花掉 {1} 遗物，加仓了 {0} 黑币',
			'blackcoin.sell': '小猫抛售 {1} 黑币，套现了 {0} 遗物',
			'act.observe': '小猫珂学家观测到一次天文现象',
			'act.hunt': '{0} 波{1}去打猎',
			'act.hunt.unicorn': '小猫急着派出猎人帮独角兽配种',
			'act.hunt.trade': '小猫贸易后决定去打猎',
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

			'festival.hold': '小猫开始举办节日',
			'festival.extend': '小猫延长了节日',

			'build.embassy': '在 {1} 设立了 {0} 个大使馆',
			'build.embassies': '在 {1} 设立了 {0} 个大使馆',

			'act.praise': '赞美太阳! 转化 {0} 信仰为 {1} 虔诚',
			'parise.trigger.set': '输入新的赞美太阳的触发值，取值范围为 0 到 1的纯小数\n 当为0.98时且点出太阳革命，若虔诚太少小猫每天赞美太阳',
			'summary.praise.msg': '因虔诚太低，小猫每天都会赞美太阳，直到太阳革命加成大于 {0} %',
			'act.sun.discover': '小猫在宗教祷告了 {0} ',
			'act.sun.discovers': '小猫在宗教祷告了 {0} {1} 次',
			'act.sun.discovers.leader': '哲学家小猫在宗教祷告了 {0} {1} 次',

			'ui.items': '项目',
			'ui.disable.all': '全部禁用',
			'ui.enable.all': '全部启用',
			'ui.craft.resources': '资源',
			'ui.trigger': '触发条件',
			'ui.trigger.set': '输入新的 {0} 触发值，取值范围为 0 到 1 的纯小数。（参考珂学家说明书）',
			'ui.trigger.resource': '触发资源为',
			'ui.none': '无',
			'ui.limit': '限制',
			'ui.craftLimit': 'AI平衡',
			'ui.upgradesLimit': '优选',
			'ui.trigger.shipOverride.set': '输入一个新的 强制贸易船 触发值，\n即贸易船数量低于触发条件时，相当于未勾选贸易船AI平衡。',
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
			'ui.options': '选项',
			'ui.filter': '日志过滤',
			'ui.distribute': '猫力资源',
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

			'ui.faith.addtion': '附加选项',
			'option.faith.best.unicorn': '自动最效率独角兽建筑',
			'option.faith.best.unicorn.desc': '自动献祭独角兽，并会以独角兽性价比使用来决定建造独角兽牧场~太阳尖顶，具体哪个可以参考概览',
			'unicornSacrifice' : '小猫献祭了 {0} 独角兽，并获得了 {1} 滴独角兽的眼泪',

			'option.faith.transcend': '自动最佳次元超越',
			'summary.transcend.catnip': '次元超越再赞美群星后每秒猫薄荷产量过低：{0}，故取消次元超越了(自己补下农民)',
			'act.transcend': '消耗 {0} 顿悟，达到次元超越 {1}',
			'summary.transcend': '次元超越了 {0} 次',
			'filter.transcend': '次元超越',

			'option.faith.adore': '赞美群星',
			'act.adore': '赞美群星! 转化 {0} 虔诚为 {1} 顿悟',
			'act.adore.last': '下次小猫赞美群星，会等到虔诚大于 {0} ',
			'summary.adore': '通过赞美群星积累了 {0} 顿悟',
			'summary.adore.catnip': '赞美群星后每秒猫薄荷产量过低：{0}，故取消赞美群星了(自己补下农民)',
			'summary.adore.solar': '聪明的小猫已经会算期望了，当太阳革命加成到达：{0}% 后才会赞美群星',
			'summary.adore.last': '下次赞美群星会等到虔诚大于{0} ',
			'filter.adore': '赞美群星',
			'adore.trigger.set': '为赞美群星设定一个新触发值，取值范围为 0 到 1 的小数。（0.001为自动模式）\n\n同时满足以下条件珂学家将自动赞美群星。\n1. 赞美群星再赞美太阳后，需太阳革命加成 ≥ 触发值 * 1000%\n2. 当前信仰 / 信仰上限 ≥ 0.98(赞美太阳触发条件设置0.98配合使用)\n3.探索月球已完成\n4. 次元超越等级低于 11，需赞美群星后的猫薄荷产量＞0。\n推荐启用该功能多放几个农民，喵喵保护协会不允许饿死喵喵喵\n5. 次元超越等级低于 12，需当前虔诚＞上次赞美群星时候的虔诚',

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

			'trade.limited': '贸易获得数量大于产量时才与 {0} 贸易，次数自动限制',
			'trade.limitedTitle': '根据产量和贸易获得数量',
			'trade.unlimited': '{1}与 {0} 的 贸易',
			'trade.seasons': '季节',
			'trade.season.enable': '启用在 {1} 与 {0} 的贸易',
			'trade.season.disable': '停止在 {1} 与 {0} 的贸易',
			'trade.catnip': '因猫薄荷储量过低，与鲨鱼贸易',

			'filter.enable': '过滤 {0}',
			'filter.disable': '取消过滤 {0}',

			'craft.force': '小猫为了研究{1}，偷偷使用了一些库存资源合成了{0}',
			'craft.forceSteel': '小猫为了工坊升级{0}，偷偷多使用了一些材料合成了钢',
			'craft.limited': '平衡{0}（理解为小猫AI控制触发条件、消耗率，挂机效率会比较高）',
			'craft.limitedTitle': '根据原材料和目标材料的数量',
			'craft.unlimited': '触发资源：{1}{0}',
			'craft.winterCatnip': '因寒冬猫薄荷产量低于0，故取消使用猫薄荷',

			'distribute.limited': '分配 {0} 受限于最大值',
			'distribute.leaderJob': '领袖工作为 {0} ',
			'distribute.leaderTrait': '领袖的特质为 {0} ',
			'distribute.unlimited': '分配 {0} 不受限',
			'distribute.makeLeader': '分配领袖',
			'act.distribute': '分配一只猫猫成为 {0}',
			'act.distribute.catnip': '担心你的猫猫没有猫薄荷吸并强制分配到农民',
			'act.distributeLeader': '分配一只 {0} 猫猫领袖',
			'ui.max.set': '设置 {0} 的最大值',
			'summary.distribute': '帮助 {0} 只猫猫找到工作',
			'filter.distribute': '猫口分配',
			'set.leader': '{0}，喵喵喵！',

			'option.promote': '提拔领袖',
			'act.promote': '领袖被提拔到 {0} 级',
			'filter.leader': '领袖相关',
			'summary.promote': '提拔领袖 {0} 次',

			'ui.trigger.useWorkers.alert': '比如天文事件没观测、烧水晶慢，珂学家后台大概10才运行1次\n勾选将会在后台满速运行，注意会导致使用内存增多。\n电脑不好、内存< 8G的建议禁用\n推荐过滤全部日志会减少性能的消耗。\n\n需满足浏览器支持且游戏选项的web worker启用。\n确认后会自动重新勾选启用珂学家',
			'ui.timeCtrl': '时间操纵',
			'option.accelerate': '光阴似箭',
			'act.accelerate': '固有时制御，二倍速!',
			'act.accelerate.acl': '抓稳了，要加速了!',
			'act.accelerate.slow': '不行了，要减速了',
			'filter.accelerate': '光阴似箭',
			'summary.accelerate': '小猫加速时间 {0} 次',
			'option.time.skip': '时间跳转',
			'act.time.skip': '燃烧时间水晶, 跳过接下来的 {0} 年!',
			'ui.cycles': '周期',
			'ui.maximum': '单次数量',
			'time.skip.cycle.enable': '启用在 {0} 跳转时间并允许跳过该周期',
			'time.skip.cycle.disable': '停止在 {0} 跳转时间并禁止跳过该周期',
			'time.skip.season.enable': '启用在 {0} 跳转时间',
			'time.skip.season.disable': '停止在 {0} 跳转时间',
			'time.skip.trigger.set': '拥有时间水晶数量大于该触发值才会燃烧时间水晶，取值范围为正整数。\n注意会计算时间水晶库存\n周期默认全勾就行，珂学家会自动判断是否停在红月\n每2秒烧水晶次数固定为 0.04x时计炉(无千禧年0.02)，故单次数量进一法就行\n\n故长挂推荐：触发条件500，单次数量1，周期全勾',
			'summary.time.skip': '跳过 {0} 年',
			'filter.time.skip': '时间跳转',

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
			'reset.after': '初次见面，可爱的猫猫科学家为您服务',
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

			'summary.auto.biolab': '小猫为了节省合金发展，轨道测地学前不建造，太空制造前生物实验室优先级降低',
			'summary.auto.broadcastTower': '小猫为了节省钛用来发展，太空制造解锁后建造更多的广播塔',
			'summary.auto.craftLimited': '每次运行都会合成工艺(即无视触发条件)，数量AI自动。挂机发展速度会远大于触发条件的。',
			'summary.auto.harbor': '港口需要太多的金属板，资源达到价格2倍后继续建造',
			'summary.auto.hunter': '未发明弩和导航学，小猫当猎人欲望降低',
			'summary.auto.ironwood': '喵喵喵把铁收起来，希望住上向往的铁木小屋',
			'summary.auto.leader': '喵喵自觉顶替领袖，做特质相关项目。（领袖特质的具体效果可以参考右下角：百科-游戏标签-村庄-猫口普查）',
			'summary.auto.lower': '未研究轨道测地学，小猫为了发展更快，故降低牧场、水渠、图书馆、研究院、粮仓、港口、油井、仓库的优先度',
			'summary.auto.mansion': '小猫为了节省钛和钢用来发展，宅邸优先度降低（2倍多资源）',
			'summary.auto.oxidation': '小猫为了工坊升级氧化反应，把钢存起来了',
			'summary.auto.pasture': '喵喵喵嫌弃了牧场，木材还是用来发展的好',
			'summary.auto.steamworks': '小猫曰：蒸汽工房要与磁电机成双成对',
			'summary.auto.temple': '祷告太阳革命后才会建造神殿',
			'summary.auto.tradepost': '祷告太阳革命前，根据黄金会减少交易所的建造',
			'summary.auto.workshop': '工坊只是解锁升级的猫玩具罢了，现在小猫只愿意造1个工坊哦',
			'summary.auto.scienceBld': '天文台、研究院、生物实验室科学上限快满了才会建造。',
			'summary.auto.smelter': '神学前，小猫根据木材和矿物产量来控制熔炉上限',
			'summary.auto.academy': '小猫当科学快满了才会继续建造研究院',
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

			'summary.catnip': '呐，你的猫猫没有猫薄荷吸并强制分配 {0} 个农民',
			'summary.calciner': '小猫因为你工坊升级了钢铁工厂，故关闭了煅烧炉自动化（其效果铁和煤转化钢没有100%~具体右下角参考百科）（她真的好温柔，😭）',
			'summary.mint': '小猫因为你建造了铸币厂，故关闭了铸币厂（具体右下角参考百科 游戏标签-其它建筑-铸币厂，其转化效率与喵力上限有关你喵力上限较低）',
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

			'summary.marker': '没有黑金字塔小猫拒绝了神印的建造',

			'summary.festival': '举办了 {0} 次节日',
			'summary.stars': '观测了 {0} 次天文事件',
			'summary.praise': '通过赞美太阳积累了 {0} 虔诚',
			'summary.hunt': '派出了 {0} 批可爱的小猫',
			'summary.hunt.manager': '管理者领袖派出了 {0} 批可爱的小猫',
			'summary.embassy': '设立了 {0} 个大使馆',
			'summary.feed': '向上古神献祭 {0} 只死灵兽',
			'summary.tech': '{0}',
			'summary.upgrade': '{0}',
			'summary.building': '建造了 {0} 个 {1}',
			'summary.sun': '{1} {0} 次',
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
			'summary.head': '过去 {0} 的总结',
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
		var value = i18nData[lang][key];
		if (typeof value === 'undefined') {
			value = i18nData['en'][key];
			if (!value) {
				console.error('key "' + key + '" not found');
				return '$' + key;
			}
			console.error('Key "' + key + '" not found in ' + lang);
		}
		if (args) {
			for (var i = 0; i < args.length; i++) {
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
		//猫薄荷日志
		catnipMsg: true,
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
					bestUnicornBuilding:    {enabled: true,  misc: true, label: i18n('option.faith.best.unicorn')},
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
					blackPyramid:       {require: 'unobtainium', enabled: true, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					// Order of the Sun is variant s.
					solarchant:         {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					scholasticism:      {require: 'faith',       enabled: true, max:2,  variant: 's', checkForReset: true, triggerForReset: -1},
					goldenSpire:        {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					sunAltar:           {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					stainedGlass:       {require: 'faith',        enabled: true, max:1,  variant: 's', checkForReset: true, triggerForReset: -1},
					solarRevolution:    {require: 'faith',        enabled: true, max:1,  variant: 's', checkForReset: true, triggerForReset: -1},
					basilica:           {require: 'faith',       enabled: true, max:5,  variant: 's', checkForReset: true, triggerForReset: -1},
					templars:           {require: 'faith',       enabled: true, max:5,  variant: 's', checkForReset: true, triggerForReset: -1},
					apocripha:          {require: 'faith',       enabled: true, max:1,  variant: 's', checkForReset: true, triggerForReset: -1},
					transcendence:      {require: 'faith',        enabled: true, max:1,  variant: 's', checkForReset: true, triggerForReset: -1},
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
					quarry:         {require: 'coal',        enabled: true, max:300,checkForReset: true, triggerForReset: -1},

					// science
					library:        {require: 'wood',        enabled: true, max:-1, stage: 0, checkForReset: true, triggerForReset: -1},
					dataCenter:     {require: false,         enabled: true, max:150, stage: 1, name: 'library', checkForReset: true, triggerForReset: -1},
					academy:        {require: 'wood',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					observatory:    {require: 'iron',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					biolab:         {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					pasture:        {require: 'catnip',      enabled: true, max:150, stage: 0, checkForReset: true, triggerForReset: -1},
					solarFarm:      {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'pasture', checkForReset: true, triggerForReset: -1},
					aqueduct:       {require: 'minerals',    enabled: true, max:250, stage: 0, checkForReset: true, triggerForReset: -1},
					hydroPlant:     {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'aqueduct', checkForReset: true, triggerForReset: -1},

					// other
					amphitheatre:   {require: 'minerals',    enabled: true, max:60, stage: 0, checkForReset: true, triggerForReset: -1},
					broadcastTower: {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'amphitheatre', checkForReset: true, triggerForReset: -1},
					tradepost:      {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					chapel:         {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					temple:         {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					mint:           {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// unicornPasture: {require: false,         enabled: true},
					ziggurat:       {require: false,         enabled: true, max:110, checkForReset: true, triggerForReset: -1},
					chronosphere:   {require: 'unobtainium', enabled: true, max:-1,  checkForReset: true, triggerForReset: -1},
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
					spaceStation:   {require: 'oil',         enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Moon
					moonOutpost:    {require: 'uranium',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					moonBase:       {require: 'unobtainium', enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Dune
					planetCracker:  {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					hydrofracturer: {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					spiceRefinery:  {require: 'science',     enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Piscine
					researchVessel: {require: 'titanium',    enabled: true,  max:-1, checkForReset: true, triggerForReset: -1},
					orbitalArray:   {require: 'eludium',     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Helios
					sunlifter:          {require: 'eludium', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					containmentChamber: {require: 'science', enabled: false, max:5,  checkForReset: true, triggerForReset: -1},
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
					temporalBattery:     {require: false,          enabled: false, max:0, variant: 'chrono', checkForReset: true, triggerForReset: -1},
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
					concrate:   {require: false,         max: 0, limited: true,  limRat: 0.2, enabled: true},
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
					eludium:    {require: 'unobtainium', max: 0, limited: false, limRat: 0.5, enabled: true},
					thorium:    {require: 'uranium',     max: 0, limited: false, limRat: 0.5, enabled: true}
				}
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
				// The *allowcapped* property allows us to trade even if the sold resources are at their cap.
				items: {
					dragons:    {enabled: false,  require: 'titanium',    allowcapped: false,    limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true},

					zebras:     {enabled: true,   require: false,         allowcapped: false,    limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true},

					lizards:    {enabled: false,  require: 'minerals',    allowcapped: false,    limited: true,
						summer:  true,  autumn:  false, winter:  false,         spring:      false},

					sharks:     {enabled: false,  require: 'iron',        allowcapped: false,    limited: true,
						summer:  false, autumn:  false, winter:  true,          spring:      false},

					griffins:   {enabled: true,   require: 'wood',        allowcapped: false,    limited: true,
						summer:  false, autumn:  true,  winter:  false,         spring:      false},

					nagas:      {enabled: true,   require: false,         allowcapped: false,    limited: true,
						summer:  false, autumn:  false, winter:  false,         spring:      true},

					spiders:    {enabled: false,  require: false,         allowcapped: false,    limited: true,
						summer:  false, autumn:  true,  winter:  false,         spring:      false},

					leviathans: {enabled: true,   require: 'unobtainium', allowcapped: true,     limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true}
				}
			},
			upgrade: {
				//Should KS automatically upgrade?
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
				//Which misc options should be enabled?
				enabled: true,
				items: {
					style:              {enabled: true,                    misc: true, label: i18n('option.style')},
					hunt:               {enabled: true, subTrigger: 0.98, require: 'manpower', misc: true, label: i18n('option.hunt')},
					buildEmbassies:     {enabled: true, subTrigger: 0.94, require: 'culture', misc: true, label: i18n('option.embassies')},
					shipOverride:       {enabled: true,  subTrigger: 200,  misc: true, label: i18n('option.shipOverride')},
					festival:           {enabled: true,                    misc: true, label: i18n('option.festival')},
					promote:            {enabled: true,                    misc: true, label: i18n('option.promote')},
					autofeed:           {enabled: true,                    misc: true, label: i18n('option.autofeed')},
					observe:            {enabled: true,                    misc: true, label: i18n('option.observe')},
					crypto:             {enabled: false, subTrigger: 10000, misc: true, label: i18n('option.crypto')},
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
					engineer:   {enabled: false, max: 1, limited: false},
					leader:     {enabled: true, leaderJob: 'farmer', leaderTrait: 'manager'},
				}

			},
			filter: {
				//What log messages should be filtered?
				enabled: false,
				items: {
					buildFilter:     {enabled: false, filter: true, label: i18n('filter.build'),      variant: "ks-activity type_ks-build"},
					researchFilter:  {enabled: false, filter: true, label: i18n('filter.research'),   variant: "ks-activity type_ks-research"},
					upgradeFilter:   {enabled: false, filter: true, label: i18n('filter.upgrade'),    variant: "ks-activity type_ks-upgrade"},
					craftFilter:     {enabled: false, filter: true, label: i18n('filter.craft'),      variant: "ks-activity type_ks-craft"},
					policyFilter:    {enabled: false, filter: true, label: i18n('filter.policy'),     variant: "ks-activity type_ks-policy"},
					upgBldFilter:    {enabled: false, filter: true, label: i18n('filter.upgBld'),     variant: "ks-activity type_ks-upgBld"},
					tradeFilter:     {enabled: false, filter: true, label: i18n('filter.trade'),      variant: "ks-activity type_ks-trade"},
					embassyFilter:   {enabled: false, filter: true, label: i18n('filter.embassy'),    variant: "ks-activity type_ks-embassy"},
					huntFilter:      {enabled: false, filter: true, label: i18n('filter.hunt'),       variant: "ks-activity type_ks-hunt"},
					praiseFilter:    {enabled: true,  filter: true, label: i18n('filter.praise'),     variant: "ks-activity type_ks-praise"},
					adoreFilter:     {enabled: false, filter: true, label: i18n('filter.adore'),      variant: "ks-activity type_ks-adore"},
					transcendFilter: {enabled: false, filter: true, label: i18n('filter.transcend'),  variant: "ks-activity type_ks-transcend"},
					sacrificeFilter: {enabled: false, filter: true, label: i18n('filter.sacrifice'),  variant: "ks-activity type_ks-sacrifice"},
					faithFilter:     {enabled: false, filter: true, label: i18n('filter.faith'),      variant: "ks-activity type_ks-faith"},
					accelerateFilter:{enabled: false, filter: true, label: i18n('filter.accelerate'), variant: "ks-activity type_ks-accelerate"},
					timeSkipFilter:  {enabled: false, filter: true, label: i18n('filter.time.skip'),  variant: "ks-activity type_ks-timeSkip"},
					festivalFilter:  {enabled: false, filter: true, label: i18n('filter.festival'),   variant: "ks-activity type_ks-festival"},
					starFilter:      {enabled: false, filter: true, label: i18n('filter.star'),       variant: "ks-activity type_ks-star"},
					distributeFilter:{enabled: false, filter: true, label: i18n('filter.distribute'), variant: "ks-activity type_ks-distribute"},
					leaderFilter:    {enabled: false, filter: true, label: i18n('filter.leader'),     variant: "ks-activity type_ks-leader"},
					miscFilter:      {enabled: false, filter: true, label: i18n('filter.misc'),       variant: "ks-activity"}
				}
			},
			resources: {
				furs:        {enabled: true,  stock: 350, checkForReset: false, stockForReset: Infinity},
				timeCrystal: {enabled: false, stock: 0,    checkForReset: true,  stockForReset: 500000}
			},
			policies: [],
			cache: {
				cache:    [],
				cacheSum: {},
				resources: {},
				trait:    {},
				upgrade:  undefined,
				science: '',
				resUpg: {},
			}
		}
	};

	// GameLog Modification
	// ====================

	// Increase messages displayed in log
	game.console.maxMessages = 1000;

	// 方便引用
	let resMap = game.resPool.resourceMap;

	var printoutput = function (args) {
		if (game.console.messages.length >= 999) {
			game.clearLog();
		}

		if (options.auto.filter.enabled) {
			for (var filt in options.auto.filter.items) {
				var filter = options.auto.filter.items[filt];
				if (filter.enabled && filter.variant === args[1]) {return;}
			}
		}
		var color = args.pop();
		args[1] = args[1] || 'ks-default';

		// update the color of the message immediately after adding
		var msg = game.msg.apply(game, args);
		$(msg.span).css('color', color);

		if (options.debug && console) {console.log(args);}
	};

	// Used for option change messages and other special notifications
	var message = function () {
		var args = Array.prototype.slice.call(arguments);
		args.push('ks-default');
		args.push(options.msgcolor);
		printoutput(args);
	};

	var activity = function () {
		var args = Array.prototype.slice.call(arguments);
		var activityClass = args.length > 1 ? ' type_' + args.pop() : '';
		args.push('ks-activity' + activityClass);
		args.push(options.activitycolor);
		printoutput(args);
	};

	var summary = function () {
		var args = Array.prototype.slice.call(arguments);
		args.push('ks-summary');
		args.push(options.summarycolor);
		printoutput(args);
	};

	var warning = function () {
		var args = Array.prototype.slice.call(arguments);
		args.unshift('Warning!');

		if (console) {console.log(args);}
	};

	// i18n support
	var imessage = function(key, args, t) { message(i18n(key, args), t); };
	var iactivity = function(key, args, t) { activity(i18n(key, args), t); };
	var isummary = function(key, args, t) { summary(i18n(key, args), t); };
	//var iwarning = function(key, args, t) { warning(i18n(key, args), t); };

	// 缓存upgrade
	const cacheUpgrades = (meta) => {
		if (!options.auto.cache.upgrade) {
			options.auto.cache.upgrade = {};
		}
		let metaUpgrades = meta.upgrades;
		for (let i in metaUpgrades) {
			if (!options.auto.cache.upgrade[i]) {
				options.auto.cache.upgrade[i] = [];
			}
			let upgrade = options.auto.cache.upgrade[i];
			for (let j in metaUpgrades[i]) {
				if (upgrade.indexOf(metaUpgrades[i]) === -1) {
					upgrade.push(metaUpgrades[i][j]);
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

	var Engine = function () {
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
		loop: undefined,
		huntID: undefined,
		renderID: undefined,
		worker: undefined,
		resUpdate: undefined,
		toolText: undefined,
		start: function (msg = true) {
			options.interval = Math.ceil (100 / game.getTicksPerSecondUI()) * 100;
			if (game.isWebWorkerSupported() && game.useWorkers && options.auto.options.items.useWorkers.enabled) {
				if (this.worker) {return;}
				var blob = new Blob([
					"onmessage = function(e) { setInterval(function(){postMessage('miaowu')}, '" + options.interval + "' ); }"
				]);
				var blobURL = window.URL.createObjectURL(blob);

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
			clearInterval(this.loop);
			this.loop = undefined;
			if (msg) {imessage('status.ks.disable');}
		},
		iterate: async function () {
			if (!game.mobileSaveOnPause)                                                    {return;}
			clearTimeout(this.renderID);
			this.beforeInterval();
			var subOptions = options.auto.options;
			let refresh = 0;
			if (subOptions.enabled && subOptions.items.observe.enabled)                     {this.observeStars();}
			if (options.auto.upgrade.enabled)                                               {refresh += ~~this.upgrade();}
			if (subOptions.enabled && subOptions.items.festival.enabled)                    {this.holdFestival();}
			if (options.auto.build.enabled)                                                 {refresh += ~~this.build();}
			if (options.auto.space.enabled)                                                 {refresh += ~~this.space();}
			if (options.auto.faith.enabled)                                                 {refresh += ~~this.worship();}
			if (options.auto.timeCtrl.enabled)                                              {refresh += ~~this.timeCtrl();}
			if (refresh > 0 || options.auto.cache.upgrade)                                  {this.gameUpgrade();}
			if (options.auto.craft.enabled)                                                 {this.craft();}
			if (subOptions.enabled && subOptions.items.hunt.enabled)                        {this.delay();}
			if (subOptions.enabled && subOptions.items.autofeed.enabled)                    {this.autofeed();}
			if (options.auto.trade.enabled)                                                 {this.trade();}
			if (options.auto.time.enabled)                                                  {refresh += ~~this.chrono();}
			if (subOptions.enabled && subOptions.items.crypto.enabled)                      {this.crypto();}
			if (options.copyTrait)                                                          {this.setTrait();}
			if (subOptions.enabled && subOptions.items.promote.enabled)                     {this.promote();}
			if (subOptions.enabled)                                                         {refresh += ~~this.miscOptions();}
			if (options.auto.distribute.enabled)                                            {refresh += ~~this.distribute();}
			if (refresh)                                                                    {this.beforeInterval(true);}
			if (refresh > 0)                                                                {this.delay('render');}
			//if (options.auto.timeCtrl.enabled && options.auto.timeCtrl.items.reset.enabled) {await this.reset();}
		},
		beforeInterval: function (update) {
			if (update) {
				this.resUpdate = true;
				game.updateResources();
			} else if (this.resUpdate) {
				game.resPool.update();
				this.resUpdate = null;
			}
		},
		delay: function (render) {
			if (render) {
				let tool = $('#tooltip')[0];
				if (options.renderTime + 6e5 < Date.now() || this.toolText !== tool.innerText) {
					// 防止猫口闪烁
					let kittens = game.resPool.get("kittens");
					game.village.maxKittens = Math.floor(game.getEffect("maxKittens"));
					kittens.maxValue = game.village.calculateSimMaxKittens();
					this.renderID = setTimeout(() => {
						let active = game.ui.activeTabId;
						if (active === 'Village' || active === 'Nummon') {return;}
						options.renderTime = Date.now();
						this.toolText = tool.innerText;
						game.ui.render();
					}, Math.min(200,200 - Date.now() + game.timer.timestampStart));
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
			var optionVals = options.auto.timeCtrl.items;
			var refreshRequired = 0;

			// Tempus Fugit
			if (optionVals.accelerateTime.enabled && game.science.get("calendar").researched) {
				var tf = game.resPool.get('temporalFlux');
				if (tf.value >= Math.max(tf.maxValue * optionVals.accelerateTime.subTrigger, 1) && !game.time.isAccelerated) {
					game.time.isAccelerated = true;
					iactivity('act.accelerate', [], 'ks-accelerate');
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
				var timeSkipMaximum = optionVals.timeSkip.maximum;
				var subTrigger = optionVals.timeSkip.subTrigger;
				let cost = Math.max(subTrigger, timeSkipMaximum, this.craftManager.getStock('timeCrystal'));

				var currentCycle = game.calendar.cycle;
				var currentYear = game.calendar.year;
				var currentDay = game.calendar.day;

				var heatMax = game.getEffect('heatMax');
				var heatNow = game.time.heat;
				if (timeCrystalValue < cost || currentDay < 0 || !optionVals.timeSkip[currentCycle] || heatNow >= heatMax) {
					break TimeSkip;
				}

				// 红月判断收支平衡
				var prestige = game.prestige.getPerk("numerology").researched;
				if (currentCycle === 5 && optionVals.timeSkip[currentCycle] && prestige && game.nummon){
					// 概览 算好的当前周期收入
					var unobtainiumTick = game.nummon['getTradeTC']();
					var cycleFestival = game.calendar.cycleEffectsFestival({
						unobtainium: 1
					})['unobtainium'];
					var cycleEffects = game.calendar.cycleEffectsBasics({
						unobtainiumPerTickSpace: 1
					}, "moonOutpost")['unobtainiumPerTickSpace'];
					// 平衡周期
					var calendar = (56.5 + 12 * game.getEffect("festivalRatio")) / 50 ;
					let cycleYear = game.calendar.cycleYear;
					var tradeVal = unobtainiumTick * calendar / (cycleFestival * cycleEffects);
					if (tradeVal < 1 && timeCrystalValue > 1000) {
						if (cycleYear !== optionVals.timeSkip.moonMsg) {
							optionVals.timeSkip.moonMsg = cycleYear;
							iactivity('summary.time.skip.moon', [1]);
							storeForSummary('time.skip.moon', 1);
						}
						break TimeSkip;
					}
				}

				var shatter = game.timeTab.cfPanel.children[0].children[0]; // check?
				if (!shatter.model.enabled) {
					return shatter.controller.updateEnabled(shatter.model);
				}

				var season = game.calendar.season;
				var wait = optionVals.timeSkip.wait;
				if (!optionVals.timeSkip[game.calendar.seasons[season].name] || (wait !== false && currentCycle === 5)) {
					if (wait == 1 && currentCycle === 5) {
						optionVals.timeSkip.wait = game.calendar.year;
						break TimeSkip;
					} else if (wait === false || wait === currentYear || wait === 1) {
						break TimeSkip;
					} else if (wait !== currentYear) {
						optionVals.timeSkip.wait = false;
					}
				}

				var factor = game.challenges.getChallenge("1000Years").researched ? 5 : 10;
				var heatMin =  4 * timeSkipMaximum * factor;
				var booleanForHeat = (game.time.heat > game.getEffect('heatMax') - Math.min(heatMin, 20 * game.time.getCFU("blastFurnace").on + 20));
				var moonBoolean = optionVals.timeSkip[5];
				if (moonBoolean && prestige && optionVals.timeSkip.wait === false && booleanForHeat) {
					optionVals.timeSkip.wait = 1;
					iactivity('summary.moon', [1]);
					storeForSummary('moon', 1);
				}

				var yearsPerCycle = game.calendar.yearsPerCycle;
				var remainingYearsCurrentCycle = yearsPerCycle - game.calendar.cycleYear;
				var cyclesPerEra = game.calendar.cyclesPerEra;
				var canSkip = Math.min(Math.floor((heatMax - heatNow) / factor), timeSkipMaximum);
				var willSkip = 0;
				if (canSkip < remainingYearsCurrentCycle){
					willSkip = canSkip;
				} else {
					willSkip += remainingYearsCurrentCycle;
					canSkip -= remainingYearsCurrentCycle;
					var skipCycles = 1;
					while (canSkip > yearsPerCycle && optionVals.timeSkip[(currentCycle + skipCycles) % cyclesPerEra]) {
						willSkip += yearsPerCycle;
						canSkip -= yearsPerCycle;
						skipCycles += 1;
					}
					if (optionVals.timeSkip[(currentCycle + skipCycles) % cyclesPerEra] && canSkip > 0) {willSkip += canSkip;}
				}
				if (willSkip > 0) {
					willSkip = Math.min(willSkip, Math.max(500 , game.getEffect("temporalPressCap") * 25));

					if (game.time.getCFU("ressourceRetrieval").val > 4) {
						optionVals.timeSkip.adore = true;
						this.skipCtrlRes();
					}

					var beforeSkipYear = game.calendar.year;
					shatter.controller.doShatterAmt(shatter.model, willSkip);
					willSkip = game.calendar.year - beforeSkipYear;
					if (!willSkip) {return;}
					refreshRequired = -100;
					iactivity('act.time.skip', [willSkip], 'ks-timeSkip');
					storeForSummary('time.skip', willSkip);
				}
			}

			return refreshRequired;
		},
		promote: function () {
			let leader = game.village.leader;
			if (game.science.get('civil').researched && leader) {
				let optionDistribute = options.auto.distribute;
				let optionLeader = optionDistribute.items.leader;

				var rank = leader.rank;
				let gold = this.craftManager.getValueAvailable('gold', true);

				// game.village.sim.goldToPromote will check gold
				// game.village.sim.promote check both gold and exp
				if (game.village.sim.goldToPromote(rank, rank + 1, gold)[0] && game.village.sim.promote(leader, rank + 1) === 1) {
					iactivity('act.promote', [rank + 1], 'ks-leader');
					game.tabs[1].censusPanel.census.renderGovernment(game.tabs[1].censusPanel.census);
					game.tabs[1].censusPanel.census.update();
					storeForSummary('promote', 1);
				}
			}
		},
		distribute: function () {
			var distributeItem = options.auto.distribute.items;
			var leaderVals = distributeItem.leader;
			var refreshRequired = 0;
			if (leaderVals.enabled && game.science.get('civil').researched && !game.challenges.isActive("anarchy") && !options.copyTrait) {
				var traitName = leaderVals.leaderTrait;
				let renaissance = game.prestige.getPerk('renaissance').researched;
				let leaderJobName = leaderVals.leaderJob;
				leaderJobName = (leaderJobName === 'farmer' && renaissance && traitName === 'manager' && game.village.maxKittens > 10 && game.village.jobs[5].unlocked) ? 'priest' : leaderJobName;
				if (game.village.leader === null && game.village.sim.kittens.length) {
					game.villageTab.censusPanel.census.makeLeader(game.village.sim.kittens[0]);
				}
				var optionsTheocracy = false;
				if (options.auto.upgrade.items.policies.enabled) {
					optionsTheocracy = (options.policies ===  undefined) ? false : options.policies.some(obj => obj === 'theocracy');
				}
				if (optionsTheocracy || game.science.getPolicy('theocracy').researched) {leaderJobName = "priest";}
				var distributeJob = game.village.getJob(leaderJobName);
				if (game.village.leader == null || !(game.village.leader.job === leaderJobName && game.village.leader.trait.name === traitName)) {
					let traitKittens = game.village.sim.kittens.filter(kitten => kitten.trait.name === traitName);
					if (traitKittens.length !== 0) {
						if (distributeJob.unlocked && distributeJob.value < game.village.getJobLimit(leaderJobName)) {
							let correctLeaderKitten = traitKittens.sort(function(a, b) {return b.rank - a.rank !== 0 ? b.rank - a.rank : b.exp - a.exp;})[0];
							if (distributeJob.value >= distributeItem[leaderJobName].max && distributeItem[leaderJobName].limited && distributeJob.value) {
								game.village.sim.removeJob(leaderJobName, 1);
							}
							game.village.unassignJob(correctLeaderKitten);
							correctLeaderKitten.job = leaderJobName;
							game.village.getJob(leaderJobName).value++;
							game.villageTab.censusPanel.census.makeLeader(correctLeaderKitten);
							refreshRequired += 1;
							iactivity('act.distributeLeader', [i18n('$village.trait.' + traitName)], 'ks-distribute');
							storeForSummary('distribute', 1);
						}
					}
				}
			}

			let minerItem = options.auto.distribute.items.miner;
			let agriculture = game.science.get("agriculture").researched;
			let happiness = game.village.happiness;
			let nomalWinterCatnip = (this.craftManager.getPotentialCatnip(false) <= 0.85 * happiness || (game.village.jobs[1].value === 0 && distributeItem['farmer'].enabled));
			var freeKittens = game.village.getFreeKittens();
			let miner = game.village.jobs[4];
			if (!freeKittens) {
				if (minerItem.enabled && miner.unlocked && !miner.value && game.village.getJob('woodcutter').value && game.village.sim.kittens.length) {
					game.village.sim.removeJob('woodcutter');
				}
				return refreshRequired;
			}

			let resCatnip = game.resPool.get("catnip");
			let resKitten = game.resPool.get("kittens");
			var catnipValue = (resCatnip.value - (1800 * happiness * resKitten.value) < 0 || resKitten.maxValue - resKitten.value === 1 || freeKittens > 1);
			let religionCatnip = options.auto.distribute;
			if (religionCatnip.religion || (nomalWinterCatnip && agriculture && catnipValue && resCatnip.value <= resCatnip.maxValue)) {
				religionCatnip.religion = false;
				game.village.assignJob(game.village.getJob("farmer"), 1);
				iactivity('act.distribute.catnip', [], 'ks-distribute');
				iactivity('act.distribute', [i18n('$village.job.' + "farmer")], 'ks-distribute');
				storeForSummary('catnip', 1);
				return 2;
			}

			var jobName = '';
			var minRatio = Infinity;
			var currentRatio = 0;
			let revolution = game.religion.getSolarRevolutionRatio();
			let expect = options.auto.faith.addition.autoPraise.expect;
			expect = expect && expect > 5 && revolution < expect * 0.5 && game.village.jobs[5].unlocked;
			for (var i = game.village.jobs.length - 1; i >= 0; i--) {
				var unlocked = game.village.jobs[i].unlocked;
				if (!unlocked) {continue;}

				var name = game.village.jobs[i].name;
				let jobItem = distributeItem[name];
				if (!jobItem.enabled) {continue;}

				var maxGame = game.village.getJobLimit(name);
				var val = game.village.jobs[i].value;
				if (val >= maxGame) {continue;}

				var maxKS = Math.max(0, jobItem.max);
				let limited = jobItem.limited;
				if (name === 'hunter') {
					let manpowerJobRatio = game.getEffect('manpowerJobRatio');
					if (manpowerJobRatio < 0.5) {
						maxKS = (game.village.maxKittens > 10) ? 2 : 0;
					} else if ((manpowerJobRatio <= 0.75 && !game.science.get('navigation').researched) || expect) {
						maxKS = Math.round(maxKS * 0.42);
						msgSummary('hunter');
					} else {
						msgSummary('hunter', true);
					}
				}
				if (name === 'geologist') {
					if (!game.workshop.get("geodesy").researched && resMap['iron'].perTickCached < 50) {maxKS = Math.round(maxKS * 0.5);}
					if (!game.science.get('mechanization').unlocked && !game.workshop.get("geodesy").researched) {maxKS = 1;}
				}
				if (name === 'scholar' && !game.getEffect('shatterTCGain') && game.workshop.get('spaceManufacturing').researched && limited) {maxKS = Math.max(maxKS, 18);}
				if (name === 'miner' && !game.science.get('writing').researched) {maxKS = Math.round(maxKS * 0.3);}
				if (!limited || val < maxKS) {
					currentRatio = val / maxKS;
					if (currentRatio < minRatio) {
						minRatio = currentRatio;
						jobName = name;
					}
				}
			}
			if (jobName) {
				game.village.assignJob(game.village.getJob(jobName), 1);
				refreshRequired += 2;
				iactivity('act.distribute', [i18n('$village.job.' + jobName)], 'ks-distribute');
				storeForSummary('distribute', 1);
				game.villageTab.updateTab();
				game.village.updateResourceProduction();
				game.updateResources();
			}
			return refreshRequired;
		},
		autofeed: function () {
			var levi = game.diplomacy.get("leviathans");
			var nCorn = game.resPool.get("necrocorn");
			if (!(levi.unlocked && nCorn.value > 0)) {return;}
			if (nCorn.value >= 1) {
				if (levi.energy < game.diplomacy.getMarkerCap()) {
					game.diplomacy.feedElders();
					iactivity('act.feed', [] , 'ks-sacrifice');
					storeForSummary('feed', 1);
				}
			} else {
				if (0.25 * (1 + game.getEffect("corruptionBoostRatio")) < 1) {
					storeForSummary('feed', nCorn.value);
					game.diplomacy.feedElders();
					iactivity('dispose.necrocorn');
				}
			}
		},
		crypto: function () {
			var coinPrice = game.calendar.cryptoPrice;
			var previousRelic = game.resPool.get('relic').value;
			var previousCoin = game.resPool.get('blackcoin').value;
			if ((!game.science.get("blackchain").researched && !previousCoin > 0) || !game.diplomacy.get("leviathans").unlocked) {return;}
			var crypto = options.auto.options.items.crypto;
			var subTrigger = (crypto.subTrigger != null) ? options.auto.options.items.crypto.subTrigger.toString().split('-') : "10000-860-1060";
			//var isNumber = /^\d+(\.\d+)?$/;

			var relicTrigger = parseFloat(subTrigger[0]);
			var minCoinPrice = parseFloat(subTrigger[1]);
			var maxCoinPrice = parseFloat(subTrigger[2]);

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

				var currentCoin = game.resPool.get('blackcoin').value;
				var exchangedCoin = game.getDisplayValueExt(currentCoin - previousCoin);
				iactivity('blackcoin.buy', [exchangedCoin, game.getDisplayValueExt(previousRelic)]);
				storeForSummary('blackcoin.buy', 1);
			} else if (coinPrice > maxCoinPrice && game.resPool.get('blackcoin').value > 0) {
				game.diplomacy.sellBcoin();

				var currentRelic = game.resPool.get('relic').value;
				var exchangedRelic = game.getDisplayValueExt(currentRelic - previousRelic);

				iactivity('blackcoin.sell', [exchangedRelic, game.getDisplayValueExt(previousCoin)]);
				storeForSummary('blackcoin.sell', 1);
			}
		},
		worship: function () {
			var builds = options.auto.faith.items;
			//var manager = this.religionManager;
			var buildManager = this.buildManager;
			var craftManager = this.craftManager;
			var option = options.auto.faith.addition;
			var refreshRequired = 0;
			let noPastureCopy = false;

			if (option.bestUnicornBuilding.enabled) {
				var btn = this.getBestUnicornBuilding();
				let zigguratOn = game.bld.get('ziggurat').on;
				let tears = resMap['tears'].value;
				let unicorns = resMap['unicorns'].value;
				if (btn) {
					let oneTear = !tears && unicorns >= 2500 && zigguratOn;
					if (btn.opts && !oneTear) {
						if (!btn.model.enabled) {
							btn.controller.updateEnabled(btn.model);
						}
						buildManager.build(btn.opts.building, undefined, 1);
					} else {
						let tearNeed = 0.01;
						let btnButton = 0;
						if (oneTear) {
							tearNeed = 1;
						} else {
							var buttonPrices = dojo.clone(btn.prices);
							for (i = 0; i < buttonPrices.length; i++) {
								if (buttonPrices[i].name === 'tears') {
									buttonPrices[i].val = buttonPrices[i].val * Math.pow(1.15, btn.on);
									tearNeed = buttonPrices[i].val;
								}
							}
							btnButton = religionManager.getBuildButton(btn.name, 'z');
						}
						var tearHave = tears - craftManager.getStock('tears');
						if (tearNeed > tearHave) {
							// if no ziggurat, getBestUnicornBuilding will return unicornPasture
							var maxSacrifice = Math.floor((unicorns - craftManager.getStock('unicorns')) / 2500);
							var needSacrifice = Math.ceil((tearNeed - tearHave) / zigguratOn);
							if (needSacrifice <= maxSacrifice) {
								let sacrificeBtn = game.religionTab.sacrificeBtn;
								if (!sacrificeBtn || !sacrificeBtn.model) {
									return game.religionTab.render();
								}
								let unicornTotal = sacrificeBtn.model.prices[0].val * needSacrifice;
								if (unicorns > unicornTotal) {
									let gainCount = zigguratOn * needSacrifice;
									let sacrificeController = sacrificeBtn.controller.controllerOpts;
									game.resPool.addResEvent(sacrificeBtn.model.prices[0].name, -unicornTotal);
									game.resPool.addResEvent(sacrificeController.gainedResource, gainCount);
									game.stats.getStat("unicornsSacrificed").val += unicornTotal;
									let displayNumber = [game.getDisplayValueExt(unicornTotal), game.getDisplayValueExt(gainCount)];
									game.msg($I(sacrificeController.logTextID, displayNumber), "notice", sacrificeController.logfilterID);
									activity(i18n('unicornSacrifice', displayNumber), 'ks-sacrifice');
								}
								//game.religionTab.sacrificeBtn.controller._transform(game.religionTab.sacrificeBtn.model, needSacrifice);
							}
						}
						if (btnButton === undefined && zigguratOn) {
							this.religionManager.manager.render();
						} else {
							if (!oneTear && game.resPool.hasRes(buttonPrices)) {
								religionManager.build(btn.name, 'z', 1);
								refreshRequired += 1;
							}
						}
					}
				}
			} else {
				//builds = Object.assign({}, builds, Object.fromEntries(Object.entries(options.auto.unicorn.items).filter(([k,v]) => v.variant != 'zp')));
				if (options.auto.unicorn.items.unicornPasture.enabled) {
					this.build({unicornPasture: {require: false, enabled: true}});
				}
				let noPastureCopy = JSON.parse(JSON.stringify(options.auto.unicorn.items));
				noPastureCopy = Object.assign(noPastureCopy, options.auto.faith.items);
				noPastureCopy.unicornPasture = null;
			}
			// religion build
			refreshRequired += this._worship(noPastureCopy || builds);

			var resourceFaith = craftManager.getResource('faith');
			var rate = resPercent('faith');

			let transcendenceMeta = game.religion.getRU("transcendence");
			var transcendenceReached = transcendenceMeta.on;
			var tt = transcendenceReached ? game.religion.transcendenceTier : 0;

			// After Adore epiphany
			var worship = game.religion.faith;
			var epiphany = game.religion.faithRatio;
			var maxSolarRevolution = 10 + game.getEffect("solarRevolutionLimit");
			var adoreTrigger = option.adore.subTrigger;
			var triggerSolarRevolution = maxSolarRevolution * adoreTrigger;
			var epiphanyInc = worship / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			var epiphanyAfterAdore = epiphany + epiphanyInc;
			var worshipAfterAdore = 0.01 + resourceFaith.value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			var solarRevolutionAdterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, maxSolarRevolution);

			// boolean
			var forceStep = false;
			var autoPraiseEnabled = option.autoPraise.enabled;
			var autoAdoreEnabled = option.adore.enabled;
			var timeSkipAdore = options.auto.timeCtrl.items.timeSkip.adore;
			var doAdoreAfterTimeSkip = (timeSkipAdore && autoPraiseEnabled && autoAdoreEnabled);
			var PraiseSubTrigger = option.autoPraise.subTrigger;
			var apocripha = game.religion.getRU('apocripha').on;

			// enough faith, and then TAP
			if (Math.min(0.999, Math.max(0.98, PraiseSubTrigger)) <= rate || doAdoreAfterTimeSkip) {
				var moonBoolean = game.space.meta[2].meta[0].val;

				// Transcend
				if (option.transcend.enabled && transcendenceReached) {
					var TranscendTimes;
					var nextLevelCatnip = game.religion._getTranscendTotalPrice(tt + 1) - game.religion._getTranscendTotalPrice(tt);
					if (tt > 10) {
						TranscendTimes = 1;
					} else if (tt < 11 && moonBoolean && worship > 1e5 && apocripha && this.catnipForReligion(nextLevelCatnip) > 0) {
						TranscendTimes = 4;
					} else {
						TranscendTimes = 0;
					}

					while (TranscendTimes) {
						epiphany = game.religion.faithRatio;
						tt = game.religion.transcendenceTier;

						// Epiphany Recommend
						var adoreIncreaceRatio = Math.pow((tt + 2) / (tt + 1), 2);
						var needNextLevel = game.religion._getTranscendTotalPrice(tt + 1) - game.religion._getTranscendTotalPrice(tt);
						var x = needNextLevel;
						var blackObelisk = game.religion.getTU("blackObelisk").val;
						var obeliskRatio = ((tt + 1) * 5 * blackObelisk + 1000) / (tt * 5 * blackObelisk + 1000);
						var k = adoreIncreaceRatio * obeliskRatio;
						var epiphanyRecommend = (1 - k + Math.sqrt(80 * (k * k - 1) * x + (k - 1) * (k - 1))) * k / (40 * (k + 1) * (k + 1) * (k - 1)) + x + x / (k * k - 1);

						// Transcend Condition
						var booleanforEpiphany = (epiphany > epiphanyRecommend && worship > Math.min((tt - 3) * 1e6, 0) + 1e6);
						var afterAdoreMoreEpiphany = (worship * 2.02 * tt + 3.03 * worship > 1e6 * needNextLevel && epiphany > needNextLevel);
						if (booleanforEpiphany || afterAdoreMoreEpiphany) {
							// code copy from kittens game's religion.js: game.religion.transcend()
							// game.religion.transcend() need confirm by player
							// game version: 1.4.8.1
							// ========================================================================================================
							// DO TRANSCEND START
							// ========================================================================================================
							game.religion.faithRatio -= needNextLevel;
							game.religion.tcratio += needNextLevel;
							game.religion.transcendenceTier += 1;
							var atheism = game.challenges.getChallenge("atheism");
							atheism.calculateEffects(atheism, game);
							blackObelisk = game.religion.getTU("blackObelisk");
							blackObelisk.calculateEffects(blackObelisk, game);
							game.msg($I("religion.transcend.msg.success", [game.religion.transcendenceTier]));
							// ========================================================================================================
							// DO TRANSCEND END
							// ========================================================================================================
							tt = game.religion.transcendenceTier;
							if (tt < 8) {
								forceStep = true;
							}
							for (var i = 0; i < game.religion.transcendenceUpgrades.length; i++) {
								let upgrade = game.religion.transcendenceUpgrades[i];
								if (!upgrade.unlocked && tt >= upgrade.tier && upgrade.name !== 'mausoleum') {
									upgrade.unlocked = true;
									refreshRequired = 1;
								}
							}
							TranscendTimes--;
							iactivity('act.transcend', [game.getDisplayValueExt(needNextLevel), tt], 'ks-transcend');
							storeForSummary('transcend', 1);
						} else {
							TranscendTimes = 0;
						}
					}
				}

				// 打开超越按钮
				let transcendStorage = (game.resPool.isStorageLimited(transcendenceMeta.prices));
				let transcendenceOption = options.auto.faith.items.transcendence;
				if (!transcendenceOption.enabled && game.religion.fiath > transcendenceMeta.faith && autoAdoreEnabled && transcendStorage) {
					transcendenceOption.enabled = true;
					printoutput(['小猫贴心得无视超越按钮禁用','ks-default', options.activitycolor]);
				}

				// Adore
				var tier = (!game.religion.faithRatio || tt);
				let booleanForAdore = worship >= 1e5 && moonBoolean;
				booleanForAdore = (booleanForAdore && autoAdoreEnabled && apocripha && tier && this.catnipForReligion() > 0);
				// 期望太阳革命加成赞美群星
				let transformTier = 0.5 * Math.log(game.religion.faithRatio) + 3.45;
				let expectSolarRevolutionRatio = game.getLimitedDR(1.3 * Math.pow(Math.E, 0.65 * transformTier) , 97 * maxSolarRevolution);
				let adoreTri = option.adore.subTrigger;
				if (adoreTri === 0.001 && booleanForAdore && game.religion.getSolarRevolutionRatio() * 1e2 < expectSolarRevolutionRatio && tt) {
					booleanForAdore = false;
					//let adoreSolar = activitySummary.other['adore.solar'];
					expectSolarRevolutionRatio = Math.floor(expectSolarRevolutionRatio * 1e2) / 100;
					activity(i18n('summary.adore.solar', [expectSolarRevolutionRatio]));
					activitySummary.other['adore.solar'] = expectSolarRevolutionRatio;
				}
				booleanForAdore &= ((adoreTri === 0.001) ? booleanForAdore : adoreTri * 10 < solarRevolutionAdterAdore);
				if (booleanForAdore || forceStep) {
					if (doAdoreAfterTimeSkip) {
						options.auto.timeCtrl.items.timeSkip.adore = false;
						forceStep = true;
					}

					game.religion._resetFaithInternal(1.01);
					iactivity('act.adore', [game.getDisplayValueExt(worship), game.getDisplayValueExt(epiphanyInc)], 'ks-adore');
					storeForSummary('adore', epiphanyInc);
				}
			}

			// 太阳革命加速恢复到期望值
			let transformTier = 0.525 * Math.log(game.religion.faithRatio) + 3.45;
			let voidOrder = game.prestige.getPerk("voidOrder").researched;
			let factor = (voidOrder) ? 1 : 0.3;
			factor = factor * (game.prestige.getPerk('vitruvianFeline').researched) ? 1 : 0.5;
			factor = (game.workshop.get('spaceManufacturing').researched) ? 4 : factor;
			let expectSolarRevolutionRatio = game.getLimitedDR(0.3 * Math.pow(Math.E, 0.65 * transformTier) * factor, 80 * maxSolarRevolution);
			option.autoPraise.expect = expectSolarRevolutionRatio * 0.01;
			let solarRevolution = game.religion.getRU('solarRevolution').on;
			if (solarRevolution && PraiseSubTrigger === 0.98 && game.religion.getSolarRevolutionRatio() < expectSolarRevolutionRatio * 0.01) {
				PraiseSubTrigger = 0;
			}

			// 无盛典点出阳光赞歌
			let fR =  (1 + game.getUnlimitedDR(epiphany, 0.1) * 0.1);
			forceStep = (resourceFaith.value > (1000 - worship) / fR && worship < 1000 && !voidOrder);
			forceStep = forceStep || (resourceFaith.value > (150 - worship) / fR && worship < 150 && !voidOrder);
			// Praise
			var fistReset = (rate < 0.98 || !voidOrder || solarRevolution);
			var booleanForPraise = (autoPraiseEnabled && rate >= PraiseSubTrigger && resourceFaith.value > 0.001 && fistReset);
			if (booleanForPraise || forceStep) {
				if (option.autoPraise.subTrigger === 0.98 && !forceStep && rate < 0.98 && Date.now() > option.autoPraise.time + 2e5) {
					option.autoPraise.time = Date.now();
					let expectSolar = game.getDisplayValueExt(expectSolarRevolutionRatio);
					activity(i18n('summary.praise.msg', [expectSolar]));
					activitySummary.other['praise.msg'] = expectSolar;
				}
				var apocryphaBonus = game.religion.getApocryphaBonus();
				var worshipInc = resourceFaith.value * (1 + apocryphaBonus);
				storeForSummary('praise', worshipInc);
				iactivity('act.praise', [game.getDisplayValueExt(resourceFaith.value), game.getDisplayValueExt(worshipInc)], 'ks-praise');
				game.religion.praise();
				resourceFaith.value += resourceFaith.perTickCached;
				refreshRequired = 1;
			}
			return refreshRequired;
		},
		_worship: function (builds) {
			let copyBuilds = JSON.parse(JSON.stringify(builds || options.auto.faith.items));
			var buildManager = this.religionManager;
			//var craftManager = this.craftManager;
			var bulkManager = this.bulkManager;
			let gReligion = game.religion;

			this.setTrait('wise');
			let solarMeta = gReligion.getRU('solarRevolution');
			let leaderRatio = 1 - game.getLimitedDR(0.09 + 0.01 * (1 + game.prestige.getBurnedParagonRatio()), 1.0);
			let unlocked = (gReligion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched) && resMap['faith'].maxValue > 750 && resMap['gold'].maxValue > 500;
			let trigger = (!solarMeta.on && unlocked && gReligion.getRU('solarchant').on && gReligion.transcendenceTier) ? 1.1 : options.auto.faith.trigger;
			if (!solarMeta.on && unlocked && options.auto.faith.items.solarRevolution.enabled) {
				buildManager.build("solarRevolution", "s", 1);
			}
			if (!game.religion.getRU("basilica").on && copyBuilds['basilica'].enabled) {
				if (!game.religion.getRU("sunAltar").on) {
					copyBuilds['scholasticism'].enabled = false;
					copyBuilds['goldenSpire'].enabled = false;
				}
				if (game.religion.faith > 1e4) {copyBuilds['sunAltar'].enabled = false;}
			}
			if (!game.ironWill && resMap['manpower'].maxValue < 15e3) {copyBuilds['templars'].enabled = false;}
			if (game.religion.getSolarRevolutionRatio() > 9.5 && game.workshop.get('spaceManufacturing').researched && activitySummary.other.adore) {
				let noMax = ['scholasticism','goldenSpire','stainedGlass','basilica','templars'];
				noMax.forEach(index => copyBuilds[index].max = -1);
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
			//buildManager.manager.render();

			var metaData = {};
			for (var name in copyBuilds) {
				var build = copyBuilds[name];
				var metabuild = buildManager.getBuild(name, build.variant);
				metaData[name] = metabuild;
				var button = buildManager.getBuildButton(name, build.variant);

				if (!button || !button.model.metadata) {
					if (!game.bld.getBuildingExt("ziggurat").on && build.variant === "z") {continue;}
					game.religionTab.render();
					continue;
				}
				if (!button) {
					metaData[name].rHidden = true;
				} else {
					var model = buildManager.getBuildButton(name, build.variant).model;
					var panel = (build.variant === 'c') ? game.science.get('cryptotheology').researched : true;
					let visible = (build.variant === 's') ? gReligion.faith >= metabuild.faith : model.visible;
					if (visible && !model.enabled && (!model.metadata.noStackable || model.metadata.noStackable === true && !model.metadata.on)) {
						buildManager.getBuildButton(name, build.variant).controller.updateEnabled(model);
					}
					metaData[name].rHidden = (build.variant === 's') ? !visible : !(visible && model.enabled && panel);
				}
			}

			var buildList = bulkManager.bulk(copyBuilds, metaData, trigger);

			var refreshRequired = 0;
			let count;
			for (var entry in buildList) {
				if (buildList[entry].count > 0) {
					// 无金字塔过滤神印
					if (buildList[entry].id === 'marker') {
						if (!gReligion.getZU("blackPyramid").getEffectiveValue(game)) {
							if (!activitySummary.other['marker'] ) {
								activity(i18n('summary.marker'));
								storeForSummary('marker');
							}
							continue;
						}
					}

					count = (gReligion.getRU('solarRevolution').on) ? buildList[entry].count : 1;

					buildManager.build(buildList[entry].id, buildList[entry].variant, count);
					refreshRequired += 1;
				}
			}

			return refreshRequired;
		},
		chrono: function () {
			var refreshRequired = 0;
			if (!game.timeTab.visible) {return refreshRequired;}
			var builds = options.auto.time.items;
			var buildManager = this.timeManager;
			//var craftManager = this.craftManager;
			var bulkManager = this.bulkManager;
			var trigger = options.auto.time.trigger;

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
			//buildManager.manager.render();

			var metaData = {};
			for (var name in builds) {
				var build = builds[name];
				metaData[name] = buildManager.getBuild(name, build.variant);

				var button = buildManager.getBuildButton(name, build.variant);
				if (!button || !button.model.metadata) {
					if (name === "cryochambers") {continue;}
					game.timeTab.render();
					continue;
				}
				if (!button.model.enabled) {
					button.controller.updateEnabled(button.model);
					continue;
				}
				var model = button.model;
				var panel = (build.variant === 'chrono') ? buildManager.manager.tab.cfPanel : buildManager.manager.tab.vsPanel;
				metaData[name].tHidden = (!model.visible || !model.enabled || !panel.visible);
			}

			var buildList = bulkManager.bulk(builds, metaData, trigger);

			for (var entry in buildList) {
				if (buildList[entry].count > 0) {
					buildManager.build(buildList[entry].id, buildList[entry].variant, buildList[entry].count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		upgrade: function () {
			var upgrades = options.auto.upgrade.items;
			var upgradeManager = this.upgradeManager;
			var craftManager = this.craftManager;
			var bulkManager = this.bulkManager;
			var buildManager = this.buildManager;
			let geodesy = game.workshop.get('geodesy').researched;
			let revolutionRatio = game.religion.getSolarRevolutionRatio();
			let prices = resource = refreshRequired = 0;

			this.setTrait('scientist');
			//upgradeManager.workManager.render();
			//upgradeManager.sciManager.render();
			if (upgrades.techs.enabled && game.libraryTab.visible) {
				var tech = game.science.techs;
				techLoop:
				for (let upg of tech) {
					if (upg.researched || !upg.unlocked) {continue;}
					if (upgrades.techs.limited) {
						let titanium = resMap['titanium'].value;
						if (upg.name === 'biology' && resMap['compedium'].value < 750) {continue;}
						if (upg.name === 'ecology' && titanium < 6000) {continue;}
						if (upg.name === 'ai' && titanium < 10000) {continue;}
						if (upg.name === 'oilProcessing' && !game.science.get('nanotechnology').researched && titanium < 10000) {continue;}
						if (upg.name === 'drama' && 8 * craftManager.getTickVal(craftManager.getResource('parchment'), true) < 5) {continue;}
						if (upg.name === 'cryptotheology' && resMap['relic'].value > 105) {continue;}
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

			if (upgrades.upgrades.enabled && game.workshopTab.visible) {
				if (!game.workshopTab.domNode) {refreshRequired = 2;}
				var work = game.workshop.upgrades;
				let noup = [];
				if (upgrades.upgrades.limited) {
					let resStarchart = resMap['starchart'];
					let isFilter;
					noup = ['biofuel','gmo','invisibleBlackHand'];
					if (!game.bld.getBuildingExt('pasture').meta.on || game.bld.getBuildingExt('pasture').meta.stage === 0) {
						noup = noup.concat(['photovoltaic', 'thinFilm', 'qdot']);
					}
					if (!game.bld.getBuildingExt('aqueduct').meta.on || game.bld.getBuildingExt('aqueduct').meta.stage === 0) {
						noup = noup.concat(['hydroPlantTurbines']);
					}

					let autoM = ['factoryAutomation','advancedAutomation','pneumaticPress'];
					if (game.bld.get('steamworks').on < 6) {
						noup = noup.concat(['printingPress','combustionEngine'], autoM);
					} else {
						if (!game.opts.enableRedshift) {
							noup = noup.concat(autoM);
						}
					}

					if (game.village.getJob('engineer').value < 5 && !game.workshop.getCraft('eludium').value) {
						noup = noup.concat(['spaceEngineers','aiEngineers','chronoEngineers','amFission','factoryRobotics','factoryOptimization']);
					}
					// 钢铁工厂
					if (game.time.getCFU("ressourceRetrieval").val < 8) {
						noup = noup.concat(['steelPlants']);
					}
					// 太阳革命
					if (!game.religion.getRU('solarRevolution').on && resMap['faith'].maxValue >= 750 && game.religion.faith > 1000) {
						noup = noup.concat(['caravanserai']);
					}
					// 缺电过滤碳封存
					if (game.resPool.energyProd - game.resPool.energyCons - 100 <= 0) {
						noup = noup.concat(['carbonSequestration']);
					}
					// 过滤钛升级
					if (game.globalEffectsCached['titaniumPerTickAutoprod'] < 0.002 && resMap['ship'].value < 40 && revolutionRatio > 1){
						noup = noup.concat(['titaniumAxe','silos','combustionEngine','astrolabe']);
					}
					// 过滤测地学
					isFilter = revolutionRatio > 8 || game.workshop.get('orbitalGeodesy').researched;
					if (isFilter && !game.space.meta[0].meta[3].val && resStarchart.value < 1600 && revolutionRatio > 6) {
						noup = noup.concat(['geodesy']);
					}
					// 没测地学过滤 地外计划
					if (revolutionRatio < 7 && !geodesy && resStarchart.value > 400) {
						noup = noup.concat(['titaniumSaw']);
					}
					if (!geodesy) {
						noup = noup.concat(['seti','refrigeration']);
					}
					// 印刷机 光刻机
					if (resMap['oil'].value < 7.5e4 && !geodesy) {
						noup = noup.concat(['offsetPress','photolithography']);
						if (resPercent('coal') > 0.8) {
							noup = noup.concat(['fuelInjectors','combustionEngine','coalFurnace']);
						}
					}
					if (!game.bld.getBuildingExt('factory').meta.val < 3) {
						noup = noup.concat(['factoryLogistics']);
					}
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
					if (!game.bld.getBuildingExt('reactor').meta.val || resMap['ship'].value < 169) {
						noup = noup.concat(['reactorVessel']);
					}
					// 太阳能卫星
					if (game.space.getBuilding('sattelite').val < 6) {
						noup = noup.concat(['solarSatellites', 'satelliteRadio']);
					}
					// 星图产出
					if (!resStarchart.perTickCached) {
						noup = noup.concat(['hubbleTelescope']);
					} else if (game.challenges.isActive('blackSky') && resStarchart.perTickCached < 1) {
						noup = noup.concat(['geodesy']);
					}
					// 钍反应堆
					if (resMap['thorium'].value < 3e4) {
						noup = noup.concat(['thoriumReactors']);
					}
					// 天体观测仪
					isFilter = resMap['science'].maxValue > 19e4 && resStarchart.value < 2075;
					if (isFilter || resMap['titanium'].value < 15) {
						noup = noup.concat(['astrolabe','unobtainiumReflectors','lhc','titaniumMirrors']);
					}
					// 无政府挑战
					if (game.challenges.isActive("anarchy")) {
						noup = noup.concat(['logistics', 'augumentation', 'internet', 'neuralNetworks','register']);
					}
					// 钢铁意志
					if (game.ironWill) {
						noup = noup.concat(['logistics','augumentation','internet','neuralNetworks','mineralHoes','ironHoes','miningDrill',
						'mineralAxes','ironAxes','steelAxe','titaniumAxe','alloyAxe','ironwood','concreteHuts','unobtainiumHuts','eludiumHuts',
						'geodesy','register','unobtainiumDrill','assistance','astrophysicists','register']);
					}
				}

				workLoop:
				for (let upg of work) {
					if (upg.researched || !upg.unlocked) {continue;}
					let upgName = upg.name;
					if (noup.indexOf(upgName) !== -1) {continue;}

					prices = dojo.clone(upg.prices); // game.village.getEffectLeader will override its argument
					prices = game.village.getEffectLeader("scientist", prices);
					for (var resource of prices) {
						if (upgradeManager.getValue(resource.name, upgName) < resource.val) {continue workLoop;}
					}

					refreshRequired += 1;
					upgradeManager.build(upg, 'workshop');
				}
			}

			if (upgrades.policies.enabled && game.libraryTab.visible) {
				// write a function to make breaking big loop easier
				(function (){
					var policies = game.science.policies;
					var lastIndex = 0;
					var length = policies.length;
					var toResearch = [];
					let ratio = (game.science.get('astronomy').researched) ? 1 : 3;

					// A **little** more efficient than game.science.getPolicy if options.policies is right order
					for (let i in options.policies) {
						var targetName = options.policies[i];
						for (var j in policies) {
							j = parseInt(j); // fuck js
							var policy = policies[(j + lastIndex) % length];
							if (policy.name === targetName) {
								lastIndex = j + lastIndex + 1;
								if (!policy.researched) {
									if (policy.blocked) {continue;}
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
					for (let i of toResearch) {
						for (var resource of i.prices) {
							if (craftManager.getValueAvailable(resource.name, true) < resource.val * ratio) {continue;}
							upgradeManager.build(i, 'policy');
						}
					}
				})();
			}

			if (upgrades.missions.enabled && game.spaceTab.visible) {
				let subTrigger = upgrades.missions.subTrigger;
				var missionsLength = Math.min(game.space.meta[0].meta.length, subTrigger);
				var missions = game.space.meta[0].meta;
				missionLoop:
				for (var i = 0; i < missionsLength ; i++) {
					if (!game.workshop.get('orbitalGeodesy').researched && !game.ironWill && !geodesy) {break;}
					if (!(missions[i].unlocked && missions[i].val < 1)) {continue;}
					if (game.spaceTab.planetPanels.length < i) {game.spaceTab.render();}

					var Btn = game.spaceTab.GCPanel.children[i];
					if (!Btn || !Btn.model.metadata) {
						game.spaceTab.render();
						continue;
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
					refreshRequired += 1;
					Btn.controller.build(Btn.model, 1);
					if (i === 7 || i === 12) {
						activity(i18n('upgrade.space.mission', [missions[i].label]));
					} else {
						activity(i18n('upgrade.space', [missions[i].label]));
					}
				}
			}

			if (upgrades.races.enabled && game.diplomacy.hasUnlockedRaces()) {
				var maxRaces = (game.diplomacy.get('leviathans').unlocked) ? 8 : 7;
				if (game.diplomacyTab.racePanels.length < maxRaces) {
					let unlockRace = function (race) {
						if (game.diplomacy.get(race).unlocked) {return;}
						let manpower = craftManager.getValueAvailable('manpower', true);
						if (manpower >= 1000) {
							game.resPool.get('manpower').value -= 1000;
							maxRaces = 'render';
							iactivity('upgrade.race', [game.diplomacy.unlockRandomRace().title], 'ks-trade');
						}
					};
					if (game.challenges.isActive("pacifism") || !game.village.sim.kittens.length || resMap['gold'].value > 15) {
						unlockRace('lizards');
						unlockRace('sharks');
						unlockRace('griffins');
					}
					if (game.resPool.get("culture").value >= 1500) {unlockRace('nagas');}
					if (game.resPool.get("ship").value >= 1) {unlockRace('zebras');}
					if (game.resPool.get("ship").value >= 100 && game.resPool.get("science").maxValue > 125000) {unlockRace('spiders');}
					if (game.science.get("nuclearFission").researched) {unlockRace('dragons');}
					if (!game.diplomacyTab.racePanels.length || maxRaces === 'render') {game.diplomacyTab.render();}
				}
			}

			if (upgrades.buildings.enabled) {
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				let energy = (winterProd && winterProd - 1 < game.resPool.energyCons);
				var pastures = (game.bld.getBuildingExt('pasture').meta.stage === 0) ? game.bld.getBuildingExt('pasture').meta.val : 0;
				var aqueducts = (game.bld.getBuildingExt('aqueduct').meta.stage === 0) ? game.bld.getBuildingExt('aqueduct').meta.val : 0;
				let upgradeBuilding = (name, meta) => {
					let prices = meta.stages[1].prices;
					if (bulkManager.singleBuildPossible(meta, prices, 1 )) {
						buildManager.sellBuild(name);
						game.resPool.payPrices(prices);
						meta.stage = 1;
						meta.on = 1;
						meta.val = 1;
						iactivity('summary.upgrade.building.' + name, [] , 'ks-upgBld');
						storeForSummary('upgrade.building.' + name);
						msgSummary('upg' + name.charAt(0).toUpperCase() + name.slice(1), true);
						return 2;
					}
				};

				var pastureMeta = game.bld.getBuildingExt('pasture').meta;
				if (pastureMeta.stage === 0) {
					if (pastureMeta.stages[1].stageUnlocked) {
						var broadcastTower = game.bld.getBuildingExt('amphitheatre').meta.stage === 1;
						var boolean = (energy && broadcastTower && game.getResourcePerTick('titanium', true) > 25);
						if (craftManager.getPotentialCatnip(true, 0, aqueducts) > 45 && boolean && options.auto.build.items.solarFarm.enabled) {
							return upgradeBuilding('pasture', pastureMeta);
						} else {
							msgSummary('upgPasture');
						}
					}
				}

				var aqueductMeta = game.bld.getBuildingExt('aqueduct').meta;
				if (aqueductMeta.stage === 0) {
					if (aqueductMeta.stages[1].stageUnlocked) {
						let catnip = craftManager.getPotentialCatnip(true, pastures, 0) > 90;
						if (catnip && energy && pastureMeta.stage === 1 && options.auto.build.items.hydroPlant.enabled) {
							return upgradeBuilding('aqueduct', aqueductMeta);
						} else {
							msgSummary('upgAqueduct');
						}
					}
				}

				var libraryMeta = game.bld.getBuildingExt('library').meta;
				var scienceBldMax = libraryMeta.totalEffectsCached.scienceMax;
				if (libraryMeta.stage === 0) {
					if (libraryMeta.stages[1].stageUnlocked) {
						let ratio = (1 + game.prestige.getParagonProductionRatio()) * (1 + game.bld.get('biolab').val * 0.01);
						ratio = game.resPool.get('compedium').value > scienceBldMax / ratio && game.bld.getEffect('scienceMax') > 2e5 * ratio;
						if (ratio && options.auto.build.items.dataCenter.enabled) {
							if (game.resPool.energyProd >= game.resPool.energyCons + 300) {
								return upgradeBuilding('library', libraryMeta);
							}
						} else {
							msgSummary('upgLibrary');
						}
					}
				}

				var amphitheatreMeta = game.bld.getBuildingExt('amphitheatre').meta;
				if (amphitheatreMeta.stage === 0) {
					if (amphitheatreMeta.stages[1].stageUnlocked) {
						if (game.getResourcePerTick('titanium', true) > 2 || resMap['ship'].value > 200) {
							return upgradeBuilding('amphitheatre', amphitheatreMeta);
						} else {
							msgSummary('upgAmphitheatre');
						}
					}
				}
			}

			return refreshRequired;
		},
		build: function (builds) {
			var buildManager = this.buildManager;
			var craftManager = this.craftManager;
			var bulkManager = this.bulkManager;
			var trigger = options.auto.build.trigger;
			var refreshRequired = 0;
			var blackSky = game.challenges.isActive('blackSky');
			let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
			var atheism = game.challenges.isActive('atheism');
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let spaceManufacturing = game.workshop.get('spaceManufacturing').researched;

			let solarMeta = game.religion.getRU('solarRevolution');
			let revolutionRatio = game.religion.getSolarRevolutionRatio();
			let theology = game.science.get('theology').researched;
			let build2 = {};
			let copyItem;
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
			//buildManager.manager.render();

			// 每次第一次运行builds为空
			if (typeof builds != 'object') {
				copyItem = {};
				let items = JSON.parse(JSON.stringify(options.auto.build.items));
				const important = {
					amphitheatre:items['amphitheatre'],
					reactor:items['reactor'],
					magneto:items['magneto'],
					steamworks:items['steamworks'],
				};
				items = Object.assign(important, items);

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
				scienceBuild('observatory', 300, 0.98);
				scienceBuild('academy', Math.max(22 *(game.prestige.getParagonProductionRatio() + 1), 100), 0.99);
				scienceBuild('biolab', 200, 1);

				let winterTick = craftManager.getPotentialCatnip(false);
				winterTick = winterTick < 0.85 && resMap['catnip'].value / winterTick < 1000;
				if (winterTick) {
					items['hut'].enabled = items['logHouse'].enabled = false;
				}
				let machinery = game.science.get('machinery').researched;
				let astronomy = game.science.get('astronomy');
				if (scienceTrigger < 0.98 && !astronomy.researched && (!machinery || astronomy.unlocked) && resMap['minerals'].value) {
					items['academy'].max = 6 * (game.prestige.getParagonProductionRatio() + 1);
					msgSummary('academy');
				}
				//图书馆牧场
				let pasture = items['pasture'];
				if (!theology) {
					let smelter = game.bld.getBuildingExt('smelter').meta;
					items['smelter'].max = 1;
					if (Math.ceil(resMap['wood'].perTickCached * 2) > smelter.val && Math.ceil(resMap['minerals'].perTickCached) > smelter.val) {
						items['smelter'].max = smelter.val + 1;
						msgSummary('smelter');
					}
					//if (machinery) {
					//	items['pasture'].enabled = false;
					//}
					if (game.bld.getBuildingExt('pasture').meta.unlocked) {msgSummary('pasture');}
					if (!winterTick) {items['pasture'].max = 20;}
					let hutVal = game.bld.getBuildingExt('hut').meta.val - 2;
					items['library'].max = (hutVal > 0) ? Math.floor(hutVal * 11) : items['library'].max;
				} else {
					msgSummary('smelter', true);
					msgSummary('pasture', true);
				}
				// 工坊
				if (!game.science.get('writing').researched && resMap['minerals'].value) {
					items['workshop'].max = 1;
					msgSummary('workshop');
				} else {
					msgSummary('workshop', true);
				}

				//熔炉
				if (!game.workshopTab.visible && !game.challenges.isActive('winterIsComing') && game.science.get('animal').researched) {
					items['smelter'].max = 0;
					if (pasture.max === -1) {
						items['pasture'].enabled = false;
						msgSummary('pasture');
					}
				}
				// 没铀不造反应堆
				let reactor = items['reactor'];
				if (resMap['uranium'].value < 100) {
					reactor.max = 0;
				} else if (!spaceManufacturing && resMap['titanium'].maxValue > 125000) {
					reactor.max = 25;
				}

				// 天文台
				if (blackSky && resMap['science'].maxValue > 3e5 && !orbitalGeodesy) {
					items['observatory'].max = 0;
				}

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
				var Brewery = items['brewery'];
				if (!game.calendar.festivalDays) {
					Brewery.max = 0;
				}

				// 神学前最多只造 1个神殿
				let temple = items['temple'];
				let tradepost = items['tradepost'];
				let solarUnlocked = (game.religion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched);
				let goldTri = resMap['gold'].value / resMap['gold'].maxValue;
				if (!blackSky && resMap['titanium'].value < 25) {
					temple.max = Math.max(30, 10 * (1 + revolutionRatio));
				}
				if (!game.workshop.get('caravanserai').researched) {
					tradepost.max = 22;
				}
				if (!theology && game.science.get('philosophy').researched && goldTri < 0.96) {
					let one = game.village.happiness < 4 && game.bld.get('temple').val === 1 && game.prestige.getPerk('renaissance').researched;
					temple.max = (one) ? 1 : Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio()));
					tradepost.max = 12;
					msgSummary('tradepost');
				}
				// 太阳革命前不造交易所和神殿
				if (!solarMeta.on && !atheism && theology) {
					if (options.auto.faith.items.solarRevolution.enabled && resMap['faith'].maxValue > 750 && resMap['gold'].maxValue > 560) {
						if (game.science.get('philosophy').researched) {
							msgSummary('temple');
							temple.max =  Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio()));
							if (resMap['gold'].value > 560) {
								temple.max = game.bld.getBuildingExt('temple').meta.val + 1;
							}
						}
					}
					if (resMap['gold'].maxValue > 500) {
						tradepost.max = 12;
						if (resMap['gold'].value > 525) {tradepost.max = Math.min(18, game.bld.getBuildingExt('tradepost').meta.val + 1);}
					}
					msgSummary('tradepost');
				} else if (theology) {
					msgSummary('temple', true);
					msgSummary('tradepost', true);
				}
				let religionRU = game.religion.getRU("stainedGlass").on && game.religion.getRU("basilica").on;
				let expect = options.auto.faith.addition.autoPraise.expect;
				if (!religionRU && game.religion.faith > 1e4 && resMap['gold'].maxValue > 780 && revolutionRatio) {
					if (expect && revolutionRatio > expect) {
						temple.enabled = false;
					}
					tradepost.max = 30 - Math.min(12, revolutionRatio * 10);
				}

				// 油井 ===> 预计与煅烧 数量关系
				// 煅烧炉
				let calciner = items['calciner'];
				let calcinerMax = calciner.max;
				if (!orbitalGeodesy) {
					if (scienceMap.maxValue > 150000 && resMap['oil'].maxValue > 35000) {
						calciner.max = (calcinerMax === -1) ? 25 : Math.min(25, calcinerMax);
					} else {
						let a = (1 + game.prestige.getParagonProductionRatio() * 10) * (1 + revolutionRatio);
						calciner.max = (calcinerMax === -1) ? a : Math.min(a, calcinerMax);
					}
				} else if (!spaceManufacturing || !game.space.meta[0].meta[0].on) {
					calciner.max = (calcinerMax === -1) ? 47 * (1 + game.getEffect("productionRatio")) : Math.min(50, calcinerMax);
				}

				if (game.getResourcePerTick('oil', true) < 0.24 ) {
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
				let archeology = game.science.get('archeology').researched;
				let shipVal = resMap['ship'].value;
				let titaniumMore = (orbitalGeodesy || shipVal > 600);
				if (game.science.get('electronics').researched && !spaceManufacturing) {
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
						msgSummary('mansion');
						mansion.max = 10;
					}
					if (resMap['alloy'].value > 25 && game.science.get('biology').researched) {
						biolab.max = 2;
						msgSummary('biolab');
					}
				} else {
					if (titaniumMore && !mansion.max && resPercent('titanium') === 1) {
						mansion.max = 45;
						msgSummary('mansion');
					}
					if (!spaceManufacturing) {
						if (titaniumMap.value / titaniumMap.maxValue <= 0.96) {
							mansion.max = Math.max(135 - game.village.maxKittens, Math.floor(17 * (game.prestige.getParagonProductionRatio() + 1)));
							msgSummary('mansion');
							biolab.max = 10;
						}
					} else {
						msgSummary('biolab', true);
						msgSummary('mansion', true);
						msgSummary('scienceBld', true);
					}
				}

				//铸币厂
				if (!game.challenges.isActive("pacifism")) {
					let mint = items['mint'];
					var manpower = game.resPool.get('manpower').maxValue;
					var mintV = game.bld.getBuildingExt('mint').meta.val;
					if (manpower <= 2e4) {
						mint.enabled = false;
					} else if (!mintV) {
						mint.max = 2;
					} else if (!orbitalGeodesy && (!geodesy || !game.workshop.get("miningDrill").researched)) {
						mint.enabled = false;
					}
				}
				let optimize = ['library','academy','pasture','barn','harbor','oilWell','warehouse','broadcastTower','accelerator','mansion','quarry','aqueduct','chapel', 'lumberMill','factory','biolab'];
				for (var item in items) {
					let a = items[item];
					if (!a.enabled || !a.max) {continue;}
					if (optimize.indexOf(item) === -1) {
						copyItem[item] = a;
					} else {
						build2[item] = a;
					}
				}
			}

			var metaData = {};
			builds = copyItem || builds;
			for (var name in builds) {
				var build = builds[name];
				metaData[name] = buildManager.getBuild(build.name || name).meta;
			}

			var buildList = bulkManager.bulk(builds, metaData, trigger, 'bonfire');

			var calcinerMeta = game.bld.getBuildingExt('calciner').meta;
			if (blackSky && options.auto.build.items.calciner.enabled && calcinerMeta.unlocked && !calcinerMeta.val) {
				buildManager.build("calciner", undefined, 1);
			}

			if (buildList) {
				for (var i = 0; i < buildList.length; i++) {
					let count = buildList[i].count;
					let id = buildList[i].id;
					count = buildManager.count(id, count);
					if (count > 0) {
						buildManager.build(buildList[i].name || id, buildList[i].stage, count);
						refreshRequired += 1;
					}
				}
			}

			if (JSON.stringify(build2) !== "{}") {
				refreshRequired += this.build(build2);
			}

			return refreshRequired;
		},
		space: function () {
			var builds = JSON.parse(JSON.stringify(options.auto.space.items));
			var buildManager = this.spaceManager;
			var craftManager = this.craftManager;
			var bulkManager = this.bulkManager;
			var trigger = options.auto.space.trigger;
			let blackSky = game.challenges.isActive("blackSky");
			let solarRevolution = game.religion.getSolarRevolutionRatio();
			if (blackSky) {
				builds['researchVessel'].enabled = false;
				if (builds['spaceStation'].enabled) {
					$('#toggle-spaceStation').click();
				}
			} else if (trigger === 0 && solarRevolution > 6 && !game.space.meta[0].meta[3].val && resMap['starchart'].value < 2000) {
				trigger = 1.1;
			}

			let better = blackSky || solarRevolution > 5;
			if (game.space.getBuilding('sattelite').val < 3 && buildManager.getBuildButton("sattelite") && better) {
				buildManager.build("sattelite", 1);
			}
			if (blackSky || solarRevolution > 6) {
				if (!blackSky && game.space.getBuilding('researchVessel').val < 1 && builds.sattelite.enabled) {
					buildManager.build("researchVessel", 1);
				}
				if (game.space.getBuilding('researchVessel').val < 4) {
					builds['spaceStation'].max = 0;
				}
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
			//buildManager.manager.render();

			var metaData = {};
			for (var name in builds) {
				//var build = builds[name];
				metaData[name] = buildManager.getBuild(name);
			}

			var buildList = bulkManager.bulk(builds, metaData, trigger, 'space');

			var refreshRequired = 0;

			for (var entry in buildList) {
				let item = buildList[entry];
				if (item.count > 0) {
					if (item.id === 'containmentChamber') {
						let antimatter = resMap['antimatter'];
						let perYear = game.getEffect('antimatterProduction');
						let energyExtra = (game.resPool.energyProd < game.resPool.energyCons);
						if (perYear * 500 + antimatter.value < antimatter.maxValue || energyExtra) {
							continue;
						}
					}
					if (item.id === 'spaceStation') {item.count = Math.floor(item.count * 0.5);}

					buildManager.build(item.id, item.count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		craft: function () {
			var crafts = options.auto.craft.items;
			var manager = this.craftManager;
			var trigger = options.auto.craft.trigger;
			var craftsItem = ['ship','beam','wood','slab','alloy','gear','concrate','steel','plate','scaffold','tanker','parchment','manuscript','compedium','blueprint','kerosene','megalith','eludium','thorium'];
			let craftUnlock = !game.science.get("construction").researched || !game.bld.getBuildingExt('workshop').meta.on;

			this.setTrait('engineer');

			for (var name of craftsItem) {
				var craft = crafts[name];
				//var current = !craft.max ? false : manager.getResource(name);
				var require = !craft.require ? 'noRequire' : manager.getResource(craft.require);
				var amount = 0;
				if (!craft.enabled) {continue;}
				if (craftUnlock && name !== "wood") {continue;}
				// Ensure that we have reached our cap
				//if (current && current.value > craft.max) {continue;}
				if (!manager.getCraft(name).unlocked) {continue;}
				// Craft the resource if we meet the trigger requirement
				if (require === 'noRequire' || (require.value / require.maxValue >= trigger && require.value <= 2 * require.maxValue)) {
					amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, require);
				} else if (craft.limited) {
					amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, false);
				}
				if (amount >= 1) {
					manager.craft(name, amount);
				}
			}
			this.setTrait('metallurgist');
		},
		holdFestival: function () {
			if (!(game.science.get('drama').researched && game.calendar.festivalDays < 400)) {return;}
			if (!game.prestige.getPerk('carnivals').researched && game.calendar.festivalDays > 0) {return;}
			if (game.village.getKittens() < 5 && game.resPool.get("zebras").value === 0) {return;}

			let craftManager = this.craftManager;
			let catpowProf = 4000 * craftManager.getTickVal(craftManager.getResource('manpower'), true) > 1500;
			let cultureProf = 4000 * craftManager.getTickVal(craftManager.getResource('culture'), true) > 5000;
			let parchProf = 4000 * craftManager.getTickVal(craftManager.getResource('parchment'), true) > 2500;

			if (!(catpowProf && cultureProf && (game.resPool.get('parchment').value >= 7500 || parchProf))) {return;}

			if (game.science.getPolicy('carnivale').researched) {
				var luxury = (!game.resPool.get("furs").value || !game.resPool.get("ivory").value || !game.resPool.get("spice").value);
				if (luxury) {return;}
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
			if (!game.villageTab.festivalBtn && !game.villageTab.festivalBtn.model) {return game.villageTab.render();}

			let price = game.villageTab.festivalBtn.model.prices;
			if (game.resPool.hasRes(price)) {
				game.resPool.payPrices(price);
				game.village.holdFestival(1);

				storeForSummary('festival', 1);
				if (game.calendar.festivalDays > 400) {
					iactivity('festival.extend', [], 'ks-festival');
				} else {
					iactivity('festival.hold', [], 'ks-festival');
				}
			}
		},
		observeStars: function () {
			if (game.calendar.observeBtn != null){
				game.calendar.observeHandler();
				iactivity('act.observe', [], 'ks-star');
				storeForSummary('stars', 1);
			}
		},
		hunt: function () {
			clearTimeout(this.huntID);
			var manpower = this.craftManager.getResource('manpower');
			if (manpower.value < 100 || game.challenges.isActive("pacifism")) {return;}

			// 无独角兽牧场 强制打猎
			let unicornValue = resMap['unicorns'].value;
			let unicorn = game.achievements.get('unicornConspiracy').unlocked || unicornValue;
			let unicornPasture = game.bld.getBuildingExt('unicornPasture').meta.val;
			let unicornHunt = (!unicornPasture && unicorn && manpower.value > 700 && unicornValue < 3 && game.getEffect("craftRatio") > 0.06);

			// 铸币厂前加速打猎
			let aveOutput = this.craftManager.getAverageHunt();
			let huntCount = Math.floor(manpower.value / 100);
			let architecture = game.science.get('writing').researched;
			let preCount = (!resMap['furs'].value || resMap['parchment'].value < 25) ? Math.max(30 , Math.floor(0.5 * huntCount)) : 0;
			let mint = (architecture && huntCount > preCount && preCount > 0);

			let manpowerBoolean = options.auto.options.items.hunt.subTrigger <= manpower.value / manpower.maxValue;
			let tradeCache = !manpowerBoolean && options.auto.trade.cache;
			if (manpowerBoolean || mint || unicornHunt || tradeCache) {
				// No way to send only some hunters. Thus, we hunt with everything
				if (manpower.perTickCached < 100 && manpower.value >= 200) {
					huntCount -= 1;
				}

				if (mint) {
					huntCount = preCount;
				}

				if (unicornHunt) {
					huntCount = 7;
					activity(i18n('act.hunt.unicorn'));
				}

				if (tradeCache) {
					huntCount = Math.min(huntCount, Math.max(Math.floor(manpower.perTickCached / 50), 1));
					options.auto.trade.cache = false;
					iactivity('act.hunt.trade', '', 'ks-hunt');
				}

				if (huntCount <= 0) {return;}
				let hunter = (game.ironWill) ? resMap['zebras'].title : $I('effectsMgr.statics.maxKittens.title');
				game.resPool.addResEvent("manpower", -huntCount * 100);
				this.setTrait('manager');
				game.village.gainHuntRes(huntCount);
				this.setTrait();
				if(huntCount >= 1000 && !game.challenges.getChallenge("pacifism").unlocked) {game.challenges.getChallenge("pacifism").unlocked = true;}
				if (options.auto.cache.trait['manager']) {
					iactivity('act.hunt', ['管理者派出' + huntCount, hunter], 'ks-hunt');
					storeForSummary('hunt.manager', huntCount);
				} else {
					storeForSummary('hunt', huntCount);
					iactivity('act.hunt', [huntCount, hunter], 'ks-hunt');
				}

				var trueOutput = {};

				for (var out in aveOutput) {
					var res = this.craftManager.getResource(out);
					trueOutput[out] = (res.maxValue > 0) ? Math.min(aveOutput[out] * huntCount, Math.max(res.maxValue - res.value, 0)) : aveOutput[out] * huntCount;
				}

				this.cacheManager.pushToCache({'materials': trueOutput, 'timeStamp': game.timer.ticksTotal});

				//game.village.huntAll();
			}
		},
		trade: function () {
			var craftManager = this.craftManager;
			var tradeManager = this.tradeManager;
			var cacheManager = this.cacheManager;
			var gold = craftManager.getResource('gold');
			var trades = [];
			let optionTrade = options.auto.trade;
			var requireTrigger = optionTrade.trigger;

			if (!tradeManager.singleTradePossible(undefined)) {return;}

			var season = game.calendar.getCurSeason().name;
			let goldTrigger = requireTrigger <= gold.value / gold.maxValue;

			let isLimited;
			this.setTrait('merchant');
			let index = 0;
			let solarRevolution = game.religion.getRU('solarRevolution');
			let atheism = game.challenges.isActive("atheism");
			let renaissance = game.prestige.getPerk('renaissance').researched;
			// Determine how many races we will trade this cycl
			let trade,race,name,require;
			for (name in optionTrade.items) {
				trade = optionTrade.items[name];

				// Check if the race is in season, enabled, unlocked, and can actually afford it
				race = tradeManager.getRace(name);
				if (!race.unlocked) {continue;}
				if (!game.diplomacyTab.racePanels[index]) {game.diplomacyTab.render();}
				index++;
				if (!trade.enabled) {continue;}
				if (!trade[season]) {continue;}
				var button = tradeManager.getTradeButton(race.name);

				if (!button || !tradeManager.singleTradePossible(name)) {continue;}

				require = !trade.require ? false : craftManager.getResource(trade.require);

				// If we have enough to trigger the check, then attempt to trade
				var prof = tradeManager.getProfitability(name);
				prof = (name === 'leviathans' && game.time.getCFU("ressourceRetrieval").val && resMap['timeCrystal'].value < 500) ? true : prof;

				if (!goldTrigger) {
					if (['sharks'].indexOf(name) > -1 && race.embassyLevel < 10) {continue;}
				}

				// 优先太阳革命
				let faithValue = resMap['faith'].value;
				let solar = (solarRevolution.on || atheism || game.religion.faith < solarRevolution.faith);

				// 有采矿钻和登红月后优先点出超越和赞美群星
				let transcendence = (game.religion.getRU("transcendence").on || !options.auto.faith.items.transcendence.enabled);
				let apocripha = (game.religion.getRU('apocripha').on || !options.auto.faith.items.apocripha.enabled);
				let miningDrillMoon = (transcendence && apocripha) || !game.space.meta[0].meta[1].on || !game.workshop.meta[0].meta[58].researched;
				if (trade.limited && prof && solar && miningDrillMoon) {
					trades.push(name);
					isLimited = true;
				} else if ((!require || requireTrigger <= require.value / require.maxValue) && goldTrigger) {
					trades.push(name);
				}
			}

			var catnipNow = game.resPool.get('catnip').value + 40 * game.getResourcePerTick("catnip", true);
			if (catnipNow < 0 && options.auto.trade.items['sharks'].enabled) {
				var sharks = game.diplomacy.get('sharks');
				var catnip = tradeManager.getAverageTrade(sharks).catnip;
				tradeManager.trade(name, Math.ceil(catnipNow / -catnip));
				iactivity('trade.catnip');
			}

			if (trades.length === 0) {return;}

			isLimited = (isLimited && !goldTrigger) ? 0.3 : 1;
			// Figure out how much we can currently trade
			var maxTrades = Math.floor(tradeManager.getLowestTradeAmount(undefined, true, false) * isLimited);

			// Distribute max trades without starving any race

			if (maxTrades < 1) {return;}

			var maxByRace = [];
			for (i = 0; i < trades.length; i++) {
				name = trades[i];
				trade = options.auto.trade.items[name];
				require = !trade.require ? false : craftManager.getResource(trade.require);
				var trigConditions = ((!require || requireTrigger <= require.value / require.maxValue) && requireTrigger <= gold.value / gold.maxValue);
				var tradePos = Math.floor(tradeManager.getLowestTradeAmount(name, trade.limited, trigConditions) * isLimited);
				if (tradePos < 1) {
					trades.splice(i, 1);
					i--;
					continue;
				}
				maxByRace[i] = tradePos;
			}

			if (trades.length === 0) {return;}

			var tradesDone = {};
			while (trades.length > 0 && maxTrades >= 1) {
				if (maxTrades < trades.length) {
					var j = Math.floor(Math.random() * trades.length);
					if (!tradesDone[trades[j]]) {tradesDone[trades[j]] = 0;}
					tradesDone[trades[j]] += 1;
					maxTrades -= 1;
					trades.splice(j, 1);
					maxByRace.splice(j, 1);
					continue;
				}
				var minTrades = Math.floor(maxTrades / trades.length);
				var minTradePos = 0;
				for (var i = 0; i < trades.length; i++) {
					if (maxByRace[i] < minTrades) {
						minTrades = maxByRace[i];
						minTradePos = i;
					}
				}
				if (!tradesDone[trades[minTradePos]]) {tradesDone[trades[minTradePos]] = 0;}
				tradesDone[trades[minTradePos]] += minTrades;
				maxTrades -= minTrades;
				trades.splice(minTradePos, 1);
				maxByRace.splice(minTradePos, 1);
			}
			if (tradesDone.length === 0) {return;}

			var tradeNet = {};
			for (name in tradesDone) {
				race = tradeManager.getRace(name);
				let amt = goldTrigger ? 1 : tradesDone[name] * 0.6;

				var materials = tradeManager.getMaterials(name);
				for (var mat in materials) {
					if (!tradeNet[mat]) {tradeNet[mat] = 0;}
					tradeNet[mat] -= materials[mat] * amt;
				}

				var meanOutput = tradeManager.getAverageTrade(race);
				for (var out in meanOutput) {
					var res = craftManager.getResource(out);
					if (!tradeNet[out]) {tradeNet[out] = 0;}
					tradeNet[out] += (res.maxValue > 0) ? Math.min(meanOutput[out] * amt, Math.max(res.maxValue - res.value, 0)) : meanOutput[out] * amt;
				}
			}

			cacheManager.pushToCache({'materials': tradeNet, 'timeStamp': game.timer.ticksTotal});

			if (gold.value / gold.maxValue >= 0.98) {
				optionTrade.cache = true;
			}

			for (let name in tradesDone) {
				if (tradesDone[name] > 0) {
					tradeManager.trade(name, tradesDone[name]);
				}
			}
		},
		miscOptions: function () {
			var craftManager = this.craftManager;
			var buildManager = this.buildManager;
			var optionVals = options.auto.options.items;
			var refreshRequired = 0;

			AutoEmbassy:
			if (optionVals.buildEmbassies.enabled && !!game.diplomacy.races[0].embassyPrices) {
				var culture = craftManager.getResource('culture');
				let cultureTri = culture.value / culture.maxValue;
				let subTrigger = optionVals.buildEmbassies.subTrigger;
				let b = !subTrigger || cultureTri >= 0.98;
				if (optionVals.buildEmbassies.subTrigger <= cultureTri && cultureTri < 2) {
					var racePanels = game.diplomacyTab.racePanels;
					var cultureVal = craftManager.getValueAvailable('culture', true);

					var embassyBulk = {};
					var bulkTracker = [];

					var racesLength = racePanels.length - ((game.diplomacy.get('leviathans').unlocked) ? 1 : 0);
					let tradeItem = options.auto.trade.items;
					for (var i = racesLength - 1; i > -1; i--) {
						if (!racePanels[i].embassyButton) {
							game.diplomacyTab.render();
							continue;
						}
						var name = racePanels[i].race.name;
						var race = game.diplomacy.get(name);
						if (!b && !tradeItem[name].enabled) {continue;}
						var priceCoeficient = 1 - game.getEffect("embassyCostReduction");
						embassyBulk[name] = {'val': 0, 'basePrice': race.embassyPrices[0].val * priceCoeficient, 'currentEm': race.embassyLevel, 'priceSum': 0, 'race': race};
						bulkTracker.push(name);
					}

					if (bulkTracker.length === 0) {break AutoEmbassy;}

					while (bulkTracker.length > 0) {
						for (var i = 0; i < bulkTracker.length; i++) {
							var name = bulkTracker[i];
							var emBulk = embassyBulk[name];
							let embassyVal = emBulk.currentEm + emBulk.val;
							var nextPrice = emBulk.basePrice * Math.pow(1.15, embassyVal + game.getEffect("embassyFakeBought"));
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

					for (var name in embassyBulk) {
						var emBulk = embassyBulk[name];
						if (emBulk.val === 0) {continue;}
						var cultureVal = craftManager.getValueAvailable('culture', true);
						if (emBulk.priceSum > cultureVal) {continue;}
						game.resPool.resources[13].value -= emBulk.priceSum;
						emBulk.race.embassyLevel += emBulk.val;
						storeForSummary('embassy', emBulk.val);
						refreshRequired += 1;
						if (emBulk.val !== 1) {
							activity(i18n('build.embassies', [emBulk.val, emBulk.race.title]), 'ks-embassy');
						} else {
							activity(i18n('build.embassy', [emBulk.val, emBulk.race.title]), 'ks-embassy');
						}
					}
				}
			}

			// fix Cryochamber
			if (optionVals.fixCry.enabled && game.time.getVSU("usedCryochambers").val > 0) {
				var fixed = 0;
				var btn = game.timeTab.vsPanel.children[0].children[0]; //check?
				// buyItem will check resources
				while (btn.controller.buyItem(btn.model, {}, function() {})) {
					fixed += 1;
				}
				if (fixed > 0) {
					iactivity('act.fix.cry', [fixed], 'ks-fixCry');
					storeForSummary('fix.cry', fixed);
				}
			}

			let msg = (name, number) => {
				activity(i18n('summary.' + name, [number]));
				storeForSummary(name, number);
			};
			if (game.bld.getBuildingExt('mint').meta.on && resMap['manpower'].maxValue < 2e4 && !game.opts.enableRedshift && !game.challenges.isActive("pacifism")) {
				game.bld.getBuildingExt('mint').meta.on = 0;
				msg('mint');
			}
			// auto turn on steamworks
			if (game.village.maxKittens > 130 || game.stats.getStat("totalResets").val > 0) {
				let button;
				// 自动打开蒸汽工房
				var st = game.bld.getBuildingExt('steamworks').meta;
				var ma = game.bld.getBuildingExt('magneto').meta;
				if (st.val && st.on !== st.val && ma.on > 8) {
					button = buildManager.getBuildButton('steamworks');
					button.controller.onAll(stButton.model);
					msg('steamworks');
				}
				// 自动打开反应堆
				var re = game.bld.getBuildingExt('reactor').meta;
				var ur = game.getResourcePerTick("uranium",true);
				if (re.val && re.on !== re.val && ur > 0) {
					button = buildManager.getBuildButton('reactor');
					button.controller.onAll(reButton.model);
					msg('reactor');
				}
				// 自动打开工厂
				let fa = game.bld.getBuildingExt('factory').meta;
				if (fa.val && fa.on !== fa.val && game.workshop.get('spaceManufacturing').researched) {
					button = buildManager.getBuildButton('factory');
					button.controller.onAll(reButton.model);
					msg('factory');
				}
				// 自动打开时空加速器自动化
				var timeA = game.time.getCFU("temporalAccelerator");
				if (timeA.on && game.time.testShatter === 0){
					timeA.isAutomationEnabled = true;
					game.time.testShatter = 1;
					msg('temporalAccelerator');
				}
				// 缺电
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				if (winterProd && winterProd < game.resPool.energyCons) {
					if (game.bld.getBuildingExt('biolab').meta.on && game.workshop.get('biofuel').researched) {
						let msg = '冬季产出电:' + game.getDisplayValueExt(winterProd) + '，冬季消耗电:' + game.getDisplayValueExt(game.resPool.energyCons) + '，小猫担心电不够并关闭了';
						let number = game.bld.getBuildingExt('biolab').meta.on;
						iactivity('summary.biolab.test', [msg + number]);
						game.bld.getBuildingExt('biolab').meta.on = 0;
						storeForSummary('biolab.test', msg + number);
						return refreshRequired;
					}
					let oilWell = game.bld.getBuildingExt('oilWell').meta;
					if (oilWell.isAutomationEnabled && game.workshop.get('pumpjack').researched) {
						oilWell.isAutomationEnabled = false;
						game.upgrade({buildings: ['oilWell']});
						msg('pumpjack', 1);
					}
				}
				// 自动控制 时间操纵 酿酒厂 开关
				var list = [{
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
					var element = list[index];
					if (element.metadata.val > 0) {
						if (element.conditionOn) {
							let off = element.metadata.val - element.metadata.on;
							if (off) {
								element.Button.controller.onAll(element.Button.model);
								iactivity('summary.' + element.name + 'On');
								storeForSummary(element.name);
							}
						} else if (element.conditionOff) {
							element.Button.controller.offAll(element.Button.model);
							iactivity('summary.' + element.name + 'Off');
							storeForSummary(element.name);
						}
					}
				}
			}
			return refreshRequired;
		},
		gameUpgrade: function () {
			if (options.auto.cache.upgrade) {
				game.upgrade(options.auto.cache.upgrade);
				for (var i in options.auto.cache.upgrade) {
					options.auto.cache.upgrade[i] = null;
				}
				options.auto.cache.upgrade = null;
			} else {
				game.updateCaches();
			}
		},
		setTrait: function (trait) {
			let vLeader = game.village.leader;
			if (trait) {
				if (game.science.get('civil').researched && vLeader && !game.challenges.isActive("anarchy")) {
					let cache = options.auto.cache;
					let hasTrait = game.village.traits.some(obj => obj.name === trait);
					if (!cache.trait[trait]) {
						if (hasTrait) {
							cache.trait[trait] = true;
							let traitDesc = $I('village.bonus.desc.' + trait);
							let leaderMsg = ['当' + traitDesc.slice(0,2) + "项目时" + $I('village.trait.' + trait) + "猫猫自觉顶替当前领袖，其效果为" + traitDesc];
							if (game.ticks > 1e4) {msgSummary('leader',true);
							} else {msgSummary('leader');}
							iactivity('set.leader', [leaderMsg], 'ks-leader');
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
		skipCtrlRes: function () {
			let addCraft = options.auto.timeCtrl.items.timeSkip;
			if (addCraft.craft) {return;}
			var resList = ['catnip', 'wood', 'minerals', 'coal', 'iron', 'oil', 'uranium', 'science'];
			var name = '';
			for (var i = 0; i < resList.length; i++) {
				var res = resMap[resList[i]];
				let resource = options.auto.resources[res.name];
				if (!resource) {
					resource = {};
					resource.enabled = true;
					resource.stock = 0;
					$('#toggle-list-resources').append(addNewResourceOption(res.name, res.title, false));
				}
				resource.consume = 1;
				name += res.title + '，';
			}
			addCraft.craft = true;
			iactivity('summary.resource', [name]);
			storeForSummary('resource');
		},
		catnipForReligion: function (istranscend) {
			var value = istranscend || 0;
			var catnipTick = 1;
			var transcendenceReached = game.religion.getRU("transcendence").on;
			var tt = transcendenceReached ? game.religion.transcendenceTier : 0;
			if (value) {
				tt += 1;
			}
			var epiphany = game.religion.faithRatio;
			var epiphanyInc = game.religion.faith / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			var epiphanyAfterAdore = epiphany + epiphanyInc - value;
			var worshipAfterAdore = 0.01 + game.resPool.get('faith').value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			var solarRevolutionAdterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, 10 + game.getEffect("solarRevolutionLimit"));
			if (tt < 10) {
				catnipTick = game.village.getResConsumption()['catnip'] * (1 + game.getEffect("catnipDemandRatio"));
				if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
					catnipTick += catnipTick * Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0) * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
				}
				var solarRevolutionRatio = 1 + game.religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);
				catnipTick = ((game.resPool.get('catnip').perTickCached - catnipTick) * (1 + solarRevolutionAdterAdore) / solarRevolutionRatio) + catnipTick + game.globalEffectsCached.catnipPerTickCon;
			}
			if (catnipTick < 0) {
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
			var unicornPasture = 'unicornPasture';
			var pastureButton = buildManager.getBuildButton('unicornPasture');
			if (typeof pastureButton === 'undefined') {
				return;
			}
			if (!pastureButton.model.metadata) {
				return game.bldTab.render();
			}
			var validBuildings = ['unicornTomb', 'ivoryTower', 'ivoryCitadel', 'skyPalace', 'unicornUtopia','sunspire'];
			var unicornsPerSecond = game.getEffect('unicornsPerTickBase') * game.getTicksPerSecondUI();
			var globalRatio = game.getEffect('unicornsGlobalRatio') + 1;
			var religionRatio = game.getEffect('unicornsRatioReligion') + 1;
			var paragonRatio = game.prestige.getParagonProductionRatio() + 1;
			var faithBonus = game.religion.getSolarRevolutionRatio() + 1;
			var cycle = 1;
			if (game.calendar.cycles[game.calendar.cycle].festivalEffects['unicorns'] !== undefined) {
				if (game.prestige.getPerk('numeromancy').researched && game.calendar.festivalDays) {
					cycle = game.calendar.cycles[game.calendar.cycle].festivalEffects['unicorns'];
				}
			}
			var onZig = Math.max(game.bld.getBuildingExt('ziggurat').meta.on, 1);
			var total = unicornsPerSecond * globalRatio * religionRatio * paragonRatio * faithBonus * cycle;
			var baseUnicornsPerRift = 500 * (1 + game.getEffect('unicornsRatioReligion') * 0.1);
			var riftChanceRatio = 1;
			if (game.prestige.getPerk('unicornmancy').researched) {
				riftChanceRatio *= 1.1;
			}
			var baseRift = game.getEffect('riftChance') * riftChanceRatio / (10000 * 2) * baseUnicornsPerRift;
			var bestAmoritization = Infinity;
			var bestBuilding = '';
			var pastureAmor = game.bld.getBuildingExt('unicornPasture').meta.effects['unicornsPerTickBase'] * game.getTicksPerSecondUI();
			pastureAmor = pastureAmor * globalRatio * religionRatio * paragonRatio * faithBonus * cycle;
			var pastureMeta = game.bld.meta[0].meta[31];
			pastureAmor = pastureMeta.prices[0].val * Math.pow(pastureMeta.priceRatio + game.getEffect("priceRatio"), pastureMeta.on) / pastureAmor;
			if (pastureAmor < bestAmoritization) {
				bestAmoritization = pastureAmor;
				bestBuilding = pastureButton;
			}
			for (var i = 0; i < 6; i ++) {
				var btn = game.religion.meta[0].meta[i];
				if (validBuildings.indexOf(btn.name) !== -1) {
					if (i === 0 || game.religion.meta[0].meta[i - 1].on) {
						var unicornPrice = 0;
						var tearsPrices = [5, 25, 50, 500, 5e3, 25e3];
						unicornPrice += tearsPrices[i] * Math.pow(1.15 , btn.on) * 2500 / onZig;
						//for (var j = 0; j < btn.prices.length; j++) {
						//    //if (j.name == 'unicorns') {
						//        //unicornPrice += j.val;
						//    //}
						//    if (btn.prices[j].name == 'tears') {
						//        var tearsPrices = [5, 25, 50, 500, 5e3, 25e3]
						//        unicornPrice += tearsPrices[i] * Math.pow(1.15 , btn.on) * 2500 / onZig;
						//    }
						//}
						//var bld = game.religion.getZU(btn.name);
						var relBonus = game.getEffect('unicornsRatioReligion') + 1;
						var riftChance = game.getEffect('riftChance');

						var ratioEffect = [0.05, 0.1, 0.25, 0.5, 2.5, 5];
						relBonus += ratioEffect[i];

						if (btn.effects.riftChance) {
							riftChance += btn.effects.riftChance;
						}
						/*for (var j in bld.effects) {
							if (j == 'unicornsRatioReligion') {
								relBonus += bld.effects[j];
							}
							if (j == 'riftChance') {
								riftChance += bld.effects[j];
							}
						}*/
						var unicornsPerRift = 500 * ((relBonus - 1) * 0.1 + 1);
						var riftBonus = riftChance * riftChanceRatio / (10000 * 2) * unicornsPerRift;
						riftBonus -= baseRift;
						var amor = unicornsPerSecond * globalRatio * relBonus * paragonRatio * faithBonus * cycle;
						amor -= total;
						amor = amor + riftBonus;
						amor = unicornPrice / amor;
						if (amor < bestAmoritization) {
							if (riftBonus > 0 || relBonus > religionRatio && unicornPrice > 0) {
								bestAmoritization = amor;
								bestBuilding = btn;
							} else {
								return game.religionTab.render();
							}
						}
					}
				}
			}
			return bestBuilding;
		}
	};

	// Tab Manager
	// ===========

	var TabManager = function (name) {
		this.setTab(name);
	};

	TabManager.prototype = {
		tab: undefined,
		render: function () {
			if (this.tab && game.ui.activeTabId !== this.tab.tabId && !this.tab._inherited) {
				this.tab.render();
			}
			return this;
		},
		setTab: function (name) {
			for (var tab in game.tabs) {
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

	var ReligionManager = function () {
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

			if (!button || !button.model.metadata) {return game.religionTab.render();}

			if (!button.model.enabled) {
				button.model.prices = button.controller.getPrices(button.model);
				button.controller.updateEnabled(button.model);
				if (!button.model.enabled) {
					return;
				}
			}

			//var amountTemp = amount;
			amount = this.bulkManager.construct(button.model, button, amount);
			//if (amount !== amountTemp) {
			//    warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			//}

			if (amount === 0) {return;}
			game.stats.getStat("totalClicks").val += 1;

			let label = build.label;
			if (variant === "s") {
				if (options.auto.cache.trait['wise']) {
					storeForSummary('哲学家小猫祷告了 ' + label, amount, 'faith');
					return iactivity('act.sun.discovers.leader', [label, amount], 'ks-faith');
				}
				if (amount === 1) {
					iactivity('act.sun.discover', [label], 'ks-faith');
				} else {
					iactivity('act.sun.discovers', [label, amount], 'ks-faith');
				}
				storeForSummary('小猫祷告了 ' + label, amount, 'faith');
			} else {
				storeForSummary(label, amount, 'build');
				if (amount === 1) {
					iactivity('act.build', [label], 'ks-build');
				} else {
					iactivity('act.builds', [label, amount], 'ks-build');
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
			let buttons;
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
			var build = this.getBuild(name, variant);
			for (var i = 0; i < buttons.length; i++) {
				if (!buttons[i]) {continue;}
				var haystack = buttons[i].model.name;
				if (haystack.indexOf(build.label) !== -1) {
					return buttons[i];
				}
			}
		}
	};

	// Time manager
	// ============

	var TimeManager = function () {
		this.manager = new TabManager('Time');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	TimeManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, variant, amount) {
			var build = this.getBuild(name, variant);
			var button = this.getBuildButton(name, variant);

			if (!button || !button.model.metadata) {return game.timeTab.render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			var amountTemp = amount;
			var label = build.label;
			amount = this.bulkManager.construct(button.model, button, amount);
			if (amount !== amountTemp) {warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);}
			storeForSummary(label, amount, 'build');

			if (amount === 1) {
				iactivity('act.build', [label], 'ks-build');
			} else {
				iactivity('act.builds', [label, amount], 'ks-build');
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
			if (variant === 'chrono') {
				var buttons = this.manager.tab.children[2].children[0].children;
			} else {
				var buttons = this.manager.tab.children[3].children[0].children;
			}
			var build = this.getBuild(name, variant);
			for (var i in buttons) {
				var haystack = buttons[i].model.name;
				if (haystack.indexOf(build.label) !== -1) {
					return buttons[i];
				}
			}
		}
	};

	// Upgrade manager
	// ============

	var UpgradeManager = function () {
		this.workManager = new TabManager('Workshop');
		this.sciManager = new TabManager('Science');
		this.spaManager = new TabManager('Space');
		this.crafts = new CraftManager();
	};

	UpgradeManager.prototype = {
		manager: undefined,
		crafts: undefined,
		build: function (upgrade, variant) {
			var button = this.getBuildButton(upgrade, variant);

			if (!button || !button.model.metadata) {
				if (variant === 'workshop') {
					game.workshopTab.render();
				} else {
					game.libraryTab.render();
				}
				return;
			}
			if (!button.model.enabled) {
				button.model.prices = button.controller.getPrices(button.model);
				button.controller.updateEnabled(button.model);
				if (!button.model.enabled) {
					return;
				}
			}
			if (game.village.leader && button.model.metadata.requiredLeaderJob && game.village.leader.job != button.model.metadata.requiredLeaderJob){
				var jobTitle = game.village.getJob(button.model.metadata.requiredLeaderJob).title;
				game.msg($I("msg.policy.wrongLeaderJobForResearch", [button.model.metadata.label, jobTitle]), "important");
				return;
			}else if(button.model.metadata.name == "transkittenism" && game.bld.getBuildingExt("aiCore").meta.effects["aiLevel"] >= 15){
				game.msg($I("msg.policy.aiNotMerges"),"alert", "ai");
				return;
			}else if(button.model.metadata.blocked == false) {
				for(var i = 0; i < button.model.metadata.blocks.length; i++){
					if(game.science.getPolicy(button.model.metadata.blocks[i]).researched){
						button.model.metadata.blocked = true;
						return;
					}
				}
			}

			//need to simulate a click so the game updates everything properly
			button.model.prices = button.controller.getPrices(button.model);
			button.controller.payPrice(button.model, {}, function() {});
			//button.controller.onPurchase(button.model, {}, function() {});
			let meta = button.model.metadata;
			meta.researched = true;
			if (meta.handler){
				meta.handler(game, meta);
			}
			if (meta.unlocks) {
				game.unlock(meta.unlocks);
			}
			if (meta.blocks){
				for (var i in meta.blocks){
					var policy = game.science.getPolicy(meta.blocks[i]);
					policy.blocked = true;
				}
			}
			if (meta.onResearch) {
				meta.onResearch(game);
			}
			if (meta.upgrades) {
				cacheUpgrades(meta);
			}

			game.stats.getStat("totalClicks").val += 1;

			var label = upgrade.label;
			let scientist = options.auto.cache.trait['scientist'];
			let leader = (scientist) ? '科学家小猫' : '小猫';
			scientist = (scientist) ? 1 : 0;
			if (variant === 'workshop') {
				storeForSummary(label, scientist, 'upgrade');
				iactivity('upgrade.upgrade', [label, leader], 'ks-upgrade');
				let name = upgrade.name;
				if (name === options.auto.upgrade.items.upgrades.cache) {
					options.auto.upgrade.items.upgrades.cache = false;
					let Upg = options.auto.cache.resUpg;
					for (let i in options.auto.cache.resUpg) {
						delete Upg[i];
					}
				}
			} else if (variant === 'science') {
				storeForSummary(label, scientist, 'research');
				iactivity('upgrade.tech', [label, leader], 'ks-research');
			} else if (variant === 'policy') {
				iactivity('upgrade.policy', [label], 'ks-policy');
			}
		},
		getValue: function (name, upgrade) {
			let res = options.auto.resources[name];
			switch(upgrade) {
				case 'oxidation':
				res = null;
				break;
			}
			let stock = (res && res.enabled) ? res.stock : 0;
			if (name === 'titanium' && upgrade !== 'rotaryKiln') {
				if (!game.workshop.metaCache['rotaryKiln'].researched && game.workshop.get('orbitalGeodesy').researched) {stock += 5000;}
			}
			return Math.max(resMap[name].value - stock, 0);
		},
		getBuildButton: function (upgrade, variant) {
			if (variant === 'workshop') {
				var buttons = this.workManager.tab.buttons;
			} else if (variant === 'science') {
				var buttons = this.sciManager.tab.buttons;
			} else if (variant === 'policy') {
				var buttons = this.sciManager.tab.policyPanel.children;
			}
			for (var i of buttons) {
				var haystack = i.model.name;
				if (haystack === upgrade.label) {
					return i;
				}
			}
		}
	};

	// Building manager
	// ================

	var BuildManager = function () {
		this.manager = new TabManager('Bonfire');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	BuildManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, stage, amount) {
			var build = this.getBuild(name);
			var button = this.getBuildButton(name, stage);

			if (!build.meta.unlocked) {return;}
			if (!button || !button.model.metadata) {return game.bldTab.render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			//var amountTemp = amount;
			var label = build.meta.label ? build.meta.label : build.meta.stages[stage].label;
			amount = this.bulkManager.construct(button.model, button, amount);
			//if (amount !== amountTemp) {/*warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);*/}
			if (amount === 0) {return;}
			storeForSummary(label, amount, 'build');
			game.stats.getStat("totalClicks").val += 1;

			if (amount === 1) {
				iactivity('act.build', [label], 'ks-build');
			} else{
				iactivity('act.builds', [label, amount], 'ks-build');
			}
		},
		count: function(id, count) {
			if (!count) {return;}
			let halfCount;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let atheism = game.challenges.isActive('atheism');
			let solarMeta = game.religion.getRU('solarRevolution');
			let spaceManufacturing = game.workshop.get('spaceManufacturing').researched;
			let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
			let mineralsCap = (resMap['minerals'].value > resMap['minerals'].maxValue * 0.94);
			let woodCap = (resMap['wood'].value > resMap['wood'].maxValue * 0.94);
			let TitaniumCap = (resMap['titanium'].value >= 0.95 * resMap['titanium'].maxValue);
			let scienceMetaCache = game.science.metaCache;
			let catnipTick = this.crafts.getPotentialCatnip(false);
			let amphitheatre = game.bld.getBuildingExt('amphitheatre').meta.val;
			switch (id) {
				//case 'observatory':
				//	if (id == 'observatory' && game.challenges.isActive("blackSky") && resMap['science'].maxValue > 5e5 && !spaceManufacturing) {
				//		count = 0;
				//	}
				//	break;
				case 'aqueduct':
					if (catnipTick < 2 || game.challenges.isActive('winterIsComing')) {break;}
					else {count = Math.floor(count * 0.4);}
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
						if (resMap['minerals'].maxValue < 1e5) {break;}
						else if (vitruvianFeline) {count = Math.floor(count * 0.4);}
					}
					// falls through
				case 'lumberMill':
					if (id === 'lumberMill') {
						if (game.bld.getBuildingExt(id).meta.val < 35) {
							if (!game.getEffect('lumberMillRatio') && game.bld.getEffect('woodRatio') > 3.1 && resMap['iron'].maxValue > 1200) {
								count = 0;
							}
							if (resMap['gold'].value || game.getEffect('ironPerTickAutoprod') < 0.3) {
								break;
							}
						} else if (!spaceManufacturing) {
							halfCount = true;
						}
					}
					// falls through
				case 'oilWell':
					if (id === 'oilWell') {
						if (game.bld.getBuildingExt(id).meta.val < 8) {break;}
						if (resMap['oil'].maxValue > 3e4 && resMap['oil'].value > 1e4) {count = Math.floor(count * 0.4);}
					}
					// falls through
				case 'chapel':
					if (id === 'chapel') {
						if (game.bld.getBuildingExt(id).meta.val < 20) {
							break;
						} else {
							if (!game.calendar.festivalDays) {
								count = 0;
							}
							break;
						}
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
						} else if (game.space.getBuilding('sattelite').val < 3 && game.religion.getSolarRevolutionRatio() > 7.5) {halfCount = true;}
						else if (!orbitalGeodesy && !game.workshop.get('geodesy').researched) {halfCount = true;}
						else if (spaceManufacturing) {msgSummary('harbor', true);}
					}
					break;
				case 'logHouse':
					if (amphitheatre && amphitheatre < 5 && game.village.happiness > 2 && game.village.maxKittens > 20) {halfCount = true;}
					break;
				case 'biolab':
					if (!spaceManufacturing) {
						count = 1;
					}
					break;
				case 'factory':
					if (!vitruvianFeline) {break;}
					if (!spaceManufacturing) {
						if (game.bld.get(id).val > 2 && !TitaniumCap) {
							count = 0;
						}
						if (resMap['titanium'].maxValue < 1.3e5 && game.bld.get(id).val) {
							count = 0;
						}
					} else if (!game.space.getBuilding('sattelite').val && game.bld.get(id).val){
						count = 0;
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
					vitruvianFeline = (vitruvianFeline || (!vitruvianFeline && game.workshop.get('orbitalGeodesy').researched && id === 'mansion'));
					if (!spaceManufacturing && game.stats.getStat("totalResets").val > 1 && !TitaniumCap && vitruvianFeline) {
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
			return count;
		},
		getBuild: function (name) {
			return game.bld.getBuildingExt(name);
		},
		getBuildButton: function (name, stage) {
			var buttons = this.manager.tab.children;
			var build = this.getBuild(name);
			var label = typeof stage !== 'undefined' ? build.meta.stages[stage].label : build.meta.label;

			for (var i in buttons) {
				var haystack = buttons[i].model.name;
				if (haystack.indexOf(label) !== -1){
					return buttons[i];
				}
			}
		},
		getSumPrices: function (build, price) {
			var currentRatio = (build.priceRatio) ? build.priceRatio : build.stages[build.stage].priceRatio;
			var buildRatio = currentRatio + game.getEffect("priceRatio");
			return (price.val - price.val * Math.pow(buildRatio, build.val - 1)) / (1 - buildRatio);
		},
		sellBuild: function (name) {
			var build = this.getBuild(name).meta;
			var prices = build.stages[build.stage].prices;
			for(var i = 0; i < prices.length; i++){
				var price = prices[i];
				var res = game.resPool.get(price.name);
				if (res.isRefundable() && !price.isTemporary && build.val) {
					var sumPrices = this.getSumPrices(build, price);
					game.resPool.addResEvent(price.name, sumPrices * 0.5);
				}
			}
			build.on = 0;
			build.val = 0;
		}
	};

	// Space manager
	// ================

	var SpaceManager = function () {
		this.manager = new TabManager('Space');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	SpaceManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, amount) {
			var build = this.getBuild(name);
			var button = this.getBuildButton(name);

			if (!build.unlocked || !options.auto.space.items[name].enabled) {return;}
			if (!button || !button.model.metadata) {return game.spaceTab.render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			var amountTemp = amount;
			var label = build.label;
			amount = this.bulkManager.construct(button.model, button, amount);
			if (amount === 0) {
				return;
				//warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			}
			storeForSummary(label, amount, 'build');
			game.stats.getStat("totalClicks").val += 1;

			if (amount === 1) {
				iactivity('act.build', [label], 'ks-build');
			} else {
				iactivity('act.builds', [label, amount], 'ks-build');
			}
		},
		getBuild: function (name) {
			return game.space.getBuilding(name);
		},
		getBuildButton: function (name) {
			var panels = this.manager.tab.planetPanels;

			for (var panel in panels) {
				for (var child in panels[panel].children) {
					if (panels[panel].children[child].id === name) {return panels[panel].children[child];}
				}
			}
		}
	};

	// Crafting Manager
	// ================

	var CraftManager = function () {
		this.cacheManager = new CacheManager();
	};

	CraftManager.prototype = {
		craft: function (name, amount) {
			amount = Math.floor(amount);

			if (!name || 1 > amount) {return;}
			if (!this.canCraft(name, amount)) {return;}

			var craft = this.getCraft(name);
			var ratio = game.getResCraftRatio(craft.name) + 1;
			let trait = options.auto.cache.trait['engineer'] && game.village.leader;
			let leader = (trait) ? '工匠小猫制作了 ' : '小猫制作了 ';

			//game.workshop.craft(craft.name, amount, true, false);
			amount = Math.ceil(amount);
			var craftAmt = amount * ratio;
			let prices = dojo.clone(game.workshop.getCraftPrice(craft));
			for (var i = prices.length - 1; i >= 0; i--) {
				prices[i].val *= amount;
			}

			if (game.resPool.hasRes(prices)) {
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
				if (craft.upgrades){
					cacheUpgrades(craft.upgrades);
				}
				game.stats.getStat("totalCrafts").val++;
				game.stats.getStatCurrent("totalCrafts").val++;
				game.stats.getStat("totalClicks").val += 1;
				prices = null;
			} else {
				return;
			}

			var iname = game.resPool.get(name).title;

			// determine actual amount after crafting upgrades
			// amount = (amount * (1 + ratio)).toFixed(2);
			amount = craftAmt;

			if (trait) {storeForSummary(iname, amount, 'craftLeader');}
			else {storeForSummary(iname, amount, 'craft');}
			iactivity('act.craft', [leader + game.getDisplayValueExt(amount), iname], 'ks-craft');
		},
		canCraft: function (name, amount) {
			var craft = this.getCraft(name);
			var result = false;

			if (craft.unlocked) {
				result = true;

				var prices = game.workshop.getCraftPrice(craft);
				for (var i in prices) {
					var price = prices[i];
					let value = resMap[price.name].value;

					if (value < price.val * amount) {
						result = false;
					}
				}
			}

			return result;
		},
		getCraft: function (name) {
			return game.workshop.getCraft(name);
		},
		singleCraftPossible: function (name) {
			var materials = this.getMaterials(name);
			for (var mat in materials) {
				if (this.getValueAvailable(mat, true) < materials[mat]) {return false;}
			}
			return true;
		},
		getLowestCraftAmount: function (name, limited, limRat, aboveTrigger) {
			//var amount = Number.MAX_VALUE;
			var autoMax = Number.MAX_VALUE;
			var materials = this.getMaterials(name);
			// Safeguard if materials for craft cannot be determined.
			if (!materials) {return 0;}

			let resValue = this.getValueAvailable(name, true);
			var i;

			let temple = game.bld.get('temple');
			let priceRatio = Math.pow(temple.priceRatio + game.getEffect("priceRatio"), temple.val);

			var craft = this.getCraft(name);
			var ratio = game.getResCraftRatio(craft.name) + 1;
			var trigger = options.auto.craft.trigger;
			let force = false;
			let shipValue = resMap['ship'].value;
			if (name === 'ship') {
				force = options.auto.options.enabled && options.auto.options.items.shipOverride.enabled;
				let optionShipVal = options.auto.options.items.shipOverride.subTrigger;
				let geodesy = game.workshop.get("geodesy").researched;
				geodesy = (geodesy) ? optionShipVal : 168 / Math.max(0.5, Math.log(game.religion.getSolarRevolutionRatio()));
				optionShipVal = Math.min(geodesy, optionShipVal);
				force &=  shipValue < optionShipVal && (!game.challenges.isActive("blackSky") || resMap['titanium'].maxValue < 1.25e5);
				force &= !game.workshop.get('fluidizedReactors').researched;
			}

			// 默认数量设为可达无限的最小值
			var amount = Number.MAX_VALUE / ratio + Number.MAX_VALUE / Math.pow(2, 53) / ratio;
			// 跳过资源达到无限的情况
			if (resMap[name].value === Infinity) { return 0; }

			let gScience = game.science;
			let scienceMeta = gScience.meta[0];
			let indexMax;
			let cache = options.auto.cache;
			let msgScience = (name) => {
				let scienceName = (cache.science) ? cache.science : "科学";
				force = true;
				if (scienceName === '油气处理') {return;}
				activity(i18n("craft.force", [resMap[name].title, scienceName]));
				storeForSummary('craft' + ucfirst(name), 1);
			};

			if (name === 'plate' && limited && options.auto.craft.items['steel'].enabled) {
				let coalTick = game.getResourcePerTick('coal', true);
				let coalTri = this.getResource('coal').maxValue * trigger;
				if (coalTick > 0 && resMap['iron'].value !== resMap['iron'].maxValue && resValue > 23) {
					if (this.getValueAvailable('plate') / this.getValueAvailable('steel') > 0.8) {
						var ironInTime = ((coalTri - this.getValue('coal')) / coalTick) * Math.max(game.getResourcePerTick('iron', true), 0);
						autoMax = (this.getValueAvailable('iron') - Math.max(coalTri - ironInTime,0)) / 125;
					}
				}
				if (resMap['faith'].maxValue < 750 && resMap['gold'].value > 30 && resMap[name].value < 23 && ratio > 3) {force = true;}
				if (!shipValue && ratio > 3 && resMap['starchart'].value >= 25) {
					autoMax = Number.MAX_VALUE;
					force = true;
				}
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
						let buildTemple = (i === 16 && game.village.happiness < 4 && game.bld.get('temple').val === 1 && game.prestige.getPerk('renaissance').researched);
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
				if (!scienceMeta.meta[18].researched && cultrueTri > 0.9 && resValue < 65) {force = true;}
				if (aboveTrigger && 4000 * this.getTickVal(this.getResource('parchment'), true) < 2500) {
					limited = false;
				}
			}

			let religion = resMap['gold'].maxValue < 500 || (game.religion.getRU('solarRevolution').on && game.religion.faith > 1000);
			if (name === 'compedium' && limited && gScience.get('navigation').researched && religion) {
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

			if (name === 'blueprint' && limited && gScience.get('electricity').researched) {
				//indexMax = (game.village.maxKittens > 130) ? 44 : 34;
				for (i = 30; i < 44; i++) {
					let meta = scienceMeta.meta[i];
					if (!meta.researched) {
						let metaName = meta.name;
						let fitlerName = ['quantumCryptography', 'blackchain', 'ecology', 'ai'];
						if (fitlerName.indexOf(metaName) > -1) {
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
			}

			for (i in materials) {
				var delta = 0;
				let material = materials[i];
				let doall = (!limited || force || (resMap[i].maxValue > 0 && aboveTrigger));
				if (doall) {
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

			if (name === 'steel' && limited && options.auto.craft.items['plate'].enabled) {
				let calciner = game.bld.getBuildingExt('calciner').meta;
				var plateRatio = game.getResCraftRatio("plate");
				let steelValAva = this.getValueAvailable('steel');
				if (resValue > 500 && this.getValueAvailable('plate') / steelValAva < ((plateRatio + 1) / 125) / (ratio / 100)) {
					amount = 0;
				}
				let forceSteel = (name, prices) => {
					let workshopMeta;
					if (name) {
						workshopMeta = game.workshop.get(name);
						prices = workshopMeta.prices;
						if (!workshopMeta.unlocked) {return;}
					}
					if (!name || !workshopMeta.researched) {
						let steelPrice;
						for (let Res in prices) {
							if (prices[Res].name === 'steel') {
								steelPrice = prices[Res].val;
							}
						}
						let amt = Math.ceil((steelPrice - resValue) / ratio);
						if (name === 'oxidation' && amt > 0) {
							if (amt / Math.min(resMap['iron'].perTickCached, resMap['coal'].perTickCached) < 20) {
								options.auto.resources['steel'] = {enabled: true,  stock: 5000};
								options.auto.craft.oxidation = true;
								msgSummary('oxidation');
							}
							if (options.auto.craft.oxidation && resMap['iron'].value > 100 * amt && resMap['coal'].value > 100 * amt) {
								options.auto.craft.oxidation = null;
								steelPrice = true;
							}
						}
						let checkRes = (this.getValueAvailable('iron', true) > 100 * amt && this.getValueAvailable('coal', true) > 100 * amt) || steelPrice === true;
						if (amt > 0 && checkRes) {
							amount = amt;
							force = true;
							if (name) {
								iactivity("craft.forceSteel", [workshopMeta.label]);
							}
						}
					}
				};
				if (options.auto.resources['steel'] && options.auto.resources['steel'].checkForReset === undefined) {
					let oxidation = game.workshop.get('oxidation');
					if (!oxidation.unlocked || oxidation.researched) {
						delete options.auto.resources['steel'];
						delete options.auto.resources['iron'];
						delete options.auto.resources['coal'];
						saveToKittenStorage();
					}
				}
				forceSteel('steelSaw');
				forceSteel('steelAxe');
				forceSteel('steelArmor');
				let calVal = calciner.val;
				if (calVal) {
					if (!calciner.isAutomationEnabled) {
						let calcinerAmount = 0.003 * game.bld.get("reactor").on * ( 1 + game.getEffect("calcinerRatio")) * 0.1 * game.bld.getAutoProductionRatio() * (1 + game.getEffect("ironPolicyRatio")) * game.calendar.cycleEffectsFestival({iron: 1})['iron'] * calciner.val * (1 + game.getEffect("ironPolicyRatio"));
						amount = (amount <= 0) ? calcinerAmount : Math.min(amount + calcinerAmount, resMap['coal'].value / 100);
					}
					if (calVal > 1) {
						forceSteel('oxidation');
						let cacheUpg = options.auto.upgrade.items.upgrades;
						let alloyVal = resMap['alloy'].value;
						let orb = game.workshop.get('orbitalGeodesy');
						if (orb.unlocked && !orb.researched && resMap['oil'].value > 1.7e4 && resMap['oil'].maxValue > 3.5e4) {
							let a = Math.ceil((1000 - alloyVal) / ratio);
							a = (a > 0 && resMap['titanium'].value > a * 10) || (resMap['alloy'].value > 300 && calVal > 20);
							if (a > 0 && resMap['titanium'].value > a * 10 && !cacheUpg.cache) {
								options.auto.cache.resUpg['alloy'] = 1000;
								cacheUpg.cache = 'orbitalGeodesy';
							}
						}
						let flu = game.workshop.get('fluidizedReactors');
						if (flu.unlocked && !flu.researched && !cacheUpg.cache) {
							let a = Math.ceil((200 - alloyVal) / ratio);
							a = (a > 0 && resMap['titanium'].value > a * 5) || resMap['alloy'].value > 50;
							if (a && calVal > 9) {
								options.auto.cache.resUpg['alloy'] = 200;
								cacheUpg.cache = 'fluidizedReactors';
							}
						}
						let alloyCache = options.auto.cache.resUpg['alloy'];
						if (alloyCache) {
							let b =  Math.ceil((alloyCache - alloyVal) / ratio);
							forceSteel('', [{name:'steel',val:b*75}]);
						}
					}
				} else if (game.challenges.isActive("blackSky")) {
					forceSteel('', [{name:'steel',val:1100}]);
				}
			}

			if (name === 'alloy' && limited) {
				let forceAlloy = (name, price) => {
					let workshopMeta = game.workshop.get(name);
					if (workshopMeta.researched || !workshopMeta.unlocked) {return;}
					let amt = Math.ceil((price - resMap['alloy'].value) / ratio);
					if (amt > 1 && resMap['steel'].value > amt * 75 && resMap['titanium'].value > amt * 10) {
						amount = amt;
						force = true;
						iactivity("craft.forceSteel", [workshopMeta.label]);
					}
				};
				if (resMap['oil'].value > 35000) {
					forceAlloy('orbitalGeodesy', 1000);
				}
				forceAlloy('fluidizedReactors', 200);
				forceAlloy('alloyAxe', 25);
			}

			if (amount <= 0) {return 0;}
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
			var materials = {};
			var craft = this.getCraft(name);

			// Safeguard against craft items that aren't actually available yet.
			if (!craft) {return;}

			var prices = game.workshop.getCraftPrice(craft);

			for (var i in prices) {
				var price = prices[i];

				materials[price.name] = price.val;
			}

			return materials;
		},
		getTickVal: function (res, preTrade) {
			var prod = game.getResourcePerTick(res.name, true);
			if (res.name === 'timeCrystal') {
				var aliChance = game.getEffect("alicornChance");
				var alicornTick = game.getResourcePerTick("alicorn");
				var tcRefineRatio = 0.04 * (1 + game.getEffect("tcRefineRatio"));
				aliChance *= 1 + game.getLimitedDR(game.getEffect("alicornPerTickRatio"), 1.2);
				var aliChanceTick = Math.min(aliChance, 1) * 0.2 * (1 + game.timeAccelerationRatio());
				prod += (aliChanceTick + alicornTick) * tcRefineRatio;
			}
			if (res.craftable) {
				var minProd = Number.MAX_VALUE;
				var materials = this.getMaterials(res.name);
				for (var mat in materials) {
					var rat = (1 + game.getResCraftRatio(res.name)) / materials[mat];
					//Currently preTrade is only true for the festival stuff, so including furs from hunting is ideal.
					var addProd = this.getTickVal(this.getResource(mat));
					minProd = Math.min(addProd * rat, minProd);
				}
				prod += (minProd !== Number.MAX_VALUE) ? minProd : 0;
			}
			var ignore = (res.name === 'spice' || res.name === 'blueprint');
			if (prod <= 0 && ignore) {return 'ignore';}
			if (!preTrade) {prod += this.cacheManager.getResValue(res.name);}
			return prod;
		},
		getAverageHunt: function() {
			var output = {};
			var hunterRatio = game.getEffect('hunterRatio') + game.village.getEffectLeader('manager', 0);

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
			var res = resMap[name];
			if (res) {return res;}
			warning('unable to find resource ' + name);
			return null;
		},
		getValue: function (name) {
			return this.getResource(name).value;
		},
		getStock: function (name) {
			var res = options.auto.resources[name];
			var stock = (res && res.enabled) ? res.stock : 0;
			var unResearched = (name) => {
				let meta = game.workshop.metaCache[name];
				return (meta.unlocked && !meta.researched);
			};

			if (name === 'iron') {
				let lumberMill = game.bld.get('lumberMill').val > 19 - 40 * game.getEffect("priceRatio");
				let a = resMap['gold'].value < 50 && lumberMill;
				if (game.bld.getBuildingExt('temple').meta.on > 2 || resMap['faith'].maxValue > 749 || a || resMap['plate'].value > 18) {
					let reinforcedSaw = unResearched('reinforcedSaw') && resMap[name].value > 200 && resMap[name].maxValue > 1e3;
					if (reinforcedSaw) {
						stock += 1000;
					}
					let crossbow = unResearched('crossbow') && lumberMill && resMap[name].maxValue > 1500;
					if (crossbow) {
						stock += 1500;
					}
					let ironwood = unResearched('ironwood') && resMap[name].value > 900 && resMap[name].maxValue > 3000 && resMap['science'].maxValue > 3e4;
					ironwood &= !game.ironWill;
					if (ironwood) {
						stock += 3000;
						msgSummary('ironwood');
					} else {msgSummary('ironwood', true);}
				}
			}
			let cacheAlloy = options.auto.cache.resUpg[name];
			if (name === 'steel') {
				let steelAxe = unResearched('steelAxe') && resMap['coal'].value > 3000;
				if (steelAxe && (game.bld.get('lumberMill').val > 30 || resMap[name].value > 10)) {
					stock += 75;
				}
				let steelSaw = unResearched('steelSaw') && resMap[name].value > 250;
				if (steelSaw) {
					stock += 750;
				}
				let cacheSteel = options.auto.cache.resUpg['steel'];
				if (cacheSteel) {
					stock += cacheSteel;
				}
				if (cacheAlloy) {
					stock += cacheAlloy * 75 / game.getEffect("craftRatio");
				}
			}
			if (name === 'alloy') {
				if (cacheAlloy) {
					stock += cacheAlloy;
				}
			}
			if (name === 'titanium') {
				if (unResearched('rotaryKiln') && game.workshop.get('orbitalGeodesy').researched) {stock += 5000;}
				if (unResearched('spaceManufacturing') && game.bld.get('reactor').val > 24 && resMap['titanium'].maxValue > 125e3) {stock += 13e5;}
			}
			if (name === 'gear') {
				if (unResearched('rotaryKiln') && game.workshop.get('orbitalGeodesy').researched) {stock += 5000;}
			}
			return !stock ? 0 : stock;
		},
		getValueAvailable: function (name, all, typeTrigger) {
			var value = this.getValue(name);
			var stock = this.getStock(name);

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

			if ('catnip' === name) {
				var resPerTick = this.getPotentialCatnip(false);
				var catnipTick = (game.calendar.season !== 0 || this.getResource(name).maxValue * trigger < value || game.getResourcePerTick("catnip", true) < 0);
				if (resPerTick < 0 && catnipTick) {
					stock -= resPerTick * 1000 * 5;
					if (options.catnipMsg) {
						activity(i18n('craft.winterCatnip'));
						options.catnipMsg = false;
					}
				}
			}

			value = Math.max(value - stock, 0);

			// If we have a maxValue, and user hasn't requested all, check
			// consumption rate
			let maxValue = (typeTrigger && !all && name === 'slab') ? value : this.getResource(name).maxValue;
			if (!all && maxValue > 0) {
				var res = options.auto.resources[name];
				var consume = res && res.enabled && (res.consume !== undefined) ? res.consume : options.consume;

				value -= Math.min(maxValue, value) * (1 - consume);

				if ('unobtainium' === name && value + stock < 1000 && this.getResource(name).value === maxValue && this.getResource(name).value >= 1000) {
					value = this.getResource(name).value;// fix unobtainium carfting to eludium
				}
			}

			return value;
		},
		getLimRat: function (name, limited, limRat) {
			let res = resMap[name];
			let shipValue = resMap['ship'].value;
			let renaissance = game.prestige.getPerk('renaissance').researched;
			//if (limited) {
			//	switch (name) {
			//}
			if (!limited) {return limRat;}
			let navigation = game.science.get('navigation');
			if (name === 'wood') {
				limRat = (0.09 + res.perTickCached < resMap['catnip'].perTickCached / game.workshop.getCraft("wood").prices[0].val && this.getPotentialCatnip()) ? 1 : limRat;
			}
			if (name === 'beam') {
				let craftBeam = navigation.unlocked || resMap['gold'].maxValue < 500 || (resMap['iron'].value > 1200 && !resMap['coal'].value);
				limRat = (craftBeam) ? limRat : 0.005;
			}
			if (name === 'slab') {
				let a = resMap['faith'].maxValue < 750 && res.value < 51 && resMap['gold'].value > 35;
				limRat = (resMap['scaffold'].value || a) ? limRat : 5e-4;
			}

			if (name === 'ship') {
				let shipLimit = 5 * game.bld.get("reactor").on + 225;
				let titaniumMax = resMap['titanium'].maxValue;
				let space = (!game.space.meta[0].meta[3].val && game.space.getBuilding('sattelite').val < 9);
				space = space && (game.religion.getSolarRevolutionRatio() > 6);
				limRat = (0.03 * shipValue > titaniumMax || space) ? 0.01 : limRat;
			}

			if (name === 'plate') {
				let ractor = resMap['titanium'].value > 3500 && resMap['uranium'].value > 250 && !game.bld.get('reactor').val;
				limRat = (game.getEffect('calcinerRatio')) ? limRat : 0.3;
				limRat = ((res.value < 150 && navigation.researched && resMap['starchart'].value > 15 && resMap['scaffold'].value > 50) || ractor) ? 0.9 : limRat;
			}

			if (name === 'alloy') {
				let titaniumTick = game.globalEffectsCached['titaniumPerTickAutoprod'];
				limRat = (game.bld.get("steamworks").on < game.bld.get("magneto").on || titaniumTick === 5e-4) ? limRat : 0.75;
				let magneto = game.bld.get('magneto');
				let priceRatio = Math.pow(magneto.priceRatio + game.getEffect("priceRatio"), magneto.val);
				limRat = (res.value > Math.max(1250, 10 * priceRatio) && options.auto.build.items.magneto.enabled) ? 0.01 : limRat;
				limRat = (resMap['titanium'].value < 25 && !titaniumTick) ? 0 : limRat;
			}

			// 减少E合金的合成
			if (name === 'eludium') {
				let RR = game.time.getCFU("ressourceRetrieval").on;
				limRat = (RR) ? 1e-5 : limRat;
			}

			if (name === 'megalith') {
				if (res.value > 50 || game.bld.metaCache.ziggurat.meta.on || resMap['unicorns'].value < 2500) {
					if (!game.workshop.get('orbitalGeodesy').researched) {
						limRat = 0.01;
					}
				}
				let ziggurat = game.bld.get('ziggurat');
				let priceRatio = Math.pow(ziggurat.priceRatio + game.getEffect("priceRatio"), ziggurat.val);
				limRat = (res.value > Math.max(100, 50 * priceRatio)) ? 5e-3 : limRat;
				limRat = (!res.unlocked && game.diplomacy.get('nagas').embassyLevel > 15 && game.calendar.season === 0 && resMap['unicorns'].value > 2e3) ? 1 : limRat;
			}

			if (name === 'concrate') {
				let reactor = game.bld.get('reactor');
				let priceRatio = Math.pow(reactor.priceRatio + game.getEffect("priceRatio"), reactor.val);
				let strenghtenBuild;
				limRat = (reactor.val) ? limRat : 0.3;
				limRat = (res.value > Math.max(150, 50 * priceRatio)) ? 0.01 : limRat;
				limRat = (!res.unlocked && game.diplomacy.get('nagas').embassyLevel > 10 && game.calendar.season === 0 && resMap['titanium'].value > 500) ? 1 : limRat;
			}

			if (name === 'gear') {
				let steamworks = game.bld.get('steamworks');
				let priceRatio = Math.pow(steamworks.priceRatio + game.getEffect("priceRatio"), steamworks.val);
				let logistics = game.workshop.get('logistics');
				let fuelInjectors = resMap['oil'].value > 2e4 && resPercent('coal') < 0.5 && res.value < 250 && !game.workshop.get('fuelInjectors').researched;
				limRat = (res.value > 30 && (!logistics.unlocked && logistics.researched)) ? 0.3 : limRat;
				limRat = (fuelInjectors) ? 0.7 : limRat;
				limRat = (res.value > Math.max(500, 20 * priceRatio)) ? 5e-3 : limRat;
				limRat = (steamworks.val || game.science.get('chemistry').researched) ? limRat : 0;
			}

			if (name === 'kerosene') {
				limRat = (game.space.meta[0].meta[1].val) ? limRat : 0;
			}

			if (name === 'manuscript') {
				limRat = (game.prestige.getPerk("numerology").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) ? 0.25 : limRat;
			}

			if (name === 'compedium') {
				limRat = (game.science.get('architecture').unlocked) ? limRat : 0;
			}

			if (name === 'blueprint') {
				limRat = (game.science.get('industrialization').unlocked) ? limRat : 0;
			}

			if (name === 'scaffold') {
				let observatory = game.bld.get('observatory');
				let priceRatio = Math.pow(observatory.priceRatio + game.getEffect("priceRatio"), observatory.val);
				limRat = (res.value < 100 && game.science.get('navigation').unlocked && resMap['iron'].value > 750) ? 1 : limRat;
				limRat = (game.science.get('navigation').unlocked) ? limRat : 0;
				//limRat = (res.value < 50 * priceRatio && res.value > 85 && resMap['science'].value < 15e4) ? 1 : limRat;
			}
			return limRat;
		},
		getPotentialCatnip: function (worstWeather, pastures, aqueducts) {
			var fieldProd = game.getEffect('catnipPerTickBase');
			if (worstWeather) {
				fieldProd *= 0.1;
				fieldProd *= 1 + game.getLimitedDR(game.getEffect("coldHarshness"),1);

				if (game.science.getPolicy("communism").researched) {fieldProd = 0;}

			} else {
				//fieldProd *= game.calendar.getWeatherMod({name: "catnip"});
				let calendar = (game.calendar.year < 4) ? 0 : 0.15;
				fieldProd *= game.calendar.seasons[3].modifiers.catnip - calendar;
			}
			var vilProd = (game.village.getResProduction().catnip) ? game.village.getResProduction().catnip * (1 + game.getEffect('catnipJobRatio')) : 0;
			var baseProd = fieldProd + vilProd;

			if (aqueducts !== undefined) {
				var hydroponics = game.space.getBuilding('hydroponics');
				var hydroponicsEffect = hydroponics.effects['catnipRatio'];
				baseProd *= 1 + game.bld.getBuildingExt('aqueduct').meta.stages[0].effects['catnipRatio'] * aqueducts + hydroponicsEffect * hydroponics.val;
			} else {
				baseProd *= 1 + game.getEffect('catnipRatio');
			}

			var paragonBonus = (game.challenges.isActive("winterIsComing")) ? 0 : game.prestige.getParagonProductionRatio();
			baseProd *= 1 + paragonBonus;

			baseProd *= 1 + game.religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);

			//if (!game.opts.disableCMBR) {baseProd *= (1 + game.getCMBRBonus());}

			baseProd *= 1 + (game.getEffect('blsProductionBonus') * game.resPool.get('sorrow').value);

			baseProd = game.calendar.cycleEffectsFestival({catnip: baseProd})['catnip'];

			baseProd *= 1 + game.bld.pollutionEffects["catnipPollutionRatio"];

			var baseDemand = game.village.getResConsumption()['catnip'];
			var uniPastures = game.bld.getBuildingExt('unicornPasture').meta.val;
			if (pastures !== undefined) {
				baseDemand *= 1 + (game.getLimitedDR(pastures * -0.005 + uniPastures * -0.0015, 1.0));
			} else {
				baseDemand *= 1 + game.getEffect("catnipDemandRatio");
			}

			if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
				var happyCon = Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0);
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

	var BulkManager = function () {
		this.craftManager = new CraftManager();
	};

	BulkManager.prototype = {
		craftManager: undefined,
		bulk: function (builds, metaData, trigger, source) {
			var bList = [];
			var countList = [];
			var counter = 0;
			for (var name in builds) {
				build = builds[name];
				var data = metaData[name];
				if (!build.enabled) {continue;}
				// 建筑数量大于等于限值时直接下一个
				if (build.max !== -1 && build.max <= data.val) { continue; }
				if (data.tHidden === true) {continue;}
				if (data.rHidden === true) {continue;}
				if ((data.rHidden === undefined) && !data.unlocked) {continue;}
				if (name === 'cryochambers' && (game.time.getVSU('usedCryochambers').val > 0
					|| game.bld.getBuildingExt('chronosphere').meta.val <= data.val)) {continue;}
				if (name === 'ressourceRetrieval' && data.val >= 100) {continue;}
				if (data.stage != build.stage) {continue;}
				var prices = (data.stages) ? data.stages[data.stage].prices : data.prices;
				if (build.variant === 's') {prices = game.village.getEffectLeader("wise", dojo.clone(data.prices));}
				var priceRatio = this.getPriceRatio(data, source);
				if (!this.singleBuildPossible(data, prices, priceRatio, source)) {continue;}
				if (data.almostLimited && !game.workshop.get('geodesy').researched && game.village.leader){continue;}
				var require = !build.require ? false : this.craftManager.getResource(build.require);
				if (!require || trigger <= require.value / require.maxValue) {
					if (typeof(build.stage) !== 'undefined' && build.stage !== data.stage) {
						continue;
					}
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
					var pricesDiscount = game.getLimitedDR(game.getEffect(name + "CostReduction"), 1);
					var priceModifier = 1 - pricesDiscount;
					for (var i in prices) {
						var resPriceDiscount = game.getLimitedDR(game.getEffect(prices[i].name + "CostReduction"), 1);
						var resPriceModifier = 1 - resPriceDiscount;
						countList[counter].prices.push({
							val: prices[i].val * priceModifier * resPriceModifier,
							name: prices[i].name
						});
					}

					countList[counter].priceRatio = priceRatio;
					countList[counter].source = source;
					countList[counter].limit = (isNaN(build.max)) ? -1 : build.max;
					countList[counter].val = data.val;
					counter++;
				}
			}

			if (countList.length === 0) {return;}

			let tempPool = {};
			for (var res in game.resPool.resources) {
				tempPool[game.resPool.resources[res].name] = game.resPool.resources[res].value;
			}
			for (var res in tempPool) {tempPool[res] = this.craftManager.getValueAvailable(res, true);}

			var k = 0;
			while (countList.length !== 0) {
				bulkLoop:
				for (var j = 0; j < countList.length; j++) {
					var build = countList[j];
					data = metaData[build.id];
					var prices = build.prices;
					var priceRatio = build.priceRatio;
					source = build.source;
					for (var p = 0; p < prices.length; p++) {
						var spaceOil = false;
						var cryoKarma = false;
						if (source && source === 'space' && prices[p].name === 'oil') {
							spaceOil = true;
							var oilPrice = prices[p].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
						} else if (build.id === 'cryochambers' && prices[p].name === 'karma') {
							cryoKarma = true;
							var karmaPrice = prices[p].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
						}

						if (spaceOil) {
							var nextPriceCheck = (tempPool['oil'] < oilPrice * Math.pow(1.05, k + data.val));
						} else if (cryoKarma) {
							var nextPriceCheck = (tempPool['karma'] < karmaPrice * Math.pow(priceRatio, k + data.val));
						} else {
							let price = prices[p].val * Math.pow(priceRatio, k + data.val);
							var nextPriceCheck = tempPool[prices[p].name] < price;
						}
						if (nextPriceCheck || (data.noStackable && (k + data.val) >= 1) || (build.id === 'ressourceRetrieval' && k + data.val >= 100)
						  || (build.id === 'cryochambers' && game.bld.getBuildingExt('chronosphere').meta.val <= k + data.val)) {
							for (var p2 = 0; p2 < p; p2++) {
								if (source && source === 'space' && prices[p2].name === 'oil') {
									var oilPriceRefund = prices[p2].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
									tempPool['oil'] += oilPriceRefund * Math.pow(1.05, k + data.val);
								} else if (build.id === 'cryochambers' && prices[p2].name === 'karma') {
									var karmaPriceRefund = prices[p2].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
									tempPool['karma'] += karmaPriceRefund * Math.pow(priceRatio, k + data.val);
								} else {
									var refundVal = prices[p2].val * Math.pow(priceRatio, k + data.val);
									tempPool[prices[p2].name] += (prices[p2].name === 'void') ? Math.ceil(refundVal) : refundVal;
								}
							}
							if (build.limit != -1) {
								build.count = Math.max(0, Math.min(build.count, (build.limit - build.val)));
							}
							bList[countList[j].spot].count = countList[j].count;
							countList.splice(j, 1);
							j--;
							continue bulkLoop;
						}
						if (spaceOil) {
							tempPool['oil'] -= oilPrice * Math.pow(1.05, k + data.val);
						} else if (cryoKarma) {
							tempPool['karma'] -= karmaPrice * Math.pow(priceRatio, k + data.val);
						} else {
							var pVal = prices[p].val * Math.pow(priceRatio, k + data.val);
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
			var meta = model.metadata;
			var counter = 0;
			if (typeof meta.limitBuild == "number" && meta.limitBuild - meta.val < amount) {
				amount = meta.limitBuild - meta.val;
			}
			if (!model.enabled ) {button.controller.updateEnabled(model);}
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
					var liberty = game.science.getPolicy("liberty");
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
					cacheUpgrades(meta);
					//game.upgrade(meta.upgrades);
				}
			}
			return counter;
		},
		getPriceRatio: function (data, source) {
			var ratio = (!data.stages) ? data.priceRatio : (data.priceRatio || data.stages[data.stage].priceRatio);

			var ratioDiff = 0;
			if (source && source === 'bonfire') {
				ratioDiff = game.getEffect(data.name + "PriceRatio") +
					game.getEffect("priceRatio") +
					game.getEffect("mapPriceReduction");

				ratioDiff = game.getLimitedDR(ratioDiff, ratio - 1);
			}
			return ratio + ratioDiff;
		},
		singleBuildPossible: function (data, prices, priceRatio, source) {
			var pricesDiscount = game.getLimitedDR(game.getEffect(data.name + "CostReduction"), 1);
			var priceModifier = 1 - pricesDiscount;
			for (var price in prices) {
				var resPriceDiscount = game.getLimitedDR(game.getEffect(prices[price].name + "CostReduction"), 1);
				var resPriceModifier = 1 - resPriceDiscount;
				var rightPrice = prices[price].val * priceModifier * resPriceModifier;
				if (source && source === 'space' && prices[price].name === 'oil') {
					var oilPrice = rightPrice * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
					if (this.craftManager.getValueAvailable('oil', true) < oilPrice * Math.pow(1.05, data.val)) {return false;}
				} else if (data.name === 'cryochambers' && prices[price].name === 'karma') {
					var karmaPrice = rightPrice * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
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

	var TradeManager = function () {
		this.craftManager = new CraftManager();
		this.manager = new TabManager('Trade');
	};

	TradeManager.prototype = {
		craftManager: undefined,
		manager: undefined,
		trade: function (name, amount) {

			if (!name || 1 > amount) {warning('KS trade checks are not functioning properly, please create an issue on the github page.');}

			var race = this.getRace(name);

			var button = this.getTradeButton(race.name);

			if (!button.model.enabled || !options.auto.trade.items[name].enabled) {warning('KS trade checks are not functioning properly, please create an issue on the github page.');}

			let leader = (options.auto.cache.trait['merchant']) ? '商人小猫与' : '小猫与';
			game.diplomacy.tradeMultiple(race, amount);
			game.stats.getStat("totalClicks").val += 1;
			storeForSummary(leader + ' ' + race.title, amount, 'trade');
			iactivity('act.trade', [amount, leader + ucfirst(race.title)], 'ks-trade');
		},
		getProfitability: function (name) {
			var race = this.getRace(name);

			var materials = this.getMaterials(name);
			var cost = 0;
			if (!game.workshop.get('geodesy').researched && this.craftManager.getResource('gold').perTickCached > 9) {return true;}
			for (var mat in materials) {
				if (mat === 'ivory') {continue;}
				var tick = this.craftManager.getTickVal(this.craftManager.getResource(mat));
				if (tick <= 0) {return false;}
				cost += materials[mat] / tick;
			}

			var output = this.getAverageTrade(race);
			var profit = 0;
			for (var prod in output) {
				var res = this.craftManager.getResource(prod);
				var tick = this.craftManager.getTickVal(res);
				if (tick === 'ignore') {continue;}
				if (tick <= 0) {return true;}
				profit += (res.maxValue > 0) ? Math.min(output[prod], Math.max(res.maxValue - res.value, 0)) / tick : output[prod] / tick;
			}
			let prof = true;
			if (name === 'nagas') {
				if (!resMap['ship'].value && race.embassyLevel < 10 && !game.ironWill) {prof = false;}
				if (resMap['concrate'].value > 500 || (!resMap['concrate'].unlocked && !game.ironWill)) {prof = false;}
			}
			if (name === 'griffins') {
				if (!resMap['ship'].value && race.embassyLevel < 10 && game.prestige.getPerk('renaissance').researched) {prof = false;}
				if (resMap['ship'].value && game.calendar.season !== 2 && (resMap['ship'].value > 200 || game.getEffect("productionRatio"))) {prof = false;}
			}
			if (name === 'zebras') {
				prof = (!resMap['spice'].value && game.calendar.festivalDays && game.prestige.getPerk("numeromancy").researched) ? true : prof;
				prof = prof && game.getEffect("standingRatio") > 0.1;
			}
			return (cost <= profit) && prof;
		},
		getAverageTrade: function (race) {
			// standingRatio
			var standRat = game.getEffect("standingRatio") + game.diplomacy.calculateStandingFromPolicies(race.name, game);
			// raceRatio
			var rRatio = 1 + race.energy * 0.02;
			// tradeRatio
			var tRatio = 1 + game.diplomacy.getTradeRatio() + game.diplomacy.calculateTradeBonusFromPolicies(race.name, game) + game.challenges.getChallenge("pacifism").getTradeBonusEffect(game);
			var failedRat = (race.standing < 0) ? (race.standing + standRat) : 0;
			var successRat = (failedRat < 0) ? (1 + failedRat) : 1;
			var bonusRat = (race.standing > 0) ? Math.min(race.standing + standRat / 2, 1) : 0;

			var output = {};
			for (var item of race.sells) {
				//var item = race.sells[s];
				if (!this.isValidTrade(item, race)) {continue;}
				//var resource = this.craftManager.getResource(item.name);
				var mean = 0;
				var tradeChance = (item.minLevel) ? item.chance * (1 + game.getLimitedDR(0.01 * race.embassyLevel, 0.75)) : item.chance;
				var sRatio = (!item.seasons) ? 1 : 1 + item.seasons[game.calendar.getCurSeason().name];
				var normBought = (successRat - bonusRat) * Math.min(tradeChance, 1);
				var normBonus = bonusRat * Math.min(tradeChance, 1);
				mean = (normBought + 1.25 * normBonus) * item.value * rRatio * sRatio * tRatio;
				output[item.name] = mean;
			}
			if (race.name === "zebras") {
				var shipCount = game.resPool.get("ship").value;
				var zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
				var titanProb = Math.min(0.15 + shipCount * 0.0035, 1);
				//let modifier = (shipCount < 230) ? Math.log(shipCount) * shipCount * 0.00084 - 0.01 : 1;
				output["titanium"] = (1.5 + shipCount * 0.03) * (1 + zebraRelationModifierTitanium) * titanProb * successRat;
				if (game.religion.getSolarRevolutionRatio() < 1 && shipCount < 40 && game.getEffect('titaniumPerTickAutoprod') < 0.002) {output["titanium"] = 0;}
			}

			var spiceChance = (race.embassyPrices) ? 0.35 * (1 + 0.01 * race.embassyLevel) : 0.35;
			var spiceTradeAmount = successRat * Math.min(spiceChance, 1);
			output['spice'] = 25 * spiceTradeAmount + 50 * spiceTradeAmount * tRatio / 2;

			output['blueprint'] = 0.1 * successRat;

			return output;
		},
		isValidTrade: function (item, race) {
			return (!(item.minLevel && race.embassyLevel < item.minLevel)
			&& (game.resPool.get(item.name).unlocked || item.name === 'titanium' || item.name === 'uranium' || race.name === 'leviathans'));
		},
		getLowestTradeAmount: function (name, limited, trigConditions) {
			var amount = undefined;
			var highestCapacity = undefined;
			var materials = this.getMaterials(name);
			var race = this.getRace(name);

			for (var i in materials) {
				if (i === "manpower") {
					var manpowerValue = Math.max(this.craftManager.getValueAvailable(i, true) - 100, 0);
					var total = manpowerValue / materials[i];
				} else {
					var total = this.craftManager.getValueAvailable(i, !limited, options.auto.trade.trigger) / materials[i];
				}

				amount = (amount === undefined || total < amount) ? total : amount;
			}

			amount = Math.floor(amount);

			if (amount === 0) {return 0;}

			if (race === null || options.auto.trade.items[name].allowcapped) {return amount;}

			// Loop through the items obtained by the race, and determine
			// which good has the most space left. Once we've determined this,
			// reduce the amount by this capacity. This ensures that we continue to trade
			// as long as at least one resource has capacity, and we never over-trade.

			var tradeOutput = this.getAverageTrade(race);
			for (var s in race.sells) {
				var item = race.sells[s];
				var resource = this.craftManager.getResource(item.name);
				var max = 0;

				// No need to process resources that don't cap
				if (!resource.maxValue) {continue;}

				max = tradeOutput[item.name];

				var capacity = Math.max((resource.maxValue - resource.value) / max, 0);

				highestCapacity = (capacity < highestCapacity) ? highestCapacity : capacity;
			}

			// We must take the ceiling of capacity so that we will trade as long
			// as there is any room, even if it doesn't have exact space. Otherwise
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
			var materials = {
				manpower: modifier * (50 - game.getEffect("tradeCatpowerDiscount")),
				gold: modifier * (15 - game.getEffect("tradeGoldDiscount"))
			};

			if (name === undefined) {return materials;}

			var prices = this.getRace(name).buys;

			for (var i in prices) {
				var price = prices[i];

				materials[price.name] = price.val;
			}

			return materials;
		},
		getRace: function (name) {
			if (name === undefined) {return null;} else {return game.diplomacy.get(name);}
		},
		getTradeButton: function (race) {
			for (var i in this.manager.tab.racePanels) {
				var panel = this.manager.tab.racePanels[i];

				if (panel.race.name === race) {return panel.tradeBtn;}
			}
		},
		singleTradePossible: function (name) {
			var materials = this.getMaterials(name);
			for (var mat in materials) {
				if (this.craftManager.getValueAvailable(mat, true) < materials[mat]) {return false;}
			}
			return true;
		}
	};

	// Cache Manager
	// ===============

	var CacheManager = function () {};

	CacheManager.prototype = {
		pushToCache: function (data) {
			var cache = options.auto.cache.cache;
			var cacheSum = options.auto.cache.cacheSum;
			var materials = data['materials'];
			var currentTick = game.timer.ticksTotal;

			cache.push(data);
			for (var mat in materials) {
				if (!cacheSum[mat]) {cacheSum[mat] = 0;}
				cacheSum[mat] += materials[mat];
			}

			for (var i = 0; i < cache.length; i++) {
				var oldData = cache[i];
				if (cache.length > 999) {
					var oldMaterials = oldData['materials'];
					for (var mat in oldMaterials) {
						if (!cacheSum[mat]) {cacheSum[mat] = 0;}
						cacheSum[mat] -= oldMaterials[mat];
					}
					cache.shift();
					i--;
				} else {
					return;
				}
			}
		},
		getResValue: function (res) {
			var cache = options.auto.cache.cache;
			if (cache.length === 0) {return 0;}
			var cacheSum = options.auto.cache.cacheSum;
			if (!cacheSum[res]) {return 0;}
			var currentTick = game.timer.ticksTotal;
			var startingTick = cache[0].timeStamp;

			return (cacheSum[res] / (currentTick - startingTick));
		}
	};

	// ==============================
	// Configure overall page display
	// ==============================

	var right = $('#rightColumn');

	var addRule = function (rule) {
		var sheets = document.styleSheets;
		sheets[0].insertRule(rule, 0);
	};

	var defaultSelector = 'body[data-ks-style]:not(.scheme_sleek)';

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
		+ 'width: 48%;'
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

	// Local Storage
	// =============

	var kittenStorageVersion = 3;

	var kittenStorage = {
		version: kittenStorageVersion,
		toggles: {},
		items: {},
		resources: {},
		triggers: {},
		reset: {
			reset: false,
			times: 0,
			paragonLastTime: 0,
			pargonTotal: 0,
			karmaLastTime: 0,
			karmaTotal: 0
		},
		policies: []
	};

	var initializeKittenStorage = function (see) {
		$("#items-list-build, #items-list-craft, #items-list-trade, #items-list-options, #items-list-filter, #items-list-distribute").find("input[id^='toggle-']").each(function () {
			let dom = $(this);
			if ($(this).attr("type") !== 'radio') {
				kittenStorage.items[dom.attr("id")] = dom.prop("checked");
			}
		});
		kittenStorage.items['toggle-leaderJob-farmer'] = true;
		kittenStorage.items['toggle-leaderTrait-manager'] = true;
		saveToKittenStorage(see);
	};

	var saveToKittenStorage = function (session) {
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

		if (session) {sessionStorage.setItem('cbc',JSON.stringify(kittenStorage));}
		else {localStorage['cbc.kitten-scientists'] = JSON.stringify(kittenStorage);}
	};

	var loadFromKittenStorage = function () {
		var saved = JSON.parse(localStorage['cbc.kitten-scientists'] || 'null');
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
				pargonTotal: 0,
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
				for (var toggle in saved.toggles) {
					if (toggle !== 'engine' && options.auto[toggle]) {
						options.auto[toggle].enabled = !!saved.toggles[toggle];
						el = $('#toggle-' + toggle);
						el.prop('checked', options.auto[toggle].enabled);
					}
				}
			}

			for (var item in kittenStorage.items) {
				var value = kittenStorage.items[item];
				el = $('#' + item);
				var option = el.data('option');
				var name = item.split('-');

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
					var type = name[2];
					var itemName = name[3];
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
					} else if (name[1] === 'leaderJob') {
						option[name[1]] = name[2];
					} else if (name[1] === 'leaderTrait') {
						option[name[1]] = name[2];
					} else {
						option[name[2]] = value;
					}
				}
			}

			var resourcesList = $("#toggle-list-resources");
			var resetList = $("#toggle-reset-list-resources");
			for (var resource in kittenStorage.resources) {
				var res = kittenStorage.resources[resource];

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

	// Add options element
	// ===================

	var ucfirst = function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	var roundToTwo = function (n) {
		return +(Math.round(n + "e+2") + "e-2");
	};

	var setStockWarning = function(name, value, forReset = false) {
		// simplest way to ensure it doesn't stick around too often; always do
		// a remove first then re-add only if needed
		var path = forReset ? '#resource-reset-' + name : '#resource-' + name;
		$(path).removeClass("stockWarn");

		var maxValue = game.resPool.resources.filter(i => i.name == name)[0].maxValue;
		if ((value > maxValue && !(maxValue === 0)) || value === Infinity) {$(path).addClass("stockWarn");}
	};

	var setStockValue = function (name, value, forReset = false) {
		var n = Number(value);

		if (isNaN(n) || n < 0) {
			warning('ignoring non-numeric or invalid stock value ' + value);
			return;
		}

		if (!options.auto.resources[name]) {options.auto.resources[name] = {};}
		if (forReset) {
			var path = '#resource-reset-' + name + ' #stock-value-' + name;
			n = n < 0 ? Infinity : n;
			options.auto.resources[name].checkForReset = true;
			options.auto.resources[name].stockForReset = n;
		} else {
			var path = '#resource-' + name + ' #stock-value-' + name;
			options.auto.resources[name].enabled = true;
			options.auto.resources[name].stock = n;
		}
		$(path).text(i18n('resources.stock', [n === Infinity ? '∞' : game.getDisplayValueExt(n)]));

		setStockWarning(name, n, forReset);
	};

	var setConsumeRate = function (name, value) {
		var n = parseFloat(value);

		if (isNaN(n) || n < 0.0 || n > 1.0) {
			warning('ignoring non-numeric or invalid consume rate ' + value);
			return;
		}

		if (!options.auto.resources[name]) {options.auto.resources[name] = {};}
		options.auto.resources[name].consume = n;
		$('#consume-rate-' + name).text(i18n('resources.consume', [n.toFixed(2)]));
	};

	var removeResourceControl = function (name, forReset = false) {
		var opt = options.auto.resources[name];
		if (forReset) {opt.checkForReset = false;} else {opt.enabled = false;}

		if (!opt.enabled && !opt.checkForReset) {delete options.auto.resources[name];}
	};

	var addNewResourceOption = function (name, title, forReset = false) {
		title = title || game.resPool.get(name).title || ucfirst(name);
		var res = options.auto.resources[name];
		if (forReset && res && res.stockForReset) {var stock = res.stockForReset;} else if (!forReset && res && res.stock) {var stock = res.stock;} else {var stock = 0;}
		var consume = res && (res.consume !== undefined) ? res.consume : options.consume;

		var container = $('<div/>', {
			id: (forReset ? 'resource-reset-' : 'resource-') + name,
			css: {display: 'inline-block', width: '100%'},
		});

		var label = $('<div/>', {
			id: 'resource-label-' + name,
			text: title,
			css: {display: 'inline-block', width: '95px'},
		});

		var stock = $('<div/>', {
			id: 'stock-value-' + name,
			text: i18n('resources.stock', [stock === Infinity ? '∞' : game.getDisplayValueExt(stock)]),
			css: {cursor: 'pointer', display: 'inline-block', width: '80px'},
		});

		var consume = $('<div/>', {
			id: 'consume-rate-' + name,
			text: i18n('resources.consume', [consume.toFixed(2)]),
			css: {cursor: 'pointer', display: 'inline-block'},
		});

		var del = $('<div/>', {
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
				var value = window.prompt(i18n('resources.stock.set', [title]));
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
			var value = window.prompt(i18n('resources.consume.set', [title]));
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

	var getAvailableResourceOptions = function (forReset) {
		var items = [];
		var idPrefix = forReset ? '#resource-reset-' : '#resource-';

		for (var i in game.resPool.resources) {
			var res = game.resPool.resources[i];

			// Show only new resources that we don't have in the list and that are
			// visible. This helps cut down on total size.
			if (res.name && $(idPrefix + res.name).length === 0) {
				var item = $('<div/>', {
					id: 'resource-add-' + res.name,
					text: ucfirst(res.title ? res.title : res.name),
					css: {cursor: 'pointer',
						textShadow: '3px 3px 4px gray'},
				});

				// Wrapper function needed to make closure work
				(function (res, item, forReset) {
					item.on('click', function () {
						item.remove();
						if (!options.auto.resources[res.name]) {options.auto.resources[res.name] = {};}
						if (forReset) {
							options.auto.resources[res.name].checkForReset = true;
							options.auto.resources[res.name].stockForReset = Infinity;
							$('#toggle-reset-list-resources').append(addNewResourceOption(res.name, res.title, forReset));

						} else {
							options.auto.resources[res.name].enabled = true;
							options.auto.resources[res.name].stock = 0;
							options.auto.resources[res.name].consume = options.consume;
							$('#toggle-list-resources').append(addNewResourceOption(res.name, res.title, forReset));
						}
						saveToKittenStorage();
					});
				})(res, item, forReset);

				items.push(item);
			}
		}

		return items;
	};

	var getResourceOptions = function (forReset = false) {
		var list = $('<ul/>', {
			id: forReset ? 'toggle-reset-list-resources' : 'toggle-list-resources',
			css: {display: 'none', paddingLeft: '20px'}
		});

		var add = $('<div/>', {
			id: 'resources-add',
			text: i18n('resources.add'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				textShadow: '3px 3px 4px gray',
				borderBottom: '1px solid rgba(185, 185, 185, 0.7)' },
		});

		var clearunused = $('<div/>', {
			id: 'resources-clear-unused',
			text: i18n('resources.clear.unused'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray' },
		});

		clearunused.on('click', function () {
			for (var name in options.auto.resources) {
				// Only delete resources with unmodified values. Require manual
				// removal of resources with non-standard values.
				if (!options.auto.resources[name].stock &&
					options.auto.resources[name].consume === options.consume ||
					options.auto.resources[name].consume === undefined) {
					$('#resource-' + name).remove();
				}
			}
		});

		var allresources = $('<ul/>', {
			id: 'available-resources-list',
			css: {display: 'none', paddingLeft: '20px'}
		});

		(function (add, forReset) {
			add.on('click', function () {
				allresources.toggle();
				allresources.empty();
				allresources.append(getAvailableResourceOptions(forReset));
			});
		})(add, forReset);

		if (forReset) {list.append(add, allresources);} else {list.append(add, clearunused, allresources);}

		// Add all the current resources
		for (var name in options.auto.resources) {
			var res = options.auto.resources[name];
			if ((forReset && res.checkForReset) || (!forReset && res.enabled)) {list.append(addNewResourceOption(name, undefined, forReset));}
		}

		return list;
	};

	var getOptionHead = function (toggleName) {
		var list = $('<ul/>', {
			id: 'items-list-' + toggleName,
			css: {display: 'none', paddingLeft: '20px'}
		});

		var disableall = $('<div/>', {
			id: 'toggle-all-items-' + toggleName,
			text: i18n('ui.disable.all'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				textShadow: '3px 3px 4px gray',
				marginRight: '8px'}
		});

		disableall.on('click', function () {
			// can't use find as we only want one layer of checkboxes
			var items = list.children().children(':checkbox');
			items.prop('checked', false);
			items.change();
			list.children().children(':checkbox').change();
		});

		list.append(disableall);

		var enableall = $('<div/>', {
			id: 'toggle-all-items-' + toggleName,
			text: i18n('ui.enable.all'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				textShadow: '3px 3px 4px gray'}
		});

		enableall.on('click', function () {
			// can't use find as we only want one layer of checkboxes
			var items = list.children().children(':checkbox');
			items.prop('checked', true);
			items.change();
			list.children().children(':checkbox').change();
		});

		list.append(enableall);
		return list;
	};

	var getAdditionOptions = function () {
		var toggleName = 'faith-addition';
		var list = getOptionHead(toggleName);

		var addi = options.auto.faith.addition;
		for (var itemName in addi) {
			var node = getOption(itemName, addi[itemName]);

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

				var triggerButton = $('<div/>', {
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
							var value;
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
							var value;
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

	var getToggle = function (toggleName) {
		var itext = ucfirst(i18n('ui.' + toggleName));

		var auto = options.auto[toggleName];
		var element = $('<li/>', {id: 'ks-' + toggleName});

		var label = $('<label/>', {
			'for': 'toggle-' + toggleName,
			text: itext
		});

		var input = $('<input/>', {
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

			var toggle = $('<div/>', {
				css: {display: 'inline-block', float: 'right'}
			});

			var button = $('<div/>', {
				id: 'toggle-items-' + toggleName,
				text: i18n('ui.items'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			});

			element.append(button);

			var list = getOptionHead(toggleName);

			// merge unicorn to faith
			if (toggleName === 'faith') {
				for (var itemName in options.auto.unicorn.items) {list.append(getOption(itemName, options.auto.unicorn.items[itemName]));}
			}

			// fill out list with toggle items
			for (var itemName in auto.items) {
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
			var triggerButton = $('<div/>', {
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
				var value;
				engine.stop(false);
				if (toggleName === 'faith') {
					value = window.prompt(i18n('ui.trigger.set', [itext + "(" + $I("resources.faith.title") + ")"]), auto.trigger);
				} else if (toggleName === 'trade') {
					value = window.prompt(i18n('ui.trigger.set', [itext + " 的触发值\n需同时满足 种族触发资源 和 " + $I("resources.gold.title") + " 的"] ), auto.trigger);
				} else {
					value = window.prompt(i18n('ui.trigger.set', [itext]), auto.trigger);
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
			// Add resource controls for crafting, sort of a hack
			var resources = $('<div/>', {
				id: 'toggle-resource-controls',
				text: i18n('ui.craft.resources'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'},
			});

			var resourcesList = getResourceOptions();

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
			// Add additional controls for faith, sort of a hack again
			var addition = $('<div/>', {
				id: 'toggle-addition-controls',
				text: i18n('ui.faith.addtion'),
				title: "太阳教团的自动化项目",
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '2px 2px 5px gray'
					},
			});

			var additionList = getAdditionOptions();

			button.on('click', function () {
				additionList.toggle(false);
			});

			addition.on('click', function () {
				list.toggle(false);
				additionList.toggle();
			});

			element.append(addition);

			// disable auto best unicorn building when unicorn building was disable
			for (var unicornName in options.auto.unicorn.items) {
				var ub = list.children().children('#toggle-' + unicornName);
				ub.on('change', function() {
					if (!$(event.target).is(':checked')) {
						var b = $('#toggle-bestUnicornBuilding');
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

	var getTradeOption = function (name, option) {
		var iname = ucfirst(i18n('$trade.race.' + name));

		var element = getOption(name, option, iname);
		element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

		//Limited Trading
		var label = $('<label/>', {
			'for': 'toggle-limited-' + name,
			title: i18n('trade.limited', [iname]),
			text: i18n('ui.limit')
		});

		var input = $('<input/>', {
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
				let require = (option.require === false) ? '资源满足黄金的触发条件就会' : '需同时满足资源黄金和' + game.resPool.get(option.require).title + '的触发条件才';
				imessage('trade.unlimited', [iname, require]);
			}
			kittenStorage.items[input.attr('id')] = option.limited;
			saveToKittenStorage();
		});

		element.append(input, label);
		//Limited Trading End

		var button = $('<div/>', {
			id: 'toggle-seasons-' + name,
			text: i18n('trade.seasons'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'},
		});

		var list = $('<ul/>', {
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

	var getSeason = function (name, season, option) {
		var iname = ucfirst(i18n('$trade.race.' + name));
		var iseason = ucfirst(i18n('$calendar.season.' + season));

		var element = $('<li/>');

		var label = $('<label/>', {
			'for': 'toggle-' + name + '-' + season,
			text: ucfirst(iseason)
		});

		var input = $('<input/>', {
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

	var getSeasonForTimeSkip = function (season, option) {
		var iseason = ucfirst(i18n('$calendar.season.' + season));

		var element = $('<li/>');

		var label = $('<label/>', {
			'for': 'toggle-timeSkip-' + season,
			text: ucfirst(iseason)
		});

		var input = $('<input/>', {
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

	var getOption = function (name, option, iname) {
		var element = $('<li/>');
		var elementLabel = iname || option.label || ucfirst(name);
		var titleName = i18n('ui.trigger.resource') + ": " + ((game.resPool.get(option.require).title) ? game.resPool.get(option.require).title : i18n('ui.none'));
		if (option.require === undefined) {
			titleName = null;
		}

		var label = $('<label/>', {
			'for': 'toggle-' + name,
			text: elementLabel,
			title: titleName,
			css: {display: 'inline-block', minWidth: '80px'}
		});

		var input = $('<input/>', {
			id: 'toggle-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.enabled) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.enabled) {
				option.enabled = true;
				if (option.filter) {
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
				if (option.filter) {
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

	var getPoliciesOptions = function (forReset) {
		var items = [];

		for (var i in options.policies) {
			var policy = options.policies[i];
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

	var getUpgradeOption = function (name, option) {
		var iname = i18n('ui.upgrade.' + name);
		var element = getOption(name, option, iname);

		if (name === 'policies') {
			var list = $('<ul/>', {
				id: 'items-list-policies',
				css: {display: 'none', paddingLeft: '20px'}
			});

			var loadButton = $('<div/>', {
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

			var showButton = $('<div/>', {
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
				var plist = [];
				for (var i in game.science.policies) {
					var policy = game.science.policies[i];
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
			var triggerButton = $('<div/>', {
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
				var value;
				engine.stop(false);
				if (name === 'missions'){value = window.prompt(i18n('ui.trigger.missions.set'), option.subTrigger);} else{value = window.prompt(i18n('ui.trigger.set'), option.subTrigger);}
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
			var LimitedLabel = $('<label/>', {
				'for': 'toggle-limited-' + name,
				text: i18n('ui.upgradesLimit')
			});

			var LimitedInput = $('<input/>', {
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

	var getLimitedOption = function (name, option, iname) {
		var element = $('<li/>');
		var elementLabel = iname || option.label || ucfirst(name);
		var titleName = (game.resPool.get(option.require).title) ? game.resPool.get(option.require).title : i18n('ui.none');

		var label = $('<label/>', {
			'for': 'toggle-' + name,
			text: elementLabel,
			title: i18n('ui.trigger.resource') + ": " + titleName,
			css: {display: 'inline-block', minWidth: '80px'}
		});

		var input = $('<input/>', {
			id: 'toggle-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.enabled) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.enabled) {
				option.enabled = true;
				if (option.filter) {
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
				if (option.filter) {
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

		var maxButton = $('<div/>', {
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
			var value;
			engine.stop(false);
			value = window.prompt(i18n('ui.max.set', [option.label]), option.max);
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

	var getCraftOption = function (name, option) {
		var iname = ucfirst(i18n('$resources.' + name + '.title'));
		if (name === "ship") {
			iname = ucfirst(i18n('$workshop.crafts.' + name + '.label'));
		}

		var element = getOption(name, option, iname);
		if (name === 'parchment') {return element;}

		var label = $('<label/>', {
			'for': 'toggle-limited-' + name,
			title: i18n("craft.limitedTitle"),
			text: i18n('ui.craftLimit')
		});

		var input = $('<input/>', {
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

	var getCycle = function (index, option) {
		var cycle = game.calendar.cycles[index];


		var element = $('<li/>');

		var label = $('<label/>', {
			'for': 'toggle-timeSkip-' + index,
			text: cycle.title
		});

		var input = $('<input/>', {
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

	var getResetOption = function (name, type, option) {
		var element = $('<li/>');
		var elementLabel = option.label;

		var label = $('<label/>', {
			'for': 'toggle-reset-' + type + '-' + name,
			text: elementLabel,
			css: {display: 'inline-block', minWidth: '80px'}
		});

		var input = $('<input/>', {
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

		var minButton = $('<div/>', {
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
			value = window.prompt(i18n('reset.check.trigger.set', [option.label]), option.triggerForReset);

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

	var getTimeCtrlOption = function (name, option) {
		var element = getOption(name, option);

		if (name === 'timeSkip') {
			var triggerButton = $('<div/>', {
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
				var value;
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

			var maximunButton = $('<div/>', {
				id: 'set-timeSkip-maximum',
				text: i18n('ui.maximum'),
				title: option.max,
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);
			maximunButton.on('click', function () {
				var value;
				engine.stop(false);
				value = window.prompt(i18n('ui.max.set', ["每次燃烧时间水晶"]), option.maximum);
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					option.maximum = parseFloat(value);
					kittenStorage.items[maximunButton.attr('id')] = option.maximum;
					saveToKittenStorage();
					maximunButton[0].title = option.maximum;
				}
			});

			var cyclesButton = $('<div/>', {
				id: 'toggle-cycle-' + name,
				text: i18n('ui.cycles'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'},
			});

			var cyclesList = $('<ul/>', {
				id: 'cycles-list-' + name,
				css: {display: 'none', paddingLeft: '20px'}
			});

			for (var i in game.calendar.cycles) {cyclesList.append(getCycle(i, option));}


			var seasonsButton = $('<div/>', {
				id: 'toggle-seasons-' + name,
				text: i18n('trade.seasons'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'},
			});


			var seasonsList = $('<ul/>', {
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

			element.append(cyclesButton, seasonsButton, maximunButton, triggerButton, cyclesList, seasonsList);

		} else if (name === 'reset') {

			var resetBuildList     = getOptionHead('reset-build');
			var resetSpaceList     = getOptionHead('reset-space');
			var resetResourcesList = getResourceOptions(true);
			var resetReligionList  = getOptionHead('reset-religion');
			var resetTimeList      = getOptionHead('reset-time');

			for (var item in options.auto.build.items)              {resetBuildList.append(getResetOption(item, 'build', options.auto.build.items[item]));}
			for (var item in options.auto.space.items)              {resetSpaceList.append(getResetOption(item, 'space', options.auto.space.items[item]));}
			for (var item in options.auto.unicorn.items)            {resetReligionList.append(getResetOption(item, 'unicorn', options.auto.unicorn.items[item]));}
			for (var item in options.auto.faith.items)              {resetReligionList.append(getResetOption(item, 'faith', options.auto.faith.items[item]));}
			for (var item in options.auto.time.items)               {resetTimeList.append(getResetOption(item, 'time', options.auto.time.items[item]));}

			var buildButton = $('<div/>', {id: 'toggle-reset-build', text: i18n('ui.build'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			var spaceButton = $('<div/>', {id: 'toggle-reset-space', text: i18n('ui.space'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			var resourcesButton = $('<div/>', {id: 'toggle-reset-resources', text: i18n('ui.craft.resources'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			var religionButton = $('<div/>', {id: 'toggle-reset-religion', text: i18n('ui.faith'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			var timeButton = $('<div/>', {id: 'toggle-reset-time', text: i18n('ui.time'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});

			buildButton.on('click', function(){resetBuildList.toggle(); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
			spaceButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
			resourcesButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(); resetReligionList.toggle(false); resetTimeList.toggle(false);});
			religionButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(); resetTimeList.toggle(false);});
			timeButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle();});

			element.append(buildButton, spaceButton, resourcesButton, religionButton, timeButton,
				resetBuildList, resetSpaceList, resetResourcesList, resetReligionList, resetTimeList);
		} else {
			var triggerButton = $('<div/>', {
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
				var value;
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

	var getOptionsOption = function (name, option) {
		var element = getOption(name, option);

		// hack for style.
		// If there are more UI options, split it to "getUIOption"
		if (name === 'style') {
			var input = element.children('input');
			input.unbind('change');
			input.on('change', function (e) {
				option.enabled = input.prop('checked');
				kittenStorage.items[input.attr('id')] = option.enabled;
				if (e.isTrusted) {saveToKittenStorage();}
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
			var input = element.children('input');
			input.on('click', function () {
				var a = confirm(i18n('ui.trigger.useWorkers.alert'));
				if (a == true && !option.enabled) {
					engine.stop();
					option.enabled = true;
					kittenStorage.items[input.attr('id')] = option.enabled;
					if (options.auto.engine.enabled) {
						engine.start();
					}
				} else if (a == true && option.enabled) {
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
			var input = element.children('input');
			input.on('click', function () {
				engine.stop(false);
				var confirm = window.confirm("点击确认会导出珂学家的配置.txt文件");
				if (confirm) {
					var $link = $("#download-link");
					var data = JSON.stringify(window.localStorage['cbc.kitten-scientists']);
					var b = game.compressLZData(data, false);
					var blob = new Blob([b], {type: "text/plain"});
					$link.attr("href", window.URL.createObjectURL(blob));
					var filename = "小猫珂学家配置" + (game.stats.getStat("totalResets").val + 1) + "周目";
					$link.attr("download", filename + ".txt");
					$link.get(0).dispatchEvent(new MouseEvent("click"));
				}
				if (options.auto.engine.enabled) {
					engine.start(false);
				}
			});

			var loadKS = $('<div/>', {
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
				var b = window.prompt('窗口内填入后你需要导入的珂学家配置，确认后会导入配置', '');
				if (options.auto.engine.enabled) {
					engine.start(false);
				}
				if (b && b.length >= 10) {
					if (b.charAt(0) !== "{") {
						var ksSave = JSON.parse(LZString.decompressFromBase64(b));
					}
					window.localStorage['cbc.kitten-scientists'] = ksSave;
					loadFromKittenStorage();
				}
			});

			var ressetKS = $('<div/>', {
				id: 'ressetKS',
				text: "配置初始化",
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);

			ressetKS.on('click', function () {
				if (confirm('确定要初始化珂学家配置吗，点击确认后初始化珂学家配置(有可能会刷新页面)')){
					engine.stop(false);
					let cbc = sessionStorage.getItem('cbc');
					delete localStorage['cbc.kitten-scientists'];
					if (cbc) {
						window.localStorage['cbc.kitten-scientists'] = cbc;
						loadFromKittenStorage();
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
			var input = element.children('input');
			input.unbind('change');
			input.on('change', function (e) {
				option.enabled = input.prop('checked');
				kittenStorage.items[input.attr('id')] = option.enabled;
				if (e.isTrusted) {saveToKittenStorage();}
				var style = document.getElementById('ks-donate').style;
				if (!option.enabled) {
					style.display = 'none';
				} else {
					style.display = 'block';
				}
				style = null;
			});
		}

		if (name === 'wiki') {
			var input = element.children('input');
			input.on('click', function () {
				var tempwindow = window.open();
				tempwindow.location = 'https://petercheney.gitee.io/baike/?file=004-%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7/02-%E5%B0%8F%E7%8C%AB%E7%A7%91%E5%AD%A6%E5%AE%B6';
				printoutput(['如果还有问题可以在猫国群询问，有BUG或意见可以联系Cheney。默认配置即推荐配置：文艺复兴玄学下默认配置能2小时冲出轨道。','ks-default', options.activitycolor]);
			});
		}

		if (option.subTrigger !== undefined) {
			var triggerButton = $('<div/>', {
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
				var value;
				engine.stop(false);
				if (name === 'crypto') {
					value = window.prompt(i18n('ui.trigger.crypto.set', [option.label]), option.subTrigger);
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

	var getDistributeOption = function (name, option) {
		if (name === "leader") {return getLeader(name, option);}
		var iname = ucfirst(i18n('$village.job.' + name));

		var element = getOption(name, option, iname);
		element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

		//Limited Distribution
		var label = $('<label/>', {
			'for': 'toggle-limited-' + name,
			text: i18n('ui.limit')
		});

		var input = $('<input/>', {
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

		var maxButton = $('<div/>', {
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
				var value;
				engine.stop(false);
				value = window.prompt(i18n('ui.max.set', [iname]), option.max);
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

	var getLeader = function (name, option) {
		var iname = ucfirst(i18n('distribute.makeLeader'));
		var element = getOption(name, option, iname);
		element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

		var traitList = $('<ul/>', {
			id: 'items-list-traits',
			css: {display: 'none', paddingLeft: '20px'}
		});

		var traitShowButton = $('<div/>', {
			id: 'toggle-leaderTrait' + name,
			text: i18n('$village.trait.filter.all'),
			css: {
				cursor:'pointer',
				display:'inline-block',
				float:'right',
				paddingRight:'5px',
				textShadow:'3px 3px 4px gray'}
		});

		for (var i in com.nuclearunicorn.game.village.Kitten().traits){
			traitList.append(getLeaderTrait(i, option));
		}

		traitShowButton.on('click', function () {
			jobList.toggle(false);
			traitList.toggle();
		});

		var jobList = $('<ul/>', {
			id: 'items-list-jobs',
			css: {display: 'none', paddingLeft: '20px'}
		});

		var jobShowButton = $('<div/>', {
			id: 'toggle-leaderJob' + name,
			text: i18n('$village.panel.job'),
			css: {
				cursor:'pointer',
				display:'inline-block',
				float:'right',
				paddingRight:'5px',
				textShadow:'3px 3px 4px gray'}
		});

		for (var i in game.village.jobs){
			jobList.append(getLeaderJob(i, option));
		}

		jobShowButton.on('click', function () {
			traitList.toggle(false);
			jobList.toggle();
		});

		element.append(traitShowButton, jobShowButton, traitList, jobList);

		return element;
	};

	var getLeaderJob = function (index, option) {
		var job = game.village.jobs[index];

		var element = $('<li/>');

		var label = ($('<label/>', {
			'for': 'toggle-leaderJob-' + job.name,
			text: job.title,
			css: {cursor: 'pointer',
				textShadow: '3px 3px 4px gray'}
		}));

		var input = $('<input/>', {
			id: 'toggle-leaderJob-' + job.name,
			name: 'leaderJob',
			value: job.name,
			type: 'radio'
		}).data('option', option);

		if (input.prop("value") === option.leaderJob) {
			input.prop("checked", true);
		}

		element.on('mouseup', function () {
			var lastJobName = $("input[name='leaderJob']:checked").val();
			delete kittenStorage.items['toggle-leaderJob-' + lastJobName];
		});

		input.on('change', function () {
			imessage('distribute.leaderJob', [job.title]);
			option.leaderJob = $("input[name='leaderJob']:checked").val();
			kittenStorage.items['toggle-leaderJob-' + option.leaderJob] = true;
			saveToKittenStorage();
		});
		element.append(input, label);

		return element;
	};

	var getLeaderTrait = function (index, option) {
		var trait = com.nuclearunicorn.game.village.Kitten().traits[index];

		var element = $('<li/>');

		var label = ($('<label/>', {
			'for': 'toggle-leaderTrait-' + trait.name,
			text: trait.title,
			css: {cursor: 'pointer',
				textShadow: '3px 3px 4px gray'}
		}));

		var input = $('<input/>', {
			id: 'toggle-leaderTrait-' + trait.name,
			name: 'leaderTrait',
			value: trait.name,
			type: 'radio'
		}).data('option', option);

		if (input.prop("value") === option.leaderTrait) {
			input.prop("checked", true);
		}

		element.on('mouseup', function () {
			var lastTraitName = $("input[name='leaderTrait']:checked").val();
			delete kittenStorage.items['toggle-leaderTrait-' + lastTraitName];
		});

		input.on('change', function () {
			imessage('distribute.leaderTrait', [trait.title]);
			option.leaderTrait = $(this).val();
			kittenStorage.items['toggle-leaderTrait-' + option.leaderTrait] = true;
			saveToKittenStorage();
		});
		element.append(input, label);

		return element;
	};

	// Grab button labels for religion options
	var religionManager = new ReligionManager();
	for (var buildOption in options.auto.faith.items) {
		var buildItem = options.auto.faith.items[buildOption];
		var build = religionManager.getBuild(buildItem.name || buildOption, buildItem.variant);
		if (build) {
			options.auto.faith.items[buildOption].label = build.label;
		}
	}

	// Grab button labels for time options
	var timeManager = new TimeManager();
	for (var buildOption in options.auto.time.items) {
		var buildItem = options.auto.time.items[buildOption];
		var build = timeManager.getBuild(buildItem.name || buildOption, buildItem.variant);
		if (build) {
			options.auto.time.items[buildOption].label = build.label;
		}
	}

	// Grab button labels for build options
	var buildManager = new BuildManager();
	for (var buildOption in options.auto.build.items) {
		var buildItem = options.auto.build.items[buildOption];
		var build = buildManager.getBuild(buildItem.name || buildOption);
		if (build) {
			if ("stage" in buildItem) {
				options.auto.build.items[buildOption].label = build.meta.stages[buildItem.stage].label;
			} else {
				options.auto.build.items[buildOption].label = build.meta.label;
			}
		}
	}

	// Grab button labels for space options
	var spaceManager = new SpaceManager();
	for (var spaceOption in options.auto.space.items) {
		var build = spaceManager.getBuild(spaceOption);
		if (build) {
			// It's changed to label in 1.3.0.0
			var title = build.title ? build.title : build.label;
			options.auto.space.items[spaceOption].label = title;
		}
	}

	var optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px'}});
	var optionsListElement = $('<ul/>');
	//var optionsTitleElement = $('<div/>', {
	//	css: { bottomBorder: '1px solid gray', marginBottom: '5px' },
	//	text: kg_version
	//});
	//optionsElement.append(optionsTitleElement);

	optionsListElement.append(getToggle('engine'));
	optionsListElement.append(getToggle('build'));
	optionsListElement.append(getToggle('space'));
	optionsListElement.append(getToggle('craft'));
	optionsListElement.append(getToggle('upgrade'));
	optionsListElement.append(getToggle('trade'));
	optionsListElement.append(getToggle('faith'));
	optionsListElement.append(getToggle('time'));
	optionsListElement.append(getToggle('timeCtrl'));
	optionsListElement.append(getToggle('distribute'));
	optionsListElement.append(getToggle('options'));
	optionsListElement.append(getToggle('filter'));

	// add activity button
	// ===================

	var activitySummary = {
		other: {},
	};

	//建筑日志提示
	let msgSummary = (build, clean)=> {
		if (!clean) {
			if (!activitySummary.other['auto.' + build]) {
				activity(i18n('summary.auto.' + build));
				storeForSummary('auto.' + build);
			}
		} else {
			activitySummary.other['auto.' + build] = null;
		}
	};

	var resetActivitySummary = function () {
		activitySummary = {
			lastyear: game.calendar.year,
			lastday:  game.calendar.day,
			craft:    {},
			trade:    {},
			build:    {},
			other:    {}
		};
	};

	var storeForSummary = function (name, amount, section) {
		if (amount === undefined) {amount = 1;}
		if (section === undefined) {section = 'other';}

		if (activitySummary[section] === undefined) {activitySummary[section] = {};}

		if (activitySummary[section][name] === undefined) {
			activitySummary[section][name] = parseFloat(amount);
		} else {
			activitySummary[section][name] += parseFloat(amount);
		}
	};

	var displayActivitySummary = function () {
		if (game.console.messages.length > 900) {
			game.clearLog();
		}

		for (var i in activitySummary.other) {
			if (activitySummary.other[i]) {isummary('summary.' + i , [game.getDisplayValueExt(activitySummary.other[i])]);}
		}

		// Techs
		let l,name;
		for (name in activitySummary.research) {
			l = activitySummary.research[name];
			l = (l) ? '科学家' : '';
			isummary('summary.tech', [l + '小猫研究了 ' + ucfirst(name)]);
		}

		// Upgrades
		for (name in activitySummary.upgrade) {
			l = activitySummary.upgrade[name];
			l = (l) ? '科学家' : '';
			isummary('summary.upgrade', [l + '小猫发明了 ' + ucfirst(name)]);
		}

		// Buildings
		for (name in activitySummary.build) {
			isummary('summary.building', [game.getDisplayValueExt(activitySummary.build[name]), ucfirst(name)]);
		}

		// Order of the Sun
		for (name in activitySummary.faith) {
			isummary('summary.sun', [game.getDisplayValueExt(activitySummary.faith[name]), ucfirst(name)]);
		}

		// Crafts
		for (name in activitySummary.craft) {
			isummary('summary.craft', [game.getDisplayValueExt(activitySummary.craft[name]), ucfirst(name)]);
		}

		for (name in activitySummary.craftLeader) {
			isummary('summary.craftLeader', [game.getDisplayValueExt(activitySummary.craftLeader[name]), ucfirst(name)]);
		}

		// Trading
		for (name in activitySummary.trade) {
			isummary('summary.trade', [game.getDisplayValueExt(activitySummary.trade[name]), ucfirst(name)]);
		}

		// Show time since last run. Assumes that the day and year are always higher.
		if (activitySummary.lastyear && activitySummary.lastday) {
			var years = game.calendar.year - activitySummary.lastyear;
			var days = game.calendar.day - activitySummary.lastday;

			if (days < 0) {
				years -= 1;
				days += 400;
			}

			var duration = '';
			if (years > 0) {
				duration += years + ' ';
				duration += (years === 1) ? i18n('summary.year') : i18n('summary.years');
			}

			if (days >= 0) {
				if (years > 0) {duration += i18n('summary.separator');}
				duration += roundToTwo(days) + ' ';
				duration += (days === 1) ? i18n('summary.day') : i18n('summary.days');
			}

			isummary('summary.head', [duration]);
		}

		// Clear out the old activity
		resetActivitySummary();
	};

	resetActivitySummary();

	var activityBox = $('<div/>', {
		id: 'activity-box',
		css: {
			display: 'inline-block',
			verticalAlign: 'top'
		}
	});

	var showActivity = $('<a/>', {
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

	var messageBox = $('<div/>', {
		id: 'important-msg-box',
		class: 'dialog help',
		css: {
			display: 'none',
			width: 'auto',
			height: 'auto'
		}
	});
	var mbClose = $('<a/>', {text: i18n('ui.close'), href: '#', css: {position: 'absolute', top: '10px', right: '15px'}});
	mbClose.on('click', function () {messageBox.toggle(); });
	var mbTitle = $('<h1/>', {id: 'mb-title', text: 'test text'});
	var mbContent = $('<h1/>', {id: 'mb-content', text: 'test text'});
	messageBox.append(mbClose, mbTitle, mbContent);
	$('#gamePageContainer').append(messageBox);

	var showMessageBox = (title, content) => {
		mbTitle.html(title);
		mbContent.html(content);
		messageBox.toggle();
	};

	// Donation Button
	// ===============

	var showD = function() {
	var donate = $('<li/>', {id: "ks-donate"}).append($('<a/>', {
		href: 'bitcoin:' + address + '?amount=0.00048&label=Kittens Donation',
		target: '_blank',
		text: address
	})).prepend($('<img alt="bit"/>', {
		css: {
			height: '15px',
			width: '15px',
			padding: '3px 4px 0 4px',
			verticalAlign: 'bottom'
		},
		src: 'https://s1.ax1x.com/2022/04/30/OSmUAK.png'
	}));

	// Add some padding above the donation item
	donate.css('padding', '5px');

	optionsListElement.append(donate);
	};
	showD();
	// add the options above the game log
	right.prepend(optionsElement.append(optionsListElement));

	// Initialize and set toggles for Engine
	// =====================================

	var engine = new Engine();
	var toggleEngine = $('#toggle-engine');

	toggleEngine.on('change', function () {
		if (toggleEngine.is(':checked')) {
			options.auto.engine.enabled = true;
			engine.start();
		} else {
			options.auto.engine.enabled = false;
			engine.stop();
		}
	});

	initializeKittenStorage('session');
	loadFromKittenStorage();

	// hack for style.
	// If there are more UI options, split it to "updateUI"
	$('#toggle-style').trigger('change');
	$('#toggle-donate').trigger('change');

	if (console && console.log) {console.log(kg_version + " loaded");}
	game._publish("kitten_scientists/ready", kg_version);

	if (kittenStorage.reset && kittenStorage.reset.reset) {
		// calc paragon and karma
		kittenStorage.reset.karmaTotal += game.resPool.get('karma').value - Number(kittenStorage.reset.karmaLastTime);
		kittenStorage.reset.pargonTotal += game.resPool.get('paragon').value - Number(kittenStorage.reset.paragonLastTime);
		kittenStorage.reset.reset = false;

		// show messagebox
		showMessageBox(
			i18n('summary.time.reset.title', [kittenStorage.reset.times]),
			i18n('summary.time.reset.content', [kittenStorage.reset.karmaTotal, kittenStorage.reset.pargonTotal])
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
			pargonTotal: 0,
			karmaLastTime: 0,
			karmaTotal: 0
		};
	}
	saveToKittenStorage();

	var autoOpen = function() {
		if (!options.auto.engine.enabled && options.auto.options.items.autoScientists.enabled) {
			let countdown = (options.countdown);
			if (countdown === 0) {
				toggleEngine.click();
				clearInterval(autoOpenTime);
				imessage('reset.after');
			} else if (countdown > 10) {
				if (countdown % 60 === 0) {imessage('auto.tip');}
				if (countdown % 10 === 0) {iactivity('auto.countdown', [countdown]);}
				options.countdown -= 1;
			} else if (countdown <= 10) {
				imessage('reset.countdown.' + countdown);
				options.countdown -= 1;
			}
		} else {
			clearInterval(autoOpenTime);
		}
	};
	var autoOpenTime = setInterval(autoOpen, 1000);

};

var loadTest = function() {
	if (typeof gamePage === 'undefined' || typeof i18nLang === 'undefined') {
		// Test if kittens game is already loaded or wait 2s and try again
		setTimeout(function(){
			loadTest();
		}, 2000);
	} else {
		let upgrades = game.workshop.upgrades;
		for (let i in game.workshop.upgrades) {
			game.workshop.metaCache[upgrades[i].name] = upgrades[i];
		}
		game.workshop.metaCache['undefined'] = null;
		delete game.workshop.metaCache['undefined'];
		// Kittens loaded, run Kitten Scientist's Automation Engine
		run();
		loadTest = run = null;
	}
};

loadTest();