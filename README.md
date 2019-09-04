# mobileunderhood.ru

Коллективный твиттер-аккаунт для мобильных разработчиков с новым автором каждую неделю

## Старт проекта

    git clone git@github.com/etolstoy/mobileunderhood.git
    cd mobileunderhood
    npm install
    npm start

## Как обновить

1. `authors.js` - дополнить новыми авторами. username, дата первого твита, id твита.
2. `npm run update` - соберет новый дамп для юзеров, твитов...
3. `npm start` - запустит локально копию сайта + создаст статику в `dist/`

## Проект

* `authors.js` — список авторов
* `stats.js` — генерация статистики
* `test.js` — тесты
* `gulpfile.babel.js` — сборка сайта
* `webpack.config.babel.js` — конфиг для js-bundling
* `package.json`, `.editorconfig`, `.eslintrc`, `.gitignore` — переносимое окружение
* `.travis.yml` — конфиг для тревиса
* `.deploy.sh` — деплой с тревиса
* `README.md`

### Дамп

* `update.js` — апдейт дампа
* `dump/index.js` — получение дампа
* `dump/*.json` — дамп информации об авторах ('tweets', 'info', 'media', 'followers', 'mentions')
* `dump/images/` — дамп изображений авторов
* `helpers/` — хелперы

### Сайт

* `css/` — CSS для сайта
* `layouts/` — Шаблоны для сайта
* `static/` — статические файлы для сайта
* `pages/` — маркдаун страницы на сайте
* `migration/` — миграции для старых проектов
