$(document).ready(function() {

    var langMap = { en: 'en-US', de: 'de-DE', es: 'es-ES', it: 'it-IT', zh: 'zh-CN', ru: 'ru-RU' };
    var pageLang = $('#hashCalc').data('lang') || 'en';
    var locale = langMap[pageLang] || 'en-US';
    var copiedText = $('#hashCalc').data('copied') || 'Copied!';

    var units = [
        { id: 'hash',     factor: 1 },
        { id: 'kilohash', factor: 1e3 },
        { id: 'megahash', factor: 1e6 },
        { id: 'gigahash', factor: 1e9 },
        { id: 'terahash', factor: 1e12 },
        { id: 'petahash', factor: 1e15 },
        { id: 'exahash',  factor: 1e18 }
    ];

    function correctValue(number) {
        var roundedNumber;
        roundedNumber = Math.round(1000 * number) / 1000;
        if (roundedNumber > 0) return roundedNumber;
        roundedNumber = Math.round(10000 * number) / 10000;
        if (roundedNumber > 0) return roundedNumber;
        roundedNumber = Math.round(100000 * number) / 100000;
        if (roundedNumber > 0) return roundedNumber;
        roundedNumber = Math.round(1000000 * number) / 1000000;
        if (roundedNumber > 0) return roundedNumber;
        var numberArray = String(number).split('e-');
        if (numberArray.length > 1) {
            var toFixedNum = parseInt(numberArray[1]) + 3;
            return number.toFixed(toFixedNum);
        }
        return number;
    }

    function formatNumber(num) {
        var parsed = parseFloat(num);
        if (isNaN(parsed)) return String(num);
        if (parsed === 0) return '0';
        if (Math.abs(parsed) < 0.001) return String(num);
        try {
            return parsed.toLocaleString(locale, { maximumFractionDigits: 6 });
        } catch(e) {
            return String(num);
        }
    }

    function clearAll() {
        $('#hashCalc input[type="number"]').val('').removeAttr('data-raw');
        $('.hashrate-field').removeClass('hashrate-field--active');
        $('.hash-copy-btn').hide();
    }

    function convert(sourceId, rawValue) {
        var sourceFactor;
        for (var i = 0; i < units.length; i++) {
            if (units[i].id === sourceId) { sourceFactor = units[i].factor; break; }
        }
        var hashesPerSecond = rawValue * sourceFactor;

        for (var j = 0; j < units.length; j++) {
            var u = units[j];
            if (u.id === sourceId) continue;
            var converted = correctValue(hashesPerSecond / u.factor);
            var formatted = formatNumber(converted);
            var $input = $('input#' + u.id);
            $input.val(formatted);
            $input.attr('data-raw', converted);
            $input.closest('.hashrate-field').find('.hash-copy-btn').show();
        }

        var $sourceInput = $('input#' + sourceId);
        $sourceInput.attr('data-raw', rawValue);
        $sourceInput.closest('.hashrate-field').find('.hash-copy-btn').show();

        $('.hashrate-field').removeClass('hashrate-field--active');
        $sourceInput.closest('.hashrate-field').addClass('hashrate-field--active');
    }

    $('#hashCalc').on('keyup input', 'input[type="number"]', function() {
        var value = $(this).val();
        var type = $(this).attr('name');

        if (value === '' || value === null) {
            clearAll();
            return;
        }
        if (value[value.length - 1] === '.' || value[value.length - 1] === ',') return;

        value = value.replace(',', '.');
        var parsed = parseFloat(value);

        if (isNaN(parsed) || parsed === 0) {
            clearAll();
            return;
        }

        convert(type, parsed);
    });

    $('#hashClearBtn').on('click', function() {
        clearAll();
    });

    $('#hashCalc').on('click', '.hash-copy-btn', function() {
        var $field = $(this).closest('.hashrate-field');
        var raw = $field.find('input').attr('data-raw');
        if (!raw && raw !== '0') return;

        var $btn = $(this);
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(raw).then(function() {
                showCopied($btn);
            });
        } else {
            var temp = $('<textarea>');
            $('body').append(temp);
            temp.val(raw).select();
            document.execCommand('copy');
            temp.remove();
            showCopied($btn);
        }
    });

    function showCopied($btn) {
        var original = $btn.html();
        $btn.text(copiedText);
        $btn.addClass('hash-copy-btn--copied');
        setTimeout(function() {
            $btn.html(original);
            $btn.removeClass('hash-copy-btn--copied');
        }, 1200);
    }

});
