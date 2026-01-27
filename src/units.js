export const units = {
  length: {
    base: 'm',
    units: {
      m: 1,
      km: 1000,
      hm: 100,
      dam: 10,
      dm: 0.1,
      cm: 0.01,
      mm: 0.001,
      um: 0.000001,
      nm: 0.000000001,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1604.34,
      nmi: 1852
    }
  },
  mass: {
    base: 'kg',
    units: {
      kg: 1,
      g: 0.001,
      mg: 0.000001,
      ug: 0.000000001,
      t: 1000,
      lb: 0.453592,
      oz: 0.0283495,
      cg: 0.00001,
      hg: 0.1,
      dag: 0.01,
      dg: 0.0001,
    }
  },
  time: {
    base: 's',
    units: {
      ks: 1000,
      hs: 100,
      das: 10,
      s: 1,
      ds: 0.1,
      cs: 0.01,
      ms: 0.001,
      us: 0.000001,
      ns: 0.000000001,
      ps: 0.000000000001,
      min: 60,
      h: 3600,
      d: 86400
    }
  },
  current: {
    base: 'A',
    units: {
      kA: 1000,
      A: 1,
      mA: 0.001,
      uA: 0.000001,
      nA: 0.000000001,
      pA: 0.000000000001,
      MA: 1000000
    }
  },
  substanceAmount: {
    base: 'mol',
    units: {
      kmol: 1000,
      mol: 1,
      mmol: 0.001,
      umol: 0.000001,
      nmol: 0.000000001,
      pmol: 0.000000000001
    }
  },
  luminousIntensity: {
    base: 'cd',
    units: {
      kcd: 1000,
      cd: 1,
      mcd: 0.001,
      ucd: 0.000001,
      ncd: 0.000000001,
      pcd: 0.000000000001
    }
  },
  area: {
    base: 'm2',
    units: {
      km2: 1000000,
      hm2: 10000,
      dam2: 100,
      m2: 1,
      dm2: 0.01,
      cm2: 0.0001,
      mm2: 0.000001,
      um2: 0.000000000001,
      in2: 0.00064516,
      ft2: 0.092903,
      yd2: 0.836127,
      mi2: 2589988.1,
      hectare: 10000,
      acre: 4046.86
    }
  },
  volume: {
    base: 'm3',
    units: {
      km3: 1000000000,
      hm3: 1000000,
      dam3: 1000,
      m3: 1,
      dm3: 0.001,
      cm3: 0.000001,
      mm3: 0.000000001,
      um3: 0.000000000000001,
      in3: 0.000016387,
      ft3: 0.0283168,
      yd3: 0.764555,
      l: 0.001,
      ml: 0.000001,
      gal: 0.003785
    }
  },
  temperature: {
    conversions: {
      'c-f': (value) => (value * 9 / 5) + 32,
      'f-c': (value) => (value - 32) * 5 / 9,
      'c-k': (value) => value + 273.15,
      'k-c': (value) => value - 273.15,
      'f-k': (value) => ((value - 32) * 5 / 9) + 273.15,
      'k-f': (value) => ((value - 273.15) * 9 / 5) + 32
    }
  }
};
