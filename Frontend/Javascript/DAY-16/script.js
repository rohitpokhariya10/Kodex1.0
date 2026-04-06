        // Helper function to parse array input
        function parseArray(str) {
            return str.split(',').map(item => parseFloat(item.trim())).filter(n => !isNaN(n));
        }

        // Helper function to show result
        function showResult(id, text) {
            const elem = document.getElementById(id);
            elem.textContent = text;
            elem.classList.add('show');
            setTimeout(() => elem.classList.remove('show'), 5000);
        }

        // Q1
        function runQ1() {
            showResult('result-q1', 'Console: Hello world');
            console.log('Hello world');
        }

        // Q2
        function runQ2() {
            const a = parseFloat(document.getElementById('q2-a').value);
            const b = parseFloat(document.getElementById('q2-b').value);
            const result = a + b;
            showResult('result-q2', `Result: ${a} + ${b} = ${result}`);
        }

        // Q3
        function runQ3() {
            const name = document.getElementById('q3-name').value;
            showResult('result-q3', `Console: ${name}`);
            console.log(name);
        }

        // Q4
        function runQ4() {
            const num = parseFloat(document.getElementById('q4-num').value);
            const result = num * num;
            showResult('result-q4', `Result: ${num}² = ${result}`);
        }

        // Q5
        function runQ5() {
            const num = parseFloat(document.getElementById('q5-num').value);
            const result = num % 2 === 0 ? 'even' : 'odd';
            showResult('result-q5', `Result: ${num} is ${result}`);
        }

        // Q6
        function runQ6() {
            const str = document.getElementById('q6-str').value;
            const result = str[str.length - 1];
            showResult('result-q6', `Last character: "${result}"`);
        }

        // Q7
        function runQ7() {
            const arr = parseArray(document.getElementById('q7-arr').value);
            showResult('result-q7', `First element: ${arr[0]}`);
        }

        // Q8
        function runQ8() {
            const arr = parseArray(document.getElementById('q8-arr').value);
            showResult('result-q8', `Last element: ${arr[arr.length - 1]}`);
        }

        // Q9
        function runQ9() {
            const arr = parseArray(document.getElementById('q9-arr').value);
            const elements = arr.join(', ');
            showResult('result-q9', `Elements: ${elements}`);
            console.log('Array elements:', arr);
        }

        // Q10
        function runQ10() {
            const arr = parseArray(document.getElementById('q10-arr').value);
            showResult('result-q10', `Array length: ${arr.length}`);
        }

        // Q11
        function runQ11() {
            const a = parseFloat(document.getElementById('q11-a').value);
            const b = parseFloat(document.getElementById('q11-b').value);
            const result = a * b;
            showResult('result-q11', `Result: ${a} × ${b} = ${result}`);
        }

        // Q12
        function runQ12() {
            const a = parseFloat(document.getElementById('q12-a').value);
            const b = parseFloat(document.getElementById('q12-b').value);
            const result = a - b;
            showResult('result-q12', `Result: ${a} - ${b} = ${result}`);
        }

        // Q13
        function runQ13() {
            const str = document.getElementById('q13-str').value;
            const result = str.toUpperCase();
            showResult('result-q13', `Uppercase: ${result}`);
        }

        // Q14
        function runQ14() {
            const num = parseFloat(document.getElementById('q14-num').value);
            const result = num * num * num;
            showResult('result-q14', `Result: ${num}³ = ${result}`);
        }

        // Q15
        function runQ15() {
            const str1 = document.getElementById('q15-str1').value;
            const str2 = document.getElementById('q15-str2').value;
            const result = str1 + str2;
            showResult('result-q15', `Concatenated: "${result}"`);
        }

        // Q16
        function runQ16() {
            const n1 = parseFloat(document.getElementById('q16-n1').value);
            const n2 = parseFloat(document.getElementById('q16-n2').value);
            const result = n1 > n2 ? 'n1 is greater' : 'n2 is greater';
            showResult('result-q16', result);
        }

        // Q17
        function runQ17() {
            const n1 = parseFloat(document.getElementById('q17-n1').value);
            const n2 = parseFloat(document.getElementById('q17-n2').value);
            const n3 = parseFloat(document.getElementById('q17-n3').value);
            let result;
            if (n1 < n2 && n1 < n3) result = 'n1 is smaller';
            else if (n2 < n1 && n2 < n3) result = 'n2 is smaller';
            else result = 'n3 is smaller';
            showResult('result-q17', result);
        }

        // Q18
        function runQ18() {
            const str = document.getElementById('q18-str').value;
            let output = '';
            for (let i = 1; i <= 5; i++) {
                output += str + (i < 5 ? ', ' : '');
            }
            showResult('result-q18', `Printed 5 times: ${output}`);
        }

        // Q19
        function runQ19() {
            const arr = parseArray(document.getElementById('q19-arr').value);
            const indices = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) indices.push(i);
            }
            showResult('result-q19', `Indices of even numbers: [${indices.join(', ')}]`);
        }

        // Q20
        function runQ20() {
            const arr = parseArray(document.getElementById('q20-arr').value);
            const odds = arr.filter(n => n % 2 !== 0);
            showResult('result-q20', `Odd numbers: [${odds.join(', ')}]`);
        }

        // Q21
        function runQ21() {
            const arr = parseArray(document.getElementById('q21-arr').value);
            const removed = arr.shift();
            showResult('result-q21', `Removed: ${removed}, Remaining: [${arr.join(', ')}]`);
        }

        // Q22
        function runQ22() {
            const arr = parseArray(document.getElementById('q22-arr').value);
            const newLength = arr.unshift(1);
            showResult('result-q22', `New length: ${newLength}, Array: [${arr.join(', ')}]`);
        }

        // Q23
        function runQ23() {
            const arr = parseArray(document.getElementById('q23-arr').value);
            const removed = arr.pop();
            showResult('result-q23', `Removed: ${removed}`);
        }

        // Q24
        function runQ24() {
            const arr = parseArray(document.getElementById('q24-arr').value);
            arr.push(6);
            showResult('result-q24', `Array after push: [${arr.join(', ')}]`);
        }

        // Q25
        function runQ25() {
            const arr = parseArray(document.getElementById('q25-arr').value);
            const removed = arr.splice(1, 2);
            showResult('result-q25', `Removed: [${removed.join(', ')}], Remaining: [${arr.join(', ')}]`);
        }

        // Q26
        function runQ26() {
            const str = document.getElementById('q26-str').value;
            let count = 0;
            for (let ch of str) {
                if (ch === 'a') count++;
            }
            showResult('result-q26', `String contains ${count} 'a' character(s)`);
        }

        // Q27
        function runQ27() {
            const str = document.getElementById('q27-str').value;
            let found = false;
            for (let ch of str) {
                if ('aeiou'.includes(ch.toLowerCase())) {
                    found = true;
                    break;
                }
            }
            const result = found ? 'String contains vowels' : 'String does not contain vowels';
            showResult('result-q27', result);
        }

        // Q28
        function runQ28() {
            const str = document.getElementById('q28-str').value;
            let reversed = '';
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            showResult('result-q28', `Reversed: ${reversed}`);
        }

        // Q29
        function runQ29() {
            const str = document.getElementById('q29-str').value;
            const result = str.length > 0 ? 'String is not empty' : 'String is empty';
            showResult('result-q29', result);
        }

        // Q30
        function runQ30() {
            const str = document.getElementById('q30-str').value;
            let count = 0;
            for (let ch of str) {
                if (ch === ' ') count++;
            }
            showResult('result-q30', `Total spaces: ${count}`);
        }

        // Q31
        function runQ31() {
            const arr = parseArray(document.getElementById('q31-arr').value);
            const sum = arr.reduce((a, b) => a + b, 0);
            showResult('result-q31', `Sum: ${sum}`);
        }

        // Q32
        function runQ32() {
            const arr = parseArray(document.getElementById('q32-arr').value);
            const max = Math.max(...arr);
            showResult('result-q32', `Largest number: ${max}`);
        }

        // Q33
        function runQ33() {
            const arr = parseArray(document.getElementById('q33-arr').value);
            const min = Math.min(...arr);
            showResult('result-q33', `Smallest number: ${min}`);
        }

        // Q34
        function runQ34() {
            const arr = parseArray(document.getElementById('q34-arr').value);
            const doubled = arr.map(n => n * 2);
            showResult('result-q34', `Doubled: [${doubled.join(', ')}]`);
        }

        // Q35
        function runQ35() {
            const arr = parseArray(document.getElementById('q35-arr').value);
            const unique = [...new Set(arr)];
            showResult('result-q35', `Unique values: [${unique.join(', ')}]`);
        }

        // Q36
        function runQ36() {
            const arr = parseArray(document.getElementById('q36-arr').value);
            const positives = arr.filter(n => n >= 0);
            showResult('result-q36', `Positive numbers: [${positives.join(', ')}]`);
        }

        // Q37
        function runQ37() {
            const arr = parseArray(document.getElementById('q37-arr').value);
            const divisible = arr.filter(n => n % 10 === 0);
            showResult('result-q37', `Divisible by 10: [${divisible.join(', ')}]`);
        }

        // Q38
        function runQ38() {
            const arr = parseArray(document.getElementById('q38-arr').value);
            const indices = arr.map((_, i) => i);
            showResult('result-q38', `Indices: [${indices.join(', ')}]`);
        }

        // Q39
        function runQ39() {
            const arr = parseArray(document.getElementById('q39-arr').value);
            const mid = Math.floor(arr.length / 2);
            showResult('result-q39', `Middle element: ${arr[mid]}`);
        }

        // Q40
        function runQ40() {
            const arr = parseArray(document.getElementById('q40-arr').value);
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
            showResult('result-q40', `After removing middle: [${arr.join(', ')}]`);
        }
