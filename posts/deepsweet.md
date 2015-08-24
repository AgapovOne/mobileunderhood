# deepsweet

_26 июля 2015_

## Понедельник <small>67 твитов</small>

всем привет, эту неделю с вами будет <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>. меня зовут Кир, кто-то может помнить меня по Яндексу, для остальных я просто JS-разработчик

т.к. у меня GMT+7 и вы скорей всего спите, я пока поспамлю темами, на которые мне было бы интересно поговорить :)

webpack, Babel, React, Flux, BEM (в хорошем смысле), изоморфность, фотки тупых людей, иммутабельность, парное программирование, Вьетнам.

RT <a href="https://twitter.com/ivan_krivonos" title="Иван Кривонос">@ivan_krivonos</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> GMT +7 это какой город?)

.<a href="https://twitter.com/ivan_krivonos" title="Иван Кривонос">@ivan_krivonos</a> Хошимин

на текущей работе есть всё из этого списка, очень красиво переплетённое. да-да, React + BEM :) с наследованием по уровням переопределения.

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> уже смотрели в сторону CSS Modules? Может ли этот концепт заменить BEM? Насколько вообще оно практично?

.<a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> да, смотрели ещё с первых коммитов в css-loader – сама идея уникального локального скоупа для стилей компонента заманчивая.

.<a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> но лично мне совсем не нравится подход к внедрению этого в React – <a href="https://t.co/tekip9QFqk">github.com/css-modules/cs…</a> – когда компонент думает о теме.

для всех – тема CSS Modules началась примерно отсюда <a href="https://t.co/I9nbsCi5Dm">github.com/webpack/css-lo…</a>, и развивается дальше здесь <a href="https://t.co/Ivf0SsyjZx">github.com/css-modules</a>

идея в чём-то гениальна: css-loader для webpack превращает классы из стилей в хэши, которые потом экспортируются как из обычного js-модуля.

дальше где-то, где эти стили нужны (в том же react-компоненте), они импортируются, и появляется доступ к маппингу "класс -&gt; хэш".

но для уникальных хэшей всё равно нужны уникальные классы, и для этого внутри стилей вполне можно использовать то же BEM-именование.

в итоге получается такая себе автоматизированная связка BEM + &lt;style scoped&gt; без лишней боли по поводу конфликтов и пересечений.

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> разве уникальные? Можно использовать одни и те же имена в разных файлах и они будут разруливаться без конф…

.<a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> я имею в виду, что внутри файлов стилей всё равно нужно как-то именовать классы, и идея BEM (например) здесь очень подходит

.<a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> я ведь правильно понял, что одни и те же селекторы из разных файлов будут иметь одни и те же одинаковые хэши?

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> нет, разные. В это вся фишка — никакого конфликта имен между файлами

.<a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> а если у меня стили для одного компонента находятся в разных файлах? судя по докам берётся хэш от внутренностей :local()…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> У вас есть где-то снаружи project-stub или мини-проект, где можно увидеть как именно это красиво переплетено?

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> "стаба" нет, мы слишком ленивые и занятые. есть только все нужные технологии <a href="https://t.co/JfwnUFvEeX">github.com/yummies/yummies</a> + <a href="https://t.co/TpvMzn8asB">github.com/yummies/babel-…</a>

кстати, как вам затея с эмоджи в коммитах? <a href="https://t.co/8RB2j8G8Os">github.com/yummies/genera…</a> 😼

RT <a href="https://twitter.com/kompotium" title="Anton Fedchenko">@kompotium</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> мне вот этот стартер кит понравился из последних <a href="https://t.co/QJxzy1fkNs">github.com/cdebotton/reac…</a> там есть css modules

собственно, основная идея React + BEM в том, что JSX – говно, а BEMJSON – добро <a href="https://t.co/tXgceVaD8Y">github.com/yummies/yummie…</a>

дальше – наследование <a href="https://t.co/wJBZRIWcSP">github.com/yummies/core-c…</a>, ещё дальше – "уровни переопределения" или, как мы их называем, "слои" <a href="https://t.co/TpvMzn8asB">github.com/yummies/babel-…</a>

BEM-модификатор – это класс, который (автоматически) наследуется от класса react-компонента и до/переопределяет BEMJSON из его render()'а.

про это всё определённо нужна отдельная статья + отдельный стартер-кит, но я уже даже не решаюсь давать обещания, всё тянется уже с мая.

самое крутое, что это в принципе никак не отменяет ни компоненты высшего порядка, ни декораторы, ни прочие подходы. очень удачно уложилось.

уже в черновиках статья. в целом – Flux может быть абсолютно любым. RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на чью реализацию похож ваш <a href="https://twitter.com/search?q=%23flux">#flux</a> ?

завтра будет день Flux: иммутабельные деревья, единое состояние, курсоры, GraphQL-like декларативность, префетчинг на сервере, изоморфность.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как вы относитесь к <a href="https://twitter.com/WebComponents" title="Web Components">@WebComponents</a>  ? Правда ли что появление <a href="https://twitter.com/search?q=%23react">#react</a> есть следствие провала компонентов ?

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> личное моё мнение – это мертворожденная технология, которую зря пытаются форсить. React появился из-за общей убогости DOM.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> с другой стороны, возможно ещё просто не пришло время, и появление "shady DOM" вместо полноценного Shadow DOM тому пример.

RT <a href="https://twitter.com/operatino" title="Robert Haritonov">@operatino</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Как уровни переопределения работают в этой связке? В html.

.<a href="https://twitter.com/operatino" title="Robert Haritonov">@operatino</a> в конечном итоге импортируется фабрика уже собранного и склеенного по всем уровням реакт-компонента.

.<a href="https://twitter.com/operatino" title="Robert Haritonov">@operatino</a> можно до/переопределять что угодно, как в BEMHTML, хоть тэг, хоть внутренности.

довольно интересная концепция получилась с "темами" – тема просто является отдельным слоем, начиная с темы "reset" <a href="https://t.co/PBHDgGzA5J">github.com/yummies/theme-…</a>

RT <a href="https://twitter.com/operatino" title="Robert Haritonov">@operatino</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> То есть это кастомная реализация сборки с мерджем компонентов? Без БЭМ шаблонизаторов? Какие тулзы замешаны?

.<a href="https://twitter.com/operatino" title="Robert Haritonov">@operatino</a> основа – webpack + Babel, кастомной сборки как таковой нет, всё нужное уже есть в webpack + немного магии через babel-плагин.

пример корневого `.yummies.yml` из внутреннего проекта <a href="https://t.co/rm2jmteBMg">gist.github.com/deepsweet/15c8…</a>

видимо эта неделя наконец-то заставит нас с <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> сделать starter-kit.

магия заключается в спец. #-импорте:

import Example from '<a href="https://twitter.com/search?q=%23example">#example</a>';
import ExampleTypeTestSizeBig from '<a href="https://twitter.com/search?q=%23example">#example</a>?_type=test&amp;_size=big';

Babel-плагин матчится на символ `#` в импорте и начинает искать файлы по слоям из конфига. находит – включает в цепочку наследований.

в конечном итоге в Example попадает обычная фабрика реактового компонента, который отнаследован по очереди от класса каждого слоя.

↓ <a href="https://t.co/MGoroGYIrb">github.com/yummies/babel-…</a>

пример модификатора <a href="https://t.co/wJBZRIEBuf">github.com/yummies/core-c…</a> – `super.render()`

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> много времени уже прошло, не сожалеешь? :)
1. что ушел из яндексов 2. что переехал во Вьетнам

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> 1) не сожалею, по-моему я ушёл очень вовремя 2) уже жалею :) но опыт жизни в Азии всё равно очень интересный и бесценный.

RT <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Почему жалеешь? Что не так с Вьетнамом?

.<a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> это страна, в которой уровень экономического развития слишком резко и быстро обогнал уровень сознания. со всеми вытекающими.

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что думаешь про redux?

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> Redux – крутой, но меня не покидает ощущение, что это какой-то мимолётный промежуточный этап, как и webpack HMR в целом.

RT <a href="https://twitter.com/thought_sync" title="Vyacheslav">@thought_sync</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> а как быть тогда, какую flux либу использовать?

.<a href="https://twitter.com/thought_sync" title="Vyacheslav">@thought_sync</a> <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> сегодня – Redux :) мой ответ был немного не о том, что Redux не надо использовать.

Flux хорош именно тем, что это сначала концепция, а уже потом – реализация. мы на первом проекте делали с нуля руками, чтобы прочувствовать.

главное сильно и навсегда не залипнуть на "каноническом" Flux, это лишь начало :) завтра будут стримы, а послезавтра одно лишь телевидение.

RT <a href="https://twitter.com/bagadim" title="Baga">@bagadim</a>: <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> смотря что называть мимолетным. Для кого-то - 5 лет. Для фронтенда год-два быть в топе - очень кру…

RT <a href="https://twitter.com/beshur" title="Shu Buznik">@beshur</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почему Въетнам? Как там ощущения вне офиса (или где вы работаете)? Долго там уже?

.<a href="https://twitter.com/beshur" title="Shu Buznik">@beshur</a> почему – без понятия, просто было интересно :) вне офиса круглый год душное и влажное лето лето. вот уже почти год как живём.

.<a href="https://twitter.com/beshur" title="Shu Buznik">@beshur</a> почему – без понятия, просто было интересно :) вне офиса круглый год душное и влажное лето. вот уже почти год как живём.

быстро набросал кое-какой Starter Kit <a href="https://t.co/JIgzFXDRrE">github.com/yummies/starte…</a> 🔥

уже не представляю как можно жить без "Object Rest/Spread Properties" <a href="https://t.co/6LE8zf15HF">github.com/sebmarkbage/ec…</a> – даже если не войдёт в ES7, буду юзать плагин

вообще, колонка Stage в ES7+ пока выглядит довольно печально <a href="https://t.co/0acCGQDJtu">github.com/tc39/ecma262</a>

Create random JSON objects using json-spawn and Chance.js <a href="https://t.co/Ndkl8Z1uOv">github.com/luisfarzati/js…</a>

Awesome list of Redux examples and middlewares <a href="https://t.co/on4zf6Rq1l">github.com/xgrommx/awesom…</a>

