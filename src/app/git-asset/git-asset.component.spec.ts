import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAssetComponent } from './git-asset.component';

describe('GitAssetComponent', () => {
  let component: GitAssetComponent;
  let fixture: ComponentFixture<GitAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
