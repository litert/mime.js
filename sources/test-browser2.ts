import * as mime from '@litert/mime';

var mask = document.getElementById('mask')!;
mask.style.display = 'none';
// --- getData 按钮 ---
document.getElementById('getData')?.addEventListener('click', function() {
    document.getElementById('pre')!.innerHTML = JSON.stringify(mime.getData((document.getElementById('ext') as HTMLInputElement).value), undefined, 4);
});