совсем забыл, со мной можно говорить про Diablo 2.

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Еще вот мои наработки по коллекционировании ресурсов об реактивности <a href="http://t.co/AQWwqrqEeE">xgrommx.github.io/rx-book/conten…</a> также тут есть видео,…

## Вторник <small>92 твита</small>

доброе утро. вчера спрашивали какое Flux решение мы используем… начну немного издалека, а закончу постом в медиум со ссылкой на репозиторий.

хорошее интро в Immutable Data на примере Immutable.js всё от того же фейсбука <a href="https://t.co/7VC2rhvHPv">youtube.com/watch?v=I7IdS-…</a>

а что если представить одно большое дерево данных, в котором хранится всё состояние приложения, от нажатости чекбокса до запрошенных данных.

это дерево иммутабельное, т.е. каждое изменение влечёт за собой новую версию дерева, отличную от старой.

в типичном приложении в дереве будет не так много основных явных веток, типа products list, product info и т.п.

"курсор" – это своеобразная ссылка на ветку данных в дереве. простой пример на основе всё того же Immutable.js <a href="https://t.co/cS1qCJDOjm">github.com/facebook/immut…</a>

"cursor path" – это путь к этой ветке или к конечным данным. обычно представляется в виде массива, [ 'products', ID, 'details', 'price' ].

для дерева и курсоров мы используем Baobab <a href="https://t.co/9Iv0xmAWnK">github.com/Yomguithereal/…</a> – ничего лишнего, всё довольно просто и прозрачно.

дерево эмитит событие `update`, на основе которого можно и нужно обновлять, например, курсоры, т.к. дерево уже новое, а ссылки старые.

событие `update` есть и у самих курсоров – изменились данные по конкретному пути в дереве.

сначала мы делали так: всё дерево помещается в локальный стэйт корневого компонента. по подписке на update стэйт обновляется новый деревом.

от корневого компонента прямо через пропсы в рендере детям разливались курсоры на ветки данных, которые им нужны.

это было очень удобно: каждый нвоый рендер самообновлял курсоры. получался такой водопад данных сверху вниз, который ещё и саморазливался.

из минусов: жёсткая связанность компонентов через иерархию: компонент C зависел от курсора, который ему даст B, а тот в свою очередь от A.

"лишние" рендеры довольно легко отсекались через shouldComponentUpdate(), как и было завещано.

но потом моё внимание привлекла очень интересная особенность Baobab: есть событие `get` – были запрошены данные по такому-то пути. геттер.

т.е. в теории можно было узнать, что запрошены данные, которых ещё нет в ветке. и сделать замозаполняющееся дерево :)

Declarative data fetching in React components with Baobab <a href="https://t.co/URslHl1nKD">medium.com/@mistadikay/de…</a>

компоненты – максимально тупые. они просто рисуют данные как будто эти есть и всегда были. почти каждый компонент сам знает свой cursor path

в рутовом компоненте идёт подписка на геттер из дерева – если данных, которые запрошены отрисовкой компонента ещё нет, то дёргается экшн…

…который, как в самом обычном Flux, диспатчит событие, которое ловит стор, который складывает эти данные по нужному cursor path в дерево.

компонент по событию `update` от своего курсора самообновляется и перерисовывается. profit.

по ссылке ниже есть более подробное описание и даже тестовый репозиторий с простым, но в том же время полноценным примером.

самый жир затеи – <a href="https://t.co/x5jdxNDdJa">github.com/mistadikay/rea…</a> – декларативный "запрос" данных. что-то вроде того же GraphQL, только поверх обычного Rest.

т.е. компонент просто декларативно описывает откуда в дереве брать данные. а как, когда и почему они там оказались – не важно. просто рисуй.

ещё одна интересная особенность – в дереве есть две осовных ветки – data и ui. в data собственно данные, а в ui – визуальные состояния…

типа выбранного пункта, нажатости чекбокса и т.д. это позволяет практически забесплатно сделать "историю" – отматывание всего состояния.

т.к. иммутабельное дерево создаёт новую версию на каждое изменение, ни что не мешает сохранять эти версии и сделать историю как в фотошопе.

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Правда про CLJS, но отлично про иммутабельность, историю из оной и вообще. <a href="http://t.co/GTF7FpEm1M">youtube.com/watch?v=lDkrXT…</a> <a href="http://t.co/d1dsnvNQ9n">youtube.com/watch?v=tUtLe1…</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А в вашем случае "дерево" — это BEMJSON или ещё над ним абстракция?

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> нет, не BEMJSON, произвольная структура данных, в ветки которой чаще всего складываются данные от сервера as is.

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> но твою идею я понял :)

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Просто ты упоминал до этого BEMJSON, и я пытаюсь понять, куда вы его там встроили.

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> это никак не связано с Yummies и BEM. пример в репозитории специально написан на JSX :) просто концепция, применимая везде.

RT <a href="https://twitter.com/talgautb" title="Талга УтБ">@talgautb</a>: кажется ведущий <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> отпросился от работы на неделю :) столько твиттов, хотя только вторник!

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не могу избавиться от ощущения что что-то с GraphQL и подобными решениями не так. Rest более лучше, конечно, …

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> мы (пока) взяли только ту часть GraphQL, которая про декларативность в компоненте. а вот бэкендовый кусок – да, необычный.

два поста в тему: Your First GraphQL Server <a href="https://t.co/WeYrVib6py">medium.com/@clayallsopp/y…</a> / Moving from REST to GraphQL <a href="https://t.co/GQF6ept3DB">medium.com/@frikille/movi…</a>

на данном этапе меня смущает даже сам синтаксис graphQL Query, но это просто с непривычки. с самой идеей по-моему всё в порядке.

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а как у вас дела с бэкендом? прослойка на ноде между клиентом и бэкендом на чем-то богомерзком? :)

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> обычный богомерзкий PHP, одни и те же REST-ручки которого "изоморфно" дёргаются нодой на сервере и аяксом на клиенте.

RT <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Вопрос из зала: что лучше использовать Angular 2.0alpha (es6) или же React + ...) или есть еще хорошие альтер…

RT <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> интересно. как насчет отдельных констант типа pretty_name =&gt; path_in_tree, чтобы компонент не знал о структуре де…

.<a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a> можно чуть подробнее? не совсем уловил.

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на самом деле, если разобраться - баобаб тянет кучу всего лишнего. свой апи, курсоры, кучи методов (push,…

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну и основная идея - чистые функции, невозможна, set не возвращает новое дерево - он меняет текущее.даже …

.<a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> а какие альтернативы? меня Baobab не смущает вообще ни чем. has есть в виде exist в <a href="https://twitter.com/V2" title="R">@V2</a>

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как относишься к сорхусу и его идее на каждую мелочь создавать по модулю?

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> :) забавный персонаж. в идее модульности нет ничего плохого, даже в таком, доведённом до абсурда виде. я даже что-то юзал.

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> но я примерно понимаю почему это может раздражать.

(речь о <a href="https://t.co/rlWHh7Mqt8">github.com/sindresorhus</a> и его модулях типа <a href="https://t.co/i1id2VHz6R">github.com/sindresorhus/c…</a>)

RT <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> идея - заменить путь к данным в дереве более семантичной константой

.<a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a> вполне нормальная идея :) импортировать это из тех же constants, по аналогии с именами событий.

.<a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a> но это не работает с динамическими путями типа <a href="https://t.co/XYqlzClwl5">github.com/mistadikay/rea…</a>

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> буквально вчера об это спросил <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> оказалось сделать это самому гораздо проще, чем кажется https<a href="https://t.co/jip3DUtMKO">github.com/gaearon/redux/…</a>

.<a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> в моём мире set и не должен напрямую возвращать новое дерево, всё летает по кругу почти как в каноническом Flux.

RT <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ещё вопрос. Для бем дерева вы данные подготавливаете прямо в шаблоне или где-то раньше? (что-то типа своего…

.<a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a> а нет как такового бем-дерева, как и шаблона :) сырые данные идут напрямую в ветку дерева, оттуда компонент рисует как хочет

.<a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a> в смысле нет одного большого BEMTREE -&gt; BEMJSON, всё немного иначе.

а какое Flux решение используете вы и какие у него основные минусы и сложности?

RT <a href="https://twitter.com/d1b" title="Dmitriy Budnik">@d1b</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/8AjxA3I7bF">alt.js.org</a> всё чётко

RT <a href="https://twitter.com/sapegin" title="Artem Sapegin">@sapegin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Пробовал Альт; теперь хочу попробовать Редакс.

RT <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a>: <a href="https://twitter.com/sapegin" title="Artem Sapegin">@sapegin</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тоже используюем alt.js. попробовать redux интересно.

RT <a href="https://twitter.com/lapanoid" title="Lapin Sergey">@lapanoid</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> делал в свое время анализ флаксов для заказщика, в результате и перешел на redux <a href="https://t.co/erVnaIYUyP">docs.google.com/spreadsheets/d…</a>

RT <a href="https://twitter.com/lapanoid" title="Lapin Sergey">@lapanoid</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Если у кого есть комментарии, критика к документу - это крайне желательно. Буду править)

RT <a href="https://twitter.com/pomidore" title="Александр Лунев">@pomidore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> использовал reflux, alt, flummox и теперь пробую redux

RT <a href="https://twitter.com/pomidore" title="Александр Лунев">@pomidore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> reflux — дурацкие экшены, нет единого диспатчера, alt — странный api, flummox — все ок, но есть redux :-), redux…

RT <a href="https://twitter.com/stigmat4j" title="Антонихин Максим">@stigmat4j</a>: <a href="https://twitter.com/pomidore" title="Александр Лунев">@pomidore</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> только flux, только классика, только хардкор.

RT <a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> понравилось использовать baobab вместо сторов.

brace yourself, завтра изоморфность.

о да. жду адептов секты правильных слов :) RT <a href="https://twitter.com/lapanoid" title="Lapin Sergey">@lapanoid</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> универсальность ;)

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> vanilla js + свои сторы <a href="https://t.co/oGdQX8rKWt">github.com/alexeyraspopov…</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> У вас есть i18n? Кто как решает эту задачу с React?

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> использовал <a href="https://t.co/JNQY0cK3fb">github.com/yahoo/react-in…</a> все ок.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/dimchez" title="Dmitry Demyankov">@dimchez</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> метод translate прокидывался в компоненты как props.

