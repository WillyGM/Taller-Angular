import { Show } from './show';

describe('Show Model', () => {
  it('debería instanciar un objeto Show', () => {
    const sample = new Show(
      1,
      'Serie de Ejemplo',
      'CanalX',
      3,
      'Sinopsis breve de la serie',
      'http://ejemplo.com',
      'http://ejemplo.com/banner.jpg'
    );
    expect(sample).toBeTruthy();
    expect(sample.title).toBe('Serie de Ejemplo');
  });
});
