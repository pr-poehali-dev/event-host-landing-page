import json
import os
import urllib.request

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram-бот Антона"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name    = body.get('name', '').strip()
    phone   = body.get('phone', '').strip()
    date    = body.get('date', '').strip()
    message = body.get('message', '').strip()

    if not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Телефон обязателен'})
        }

    text = '📩 <b>Новая заявка с сайта</b>\n\n'
    if name:
        text += f'👤 <b>Имя:</b> {name}\n'
    text += f'📞 <b>Телефон:</b> +7-{phone}\n'
    if date:
        text += f'📅 <b>Дата:</b> {date}\n'
    if message:
        text += f'💬 <b>Сообщение:</b> {message}\n'

    token   = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url     = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode()

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