RT <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a>: <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> использую <a href="https://t.co/rjdrniZ79a">github.com/piranha/puttext</a>:
парсинг вызовов -&gt; *.po -&gt; *.json -&gt; puttext(require('*.json'))

RT <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a>: <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Polyglot.js от airbnb + своя привязка к Redux

RT <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>: <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> +1 к puttext, просто и сердито

RT <a href="https://twitter.com/prbigbrother" title="Alexandru Capatina">@prbigbrother</a>: Фронтаны, а может кто поможет найти решение или лучшие практики для smooth parallax scrolling? кто как делает <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

коллеги на работе подходят с вопросами потому что нагуглили мои модули. удобно.

RT <a href="https://twitter.com/temrdm" title="Artem Pogrebnoy">@temrdm</a>: Все что обсуждал с <a href="https://twitter.com/ir4y_ix" title="ilya beda">@ir4y_ix</a> и планировал запилить на прошлых выходных, сегодня рассказывает <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> в <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>. Супер!

ооок, в CSS есть outline-offset <a href="http://t.co/rH8z8S0ncJ">codepen.io/SitePoint/pen/…</a>

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А ещё он может быть отрицательным! В опере удобно было вёрстку так отлаживать, пока нормальный дебаггер не появился

минутка ванильной вёрстки закончилась.

какое название вашей должности/профессии наиболее полно отражает реальность и в целом вас устраивает?

моё "Senior Front-End Developer" уже явно вносит больше путаницы в головы менеджеров, чем что-либо проясняет.

RT <a href="https://twitter.com/mr_skriming" title="Fast Cat">@mr_skriming</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> яжпрограммист

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> просто js web dev, без аутсорсной энтерпрайзной софтверной инженерии 😤

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> меня устраивает классическое software engineer.

RT <a href="https://twitter.com/d3head" title="Олег">@d3head</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> JavaScript Engineer

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> разработчик интерфейсов

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Frontend Developer или разработчик интерфейсов. не люблю деление на Junior/Senior — оно искусственное.

## Среда <small>81 твит</small>

A modular, progressive, and beautiful Markdown and HTML editor <a href="https://t.co/XXEtPx50Cx">github.com/bevacqua/woofm…</a>

могу расписать по шагам идею изоморфности на примере того же реакта, начиная со сборки. интересно/актуально?

готовых starter kit'ов и прочих стабов хватает, например <a href="https://t.co/mxnKbZ4ggE">github.com/RickWong/react…</a> / <a href="https://t.co/R3l6Qa8iL2">github.com/webpack/react-…</a> / <a href="https://t.co/9LAAv0Pow7">github.com/DavidWells/iso…</a>

суть одна: один и тот же "изоморфный" код должен строить начальный HTML на сервере и продолжать работать дальше на клиенте.

в React для этого предусмотрены обычный DOM `render()` и "серверные" `renderToString()` / `renderToStaticMarkup()` <a href="https://t.co/0MFvlUVJk0">facebook.github.io/react/docs/top…</a>

к слову, в react@0.14 их даже разнесут по разным модулям <a href="https://t.co/nSzVgYDxtO">facebook.github.io/react/blog/201…</a>

обычно webpack'ом делают одновременно два билда с двумя наборами бандлов на выходе: серверный и клиентский.

точками входа в каждый из бандлов являются своеобразные конструкторы роутеров, которые ждут текущий запрощенный URL в виде аргумента.

на сервере это обычный `request.url` из Express / Koa (<a href="http://t.co/nOSN4i1JNR">koajs.com</a>, наш выбор) / whatever, на клиенте – HTML5 History API.

стандартом де-факто является react-router <a href="https://t.co/plmj29aAMm">github.com/rackt/react-ro…</a>

на сервере:

грубо говоря, роутер по переданному URL через таблицу роутов определяет, какой именно компонент нужно рендерить.

через renderToStaticMarkup() (чтобы не было лишних атрибутов data-reactid, "чистый" HTML) строится руками доктайп, &lt;head&gt; и &lt;body&gt;.

через renderToString() вытягивается строка HTML из компонента, который решил рендерить роутер, и dangerouslySetInnerHTML вставляется в body.

вся эта портянка отправляется обратно в Express в виде ответа на запрошенный URL. казалось бы всё, наш HTML jт сервера готов.

но 1) чаще всего ваше приложение не статическое, и рутовый компонент и всё последующее строится на основе данных, запрашиваемых с бэкенда.

а render() у реакта синхронный, и сам по себе ждать каких-то там экшенов и сторов не может и не будет.

для решения этой задачи мы выбрали способ, в котором данные запрашиваются после осознания нужного роута, но до фактического рендера.

придумали маппинг соответствия роута и экшна(ов) – серверный роутер дёргает нужный экшн и ждёт ответа от стора, пока тот не заполнится.

пришёл ответ – рендерим. передав данные через пропсы, или просто тупо, если всё построено на дереве, из которого компонент возьмёт всё сам.

Ajax with less suck - (and node.js HTTP client to match) 
<a href="http://t.co/6x3UQks4Zp">visionmedia.github.com/superagent/</a> – чуть не забыл, "изоморфный ajax".

RT <a href="https://twitter.com/lyxdenv" title="Alexander Gorbunov">@lyxdenv</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> И все это быстро?

.<a href="https://twitter.com/lyxdenv" title="Alexander Gorbunov">@lyxdenv</a> ни чем не должно отличаться от похода за данными на бэкенд в любой другой системе.

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почему Koa?

.<a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> because we can :) генераторы, вот это всё. судя по стресс-тестам распределение нагрузки более равномерное.

очень важно для осознания: componentDidMount() не происходит "на сервере", т.к. ничего никуда не маунтится.

поэтому подписки на обновление сторов или дёргание каких-нибудь экшнов в этом методе будут проигнорированы renderToString()'ом.

и ровно из-за этого же использовать условия с `typeof window` или, прости господи, process.env.BROWSER и пр. – плохо.

весь чистый client-side компонента должен быть описан исключительно в его componentDidMount().

итак. на сервере теперь для нужного роута дёргаются нужные данные и вытягивается HTML-строка из нужных компонентов.

когда на клиенте активируется наш собранный клиентский бандл, он (как я представляю) построит VDOM и начнёт матчить с HTML по `data-reactid`

т.к. никаких данных, которые были запрошены на сервере, у клиента нет, то React просто построит diff относительно пустых данных и всё сотрёт

отсюда интересная проблема: даже если на клиенте заново дёрнуть такие же экшны по роуту, как и на сервере, не факт, что они будут идентичны.

это будет два разных несвязанных друг с другом запроса, пусть даже за одним и тем же. мало ли там какой timestamp или другая уникальность.

мы не придумали ничего лучше (а затем нашли подтверждение правильности своей идеи в других Flux рещениях), чем передать данные в HTML.

ведь если подумать, то между сервером и клиентом нет абсолютно никакой связи, кроме как HTML, и только так можно связать "сессию".

RT <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а почему нельзя:
React.render(&lt;Handler /&gt;, document);
?

.<a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a> можно и нужно, вот только сторы пустые.

т.е. при серверном рендеринге, куда-нибудь в &lt;body&gt;:

&lt;script id="_bootstrap" type="application/json"&gt;{ ololo: true }&lt;/script&gt;

для клиентского бандла точкой входа является клиентский конструктор роутера, который, если есть "bootstrap", возьмёт оттуда данные.

сложит их в стор и сделает самый обычный React.render(…). в этой точке всё дальнейшнее управление роутами уходит в клиентский react-router.

теперь строка HTML от сервера полностью идентична тому, что построит реакт на клиенте. нулевой diff, profit.

дальнейший переход на другую страницу будет перехвачен роутером и выполнен только на клиенте. только в этом случае будет дёрнут экшн…

т.к. данных для другой страницы в "boostrap" нет, ведь сервер рендерил только текущую страницу. начинается обычный Flux data flow.

если очень кратко: самые начальные данные клиент берёт из HTML, а дальше всё как обычно, никаких ограничений.

грабли, на которые мы наткнулись практически сразу: неучтённые синглтоны и `on`-подписки вместо `once` на сервере.

результат: расшаренные сессии и сторы между разными клиентами :) следите за этим.

извиняюсь за возможную сумбурность, старался излагать максимально последовательно. вопросы?

RT <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a>: ~<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> как то говорил в чате что нельзя так, так как экстеншены могут мjдифицировать DOM.

.<a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> буду очень рад узнать альтернативное решение

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Как по мне, тут чейнинг используется только ради чейнинга. Какой профит по сравнению с window.fetch(url, {…})?

.<a href="https://twitter.com/subzey" title="subzey">@subzey</a> <a href="https://t.co/z4XwG3cRB4">github.com/matthew-andrew…</a> для любителей.

RT <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на клиенте используете тот же маппинг или другой подход к работе с данными?

.<a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a> абсолютно тот же расшаренный маппинг роут -&gt; экшн(ы).

я в целом большой поклонник метода "сделай с нуля, или не поймёшь до конца". но это не значит, что не нужно использовать готовые решения.

хотя бы издалека понимать принцип работы такой не самой простой штуки уже полезно.

RT <a href="https://twitter.com/kra1g0" title="Крайго">@kra1g0</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть react native для андроида?

.<a href="https://twitter.com/kra1g0" title="Крайго">@kra1g0</a> afaik нет, но они очень обещают. без чётких сроков, как обычно у Facebook.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> данные для render нужно заранее готовить и в отдельном от React месте. Я вот для этого либу написал <a href="http://t.co/hCRILB9ZGg">bit.ly/1TPnKSn</a>

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> можно в двух словах основной принцип?

RT <a href="https://twitter.com/sapegin" title="Artem Sapegin">@sapegin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В твитере всё равно поток сознания получается :-) Но в целом всё понятно.

разница между серверным и клиентским webpack-бандлами небольшая: разные точки входа, и упрощённый процессинг на сервере, без стилей и т.п.

в серверный бандл так же можно не включать всё вендорное, чтобы мучать зря файл на пару мегабайт – <a href="https://t.co/duEhtH6nuW">webpack.github.io/docs/library-a…</a>

<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> НЕ мучать, идиот.

