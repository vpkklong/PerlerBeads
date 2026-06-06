/* 拼豆工坊 —— 单文件版（无 ES 模块，可直接用 file:// 双击打开 index.html 运行） */
(function () {
  'use strict';

  /* =========================================================
   * 1) 拼豆色卡与颜色匹配
   * ======================================================= */
  const MARD_PALETTE = [
    { code: 'A01', hex: '#FAF4C8' },
    { code: 'A02', hex: '#FFFFD5' },
    { code: 'A03', hex: '#FEFF8B' },
    { code: 'A04', hex: '#FBED56' },
    { code: 'A05', hex: '#F4D738' },
    { code: 'A06', hex: '#FEAC4C' },
    { code: 'A07', hex: '#FE8B4C' },
    { code: 'A08', hex: '#FFDA45' },
    { code: 'A09', hex: '#FF995B' },
    { code: 'A10', hex: '#F77C31' },
    { code: 'A11', hex: '#FFDD99' },
    { code: 'A12', hex: '#FE9F72' },
    { code: 'A13', hex: '#FFC365' },
    { code: 'A14', hex: '#FD543D' },
    { code: 'A15', hex: '#FFF365' },
    { code: 'A16', hex: '#FFFF9F' },
    { code: 'A17', hex: '#FFE36E' },
    { code: 'A18', hex: '#FEBE7D' },
    { code: 'A19', hex: '#FD7C72' },
    { code: 'A20', hex: '#FFD568' },
    { code: 'A21', hex: '#FFE395' },
    { code: 'A22', hex: '#F4F57D' },
    { code: 'A23', hex: '#E6C9B7' },
    { code: 'A24', hex: '#F7F8A2' },
    { code: 'A25', hex: '#FFD67D' },
    { code: 'A26', hex: '#FFC830' },
    { code: 'B01', hex: '#E6EE31' },
    { code: 'B02', hex: '#63F347' },
    { code: 'B03', hex: '#9EF780' },
    { code: 'B04', hex: '#5DE035' },
    { code: 'B05', hex: '#35E352' },
    { code: 'B06', hex: '#65E2A6' },
    { code: 'B07', hex: '#3DAF80' },
    { code: 'B08', hex: '#1C9C4F' },
    { code: 'B09', hex: '#27523A' },
    { code: 'B10', hex: '#95D3C2' },
    { code: 'B11', hex: '#5D722A' },
    { code: 'B12', hex: '#166F41' },
    { code: 'B13', hex: '#CAEB7B' },
    { code: 'B14', hex: '#ADE946' },
    { code: 'B15', hex: '#2E5132' },
    { code: 'B16', hex: '#C5ED9C' },
    { code: 'B17', hex: '#9BB13A' },
    { code: 'B18', hex: '#E6EE49' },
    { code: 'B19', hex: '#24B88C' },
    { code: 'B20', hex: '#C2F0CC' },
    { code: 'B21', hex: '#156A6B' },
    { code: 'B22', hex: '#0B3C43' },
    { code: 'B23', hex: '#303A21' },
    { code: 'B24', hex: '#EEFCA5' },
    { code: 'B25', hex: '#4E846D' },
    { code: 'B26', hex: '#8D7A35' },
    { code: 'B27', hex: '#CCE1AF' },
    { code: 'B28', hex: '#9EE5B9' },
    { code: 'B29', hex: '#C5E254' },
    { code: 'B30', hex: '#E2FCB1' },
    { code: 'B31', hex: '#B0E792' },
    { code: 'B32', hex: '#9CAB5A' },
    { code: 'C01', hex: '#E8FFE7' },
    { code: 'C02', hex: '#A9F9FC' },
    { code: 'C03', hex: '#A0E2FB' },
    { code: 'C04', hex: '#41CCFF' },
    { code: 'C05', hex: '#01ACEB' },
    { code: 'C06', hex: '#50AAF0' },
    { code: 'C07', hex: '#3677D2' },
    { code: 'C08', hex: '#0F54C0' },
    { code: 'C09', hex: '#324BCA' },
    { code: 'C10', hex: '#3EBCE2' },
    { code: 'C11', hex: '#28DDDE' },
    { code: 'C12', hex: '#1C334D' },
    { code: 'C13', hex: '#CDE8FF' },
    { code: 'C14', hex: '#D5FDFF' },
    { code: 'C15', hex: '#22C4C6' },
    { code: 'C16', hex: '#1557A8' },
    { code: 'C17', hex: '#04D1F6' },
    { code: 'C18', hex: '#1D3344' },
    { code: 'C19', hex: '#1887A2' },
    { code: 'C20', hex: '#176DAF' },
    { code: 'C21', hex: '#BEDDFF' },
    { code: 'C22', hex: '#67B4BE' },
    { code: 'C23', hex: '#C8E2FF' },
    { code: 'C24', hex: '#7CC4FF' },
    { code: 'C25', hex: '#A9E5E5' },
    { code: 'C26', hex: '#3CAED8' },
    { code: 'C27', hex: '#D3DFFA' },
    { code: 'C28', hex: '#BBCFED' },
    { code: 'C29', hex: '#34488E' },
    { code: 'D01', hex: '#AEB4F2' },
    { code: 'D02', hex: '#858EDD' },
    { code: 'D03', hex: '#2F54AF' },
    { code: 'D04', hex: '#182A84' },
    { code: 'D05', hex: '#B843C5' },
    { code: 'D06', hex: '#AC7BDE' },
    { code: 'D07', hex: '#8854B3' },
    { code: 'D08', hex: '#E2D3FF' },
    { code: 'D09', hex: '#D5B9F8' },
    { code: 'D10', hex: '#361851' },
    { code: 'D11', hex: '#B9BAE1' },
    { code: 'D12', hex: '#DE9AD4' },
    { code: 'D13', hex: '#B90095' },
    { code: 'D14', hex: '#8B279B' },
    { code: 'D15', hex: '#2F1F90' },
    { code: 'D16', hex: '#E3E1EE' },
    { code: 'D17', hex: '#C4D4F6' },
    { code: 'D18', hex: '#A45EC7' },
    { code: 'D19', hex: '#D8C3D7' },
    { code: 'D20', hex: '#9C32B2' },
    { code: 'D21', hex: '#9A009B' },
    { code: 'D22', hex: '#333A95' },
    { code: 'D23', hex: '#EBDAFC' },
    { code: 'D24', hex: '#7786E5' },
    { code: 'D25', hex: '#494FC7' },
    { code: 'D26', hex: '#DFC2F8' },
    { code: 'E01', hex: '#FDD3CC' },
    { code: 'E02', hex: '#FEC0DF' },
    { code: 'E03', hex: '#FFB7E7' },
    { code: 'E04', hex: '#E8649E' },
    { code: 'E05', hex: '#F551A2' },
    { code: 'E06', hex: '#F13D74' },
    { code: 'E07', hex: '#C63478' },
    { code: 'E08', hex: '#FFDBE9' },
    { code: 'E09', hex: '#E970CC' },
    { code: 'E10', hex: '#D33793' },
    { code: 'E11', hex: '#FCDDD2' },
    { code: 'E12', hex: '#F78FC3' },
    { code: 'E13', hex: '#B5006D' },
    { code: 'E14', hex: '#FFD1BA' },
    { code: 'E15', hex: '#F8C7C9' },
    { code: 'E16', hex: '#FFF3EB' },
    { code: 'E17', hex: '#FFE2EA' },
    { code: 'E18', hex: '#FFC7DB' },
    { code: 'E19', hex: '#FEBAD5' },
    { code: 'E20', hex: '#D8C7D1' },
    { code: 'E21', hex: '#BD9DA1' },
    { code: 'E22', hex: '#B785A1' },
    { code: 'E23', hex: '#937A8D' },
    { code: 'E24', hex: '#E1BCE8' },
    { code: 'F01', hex: '#FD957B' },
    { code: 'F02', hex: '#FC3D46' },
    { code: 'F03', hex: '#F74941' },
    { code: 'F04', hex: '#FC283C' },
    { code: 'F05', hex: '#E7002F' },
    { code: 'F06', hex: '#943630' },
    { code: 'F07', hex: '#971937' },
    { code: 'F08', hex: '#BC0028' },
    { code: 'F09', hex: '#E2677A' },
    { code: 'F10', hex: '#8A4526' },
    { code: 'F11', hex: '#5A2121' },
    { code: 'F12', hex: '#FD4E6A' },
    { code: 'F13', hex: '#F35744' },
    { code: 'F14', hex: '#FFA9AD' },
    { code: 'F15', hex: '#D30022' },
    { code: 'F16', hex: '#FEC2A6' },
    { code: 'F17', hex: '#E69C79' },
    { code: 'F18', hex: '#D37C46' },
    { code: 'F19', hex: '#C1444A' },
    { code: 'F20', hex: '#CD9391' },
    { code: 'F21', hex: '#F7B4C6' },
    { code: 'F22', hex: '#FDC0D0' },
    { code: 'F23', hex: '#F67E66' },
    { code: 'F24', hex: '#E698AA' },
    { code: 'F25', hex: '#E54B4F' },
    { code: 'G01', hex: '#FFE2CE' },
    { code: 'G02', hex: '#FFC4AA' },
    { code: 'G03', hex: '#F4C3A5' },
    { code: 'G04', hex: '#E1B383' },
    { code: 'G05', hex: '#EDB045' },
    { code: 'G06', hex: '#E99C17' },
    { code: 'G07', hex: '#9D5B3E' },
    { code: 'G08', hex: '#753832' },
    { code: 'G09', hex: '#E6B483' },
    { code: 'G10', hex: '#D98C39' },
    { code: 'G11', hex: '#E0C593' },
    { code: 'G12', hex: '#FFC890' },
    { code: 'G13', hex: '#B7714A' },
    { code: 'G14', hex: '#8D614C' },
    { code: 'G15', hex: '#FCF9E0' },
    { code: 'G16', hex: '#F2D9BA' },
    { code: 'G17', hex: '#78524B' },
    { code: 'G18', hex: '#FFE4CC' },
    { code: 'G19', hex: '#E07935' },
    { code: 'G20', hex: '#A94023' },
    { code: 'G21', hex: '#B88558' },
    { code: 'H01', hex: '#FDFBFF' },
    { code: 'H02', hex: '#FEFFFF' },
    { code: 'H03', hex: '#B6B1BA' },
    { code: 'H04', hex: '#89858C' },
    { code: 'H05', hex: '#48464E' },
    { code: 'H06', hex: '#2F2B2F' },
    { code: 'H07', hex: '#000000' },
    { code: 'H08', hex: '#E7D6DB' },
    { code: 'H09', hex: '#EDEDED' },
    { code: 'H10', hex: '#EEE9EA' },
    { code: 'H11', hex: '#CECDD5' },
    { code: 'H12', hex: '#FFF5ED' },
    { code: 'H13', hex: '#F5ECD2' },
    { code: 'H14', hex: '#CFD7D3' },
    { code: 'H15', hex: '#98A6A8' },
    { code: 'H16', hex: '#1D1414' },
    { code: 'H17', hex: '#F1EDED' },
    { code: 'H18', hex: '#FFFDF0' },
    { code: 'H19', hex: '#F6EFE2' },
    { code: 'H20', hex: '#949FA3' },
    { code: 'H21', hex: '#FFFBE1' },
    { code: 'H22', hex: '#CACAD4' },
    { code: 'H23', hex: '#9A9D94' },
    { code: 'M01', hex: '#BCC6B8' },
    { code: 'M02', hex: '#8AA386' },
    { code: 'M03', hex: '#697D80' },
    { code: 'M04', hex: '#E3D2BC' },
    { code: 'M05', hex: '#D0CCAA' },
    { code: 'M06', hex: '#B0A782' },
    { code: 'M07', hex: '#B4A497' },
    { code: 'M08', hex: '#B38281' },
    { code: 'M09', hex: '#A58767' },
    { code: 'M10', hex: '#C5B2BC' },
    { code: 'M11', hex: '#9F7594' },
    { code: 'M12', hex: '#644749' },
    { code: 'M13', hex: '#D19066' },
    { code: 'M14', hex: '#C77362' },
    { code: 'M15', hex: '#757D78' },
    { code: 'P01', hex: '#FCF7F8' },
    { code: 'P02', hex: '#B0A9AC' },
    { code: 'P03', hex: '#AFDCAB' },
    { code: 'P04', hex: '#FEA49F' },
    { code: 'P05', hex: '#EE8C3E' },
    { code: 'P06', hex: '#5FD0A7' },
    { code: 'P07', hex: '#EB9270' },
    { code: 'P08', hex: '#F0D958' },
    { code: 'P09', hex: '#D9D9D9' },
    { code: 'P10', hex: '#D9C7EA' },
    { code: 'P11', hex: '#F3ECC9' },
    { code: 'P12', hex: '#E6EEF2' },
    { code: 'P13', hex: '#AACBEF' },
    { code: 'P14', hex: '#337680' },
    { code: 'P15', hex: '#668575' },
    { code: 'P16', hex: '#FEBF45' },
    { code: 'P17', hex: '#FEA324' },
    { code: 'P18', hex: '#FEB89F' },
    { code: 'P19', hex: '#FFFEEC' },
    { code: 'P20', hex: '#FEBECF' },
    { code: 'P21', hex: '#ECBEBF' },
    { code: 'P22', hex: '#E4A89F' },
    { code: 'P23', hex: '#A56268' },
    { code: 'Q01', hex: '#F2A5E8' },
    { code: 'Q02', hex: '#E9EC91' },
    { code: 'Q03', hex: '#FFFF00' },
    { code: 'Q04', hex: '#FFEBFA' },
    { code: 'Q05', hex: '#76CEDE' },
    { code: 'R01', hex: '#D50D21' },
    { code: 'R02', hex: '#F92F83' },
    { code: 'R03', hex: '#FD8324' },
    { code: 'R04', hex: '#F8EC31' },
    { code: 'R05', hex: '#35C75B' },
    { code: 'R06', hex: '#238891' },
    { code: 'R07', hex: '#19779D' },
    { code: 'R08', hex: '#1A60C3' },
    { code: 'R09', hex: '#9A56B4' },
    { code: 'R10', hex: '#FFDB4C' },
    { code: 'R11', hex: '#FFEBFB' },
    { code: 'R12', hex: '#D8D5CE' },
    { code: 'R13', hex: '#55514C' },
    { code: 'R14', hex: '#9FE4DF' },
    { code: 'R15', hex: '#77CEE9' },
    { code: 'R16', hex: '#3ECFCA' },
    { code: 'R17', hex: '#4A867A' },
    { code: 'R18', hex: '#7FCD9D' },
    { code: 'R19', hex: '#CDE55D' },
    { code: 'R20', hex: '#E8C7B4' },
    { code: 'R21', hex: '#AD6F3C' },
    { code: 'R22', hex: '#6C372F' },
    { code: 'R23', hex: '#FEB872' },
    { code: 'R24', hex: '#F3C1C0' },
    { code: 'R25', hex: '#C9675E' },
    { code: 'R26', hex: '#D293BE' },
    { code: 'R27', hex: '#EA8CB1' },
    { code: 'R28', hex: '#9C87D6' },
    { code: 'T01', hex: '#FFFFFF' },
    { code: 'Y01', hex: '#FD6FB4' },
    { code: 'Y02', hex: '#FEB481' },
    { code: 'Y03', hex: '#D7FAA0' },
    { code: 'Y04', hex: '#8BDBFA' },
    { code: 'Y05', hex: '#E987EA' },
    { code: 'ZG1', hex: '#DAABB3' },
    { code: 'ZG2', hex: '#D6AA87' },
    { code: 'ZG3', hex: '#C1BD8D' },
    { code: 'ZG4', hex: '#96869F' },
    { code: 'ZG5', hex: '#8490A6' },
    { code: 'ZG6', hex: '#94BFE2' },
    { code: 'ZG7', hex: '#E2A9D2' },
    { code: 'ZG8', hex: '#AB91C0' },
  ];

  // 系列 A–H、M 为 MARD 标准 221 色套装；P/Q/R/T/Y/ZG 为扩展特殊色（共 291）
  const STD_SERIES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'M'];
  const palSeries = (code) => code.replace(/[0-9]+$/, '');
  const MARD_STANDARD = MARD_PALETTE.filter((c) => STD_SERIES.indexOf(palSeries(c.code)) >= 0);
  function palSubset(colors, n) {
    if (colors.length <= n) return colors.slice();
    const step = colors.length / n, out = [];
    for (let i = 0; i < n; i++) out.push(colors[Math.floor(i * step)]);
    return out;
  }

  const PALETTES = {
    standard: { name: 'MARD 标准 A–M', colors: MARD_STANDARD },
    full: { name: 'MARD 全色卡', colors: MARD_PALETTE },
    starter: { name: '新手精选', colors: palSubset(MARD_STANDARD, 72) },
  };

  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
    };
  }

  function rgbToLab(r, g, b) {
    let R = r / 255, G = g / 255, B = b / 255;
    R = R > 0.04045 ? Math.pow((R + 0.055) / 1.055, 2.4) : R / 12.92;
    G = G > 0.04045 ? Math.pow((G + 0.055) / 1.055, 2.4) : G / 12.92;
    B = B > 0.04045 ? Math.pow((B + 0.055) / 1.055, 2.4) : B / 12.92;
    let X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
    let Y = (R * 0.2126 + G * 0.7152 + B * 0.0722) / 1.0;
    let Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
    const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
    X = f(X); Y = f(Y); Z = f(Z);
    return { L: 116 * Y - 16, a: 500 * (X - Y), b: 200 * (Y - Z) };
  }

  function createMatcher(colors) {
    const enriched = colors.map((c) => {
      const rgb = hexToRgb(c.hex);
      return { code: c.code, hex: c.hex, rgb, lab: rgbToLab(rgb.r, rgb.g, rgb.b) };
    });
    function nearest(r, g, b) {
      const lab = rgbToLab(r, g, b);
      let best = enriched[0], bestD = Infinity;
      for (const c of enriched) {
        const dl = lab.L - c.lab.L, da = lab.a - c.lab.a, db = lab.b - c.lab.b;
        const d = dl * dl + da * da + db * db;
        if (d < bestD) { bestD = d; best = c; }
      }
      return best;
    }
    return { colors: enriched, nearest };
  }

  function findByHex(colors, hex) {
    const t = hex.toUpperCase();
    return colors.find((c) => c.hex.toUpperCase() === t) || null;
  }

  /* =========================================================
   * 2) 图片 → 网格
   * ======================================================= */
  function emptyGrid(w, h) { return { w, h, cells: new Array(w * h).fill(null) }; }
  function idx(grid, x, y) { return y * grid.w + x; }

  function ratioHeight(img, gridW) {
    if (!img.naturalWidth) return gridW;
    return Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * gridW));
  }

  function spread(buf, w, h, x, y, er, eg, eb, factor) {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const p = (y * w + x) * 3;
    buf[p] += er * factor; buf[p + 1] += eg * factor; buf[p + 2] += eb * factor;
  }

  // 分步（每次减半）降采样：相比一次性缩放，大幅减少细节丢失与糊化
  function downscaleStepwise(img, tw, th) {
    let cw = img.naturalWidth || img.width;
    let ch = img.naturalHeight || img.height;
    let canvas = document.createElement('canvas');
    canvas.width = cw; canvas.height = ch;
    let ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    while (cw > tw * 2 && ch > th * 2) {
      const nw = Math.max(tw, Math.floor(cw / 2));
      const nh = Math.max(th, Math.floor(ch / 2));
      const c2 = document.createElement('canvas');
      c2.width = nw; c2.height = nh;
      const x2 = c2.getContext('2d', { willReadFrequently: true });
      x2.imageSmoothingEnabled = true;
      x2.imageSmoothingQuality = 'high';
      x2.drawImage(canvas, 0, 0, nw, nh);
      canvas = c2; ctx = x2; cw = nw; ch = nh;
    }
    const out = document.createElement('canvas');
    out.width = tw; out.height = th;
    const octx = out.getContext('2d', { willReadFrequently: true });
    octx.imageSmoothingEnabled = true;
    octx.imageSmoothingQuality = 'high';
    octx.clearRect(0, 0, tw, th);
    octx.drawImage(canvas, 0, 0, tw, th);
    return octx.getImageData(0, 0, tw, th);
  }

  // 对比度 + 饱和度调整（在小尺寸缓冲上进行，开销极小）
  function applyAdjust(buf, n, contrast, saturation) {
    const cf = (259 * (contrast + 255)) / (255 * (259 - contrast)); // contrast: -255..255
    const sf = 1 + saturation / 100;
    for (let i = 0; i < n; i++) {
      let r = buf[i * 3], g = buf[i * 3 + 1], b = buf[i * 3 + 2];
      if (contrast !== 0) {
        r = cf * (r - 128) + 128; g = cf * (g - 128) + 128; b = cf * (b - 128) + 128;
      }
      if (saturation !== 0) {
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        r = gray + (r - gray) * sf; g = gray + (g - gray) * sf; b = gray + (b - gray) * sf;
      }
      buf[i * 3] = clamp(r, 0, 255);
      buf[i * 3 + 1] = clamp(g, 0, 255);
      buf[i * 3 + 2] = clamp(b, 0, 255);
    }
  }

  // 3x3 锐化卷积（中心 5，四邻 -1）
  function sharpenBuf(buf, w, h) {
    const out = Float32Array.from(buf);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        for (let c = 0; c < 3; c++) {
          const at = (xx, yy) => buf[(Math.min(h - 1, Math.max(0, yy)) * w + Math.min(w - 1, Math.max(0, xx))) * 3 + c];
          const v = 5 * at(x, y) - at(x - 1, y) - at(x + 1, y) - at(x, y - 1) - at(x, y + 1);
          out[(y * w + x) * 3 + c] = clamp(v, 0, 255);
        }
      }
    }
    return out;
  }

  function imageToGrid(img, opts) {
    const { gridW, gridH, paletteColors, removeBg, bgThresh, dither } = opts;
    const contrast = opts.contrast || 0;
    const saturation = opts.saturation || 0;
    const sharpen = !!opts.sharpen;

    const imgData = downscaleStepwise(img, gridW, gridH);
    const data = imgData.data;
    const matcher = createMatcher(paletteColors);
    const cells = new Array(gridW * gridH).fill(null);
    let buf = new Float32Array(gridW * gridH * 3);
    for (let i = 0; i < gridW * gridH; i++) {
      buf[i * 3] = data[i * 4];
      buf[i * 3 + 1] = data[i * 4 + 1];
      buf[i * 3 + 2] = data[i * 4 + 2];
    }

    if (contrast !== 0 || saturation !== 0) applyAdjust(buf, gridW * gridH, contrast, saturation);
    if (sharpen) buf = sharpenBuf(buf, gridW, gridH);

    for (let y = 0; y < gridH; y++) {
      for (let x = 0; x < gridW; x++) {
        const p = y * gridW + x;
        const alpha = data[p * 4 + 3];
        const r = buf[p * 3], g = buf[p * 3 + 1], b = buf[p * 3 + 2];
        const isTransparent = alpha < 32;
        const isLightBg = removeBg && r >= bgThresh && g >= bgThresh && b >= bgThresh;
        if (isTransparent || isLightBg) { cells[p] = null; continue; }
        const match = matcher.nearest(r, g, b);
        cells[p] = match.hex;
        if (dither === 'floyd') {
          const er = r - match.rgb.r, eg = g - match.rgb.g, eb = b - match.rgb.b;
          spread(buf, gridW, gridH, x + 1, y,     er, eg, eb, 7 / 16);
          spread(buf, gridW, gridH, x - 1, y + 1, er, eg, eb, 3 / 16);
          spread(buf, gridW, gridH, x,     y + 1, er, eg, eb, 5 / 16);
          spread(buf, gridW, gridH, x + 1, y + 1, er, eg, eb, 1 / 16);
        }
      }
    }
    return { w: gridW, h: gridH, cells };
  }

  /* =========================================================
   * 3) 绘图辅助
   * ======================================================= */
  function line(ctx, x1, y1, x2, y2) {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }
  function drawCheckerboard(ctx, ox, oy, w, h, size, offsetX, offsetY) {
    ctx.save();
    ctx.beginPath(); ctx.rect(ox, oy, w, h); ctx.clip();
    const startX = offsetX || ox, startY = offsetY || oy;
    for (let yy = 0; yy * size < h + size; yy++) {
      for (let xx = 0; xx * size < w + size; xx++) {
        ctx.fillStyle = (xx + yy) % 2 === 0 ? '#eef1f5' : '#ffffff';
        ctx.fillRect(startX + xx * size, startY + yy * size, size, size);
      }
    }
    ctx.restore();
  }
  function isDark(hex) {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
  }

  /* =========================================================
   * 4) 图纸编辑器
   * ======================================================= */
  class PatternEditor {
    constructor(canvas, cb) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.cb = cb || {};
      this.grid = null;
      this.cell = 16;
      this.zoom = 1;
      this.showGrid = true;
      this.showLabels = false;
      this.showRuler = true;
      this.tool = 'paint';
      this.brushColor = '#E53935';
      this.paletteColors = [];
      this.undoStack = [];
      this.redoStack = [];
      this._painting = false;
      this._lastCell = null;
      this._bindEvents();
    }

    setPalette(colors) { this.paletteColors = colors; }
    setTool(t) { this.tool = t; }
    setBrush(hex) { this.brushColor = hex; }

    setOptions(o) {
      if (o.showGrid !== undefined) this.showGrid = o.showGrid;
      if (o.showLabels !== undefined) this.showLabels = o.showLabels;
      if (o.showRuler !== undefined) this.showRuler = o.showRuler;
      this.render();
    }

    load(grid, opts) {
      const resetHistory = !opts || opts.resetHistory !== false;
      this.grid = grid;
      if (resetHistory) { this.undoStack = []; this.redoStack = []; }
      this.render();
      this._emitChange();
      this._emitHistory();
    }

    setZoom(z) { this.zoom = clamp(z, 0.2, 6); this.render(); return this.zoom; }

    fitTo(cw, ch) {
      if (!this.grid) return;
      const margin = this.showRuler ? 24 : 8;
      const fw = (cw - margin) / this.grid.w;
      const fh = (ch - margin) / this.grid.h;
      const target = Math.max(2, Math.min(fw, fh));
      this.zoom = clamp(target / this.cell, 0.2, 6);
      this.render();
      return this.zoom;
    }

    get cellPx() { return this.cell * this.zoom; }
    _pad(cp) { return this.showRuler ? Math.max(14, Math.min(28, cp)) : 2; }

    render() {
      const g = this.grid, ctx = this.ctx;
      if (!g) { this.canvas.width = 0; this.canvas.height = 0; return; }
      const cp = this.cellPx;
      const pad = this._pad(cp);
      const W = Math.ceil(g.w * cp) + pad;
      const H = Math.ceil(g.h * cp) + pad;
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = W * dpr;
      this.canvas.height = H * dpr;
      this.canvas.style.width = W + 'px';
      this.canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      drawCheckerboard(ctx, pad, pad, g.w * cp, g.h * cp, Math.max(6, cp / 2));

      for (let y = 0; y < g.h; y++) {
        for (let x = 0; x < g.w; x++) {
          const hex = g.cells[idx(g, x, y)];
          if (!hex) continue;
          ctx.fillStyle = hex;
          ctx.fillRect(pad + x * cp, pad + y * cp, cp + 0.5, cp + 0.5);
        }
      }

      if (this.showLabels && cp >= 9) {
        ctx.font = Math.max(6, Math.floor(cp * 0.42)) + 'px ui-monospace, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let y = 0; y < g.h; y++) {
          for (let x = 0; x < g.w; x++) {
            const hex = g.cells[idx(g, x, y)];
            if (!hex) continue;
            const info = findByHex(this.paletteColors, hex) || findByHex(MARD_PALETTE, hex);
            ctx.fillStyle = isDark(hex) ? '#fff' : '#000';
            ctx.fillText(info ? info.code : '', pad + x * cp + cp / 2, pad + y * cp + cp / 2);
          }
        }
      }

      if (this.showGrid && cp >= 4) {
        ctx.lineWidth = 1;
        for (let x = 0; x <= g.w; x++) {
          ctx.strokeStyle = x % 10 === 0 ? 'rgba(0,0,0,.45)' : 'rgba(0,0,0,.13)';
          const px = Math.round(pad + x * cp) + 0.5;
          line(ctx, px, pad, px, pad + g.h * cp);
        }
        for (let y = 0; y <= g.h; y++) {
          ctx.strokeStyle = y % 10 === 0 ? 'rgba(0,0,0,.45)' : 'rgba(0,0,0,.13)';
          const py = Math.round(pad + y * cp) + 0.5;
          line(ctx, pad, py, pad + g.w * cp, py);
        }
      }

      if (this.showRuler && cp >= 8) {
        ctx.fillStyle = '#667';
        ctx.font = Math.max(8, Math.min(11, Math.floor(cp * 0.5))) + 'px ui-monospace, monospace';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        for (let x = 0; x < g.w; x += 10) ctx.fillText(String(x), pad + x * cp + cp / 2, pad / 2);
        for (let y = 0; y < g.h; y += 10) ctx.fillText(String(y), pad / 2, pad + y * cp + cp / 2);
      }
    }

    _bindEvents() {
      const onDown = (e) => {
        if (!this.grid) return;
        const cell = this._eventToCell(e);
        if (!cell) return;
        if (this.tool === 'pick') {
          const hex = this.grid.cells[idx(this.grid, cell.x, cell.y)];
          if (hex && this.cb.onPick) this.cb.onPick(hex);
          return;
        }
        if (this.tool === 'fill') {
          this._pushUndo();
          this._floodFill(cell.x, cell.y);
          this.render(); this._emitChange();
          return;
        }
        this._painting = true;
        this._lastCell = null;
        this._pushUndo();
        this._applyAt(cell.x, cell.y);
      };
      const onMove = (e) => {
        if (!this._painting || !this.grid) return;
        const cell = this._eventToCell(e);
        if (!cell) return;
        this._applyAt(cell.x, cell.y);
      };
      const onUp = () => { if (this._painting) { this._painting = false; this._emitChange(); } };

      this.canvas.addEventListener('pointerdown', onDown);
      this.canvas.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      this.canvas.addEventListener('pointermove', (e) => {
        if (!this.grid) return;
        const cell = this._eventToCell(e);
        this.canvas.title = cell ? '(' + cell.x + ', ' + cell.y + ')' : '';
      });
    }

    _eventToCell(e) {
      const rect = this.canvas.getBoundingClientRect();
      const cp = this.cellPx;
      const pad = this._pad(cp);
      const x = Math.floor((e.clientX - rect.left - pad) / cp);
      const y = Math.floor((e.clientY - rect.top - pad) / cp);
      if (x < 0 || y < 0 || x >= this.grid.w || y >= this.grid.h) return null;
      return { x, y };
    }

    _applyAt(x, y) {
      const key = x + ',' + y;
      if (this._lastCell === key) return;
      this._lastCell = key;
      this.grid.cells[idx(this.grid, x, y)] = this.tool === 'erase' ? null : this.brushColor;
      this._paintSingleCell(x, y);
    }

    _paintSingleCell(x, y) {
      const ctx = this.ctx, cp = this.cellPx, pad = this._pad(cp);
      const px = pad + x * cp, py = pad + y * cp;
      const hex = this.grid.cells[idx(this.grid, x, y)];
      ctx.clearRect(px, py, cp + 1, cp + 1);
      drawCheckerboard(ctx, px, py, cp, cp, Math.max(6, cp / 2), px, py);
      if (hex) { ctx.fillStyle = hex; ctx.fillRect(px, py, cp + 0.5, cp + 0.5); }
      if (this.showGrid && cp >= 4) {
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(0,0,0,.13)';
        ctx.strokeRect(Math.round(px) + 0.5, Math.round(py) + 0.5, cp, cp);
      }
      if (hex && this.showLabels && cp >= 9) {
        const info = findByHex(this.paletteColors, hex) || findByHex(MARD_PALETTE, hex);
        if (info) {
          ctx.font = Math.max(6, Math.floor(cp * 0.42)) + 'px ui-monospace, monospace';
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillStyle = isDark(hex) ? '#fff' : '#000';
          ctx.fillText(info.code, px + cp / 2, py + cp / 2);
        }
      }
    }

    _floodFill(x, y) {
      const g = this.grid;
      const target = g.cells[idx(g, x, y)];
      const repl = this.brushColor;
      if (target === repl) return;
      const stack = [[x, y]];
      while (stack.length) {
        const c = stack.pop(), cx = c[0], cy = c[1];
        if (cx < 0 || cy < 0 || cx >= g.w || cy >= g.h) continue;
        const i = idx(g, cx, cy);
        if (g.cells[i] !== target) continue;
        g.cells[i] = repl;
        stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
      }
    }

    _pushUndo() {
      if (!this.grid) return;
      this.undoStack.push(this.grid.cells.slice());
      if (this.undoStack.length > 60) this.undoStack.shift();
      this.redoStack = [];
      this._emitHistory();
    }
    undo() {
      if (!this.grid || !this.undoStack.length) return;
      this.redoStack.push(this.grid.cells.slice());
      this.grid.cells = this.undoStack.pop();
      this.render(); this._emitChange(); this._emitHistory();
    }
    redo() {
      if (!this.grid || !this.redoStack.length) return;
      this.undoStack.push(this.grid.cells.slice());
      this.grid.cells = this.redoStack.pop();
      this.render(); this._emitChange(); this._emitHistory();
    }

    _emitChange() { if (this.cb.onChange) this.cb.onChange(this.grid); }
    _emitHistory() {
      if (this.cb.onHistory) this.cb.onHistory({
        canUndo: this.undoStack.length > 0,
        canRedo: this.redoStack.length > 0,
      });
    }

    countColors() {
      if (!this.grid) return [];
      const map = new Map();
      for (const hex of this.grid.cells) {
        if (!hex) continue;
        map.set(hex, (map.get(hex) || 0) + 1);
      }
      return [...map.entries()]
        .map(([hex, count]) => ({ hex, count, info: findByHex(this.paletteColors, hex) }))
        .sort((a, b) => b.count - a.count);
    }

    exportPngDataUrl(scale, withLabels) {
      scale = scale || 20;
      const g = this.grid;
      if (!g) return null;
      const c = document.createElement('canvas');
      c.width = g.w * scale; c.height = g.h * scale;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
      for (let y = 0; y < g.h; y++) {
        for (let x = 0; x < g.w; x++) {
          const hex = g.cells[idx(g, x, y)];
          if (!hex) continue;
          ctx.fillStyle = hex;
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      }
      ctx.lineWidth = 1;
      for (let x = 0; x <= g.w; x++) {
        ctx.strokeStyle = x % 10 === 0 ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,.15)';
        line(ctx, x * scale + 0.5, 0, x * scale + 0.5, g.h * scale);
      }
      for (let y = 0; y <= g.h; y++) {
        ctx.strokeStyle = y % 10 === 0 ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,.15)';
        line(ctx, 0, y * scale + 0.5, g.w * scale, y * scale + 0.5);
      }
      // 色号标注
      if (withLabels) {
        ctx.font = Math.floor(scale * 0.4) + 'px ui-monospace, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let y = 0; y < g.h; y++) {
          for (let x = 0; x < g.w; x++) {
            const hex = g.cells[idx(g, x, y)];
            if (!hex) continue;
            const info = findByHex(this.paletteColors, hex) || findByHex(MARD_PALETTE, hex);
            if (!info) continue;
            ctx.fillStyle = isDark(hex) ? '#fff' : '#000';
            ctx.fillText(info.code, x * scale + scale / 2, y * scale + scale / 2);
          }
        }
      }
      return c.toDataURL('image/png');
    }
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  /* =========================================================
   * 5) 内置图纸库
   * ======================================================= */
  const LIBRARY = [
    // ===== 经典 =====
    { name: '爱心', cat: '经典', tags: ['简单'],
      legend: { R: '#E53935', W: '#FFFFFF' },
      rows: ['..RR...RR..', '.RRRR.RRRR.', 'RRRRRRRRRRR', 'RRWWRRRRRRR', 'RRWWRRRRRRR',
             'RRRRRRRRRRR', '.RRRRRRRRR.', '..RRRRRRR..', '...RRRRR...', '....RRR....', '.....R.....'] },
    { name: '星星', cat: '经典', tags: ['简单'],
      legend: { Y: '#FFD400' },
      rows: ['......Y......', '......Y......', '.....YYY.....', 'YYYYYYYYYYYYY', '.YYYYYYYYYYY.',
             '..YYYYYYYYY..', '...YYYYYYY...', '..YYYY.YYYY..', '.YYY.....YYY.', 'YY.........YY'] },
    { name: '钻石', cat: '经典', tags: ['宝石'],
      legend: { C: '#26C6DA', W: '#FFFFFF' },
      rows: ['.CCCCCCCCC.', 'CCWWCCCWWCC', 'CCCCCCCCCCC', '.CCCCCCCCC.', '..CCCCCCC..',
             '...CCCCC...', '....CCC....', '.....C.....'] },
    { name: '彩虹', cat: '经典', tags: ['多彩'],
      legend: { R: '#E53935', O: '#FF6F00', Y: '#FFD400', G: '#43A047', B: '#1E88E5', P: '#8E24AA' },
      rows: ['...RRRRRRR...', '.RRRRRRRRRRR.', 'OOOOOOOOOOOOO', 'YYYYYYYYYYYYY',
             'GGGGGGGGGGGGG', 'BBBBBBBBBBBBB', 'PPPPPPPPPPPPP'] },
    { name: '音符', cat: '经典', tags: ['音乐'],
      legend: { K: '#5E35B1' },
      rows: ['.......KK', '.......KK', '.......KK', '.......KK', '.......KK',
             '.KKK...KK', 'KKKKK..KK', 'KKKKK..KK', '.KKK.....'] },

    // ===== 表情 =====
    { name: '笑脸', cat: '表情', tags: ['可爱'],
      legend: { Y: '#FFD400', K: '#1A1A1A' },
      rows: ['...YYY...', '.YYYYYYY.', 'YYYYYYYYY', 'YYKYYYKYY', 'YYYYYYYYY',
             'YKYYYYYKY', 'YYKKKKKYY', '.YYYYYYY.', '...YYY...'] },
    { name: '哭脸', cat: '表情', tags: ['情绪'],
      legend: { Y: '#FFD400', K: '#1A1A1A', B: '#4FC3F7' },
      rows: ['...YYY...', '.YYYYYYY.', 'YYYYYYYYY', 'YYKYYYKYY', 'YYBYYYBYY',
             'YYYYYYYYY', 'YYKKKKKYY', '.YYYYYYY.', '...YYY...'] },
    { name: '墨镜脸', cat: '表情', tags: ['酷'],
      legend: { Y: '#FFD400', K: '#1A1A1A' },
      rows: ['...YYY...', '.YYYYYYY.', 'YYYYYYYYY', 'KKKKKKKKK', 'YKKKYKKKY',
             'YYYYYYYYY', 'YYKKKKKYY', '.YYYYYYY.', '...YYY...'] },

    // ===== 动物 =====
    { name: '小猫', cat: '动物', tags: ['可爱'],
      legend: { O: '#FFA000', P: '#F48FB1', K: '#1A1A1A', W: '#FFFFFF' },
      rows: ['O.......O', 'OO.....OO', 'OOOOOOOOO', 'OOOOOOOOO', 'OKOOOOOKO',
             'OOOOWOOOO', 'OOPPPPPOO', 'OOOPPPOOO', '.OOOOOOO.'] },
    { name: '小狗', cat: '动物', tags: ['可爱'],
      legend: { B: '#C9A26B', D: '#795548', K: '#1A1A1A' },
      rows: ['DD.....DD', 'DDD...DDD', 'DDDBBBDDD', 'BBBBBBBBB', 'BKBBBBBKB',
             'BBBBBBBBB', 'BBBKKKBBB', '.BBBKBBB.', '..BBBBB..'] },
    { name: '企鹅', cat: '动物', tags: ['可爱'],
      legend: { K: '#1A1A1A', W: '#FFFFFF', O: '#FFA000' },
      rows: ['..KKKKK..', '.KKKKKKK.', 'KKWWWWWKK', 'KWWKWKWWK', 'KWWWOWWWK',
             'KWWWWWWWK', 'KKWWWWWKK', 'KKWWWWWKK', '.O.....O.'] },
    { name: '熊猫', cat: '动物', tags: ['可爱'],
      legend: { W: '#FFFFFF', K: '#1A1A1A' },
      rows: ['KK.....KK', 'WWWWWWWWW', 'WKKWWWKKW', 'WKKWWWKKW', 'WWWWKWWWW',
             'WWWKKKWWW', '.WWWWWWW.', '..WWWWW..'] },
    { name: '小鸡', cat: '动物', tags: ['可爱'],
      legend: { Y: '#FFD400', O: '#FFA000', K: '#1A1A1A' },
      rows: ['..YYYYY..', '.YYYYYYY.', 'YYKYYYKYY', 'YYYOOOYYY', 'YYYYYYYYY',
             '.YYYYYYY.', '..YYYYY..', '...O.O...'] },
    { name: '兔子', cat: '动物', tags: ['可爱'],
      legend: { W: '#FFFFFF', P: '#F48FB1', K: '#1A1A1A' },
      rows: ['.W.....W.', '.W.....W.', '.WW...WW.', '.WW...WW.', '..WWWWW..',
             '.WWWWWWW.', '.WKWWWKW.', '.WWWPWWW.', '..WWWWW..'] },
    { name: '瓢虫', cat: '动物', tags: ['昆虫'],
      legend: { R: '#E53935', K: '#1A1A1A' },
      rows: ['...KKK...', '..RRRRR..', '.RRKRKRR.', 'RRRRKRRRR', 'RKRRKRRKR',
             'RRRRKRRRR', '.RRKRKRR.', '..RRRRR..'] },
    { name: '小鱼', cat: '动物', tags: ['海洋'],
      legend: { O: '#FFA000', K: '#1A1A1A' },
      rows: ['...OOOOO.....', '..OOOOOOO...O', '.OKOOOOOOO.OO', 'OOOOOOOOOOOOO',
             '.OOOOOOOOO.OO', '..OOOOOOO...O', '...OOOOO.....'] },

    // ===== 食物 =====
    { name: '草莓', cat: '食物', tags: ['水果'],
      legend: { R: '#E53935', G: '#43A047', Y: '#FCE94F' },
      rows: ['...G.G.G...', '..GGGGGGG..', '.RRRRRRRRR.', 'RRRYRRRYRRR', 'RRRRRRRRRRR',
             'RYRRRYRRRYR', 'RRRRRRRRRRR', '.RYRRRRRYR.', '.RRRRRRRRR.', '..RRRYRRR..',
             '...RRRRR...', '....RRR....'] },
    { name: '西瓜', cat: '食物', tags: ['水果'],
      legend: { G: '#2E7D32', L: '#7CB342', W: '#FFFFFF', R: '#E53935', K: '#1A1A1A' },
      rows: ['GGGGGGGGGGGGG', 'LLLLLLLLLLLLL', 'WWWWWWWWWWWWW', 'RRRKRRRRRKRRR', '.RRRRRKRRRRR.',
             '..RRRKRRRRR..', '...RRRRRRR...', '....RRKRR....', '.....RRR.....', '......R......'] },
    { name: '苹果', cat: '食物', tags: ['水果'],
      legend: { R: '#E53935', G: '#43A047', B: '#795548' },
      rows: ['....B....', '...GBG...', '.RRR.RRR.', 'RRRRRRRRR', 'RRRRRRRRR',
             'RRRRRRRRR', '.RRRRRRR.', '..RRRRR..'] },
    { name: '冰淇淋', cat: '食物', tags: ['甜品'],
      legend: { R: '#E53935', P: '#F48FB1', B: '#C9A26B' },
      rows: ['....R....', '..PPPPP..', '.PPPPPPP.', 'PPPPPPPPP', '.PPPPPPP.',
             '..BBBBB..', '..BBBBB..', '...BBB...', '....B....'] },
    { name: '甜甜圈', cat: '食物', tags: ['甜品'],
      legend: { P: '#F48FB1', Y: '#FFD400', B: '#4FC3F7' },
      rows: ['..PPPPP..', '.PYPPBPP.', 'PPP...PPP', 'PB.....YP', 'PP.....PP',
             'PY.....BP', 'PPP...PPP', '.PBPPYPP.', '..PPPPP..'] },

    // ===== 植物 =====
    { name: '小花', cat: '植物', tags: ['简单'],
      legend: { P: '#EC407A', Y: '#FFD400', G: '#43A047', L: '#7CB342' },
      rows: ['..P...P..', '.PPP.PPP.', 'PPPPPPPPP', '.PPPYPPP.', 'PPPYYYPPP', '.PPPYPPP.',
             'PPPPPPPPP', '.PPP.PPP.', '..P.G.P..', '....G....', '...GGG...', '..LG.GL..',
             '...GGG...', '....G....'] },
    { name: '仙人掌', cat: '植物', tags: ['绿植'],
      legend: { G: '#43A047', B: '#A1463A' },
      rows: ['...GGG...', '.G.GGG...', 'GG.GGG.GG', 'GG.GGG.GG', '.G.GGG.G.',
             '...GGG...', '...GGG...', '..BBBBB..', '..BBBBB..'] },
    { name: '四叶草', cat: '植物', tags: ['幸运'],
      legend: { G: '#2E7D32' },
      rows: ['.GG...GG.', 'GGGG.GGGG', 'GGGGGGGGG', 'GGGG.GGGG', '.GG...GG.',
             '....G....', '....G....'] },
    { name: '小树', cat: '植物', tags: ['自然'],
      legend: { G: '#2E7D32', B: '#795548' },
      rows: ['....G....', '...GGG...', '..GGGGG..', '.GGGGGGG.', '...GGG...',
             '..GGGGG..', '.GGGGGGG.', '....B....', '....B....'] },

    // ===== 节日 =====
    { name: '幽灵', cat: '节日', tags: ['万圣节'],
      legend: { W: '#FFFFFF', K: '#1A1A1A' },
      rows: ['..WWWWW..', '.WWWWWWW.', 'WWKWWWKWW', 'WWKWWWKWW', 'WWWWWWWWW',
             'WWWWWWWWW', 'WWWWWWWWW', 'WWWWWWWWW', 'W.W.W.W.W'] },
    { name: '南瓜灯', cat: '节日', tags: ['万圣节'],
      legend: { O: '#FF6F00', K: '#1A1A1A', G: '#43A047' },
      rows: ['.....G.....', '....GG.....', '..OOOOOOO..', '.OOOOOOOOO.', 'OOOOOOOOOOO',
             'OKKOOOOOKKO', 'OOKOOOOOKOO', 'OOOOOOOOOOO', 'OKOKKKKKOKO', '.OOOOOOOOO.', '..OOOOOOO..'] },
    { name: '圣诞树', cat: '节日', tags: ['圣诞'],
      legend: { Y: '#FFD400', G: '#2E7D32', R: '#E53935', B: '#795548' },
      rows: ['.....Y.....', '.....G.....', '....GGG....', '...GGRGG...', '...GGGGG...',
             '..GGGGGGG..', '..GRGGGRG..', '.GGGGGGGGG.', '.GGRGGGRGG.', 'GGGGGGGGGGG', '....BBB....'] },
    { name: '雪花', cat: '节日', tags: ['冬季'],
      legend: { W: '#4FC3F7' },
      rows: ['.....W.....', '.W...W...W.', '..W..W..W..', '...W.W.W...', '....WWW....',
             'WWWWWWWWWWW', '....WWW....', '...W.W.W...', '..W..W..W..', '.W...W...W.', '.....W.....'] },

    // ===== 游戏 =====
    { name: '蘑菇', cat: '游戏', tags: ['经典'],
      legend: { R: '#E53935', W: '#FFFFFF', K: '#1A1A1A', S: '#FFCC9C' },
      rows: ['....KKKKK....', '..KKRRRRRKK..', '.KRRWWRWWRRK.', '.KRWWWRWWWRK.', 'KRRRRRRRRRRRK',
             'KWWRRRRRRRWWK', 'KWWRRRRRRRWWK', 'KRRRRRRRRRRRK', '.KSSSKKKSSSK.', '.KSSSKKKSSSK.',
             '..KSSSSSSSK..', '...KKKKKKK...'] },
    { name: '像素剑', cat: '游戏', tags: ['道具'],
      legend: { S: '#BDBDBD', W: '#FFFFFF', B: '#795548', Y: '#FFD400', K: '#1A1A1A' },
      rows: ['.........KK', '........KWK', '.......KWSK', '......KWSK.', '.....KWSK..', '....KWSK...',
             '...KWSK....', 'K.KWSK.....', 'KKKSK......', '.KYBYK.....', 'K.KBK......', '...K.......'] },
    { name: '宝箱', cat: '游戏', tags: ['道具'],
      legend: { D: '#5D4037', B: '#A1463A', Y: '#FFD400' },
      rows: ['.DDDDDDDDD.', 'DBBBBBBBBBD', 'DBYYYYYYYBD', 'DBBBBBBBBBD', 'DDDDDDDDDDD',
             'DBBBBYBBBBD', 'DBBBYYYBBBD', 'DBBBBYBBBBD', 'DBBBBBBBBBD', '.DDDDDDDDD.'] },
  ];

  function patternToGrid(p) {
    const h = p.rows.length;
    const w = Math.max.apply(null, p.rows.map((r) => r.length));
    const cells = new Array(w * h).fill(null);
    for (let y = 0; y < h; y++) {
      const row = p.rows[y];
      for (let x = 0; x < w; x++) {
        const ch = row[x];
        if (ch && ch !== '.' && p.legend[ch]) cells[y * w + x] = p.legend[ch].toUpperCase();
      }
    }
    return { w, h, cells };
  }

  function patternThumb(p, scale) {
    scale = scale || 12;
    const g = patternToGrid(p);
    const c = document.createElement('canvas');
    c.width = g.w * scale; c.height = g.h * scale;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#fafbfc'; ctx.fillRect(0, 0, c.width, c.height);
    for (let y = 0; y < g.h; y++) {
      for (let x = 0; x < g.w; x++) {
        const hex = g.cells[y * g.w + x];
        if (!hex) continue;
        ctx.fillStyle = hex;
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }
    return c.toDataURL('image/png');
  }

  /* =========================================================
   * 6) UI 编排
   * ======================================================= */
  const $ = (id) => document.getElementById(id);
  const STORAGE_KEY = 'pindou-project-v1';
  const state = { img: null, paletteKey: 'standard', editor: null };

  function currentColors() { return PALETTES[state.paletteKey].colors; }

  function init() {
    state.editor = new PatternEditor($('patternCanvas'), {
      onChange: () => updateStats(),
      onHistory: (h) => { $('undoBtn').disabled = !h.canUndo; $('redoBtn').disabled = !h.canRedo; },
      onPick: (hex) => selectColor(hex),
    });
    state.editor.setPalette(currentColors());

    setupPaletteSelect();
    setupTabs();
    setupUpload();
    setupParams();
    setupTools();
    setupCanvasToolbar();
    setupExport();
    buildPaletteGrid();
    buildLibrary();
    const dft = currentColors()[7];
    selectColor(dft ? dft.hex : '#E53935');
  }

  function setupTabs() {
    document.querySelectorAll('.tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const name = tab.dataset.tab;
        document.querySelectorAll('.panel').forEach((p) => { p.hidden = p.dataset.view !== name; });
      });
    });
  }

  function setupPaletteSelect() {
    const sel = $('paletteSelect');
    sel.innerHTML = '';
    Object.keys(PALETTES).forEach((key) => {
      const val = PALETTES[key];
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = val.name + '（' + val.colors.length + '色）';
      sel.appendChild(opt);
    });
    sel.value = state.paletteKey;
    sel.addEventListener('change', () => {
      state.paletteKey = sel.value;
      state.editor.setPalette(currentColors());
      buildPaletteGrid();
      state.editor.render();
      updateStats();
    });
  }

  function setupUpload() {
    const input = $('fileInput');
    const dz = $('dropzone');
    input.addEventListener('change', () => {
      if (input.files && input.files[0]) loadImageFile(input.files[0]);
    });
    ['dragover', 'dragenter'].forEach((ev) =>
      dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.add('hover'); }));
    ['dragleave', 'drop'].forEach((ev) =>
      dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.remove('hover'); }));
    dz.addEventListener('drop', (e) => {
      const f = e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) loadImageFile(f);
    });
  }

  function loadImageFile(file) {
    if (!file.type.startsWith('image/')) { toast('请选择图片文件'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        state.img = img;
        $('srcPreview').src = img.src;
        $('previewWrap').hidden = false;
        $('convertBtn').disabled = false;
        syncRatioHeight();
        toast('图片已就绪，点击「生成拼豆图纸」');
      };
      img.onerror = () => toast('图片加载失败，请换一张');
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function clampInt(v, lo, hi) {
    v = parseInt(v, 10);
    if (isNaN(v)) v = lo;
    return Math.max(lo, Math.min(hi, v));
  }
  function getGridW() { return clampInt($('gridWNum').value, 8, 400); }
  function getGridH() { return clampInt($('gridHNum').value, 8, 400); }
  function setGridW(v) { v = clampInt(v, 8, 400); $('gridWNum').value = v; $('gridW').value = Math.min(v, 200); }
  function setGridH(v) { v = clampInt(v, 8, 400); $('gridHNum').value = v; $('gridH').value = Math.min(v, 200); }

  function setupParams() {
    const keepRatio = $('keepRatio'), removeBg = $('removeBg'), bgThresh = $('bgThresh');

    // 宽 / 高：滑块与数字框双向同步（数字框可超过滑块上限，最高 400）
    $('gridW').addEventListener('input', () => { $('gridWNum').value = $('gridW').value; if (keepRatio.checked) syncRatioHeight(); });
    $('gridWNum').addEventListener('change', () => { setGridW($('gridWNum').value); if (keepRatio.checked) syncRatioHeight(); });
    $('gridH').addEventListener('input', () => { $('gridHNum').value = $('gridH').value; });
    $('gridHNum').addEventListener('change', () => { setGridH($('gridHNum').value); });

    keepRatio.addEventListener('change', () => {
      $('gridHField').hidden = keepRatio.checked;
      if (keepRatio.checked) syncRatioHeight();
    });

    document.querySelectorAll('.btn.chip').forEach((b) => {
      b.addEventListener('click', () => {
        setGridW(b.dataset.size);
        if (keepRatio.checked) syncRatioHeight();
        document.querySelectorAll('.btn.chip').forEach((x) => x.classList.toggle('active', x === b));
      });
    });

    $('contrast').addEventListener('input', () => { $('contrastVal').textContent = $('contrast').value; });
    $('saturation').addEventListener('input', () => { $('saturationVal').textContent = $('saturation').value; });

    removeBg.addEventListener('change', () => { $('bgThreshField').hidden = !removeBg.checked; });
    bgThresh.addEventListener('input', () => { $('bgThreshVal').textContent = bgThresh.value; });
    $('convertBtn').addEventListener('click', convert);
  }

  function syncRatioHeight() {
    if (!state.img) return;
    setGridH(ratioHeight(state.img, getGridW()));
  }

  function convert() {
    if (!state.img) return;
    const gridW = getGridW();
    const keepRatio = $('keepRatio').checked;
    const gridH = keepRatio ? ratioHeight(state.img, gridW) : getGridH();
    const grid = imageToGrid(state.img, {
      gridW, gridH,
      paletteColors: currentColors(),
      removeBg: $('removeBg').checked,
      bgThresh: parseInt($('bgThresh').value, 10),
      dither: $('ditherSelect').value,
      contrast: parseInt($('contrast').value, 10),
      saturation: parseInt($('saturation').value, 10),
      sharpen: $('sharpen').checked,
    });
    showEditor(grid);
    toast('已生成 ' + gridW + '×' + gridH + ' 图纸（' + (gridW * gridH).toLocaleString() + ' 格）');
  }

  function showEditor(grid) {
    $('emptyHint').hidden = true;
    $('brushCard').hidden = false;
    state.editor.setPalette(currentColors());
    state.editor.load(grid);
    fitCanvas();
    updateStats();
  }

  function setupTools() {
    document.querySelectorAll('.btn.tool').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn.tool').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.editor.setTool(btn.dataset.tool);
      });
    });
  }

  function buildPaletteGrid() {
    const grid = $('paletteGrid');
    grid.innerHTML = '';
    currentColors().forEach((c) => {
      const el = document.createElement('button');
      el.className = 'pal-swatch';
      el.style.background = c.hex;
      el.title = c.code + '  ' + c.hex;
      el.dataset.hex = c.hex;
      el.addEventListener('click', () => selectColor(c.hex));
      grid.appendChild(el);
    });
    highlightSelected();
  }

  function selectColor(hex) {
    hex = hex.toUpperCase();
    state.editor.setBrush(hex);
    $('currentSwatch').style.background = hex;
    const info = currentColors().find((c) => c.hex.toUpperCase() === hex);
    $('currentColorName').textContent = info ? info.code : hex;
    if (state.editor.tool === 'erase') {
      const paintBtn = document.querySelector('.btn.tool[data-tool="paint"]');
      if (paintBtn) paintBtn.click();
    }
    highlightSelected();
  }

  function highlightSelected() {
    const cur = (state.editor.brushColor || '').toUpperCase();
    document.querySelectorAll('.pal-swatch').forEach((s) => {
      s.classList.toggle('active', s.dataset.hex.toUpperCase() === cur);
    });
  }

  function setupCanvasToolbar() {
    $('zoomIn').addEventListener('click', () => setZoom(state.editor.zoom * 1.25));
    $('zoomOut').addEventListener('click', () => setZoom(state.editor.zoom / 1.25));
    $('zoomFit').addEventListener('click', fitCanvas);
    $('showGrid').addEventListener('change', (e) => state.editor.setOptions({ showGrid: e.target.checked }));
    $('showLabels').addEventListener('change', (e) => {
      state.editor.setOptions({ showLabels: e.target.checked });
      // 开启色号时，若格子太小看不清，自动放大到可读尺寸
      if (e.target.checked && state.editor.grid && state.editor.cellPx < 18) {
        setZoom(20 / state.editor.cell);
        toast('已放大画布以显示色号（可用 ➖ 缩小）');
      }
    });
    $('showRuler').addEventListener('change', (e) => state.editor.setOptions({ showRuler: e.target.checked }));
    $('undoBtn').addEventListener('click', () => state.editor.undo());
    $('redoBtn').addEventListener('click', () => state.editor.redo());
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && k === 'z' && !e.shiftKey) { e.preventDefault(); state.editor.undo(); }
      else if ((e.ctrlKey || e.metaKey) && (k === 'y' || (e.shiftKey && k === 'z'))) { e.preventDefault(); state.editor.redo(); }
    });
  }

  function setZoom(z) {
    const nz = state.editor.setZoom(z);
    $('zoomLabel').textContent = Math.round(nz * 100) + '%';
  }

  function fitCanvas() {
    const box = $('canvasScroll').getBoundingClientRect();
    const nz = state.editor.fitTo(box.width - 24, box.height - 24);
    if (nz) $('zoomLabel').textContent = Math.round(nz * 100) + '%';
  }

  function updateStats() {
    const counts = state.editor.countColors();
    const total = counts.reduce((s, c) => s + c.count, 0);
    $('totalBeads').textContent = total.toLocaleString();
    $('totalColors').textContent = counts.length;
    const g = state.editor.grid;
    $('gridSizeLabel').textContent = g ? g.w + '×' + g.h : '—';

    const list = $('colorList');
    list.innerHTML = '';
    if (!counts.length) { list.innerHTML = '<p class="muted center">还没有豆子～</p>'; return; }
    const max = counts[0].count;
    counts.forEach((c) => {
      const row = document.createElement('div');
      row.className = 'color-row';
      row.title = '点击选用此颜色';
      const label = c.info ? c.info.code : c.hex;
      row.innerHTML =
        '<span class="swatch" style="background:' + c.hex + '"></span>' +
        '<span class="cl-name">' + label + '</span>' +
        '<span class="cl-bar"><i style="width:' + (c.count / max * 100) + '%;background:' + c.hex + '"></i></span>' +
        '<span class="cl-count">' + c.count + '</span>';
      row.addEventListener('click', () => selectColor(c.hex));
      list.appendChild(row);
    });
  }

  function patternColorCount(p) {
    const g = patternToGrid(p);
    const s = new Set();
    for (const c of g.cells) if (c) s.add(c);
    return s.size;
  }

  function buildLibrary() {
    // 分类过滤栏
    const cats = ['全部'];
    LIBRARY.forEach((p) => { if (cats.indexOf(p.cat) < 0) cats.push(p.cat); });
    const filter = $('libraryFilter');
    filter.innerHTML = '';
    cats.forEach((c, i) => {
      const count = c === '全部' ? LIBRARY.length : LIBRARY.filter((p) => p.cat === c).length;
      const b = document.createElement('button');
      b.className = 'btn chip' + (i === 0 ? ' active' : '');
      b.textContent = c + ' ' + count;
      b.addEventListener('click', () => {
        filter.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', x === b));
        renderLibraryCards(c);
      });
      filter.appendChild(b);
    });
    renderLibraryCards('全部');
  }

  function renderLibraryCards(cat) {
    const grid = $('libraryGrid');
    grid.innerHTML = '';
    LIBRARY.filter((p) => cat === '全部' || p.cat === cat).forEach((p) => {
      const g = patternToGrid(p);
      const card = document.createElement('div');
      card.className = 'lib-card';
      card.innerHTML =
        '<div class="lib-thumb"><img src="' + patternThumb(p) + '" alt="' + p.name + '" /></div>' +
        '<div class="lib-meta"><b>' + p.name + '</b>' +
        '<span class="muted">' + g.w + '×' + g.h + ' · ' + patternColorCount(p) + ' 色</span></div>' +
        '<button class="btn primary block">载入并编辑</button>';
      card.querySelector('button').addEventListener('click', () => loadLibraryPattern(p));
      grid.appendChild(card);
    });
  }

  // 把图纸的颜色吸附到当前调色板的最接近 MARD 色，保证统计里显示真实色号
  function snapGridToPalette(grid, colors) {
    const m = createMatcher(colors);
    const cache = {};
    const cells = grid.cells.map((hex) => {
      if (!hex) return null;
      if (!cache[hex]) { const c = hexToRgb(hex); cache[hex] = m.nearest(c.r, c.g, c.b).hex; }
      return cache[hex];
    });
    return { w: grid.w, h: grid.h, cells };
  }

  function loadLibraryPattern(p) {
    const grid = snapGridToPalette(patternToGrid(p), currentColors());
    document.querySelector('.tab[data-tab="create"]').click();
    showEditor(grid);
    toast('已载入「' + p.name + '」');
  }

  function setupExport() {
    $('exportPng').addEventListener('click', () => {
      const withLabels = $('showLabels').checked;
      // 带色号时用更大的格子，保证文字清晰
      const url = state.editor.exportPngDataUrl(withLabels ? 30 : 22, withLabels);
      if (!url) { toast('画布是空的'); return; }
      download(url, '拼豆图纸_' + stamp() + '.png');
      toast(withLabels ? '已导出带色号图纸 PNG' : '已导出图纸 PNG');
    });
    $('exportList').addEventListener('click', () => {
      const counts = state.editor.countColors();
      if (!counts.length) { toast('没有可导出的用量'); return; }
      let csv = '﻿色号,色值,数量\n';
      counts.forEach((c) => {
        csv += (c.info ? c.info.code : '') + ',' + c.hex + ',' + c.count + '\n';
      });
      const total = counts.reduce((s, c) => s + c.count, 0);
      csv += '总计,,' + total + '\n';
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      download(URL.createObjectURL(blob), '拼豆用量_' + stamp() + '.csv');
    });
    $('saveProject').addEventListener('click', () => {
      if (!state.editor.grid) { toast('没有可保存的图纸'); return; }
      const payload = JSON.stringify({ v: 1, paletteKey: state.paletteKey, grid: state.editor.grid });
      try { localStorage.setItem(STORAGE_KEY, payload); } catch (e) { /* file:// 下可能受限 */ }
      const blob = new Blob([payload], { type: 'application/json' });
      download(URL.createObjectURL(blob), '拼豆项目_' + stamp() + '.json');
      toast('已保存（并下载备份 JSON）');
    });
    const projInput = $('projectFileInput');
    $('loadProject').addEventListener('click', () => projInput.click());
    projInput.addEventListener('change', () => {
      const f = projInput.files && projInput.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        try { applyProject(JSON.parse(reader.result)); toast('项目已载入'); }
        catch (e) { toast('文件解析失败'); }
      };
      reader.readAsText(f);
      projInput.value = '';
    });
    $('clearAll').addEventListener('click', () => {
      if (!state.editor.grid) return;
      if (!confirm('确定清空当前画布？此操作可用撤销恢复。')) return;
      const g = state.editor.grid;
      state.editor._pushUndo();
      state.editor.grid = emptyGrid(g.w, g.h);
      state.editor.render();
      updateStats();
    });
  }

  function applyProject(data) {
    if (!data || !data.grid) throw new Error('bad');
    if (data.paletteKey && PALETTES[data.paletteKey]) {
      state.paletteKey = data.paletteKey;
      $('paletteSelect').value = data.paletteKey;
      state.editor.setPalette(currentColors());
      buildPaletteGrid();
    }
    showEditor(data.grid);
  }

  function download(url, name) {
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => { if (url.indexOf('blob:') === 0) URL.revokeObjectURL(url); }, 1000);
  }

  let toastTimer = null;
  function toast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.hidden = false;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.classList.remove('show'); setTimeout(() => { t.hidden = true; }, 250); }, 1800);
  }

  function stamp() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return '' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '_' +
      p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
