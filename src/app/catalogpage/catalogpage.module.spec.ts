import { CatalogpageModule } from './catalogpage.module';

describe('CatalogpageModule', () => {
  let catalogpageModule: CatalogpageModule;

  beforeEach(() => {
    catalogpageModule = new CatalogpageModule();
  });

  it('should create an instance', () => {
    expect(catalogpageModule).toBeTruthy();
  });
});