RT <a href="https://twitter.com/sbmaxx" title="Roma Rozhdestvenskiy">@sbmaxx</a>: Надо будет взять кофейку и перечитать <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> в роли <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> . Не будет какой-нибудь ссылочно-резюмешечного текста по и…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/sbmaxx" title="Roma Rozhdestvenskiy">@sbmaxx</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В профиле аккаунта же есть ссылка <a href="https://t.co/PbeRmSYiDR">jsunderhood.ru</a>

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ого, какая печалька (почитал дальше). Какая-то так себе изоморфность получается. Неужто более лучше ничего не…

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> <a href="https://t.co/cWPkS5i2Bh">github.com/facebook/react…</a> когда-нибудь…

этот наш роут -&gt; экшн(ы) маппинг плюс ко всему позволяет довольно легко решить, какой компонент рендерить на сервере, а какой на клиенте.

если для чисто клиентского компонента не дёргается экшн в серверном роутере, то он просто отрисуется пустым.

на клиенте в своём componentDidMount() компонент посмотрит, что данных в сторе (от бутстрапа) нет, и сам дёрнет свой экшн. даже изящно.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: Вопрос к залу: поддон для посудомойки обязательно нужен? Как подобрать подходящий, какие у них параметры? Забыла заказать вм…

RT <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a>: <a href="https://twitter.com/kra1g0" title="Крайго">@kra1g0</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> стоит ли вообще инвестировать время в него сейчас? есть ли серьезные разработки на нем?

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/kra1g0" title="Крайго">@kra1g0</a> У фейсбука два приложения нативных (ads и groups) - react native. Все очень серьезно.

RT <a href="https://twitter.com/ymatuhin" title="Юрий Матюхин">@ymatuhin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Читаю ваши твиты про реакт и не двупляю почти ничего.  Чем крут реакт? Киллерфича перед ангуларом? ☺️

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/ymatuhin" title="Юрий Матюхин">@ymatuhin</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> фича в том, что ты можнешь думать о приложении, как о функции. В математическом смысле слова.

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/ymatuhin" title="Юрий Матюхин">@ymatuhin</a> <a href="https://t.co/7TsswDl7Fs">facebook.github.io/react/docs/why…</a> + <a href="http://t.co/bz8u9ZYUzF">jlongster.com/Removing-User-…</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а если таких компонента два? оба дернут?

.<a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a> мы сделали isRequesting на уровне экшна, чтобы одновременно не было двух одинаковых. всё равно в стор попадёт в одно и то же место

.<a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a> компонент не должен о таком думать

а у кого сейчас какой pet project? :)

## Четверг <small>69 твитов</small>

появились подвижки в мёрдже isparta в istanbul <a href="https://t.co/RnGnXJqPGI">github.com/douglasduteil/…</a> – покрытие оригинального ES6 кода через sourcemaps от Babel.

к слову, лоадеры к вебпаку для обоих – <a href="https://t.co/1NmkG1Y2mE">github.com/deepsweet/ista…</a> / <a href="https://t.co/sE2uc4rVfc">github.com/deepsweet/ispa…</a>

Approaches to testing React components <a href="http://t.co/BV2bwDC1DP">reactkungfu.com/2015/07/approa…</a> – а как вы тестируете реакт-приложения?

у нас (пока) jsdom <a href="https://t.co/pRKh62245N">github.com/tmpvar/jsdom</a> + старая добрая mocha <a href="https://t.co/IcRYH52hhZ">github.com/rstacruz/mocha…</a> + TestUtils <a href="https://t.co/LHa51Lo8ej">facebook.github.io/react/docs/tes…</a>

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> используя Shallow Rendering <a href="https://t.co/rF299uL4MS">facebook.github.io/react/docs/tes…</a>

RT <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> такой же набор + sinon

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну а дальше mocha, chai с параметром —compilers js:babel/register

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почему не Karma? Для браузера же пишете, jsdom - читерство

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> а какие именно браузерные отличия ты хочешь тестировать кармой? то, как работает сам реакт? :)

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> правда. но что это меняет? внутри Flux тоже нечего такого специфичного тестировать… приведи пример, я не могу придумать :)

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> мы начали с кармы, и на первом проекте она даже до сих пор крутится. даже под Sauce Labs. а потом подумали "а зачем?".

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> :) хороший довод. Но проект же состоит не только из реакт-компонентов, правда же?

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> так любой js-код. Все же js в ноде от того, что есть в chrome и ff разных версий отличается. Дело же не тольк…

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> смотрю на проект и пытаюсь найти что-нибудь такое :) я понимаю о чём ты, но одновременно не попускают мои доводы.

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тот же babel спокойно может зарелизить версию с косяками и зафиксить только через пару часов, какое тут довер…

.<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> по-моему это путь в ад, тестировать "не свой" код. так можно тестировать правильно ли вебпак реквайрит модули, например.

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а это тестировать и не надо, надо тестировать работоспособность своего проекта :) которая может быть сломана …

RT <a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> насколько я понял и подход и даже частично реализация совпадает с вот этим примером: <a href="https://t.co/0gLUqMpLNr">github.com/erikras/react-…</a>, в…

.<a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a> очень может быть, конкретно на это я не смотрел. идея у всех плюс-минус одна.

RT <a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> получение данных на серверной стороне (наполнение стора) там изящно реализовано, рекомендую обратить на него вн…

RT <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>: <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> так можно же локально тестировать через jsdom, а в CI запускать те же тесты в браузере

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> а как тестировать e2e? Хочу, чтобы перед деплоем основные сценарии проверялись: лог…

RT <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>: <a href="https://twitter.com/subzey" title="subzey">@subzey</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> для fetch получается слишком много лишнего кода типа установки хедеров и тд, в итоге я пришёл к sup…

RT <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a>: <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мы начинаем прикручивать <a href="http://t.co/R4yqJBCKNj">pioneerjs.com</a> посмотрим ,…

RT <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>: <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a> <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> я не понял, чем он лучше cucumber.js?

RT <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> немного опоздал, но вот небольшой пример isomorphic app (<a href="https://t.co/vYFzqqIwJE">github.com/ShpuntiK/isomo…</a>) с идеями, которые ты опис…

RT <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/LuV2uSclSO">shpuntik.github.io/isomorphic-app…</a> - и презентация на основе этого кода (2/2)

RT <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> про синглотоны очень верно :) сам долго осознавал эту проблему

RT <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>: <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> так и тестировать — писать e2e тесты, локально запускають через jsdom, на сервере ч…

RT <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a>: <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a> <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> хороший вопрос, я пока не знаю. по зависимостям pioneer ссылается на фор…

RT <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>: <a href="https://twitter.com/adaniliuk" title="Andrei Daniliuk">@adaniliuk</a> <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> понял, это враппер над ним, с e2e API. Но мне больше нравится http://t.c<a href="http://t.co/A0mUtDcGhX">webdriver.io</a>

Babylon is a JavaScript parser used in Babel <a href="https://t.co/nopJz2X1Cy">github.com/babel/babel/tr…</a>

кажется решились на babel-plugin-typecheck, по крайней мере простые вещи. ненавижу JSDoc. <a href="https://t.co/90obOQPQKU">github.com/codemix/babel-…</a> + <a href="http://t.co/9wllD3YRnF">flowtype.org/docs/quick-ref…</a>

хочется как в Babel – <a href="https://t.co/FRjrfxxaVN">github.com/babel/babel/bl…</a> – комменты комментами, а типы через flow type annotations.

(TypeScript для бедных)

Turn flow type annotations into comments <a href="https://t.co/9BfMaYJN52">github.com/babel-plugins/…</a>

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Все задаю вопрос почему flow? Почему не typescript?

.<a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a> а TypeScript уже разве полностью синхронизировался с ES6?

пруф или не было :) RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a> уже и с ES7

на сегодня так <a href="https://t.co/x5jdxNDdJa">github.com/mistadikay/rea…</a>, мы над этим работает. RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> У вас своя реализация query в компонентах?

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> о-да! Суперагент очень крутой! Я даже написал для него REST-моккер который работает прямо в браузере https<a href="https://t.co/l8ZggpQ7y8">github.com/rambler-digita…</a>

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Вот их roadmap <a href="https://t.co/7D5mvtEAiX">github.com/Microsoft/Type…</a>

хм, ок. тогда почему не TypeScript?

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> он умеет искать по полям в объектах? типа: хочу объект из массива в котором id: 5

.<a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> да, стандартными средствами Baobab. мы когда осознали, кажется взвизгнули.

<a href="https://t.co/L4r5MG0pom">github.com/Yomguithereal/…</a> RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ану покаж!

btw, скоро Baobab@v2 <a href="https://t.co/oTIBUpR0Xz">github.com/Yomguithereal/…</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Круто! А как быть с динамическими query? Например листы. Как вы расширяете query?

.<a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> по ссылке на наш пример видно, что query – это функция, принимающая props и state :)

RT <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я написал новый ридми для Redux: <a href="https://t.co/s0q28MdIX3">github.com/gaearon/redux/…</a>. Фидбэк вэлкам! (Доки пока не готовы)

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> А что о <a href="https://t.co/7ajTIaDBak">github.com/mquan/cortex</a> скажете?

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> Вообще есть целый список <a href="https://t.co/FRdVOypIDe">github.com/enaqx/awesome-…</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Хм, вижу. А что, если часть динамического query зависит от данных из глобального состояния?

.<a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> ммм… в общем случае оно может быть в пропсах, мы так ID из роута протягивали. ещё вариант – context. есть конкретный пример?

на сегодня это тянется в пропсах, но уже есть кое-какие намёки. RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот я про роут и id как раз и хотел сказать :)

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Это не ломает проверку SCU? Или у вас и пропсы и данные по курсору сравниваются в SCU?

.<a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> не совсем понял как тут сломается SCU. мы сравниваем ID в componentWillReceiveProps и при отличии обновляем свои курсоры.

.<a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> т.е. данные компонента обновляются на новую ветку с новым ID.

.<a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> query-функция вызывается заново с новыми пропсами, и получается новый cursor path. ну ты наверное уже понял :)

немного забегая вперёд скажу, что мы уже всё чуть переосмыслили и оформляем в виде небольшого модуля на декораторах. для своих нужд.

а скиньте примеры своего кода на ES6 с JSDoc.

хохма последней недели – "самовозбуждающийся стор"

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а почему бы это состояние не хранить в самом tree? )

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> именно это мы и собираемся попробовать. в каком-то виде :)

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> глянул, очень круто ). А это <a href="https://t.co/ZuDwn9KmEd">github.com/tonsky/datascr…</a> - следующая итерация идеи <a href="https://twitter.com/nikitonsky" title="Nikita Prokopov">@nikitonsky</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я это в своем slt как раз имел ввиду ). Короче, состояние целостно только в случае, когда все причины хранятся в не…

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и тут основаная моя претензия к flux.Вызов экшена никак не фиксируется,теряются причины.В <a href="https://twitter.com/search?q=%23redux">#redux</a> такая же проблема <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>

↓ и дальше по реплаям.

JSCity is an implementation of the Code City metaphor for visualizing source code <a href="https://t.co/1nk6M643H3">github.com/aserg-ufmg/JSC…</a> 😻

## Пятница <small>40 твитов</small>

RT <a href="https://twitter.com/bashmish" title="Misha Bashkirov">@bashmish</a>: Пс, парень, немного рекурсии не желаешь? <a href="http://t.co/tw4p65bqnB">pic.twitter.com/tw4p65bqnB</a>

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> расскажи вот что про реакт. Как люди валидируют пользовательский ввод в формах, трансформируют его и так далее?

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ибо формы, по-моему, это головная боль на реакте в отличие от того же ангуляря. В ангуляре это прям великолепно с…

.<a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> мы не придумали ничего лучше, чем заюзать validator <a href="https://t.co/rl3IkwPVMa">github.com/chriso/validat…</a> с кастомным выводом ошибок.

.<a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> пробовали даже нативную HTML5 валидацию <a href="http://t.co/igxQPCEYNJ">html5rocks.com/en/tutorials/f…</a>, но это просто ад. более невменяемого API я не помню.

тема лично для меня всё ещё актуальная, может есть что-то очевидное и крутое?

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что по поводу <a href="https://t.co/5oeiGckltc">github.com/gcanti/tcomb-f…</a> и <a href="https://t.co/A6hjUPfn3G">github.com/insin/newforms</a>?

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> tcomb интересный, был небольшой опыт, но newforms поддерживают isomorphic

RT <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a>: <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А еще в ангуляре есть великолепнейшая либа <a href="http://t.co/CIGnyZMRLG">angular-formly.com</a>

coveralls в read-only, ну круто <a href="http://t.co/Zk2biV4ydi">status.coveralls.io</a> – видимо с этим же связаны последние затупы с pending очередью /<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> первая попытка, по-моему получилось круто <a href="https://t.co/i0Ebulcgl9">github.com/mistadikay/rea…</a> – cursor path как часть другого cursor path

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> до того как делать баобабовый select мы подготавливаем cursor path через рекурсивный поиск вложенных массивов.

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> на любой глубине как и раньше могут быть части props/state из функции, в скоупе которой это всё происходит.

RT <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А тогда скажи, форма для тебя должна быть smart- (с внутренним состоянием) или dumb-компонентом (с состоянием в с…

.<a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a> у нас получилось что-то между: у формы есть своё внутреннее состояние, которое можно менять внешними пропсами.

RT <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> для валидации форм использую <a href="https://t.co/zcPK0e7JeR">github.com/christianalfon…</a>

RT <a href="https://twitter.com/cssunderhood" title="HTML, CSS, BDSM">@cssunderhood</a>: Всем привет ) Меня зовут Денис <a href="https://twitter.com/denisfedosov" title="Denis FL">@denisfedosov</a> и люблю верстать. Работаю удаленно в ⚑ Passenger.me.

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а поделись годными материалами про spa (на стек пофиг) :)

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну ок, кастомный вывод ошибок нормальная тема. А что на счет модификации пользовательского ввода onkeyup? Как $fi…

RT <a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a>: <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> могу сделать простенький gist для поля ввода номера кредитки, там все очень просто

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> вроде норм. А в чем смысл использовать state вместо props?

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> просто на всякий случай :) у нас такого примера нет, но локальный стэйт компонета всё равно пробрасывается. мало ли.

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> а, кажется ты про другое. мы не делали через higher-order component по некоторым причинам, но в целом можно.

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> как раз сейчас пишем довольно подробный README. всё будет.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> да не, я имел ввиду что вообще нафиг state не нужен ). То есть ну вообще ).

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> в идеальном случае – да, согласен. он просто удобен "в виде хранилища" тем, что при обновлении дёргает рендер сам.

RT <a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a>: <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> собственно вот: <a href="https://t.co/SZy9WMURov">gist.github.com/afitiskin/a65c…</a>

RT <a href="https://twitter.com/Chudesnov" title="散厦知">@Chudesnov</a>: <a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a> <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> onchange в Реакте - это только change, или он другие какие-то события подмешивает?

RT <a href="https://twitter.com/afitiskin" title="Alex Fitiskin">@afitiskin</a>: <a href="https://twitter.com/Chudesnov" title="散厦知">@Chudesnov</a> <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> любое изменение в input триггерит реактовский onchange, на мобилках должно работать так же

оформили наш подход к работе со стэйтом в реакте <a href="https://t.co/0BqgLIOpbq">github.com/mistadikay/doob</a>, по мотивам поста <a href="https://t.co/URslHl1nKD">medium.com/@mistadikay/de…</a> 🔥

горячий тред :) RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a> <a href="https://t.co/zGkq4zTHTC">twitter.com/isnifer/status…</a> , не? )

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это все какие-то библиотеки, которые подменяют привычное написание элементов форм. Фу на такое

.<a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a> покажи уже ангуларовый рай для создания и валидации форм

RT <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a> ща покажу, как раз взялся зафиксировать это

совсем забыл про важную фишку иммутабельности – сохранение ссылок на объекты. простейший shouldComponentUpdate без shallow-equal костылей.

в том же Baobab два курсора на одни и те же данные будут равны через `===`, как и результат их `.get()`а.

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну просто, для ясности :) вообще да, идея с баобабом заразительна. Особенно то, как это на флакс ложится.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да не нужен тебе флакс е-мае )). Там же можно на изменения данных подписываться ))

извините, у вас есть минутка поговорить о баобабе? RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> точно, не заметил. нафиг флакс, всем по баобабу!

A Virtual DOM based AngularJS view renderer designed to be used with immutable data structures <a href="https://t.co/JpyZCe7Nph">github.com/teropa/angular…</a>

## Суббота <small>53 твита</small>

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: So true <a href="https://t.co/qRMrtK97oD">twitter.com/fioroco/status…</a>

в ESLint@1.0.0-rc-3 наконец-то сделали reset по умолчанию <a href="http://t.co/79RjU2U6h7">eslint.org/blog/2015/07/e…</a>, т.е. нужно заполнять конфиг с нуля вдумчиво и руками.

если вы по какой-то странной причине всё ещё используете JSHint, то самое время перейти с выходом ESLint@1.0.0.

+ <a href="https://t.co/AgmTtRFXgI">github.com/babel/babel-es…</a> + <a href="https://t.co/pypDE5iXSu">github.com/babel/eslint-p…</a>

+ <a href="https://t.co/QTmYB7ydBf">github.com/yannickcr/esli…</a>

у инструмента, который связан с парсингом ES6, нет практически никаких шансов выжить без Babel. Себастиан не просто так выделил Babylon.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Так что выжить без Babel для парсинга ES6 очень даже легко (и он будет скорее оверкиллом).

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> расскажи это какому-нибудь JSCS

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Esprima, собственно, тоже уже догоняет, тем более что общую спецификацию мы уже написали.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> на ES7 уйдёт ещё год догонов <a href="https://t.co/fPhadJCVhc">github.com/estree/estree</a>. парсер Babel хорош именно тем, что он bleeding edge.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> И тем же одновременно и плох, так как использует внутренние типы нод, которые внешние либы могут принять за ста…

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> но на его основе потом и обсуждается формат для ESTree. кому-то нравится теория, а мне нужно использовать ещё вчера.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> я начал говорить о конкретных инструментах типа ESLint/JSCS, а ты про глобальное. совершенно очевидно, что есть эсприма и акорн.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> про esprima-fb нужно напоминать? :) да, оно когда-нибудь будет стабильное и покрывающее всё-всё. но не сегодня.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> вот тебе факты: 1) от JSCS я отказался на следующий день после осознания отсутствия поддержки всего, что мне нужно.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> 2) если бы не появился babel-eslint, я бы жил вообще без линтера.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> На чьем формате? Бабеля? Нет. Он в этой сфере относительно недавний игрок, и больше консьюмер чем задающий прав…

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Это не о теории, а о стабильности тулз и фич. Тем более, что все эти ES7 штуки легко реализовать как плагины дл…

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я тоже очень даже о конкретных. ESLint (Espree) мы вон тоже потихоньку на Акорн переводим.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Не понял посыла про esprima-fb. В том-то и суть, что стабильным оно может и не стать, и быть по-тихому удалено …

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Это основная политика Бабеля - можно экспериментировать с новыми фичами, но мы их в любой момент можем убрать.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> ты снова про какую-то абстрактную теорию. у тебя есть живой проект на ES6/ES7, который нужно, например, линтить? похоже, что нет

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> можно сколько угодно обсуждать инструмент в вакууме, но если бы не появился babel-eslint, ваш "ESPree" до сих пор бы тужился.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ладно, это бессмысленно :( В который раз описываю как конкретно это работает прям сейчас изнутри, а ты называеш…

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> babel-eslint - временный хак, в том числе Себ это признает и хочет изменить в сторону стандартов. Он крут, но в…

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> я ни разу это не отрицал, если ты не заметил. временный, НО АКТУАЛЬНЫЙ. это куда важнее для проекта, который УЖЕ ЕСТЬ.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> Esprima и Acorn без сомнений сделают полную поддержку ES6 и даже ES7. но когда? сколько месяцев мне ещё не использовать тулзы?

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Прочти первый свой твит из которого собственно все началось :)

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> сегодня у инструментов всё ещё мало шансов. что не так-то? JSCS переводят на babel-jscs просто так?

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> как итог – у тебя бомбануло не по теме :)

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Аргументировал достаточно, и почему ES6 тулзам Babel как парсер вообще не критичен, а ты в ответ начал мне про …

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> дай мне рабочие ESLint и JSCS без Babel. аргументировал он :)

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ммм... я среди тех, кто это в том числе строит в тимке Babel-а.

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> такие аргументы никогда не волновали и не будут меня волновать вообще никак :) будь ты хоть Крокфордом.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Очень рад, что человек, использующий тулзы, обясняет, как надо строить эти самые тулзы :) Удачи!

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> когда придумаешь ответ на мои доводы про ESLint и JSCS, приходи. я как не мог их толком использовать полгода назад,так и не могу

.<a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> пока ты скатился только "а я авторитет, и кажется знаю, о чём говорю"

спор математика и инженера, блин.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Та да. Причем, почему-то кажется, каждый из нас видит математика в другом :)

RT <a href="https://twitter.com/tvii" title="Vladimir Varankin">@tvii</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а в чем принципиальные отличия, чтобы прям взять все бросить с перейти?

.<a href="https://twitter.com/tvii" title="Vladimir Varankin">@tvii</a> нормальная архитектура, нормальные названия правил, выбор между предупреждением и ошибкой, бурное развитие, плагины, сообщество.

.<a href="https://twitter.com/tvii" title="Vladimir Varankin">@tvii</a> всё бросать сразу точно не стоит, но попробовать – однозначно.

RT <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а есть смысл переходить, если пишешь на es5 и не на react? мне это видится переходом ради перехода

.<a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> помимо ES6 и прочих JSX смысл есть уже просто потому, что это новое поколение знакомого инструмента <a href="http://t.co/Z3Gr8BHixJ">eslint.org/docs/rules/</a>

RT <a href="https://twitter.com/i_told_ya" title="Isaev Igor">@i_told_ya</a>: <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> можно новое начать писать на ES6

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А причём тут React?

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> заметили, как мощно React/JSX зафорсили ES6, что иногда даже одно без другого уже кажется странным? :)

(по большому счёту и JSCS не нужен, codestyle-правил в ESLint по крайней мере для меня уже достаточно)

(с одной стороны, разделение обязанностей это хорошо, с другой – два разных инструмента это слишком)

btw, husky – "Prevents bad commit or push (git hooks, pre-commit, pre-push and all that stuff…)" <a href="https://t.co/bgUmZ60heP">github.com/typicode/husky</a>

когда кто-то всерьёз говорит "ES2015" вместо "ES6" [gif] <a href="http://t.co/eqUGi0qO89">replygif.net/i/100.gif</a>

перестал следить за Node.js + io.js с момента анонса "foundation". что там? мёрдж? роадмапы?

homebrew-rmtree – remove a formula and its unused dependencies <a href="https://t.co/lC2JMjZDyC">github.com/beeftornado/ho…</a>

## Воскресенье <small>116 твитов</small>

RT <a href="https://twitter.com/alexfedoseev" title="Alex">@alexfedoseev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> привет! вы проверяете в компонентах propTypes? если да, то есть какой-то регламент (что проверять, насколько…

.<a href="https://twitter.com/alexfedoseev" title="Alex">@alexfedoseev</a> привет. по-хорошему конечно нужно проверять :) это даже ни столько для валидации, сколько для наглядного представления данных

.<a href="https://twitter.com/alexfedoseev" title="Alex">@alexfedoseev</a> но если у тебя компонент напрямую рисует глубокую структуру данных, то такой компонет явно стоит разбить на несколько.

(мы даже сделали в Yummies безумный экстенд отдельных файлов с propTypes по слоям, но пока так ни разу не воспользовались)

был хороший issue в тему <a href="https://t.co/hTKSXRQj1F">github.com/facebook/flow/…</a> – propTypes на фоне нормальной типизации кажется костылём, хоть в нём и есть свои фишки.

(Flow, конечно, хорош, но он статический "типизатор". по поводу динамической типизации я всё ещё верю в штуки типа <a href="https://t.co/90obOQPQKU">github.com/codemix/babel-…</a>)

RT <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сон не нужен? (:

.<a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a> у меня уже почти 10 утра

+ <a href="https://t.co/0vBqsGI7Rc">github.com/gcanti/flowche…</a> + <a href="https://t.co/o21PpXTKcn">github.com/gaearon/flowch…</a>

задумка простая: перед тем как удалять, превращать все flow types annotations в инлайновые ассерты. только в dev-режиме, конечно же.

RT <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и да, typescript тащит!

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a> думаю, картинка будет полезна <a href="http://t.co/6tkRlf8CqN">pic.twitter.com/6tkRlf8CqN</a>

RT <a href="https://twitter.com/awbjs" title="Allen Wirfs-Brock">@awbjs</a>: 1/6 A young developer approached me after a conf talk and said, “You must feel really bad about the failure of object-oriented p…

RT <a href="https://twitter.com/awbjs" title="Allen Wirfs-Brock">@awbjs</a>: 2/6 I was confused. I said, “What do you mean that object-orient programming was a failure. Why do you think that?”

RT <a href="https://twitter.com/awbjs" title="Allen Wirfs-Brock">@awbjs</a>: 3/6 He said, “OOP was supposed to fix all of our software engineering problems and it clearly hasn’t."

RT <a href="https://twitter.com/awbjs" title="Allen Wirfs-Brock">@awbjs</a>: 4/6 He continued: "Building software today is just as hard as it was before OOP. came along.”

RT <a href="https://twitter.com/awbjs" title="Allen Wirfs-Brock">@awbjs</a>: 5/6 I said: “Have you ever look at the programs we were building in the early 1980s? At how limited their functionality and UIs …

RT <a href="https://twitter.com/awbjs" title="Allen Wirfs-Brock">@awbjs</a>: 6/6 OOP has been an incredible success. It enabled us to manage complexity as we grew from 100KB applications to today’s 100MB a…

промежуток времени, через который собственный код уже кажется корявым, стал измеряться не годом, а месяцем. мозг постоянно нагрет.

это точно устаканится в каком-то своём правильном балансе, но хотелось бы, чтобы сам процесс в целом не останавливался никогда.

хуже всего, это когда ты явно застрял, но этого не осознаешь и даже отрицаешь. со стороны обычно очень явно видно, но это редко помогает.

(я разлогинюсь где-то в 19 по МСК, если осталось что обсудить или спросить – самое время)

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> когда месяц - это хорошо или плохо?

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> "минус" – постоянная тяга к рефакторингу. если откровенно запустить, то будет плохо, и не только тебе самому.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> если подойти осознанно и извлечь из этого свои плюсы, то можно действительно улучшить код не просто ради факта переписывания.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну ведь принцип "работает не трогай" всегда останавливает от преждевременного рефакторинга.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> как я заметил, это довольно сильно зависит от проекта. есть такие, где даже думать о рефакторинге нельзя, чтобы не сломать.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> "преждевременный рефакторинг" – это подростковость :) и рано или поздно проходит, сам таким был ещё недавно.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у меня под это определение попадает любой рабочий и приносящий доход проект

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> именно поэтому я и говорю, что зависит от проекта. можно сопротивляться сколь угодно, то всё равно придётся разделять […]

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> […] "бизнес" и "гик". на каком-то этапе стартапа может показаться, что это одно и то же, но это ловушка.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> согласен. Но ту точку где рефакторинг необходим, нам надо как-то обозначить в этом треде

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> для меня такой точкой часто является факт "блин, надо поправить казалось бы мелочь, но всё так плохо, что даже это страшно".

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> если ОЧЕНЬ сложно вносить изменения в работающий проект, то нужно хотя бы подумать о том, чего будет стоить новая архитекрута

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> *иногда* в это удачно можно вплести "бизнес", аргументировав тем, что затраты на поддержку в текущем виде дороже рефакторинга

учусь определять зрелость разработчика (как человека в том числе) по его код-стайлу. в этом есть свои отчётливые закономерности.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот здесь полностью согласен. Рефакторинг ценен только тогда когда ты вносишь требуемые изменения в проект.

это отражение внутреннего состояния, как если бы вы рисовали картины для психолога. и программиста-подростка,которому уже за 30, сразу видно

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Какие?

.<a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> умение думать о других. не тупо "специально" писать слишком вербозный код, а иметь как личное качество на привычном обычном уровне

.<a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> обилие вложенных тернарных операторов и прочие однострочники от тех, кто не наигрался в своё время на <a href="http://t.co/XWWuT4tUXU">140byt.es</a>

.<a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> отсутствие даже единственной строчки с комментарием под предлогом "нормальный программист и так поймёт".

RT <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> однажды я добавлял на страницу кнопку больше недели.

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А как от такого избавляться?

.<a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> научиться допускать, что если ты слышишь о своей проблеме более, чем от одного человека, то возможно в этом что-то есть.

самый треш – "кто не понял как работают мои выглядящие как перл три строчки кода, тот тупой и просто не дотягивает до моего уровня".

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как объяснили это заказчикам, если это был enterprise ?

ультрагиком хорошо быть, когда ты мальчишка, и все вокруг тебя тоже мальчишки, и вы меряетесь странными для обычных людей письками.

RT <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>: <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это был крупный соцсервис, с миллионом а/б тестов, из за них это и произошло, и из за отсутств…

RT <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>: <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кнопочку то я вставил быстро, неделю я делал так что бы она одинаково везде работала

чаще всего такие люди физически не способны доводить начатые проекты до конца, т.к. одно дело набросать прототип с однострочными while [...]

[…] циклами без "лишних скобок", а другое дело жить с этим, думать про внешний API и т.п… быть ответственным, вот.

вспомните своих коллег, у каждого такой есть :)

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ха. у нас на поддержке старый гос. интерпрайз. Кнопочку туда месяц как-то вставляли.

Я КНОПОЧКУ ДО СИХ ПОР ВСТАВЛЯЮ, УЖЕ 30 ЛЕТ ЖИВУ.

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> если рефакторинг снижает стоимость владения продуктом в дальнейшем, то вот и точка.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот глянул код полугодовалой давности..

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> даже не знаю, у меня такого нет, причины почему код был написан так или иначе мне как-то понятны..

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Причем всегда известно, какие есть опции по улучшению/изменению. Но чаще объективных причин менять нет.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> код должен быть выразительным и без мусора.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Даже очень краткий код может быть хорошо понимаем без комментариев (при достаточной квалификации)

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> может, когда это действительно искусное владение. а может и нет, когда это 1) самоцель 2) ЧСВ

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> причины-то понятны. я наверное больше про то, что я пока ещё явно не постиг все паттерны и не всегда умею писать сразу "правильно".

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и такое бывает )). По себе знаю, иногда приходится бороться с порывами повыпендриваться ).

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> иногда нужно просто отложить вставлялку в сторону и отпустить в продакшен.

RT <a href="https://twitter.com/mr_apt" title="TOMAT">@mr_apt</a>: <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> если любишь отпусти

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> надо перестать заморачиваться, оно само придет ). Главное грамотная постановка задачи (тесты), а способ найдется.

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> вот трушный TDD – пока мечта. это явный показатель очень высокого уровня.

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> Вот да, всегда уважаю людей которые могут понять задачу до написания кода, чтобы на неё написать тесты.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это и есть итеративный подход. Нет идеальной схемы, это как лепка из пластилина )

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ну вот похоже скилл программиста это сколько тебе надо итераций, чтобы сделать правильно какую-то фичу.

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Правильно - это чтобы соответствовало внешним требованиям и не сгнило после того как они совсем поменял…

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> к сожалению, в коммерческой разработке инженеру не доносят задачу цельно. Поэтому и цель размывается. И качество ст…

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А вот те, кто не мыслит итерациями, на самом деле они находятся внутри одной бесконечной итерации ))

.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> так, у нас тут один словил МакКонахи, вызывайте помощь.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> то есть профессионалу нужно смириться со своим несовершенством и только тогда выйдет что-то стоящее

а как вам такое – "преждевременный отказ от копипасты"

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мне помогли в этом книги о физиологии мозга. Ошибки - обязательная часть обучения.

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> преждевременный отказ от говнокода

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Да меня не пугают мои ошибки, меня восхищают люди которые их делают меньше чем я при схожей …

.<a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> оттягивание коммита "it just works"

RT <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> проблема большинства программистов - инфантелизм. Отсюда и бескончные размышления о коде как о высшей ценности.

<a href="http://t.co/6uDrgh3c4Y">pic.twitter.com/6uDrgh3c4Y</a>

RT <a href="https://twitter.com/int16h" title="⠀KØLIBABCHUK">@int16h</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/AoqHwjWsKr">pic.twitter.com/AoqHwjWsKr</a>

RT <a href="https://twitter.com/apostololeg" title="^_^">@apostololeg</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> когда N обработчиков с 80% копипаста лучше, чем один обработчик c декларацией параметров для них ?
https://t.<a href="https://t.co/rk1bR3lDXo">jsfiddle.net/trnt/savrdygy/</a>

.<a href="https://twitter.com/apostololeg" title="^_^">@apostololeg</a> когда один обработчик становится слишком полиморфным и сложным

RT <a href="https://twitter.com/arik0n" title="Sergey Belov">@arik0n</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Мастерство, это когда не только сам пишешь хорошо, но когда ты senior, и все в команде пишут как надо (пусть не с …

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Как делать TDD на фронтенде? И вообще как хорошо тестировать фронтенд?

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> karma + mocha + chai + sinon

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> + istanbul. dev-режим с вотчером в карме прекрасен, как раз для вывода на отдельный монитор при TDD.

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ну технологии я знаю. Меня интересует процесс, как сделать тест не имея ещё, например, реакт компонента.

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Насколько полезно мерить code coverage? Мы не меряем, хотя и стараемся хорошо тестировать и требовать тесты в …

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Что нам даст code coverage?

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> даст понимание, какие условия, циклы и даже целые методы не покрыты тестами вообще никак.

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> без визуального представления связь тестов с реальным кодом слабовата даже у автора кода. сложно представить каждую мелочь.

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> задрачивать покрытие на 100% рационально разве что на небольших проектах. задача №1 – убедиться, что покрыто то, что должно.

ну или если это действительно критично <a href="https://t.co/PYU2JY836v">github.com/babel/babel/is…</a>

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> код Babel довольно сильно меняется, отсюда потребность сразу видеть то, что из нового или переделанного старого не покрыто.

.<a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> т.е. тесты после рефакторинга могут и не валиться, но это ещё не идеальный результат.

прикрутить покрытие тестов к нормальному проекту можно и за полчаса, а *потенциальный* профит куда круче.

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Когда у тебя очевидный ввод и вывод в программе, как в babel, то тестировать не так сложно.

чем умнее программист, тем тупее его функции <a href="http://t.co/Fw3a6BSZqk">pic.twitter.com/Fw3a6BSZqk</a>

RT <a href="https://twitter.com/superv1s0r" title="Александр Коротков">@superv1s0r</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> нормальному?

.<a href="https://twitter.com/superv1s0r" title="Александр Коротков">@superv1s0r</a> ну в смысле прикрутить к проекту новый инструмент не составляет труда :) бывает же всякое.

RT <a href="https://twitter.com/illbullet" title="Ill Bullet">@illbullet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>  что про tape думаете/знаете?

.<a href="https://twitter.com/illbullet" title="Ill Bullet">@illbullet</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> знал, что он есть, и что это в каком-то смысле альтернатива mocha. вот пошёл читать подробно <a href="https://t.co/qjN6O5iJyy">medium.com/javascript-sce…</a>

.<a href="https://twitter.com/illbullet" title="Ill Bullet">@illbullet</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> а можно преимущества в своих двух словах?

RT <a href="https://twitter.com/mostolovista" title="Georgiy Mostolovitsa">@mostolovista</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> помню, как один БЭМ-разработчик, слово в слово такое выдавал.

.<a href="https://twitter.com/mostolovista" title="Georgiy Mostolovitsa">@mostolovista</a> потом его конечно в дурку забрали?

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> о, да! Однажды я решил что ифы не нужны — есть же тернарки. Потом правда одумался, но 2 проекта так написа<a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> <a href="http://t.co/mXDcV16Huk">pic.twitter.com/mXDcV16Huk</a>

эту забавную неделю с вами был <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>. надеюсь, что было интересно, спасибо всем за общение :) логи будут здесь <a href="https://t.co/mwSBEsyWtI">jsunderhood.ru/deepsweet</a>

часто говоря "мы" я имел в виду себя и <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> – моего коллегу, напарника по парному программированию и просто хорошего трансгендера.

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в штанах у тебя трансгендер

так и живём :)

ещё увидимся в каком-нибудь cljsunderhood. логаут.

## Ссылки

### github.com  
<a href="https://github.com/css-modules/css-modules/blob/master/examples/theming.md#theming" target="_blank">https://github.com/css-modules/css-modules/blob/master/examples/theming.md#theming</a>  
<a href="https://github.com/webpack/css-loader#local-scope" target="_blank">https://github.com/webpack/css-loader#local-scope</a>  
<a href="https://github.com/css-modules" target="_blank">https://github.com/css-modules</a>  
<a href="https://github.com/yummies/yummies" target="_blank">https://github.com/yummies/yummies</a>  
<a href="https://github.com/yummies/babel-plugin-yummies" target="_blank">https://github.com/yummies/babel-plugin-yummies</a>  
<a href="https://github.com/yummies/generator-yummies-repo/blob/master/app/templates/CONTRIBUTING.md#commit-emojis" target="_blank">https://github.com/yummies/generator-yummies-repo/blob/master/app/templates/CONTRIBUTING.md#commit-emojis</a>  
<a href="https://github.com/cdebotton/react-universal" target="_blank">https://github.com/cdebotton/react-universal</a>  
<a href="https://github.com/yummies/yummies#overview" target="_blank">https://github.com/yummies/yummies#overview</a>  
<a href="https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6" target="_blank">https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6</a>  
<a href="https://github.com/yummies/theme-reset" target="_blank">https://github.com/yummies/theme-reset</a>  
<a href="https://github.com/yummies/babel-plugin-yummies#mods" target="_blank">https://github.com/yummies/babel-plugin-yummies#mods</a>  
<a href="https://github.com/yummies/starter-kit" target="_blank">https://github.com/yummies/starter-kit</a>  
<a href="https://github.com/sebmarkbage/ecmascript-rest-spread" target="_blank">https://github.com/sebmarkbage/ecmascript-rest-spread</a>  
<a href="https://github.com/tc39/ecma262" target="_blank">https://github.com/tc39/ecma262</a>  
<a href="https://github.com/luisfarzati/json-chance" target="_blank">https://github.com/luisfarzati/json-chance</a>  
<a href="https://github.com/xgrommx/awesome-redux" target="_blank">https://github.com/xgrommx/awesome-redux</a>  
<a href="https://github.com/facebook/immutable-js/tree/master/contrib/cursor" target="_blank">https://github.com/facebook/immutable-js/tree/master/contrib/cursor</a>  
<a href="https://github.com/Yomguithereal/baobab" target="_blank">https://github.com/Yomguithereal/baobab</a>  
<a href="https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23" target="_blank">https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23</a>  
<a href="https://github.com/sindresorhus" target="_blank">https://github.com/sindresorhus</a>  
<a href="https://github.com/sindresorhus/cat-names" target="_blank">https://github.com/sindresorhus/cat-names</a>  
<a href="https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L14-L16" target="_blank">https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L14-L16</a>  
<a href="https://github.com/gaearon/redux/blob/improve-docs/docs/store.md" target="_blank">https://github.com/gaearon/redux/blob/improve-docs/docs/store.md</a>  
<a href="https://github.com/alexeyraspopov/flux-stateful" target="_blank">https://github.com/alexeyraspopov/flux-stateful</a>  
<a href="https://github.com/yahoo/react-intl" target="_blank">https://github.com/yahoo/react-intl</a>  
<a href="https://github.com/piranha/puttext" target="_blank">https://github.com/piranha/puttext</a>  
<a href="https://github.com/bevacqua/woofmark" target="_blank">https://github.com/bevacqua/woofmark</a>  
<a href="https://github.com/RickWong/react-isomorphic-starterkit" target="_blank">https://github.com/RickWong/react-isomorphic-starterkit</a>  
<a href="https://github.com/webpack/react-starter" target="_blank">https://github.com/webpack/react-starter</a>  
<a href="https://github.com/DavidWells/isomorphic-react-example" target="_blank">https://github.com/DavidWells/isomorphic-react-example</a>  
<a href="https://github.com/rackt/react-router" target="_blank">https://github.com/rackt/react-router</a>  
<a href="https://github.com/matthew-andrews/isomorphic-fetch" target="_blank">https://github.com/matthew-andrews/isomorphic-fetch</a>  
<a href="https://github.com/facebook/react/issues/3009" target="_blank">https://github.com/facebook/react/issues/3009</a>  
<a href="https://github.com/douglasduteil/isparta/issues/31#issuecomment-123894638" target="_blank">https://github.com/douglasduteil/isparta/issues/31#issuecomment-123894638</a>  
<a href="https://github.com/deepsweet/istanbul-instrumenter-loader" target="_blank">https://github.com/deepsweet/istanbul-instrumenter-loader</a>  
<a href="https://github.com/deepsweet/isparta-loader" target="_blank">https://github.com/deepsweet/isparta-loader</a>  
<a href="https://github.com/tmpvar/jsdom" target="_blank">https://github.com/tmpvar/jsdom</a>  
<a href="https://github.com/rstacruz/mocha-jsdom" target="_blank">https://github.com/rstacruz/mocha-jsdom</a>  
<a href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank">https://github.com/erikras/react-redux-universal-hot-example</a>  
<a href="https://github.com/ShpuntiK/isomorphic-app-sample" target="_blank">https://github.com/ShpuntiK/isomorphic-app-sample</a>  
<a href="https://github.com/babel/babel/tree/master/packages/babylon" target="_blank">https://github.com/babel/babel/tree/master/packages/babylon</a>  
<a href="https://github.com/codemix/babel-plugin-typecheck" target="_blank">https://github.com/codemix/babel-plugin-typecheck</a>  
<a href="https://github.com/babel/babel/blob/master/packages/babel/src/util.js" target="_blank">https://github.com/babel/babel/blob/master/packages/babel/src/util.js</a>  
<a href="https://github.com/babel-plugins/babel-plugin-flow-comments" target="_blank">https://github.com/babel-plugins/babel-plugin-flow-comments</a>  
<a href="https://github.com/rambler-digital-solutions/superagent-mocker" target="_blank">https://github.com/rambler-digital-solutions/superagent-mocker</a>  
<a href="https://github.com/Microsoft/TypeScript/wiki/Roadmap" target="_blank">https://github.com/Microsoft/TypeScript/wiki/Roadmap</a>  
<a href="https://github.com/Yomguithereal/baobab/wiki/Select-state" target="_blank">https://github.com/Yomguithereal/baobab/wiki/Select-state</a>  
<a href="https://github.com/Yomguithereal/baobab/tree/v2" target="_blank">https://github.com/Yomguithereal/baobab/tree/v2</a>  
<a href="https://github.com/gaearon/redux/tree/rewrite-docs" target="_blank">https://github.com/gaearon/redux/tree/rewrite-docs</a>  
<a href="https://github.com/mquan/cortex" target="_blank">https://github.com/mquan/cortex</a>  
<a href="https://github.com/enaqx/awesome-react#data-managing" target="_blank">https://github.com/enaqx/awesome-react#data-managing</a>  
<a href="https://github.com/tonsky/datascript" target="_blank">https://github.com/tonsky/datascript</a>  
<a href="https://github.com/aserg-ufmg/JSCity/wiki/JSCITY" target="_blank">https://github.com/aserg-ufmg/JSCity/wiki/JSCITY</a>  
<a href="https://github.com/chriso/validator.js" target="_blank">https://github.com/chriso/validator.js</a>  
<a href="https://github.com/gcanti/tcomb-form" target="_blank">https://github.com/gcanti/tcomb-form</a>  
<a href="https://github.com/insin/newforms" target="_blank">https://github.com/insin/newforms</a>  
<a href="https://github.com/mistadikay/react-auto-fetching-example/blob/doob/src/components/product/index.es6#L8-L17" target="_blank">https://github.com/mistadikay/react-auto-fetching-example/blob/doob/src/components/product/index.es6#L8-L17</a>  
<a href="https://github.com/christianalfoni/formsy-react" target="_blank">https://github.com/christianalfoni/formsy-react</a>  
<a href="https://github.com/mistadikay/doob" target="_blank">https://github.com/mistadikay/doob</a>  
<a href="https://github.com/teropa/angular-virtual-dom" target="_blank">https://github.com/teropa/angular-virtual-dom</a>  
<a href="https://github.com/babel/babel-eslint" target="_blank">https://github.com/babel/babel-eslint</a>  
<a href="https://github.com/babel/eslint-plugin-babel" target="_blank">https://github.com/babel/eslint-plugin-babel</a>  
<a href="https://github.com/yannickcr/eslint-plugin-react" target="_blank">https://github.com/yannickcr/eslint-plugin-react</a>  
<a href="https://github.com/estree/estree" target="_blank">https://github.com/estree/estree</a>  
<a href="https://github.com/typicode/husky" target="_blank">https://github.com/typicode/husky</a>  
<a href="https://github.com/beeftornado/homebrew-rmtree" target="_blank">https://github.com/beeftornado/homebrew-rmtree</a>  
<a href="https://github.com/facebook/flow/issues/277#event-338421297" target="_blank">https://github.com/facebook/flow/issues/277#event-338421297</a>  
<a href="https://github.com/gcanti/flowcheck" target="_blank">https://github.com/gcanti/flowcheck</a>  
<a href="https://github.com/gaearon/flowcheck-loader" target="_blank">https://github.com/gaearon/flowcheck-loader</a>  
<a href="https://github.com/babel/babel/issues/1851" target="_blank">https://github.com/babel/babel/issues/1851</a>

### Другие

<a href="https://gist.github.com/deepsweet/15c8f2eb3a85004adad0" target="_blank">https://gist.github.com/deepsweet/15c8f2eb3a85004adad0</a>  
<a href="https://gist.github.com/afitiskin/a65c26ff923d13788980" target="_blank">https://gist.github.com/afitiskin/a65c26ff923d13788980</a>  
<a href="http://xgrommx.github.io/rx-book/content/similar_libraries/index.html" target="_blank">http://xgrommx.github.io/rx-book/content/similar_libraries/index.html</a>  
<a href="https://www.youtube.com/watch?v=I7IdS-PbEgI" target="_blank">https://www.youtube.com/watch?v=I7IdS-PbEgI</a>  
<a href="http://www.youtube.com/watch?v=lDkrXTDwbJQ" target="_blank">http://www.youtube.com/watch?v=lDkrXTDwbJQ</a>  
<a href="http://www.youtube.com/watch?v=tUtLe1VlkYc" target="_blank">http://www.youtube.com/watch?v=tUtLe1VlkYc</a>  
<a href="https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852" target="_blank">https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852</a>  
<a href="https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2" target="_blank">https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2</a>  
<a href="https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247" target="_blank">https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247</a>  
<a href="https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4" target="_blank">https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4</a>  
<a href="http://alt.js.org" target="_blank">http://alt.js.org</a>  
<a href="https://docs.google.com/spreadsheets/d/1TZPdUYDx6D1NWBXp_6NNtJ-NeVW6pudx3C9SkYSXI18/edit#gid=0" target="_blank">https://docs.google.com/spreadsheets/d/1TZPdUYDx6D1NWBXp_6NNtJ-NeVW6pudx3C9SkYSXI18/edit#gid=0</a>  
<a href="http://codepen.io/SitePoint/pen/VLXyZw" target="_blank">http://codepen.io/SitePoint/pen/VLXyZw</a>  
<a href="https://facebook.github.io/react/docs/top-level-api.html" target="_blank">https://facebook.github.io/react/docs/top-level-api.html</a>  
<a href="https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html" target="_blank">https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html</a>  
<a href="https://facebook.github.io/react/docs/why-react.html" target="_blank">https://facebook.github.io/react/docs/why-react.html</a>  
<a href="https://facebook.github.io/react/docs/test-utils.html" target="_blank">https://facebook.github.io/react/docs/test-utils.html</a>  
<a href="http://koajs.com/" target="_blank">http://koajs.com/</a>  
<a href="http://visionmedia.github.com/superagent/" target="_blank">http://visionmedia.github.com/superagent/</a>  
<a href="http://bit.ly/1TPnKSn" target="_blank">http://bit.ly/1TPnKSn</a>  
<a href="https://webpack.github.io/docs/library-and-externals.html" target="_blank">https://webpack.github.io/docs/library-and-externals.html</a>  
<a href="https://jsunderhood.ru/" target="_blank">https://jsunderhood.ru/</a>  
<a href="https://jsunderhood.ru/deepsweet" target="_blank">https://jsunderhood.ru/deepsweet</a>  
<a href="http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome" target="_blank">http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome</a>  
<a href="http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/" target="_blank">http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/</a>  
<a href="http://pioneerjs.com/" target="_blank">http://pioneerjs.com/</a>  
<a href="http://shpuntik.github.io/isomorphic-apps-presentation" target="_blank">http://shpuntik.github.io/isomorphic-apps-presentation</a>  
<a href="http://webdriver.io" target="_blank">http://webdriver.io</a>  
<a href="http://flowtype.org/docs/quick-reference.html" target="_blank">http://flowtype.org/docs/quick-reference.html</a>  
<a href="http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/" target="_blank">http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/</a>  
<a href="http://angular-formly.com" target="_blank">http://angular-formly.com</a>  
<a href="http://status.coveralls.io/" target="_blank">http://status.coveralls.io/</a>  
<a href="http://eslint.org/blog/2015/07/eslint-1.0.0-rc-3-released/#reset-is-now-the-default" target="_blank">http://eslint.org/blog/2015/07/eslint-1.0.0-rc-3-released/#reset-is-now-the-default</a>  
<a href="http://eslint.org/docs/rules/" target="_blank">http://eslint.org/docs/rules/</a>  
<a href="http://replygif.net/i/100.gif" target="_blank">http://replygif.net/i/100.gif</a>  
<a href="http://www.140byt.es/" target="_blank">http://www.140byt.es/</a>  
<a href="https://jsfiddle.net/trnt/savrdygy/" target="_blank">https://jsfiddle.net/trnt/savrdygy/</a>