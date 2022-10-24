import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { ICartItem } from 'src/app/interfaces/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit, OnDestroy {
  @Input() cartItem!: ICartItem;
  @Input() favorited: boolean = false;
  @Output() removeItem = new EventEmitter<void>();
  @Output() whislistEmitter = new EventEmitter<void>();
  cartIsUpdatedSub: Subscription;
  cartItemGroup: FormGroup = new FormGroup({
    quantity: new FormControl(1, {
      validators: [Validators.required, Validators.min(1)],
    }),
  });
  get quantity(): FormControl {
    return this.cartItemGroup.get('quantity') as FormControl;
  }
  constructor(private cartService: CartService) {
    this.cartIsUpdatedSub = this.cartService.cartIsUpdated$.subscribe(() => {
      this.quantity.setValue(this.cartItem.quantity);
    });
  }
  ngOnDestroy(): void {
    this.cartIsUpdatedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.quantity.setValue(this.cartItem.quantity);
  }
  addToWhislist() {
    this.whislistEmitter.emit();
  }
  deleteItem() {
    this.removeItem.emit();
  }
  onIncrementClick() {
    this.quantity.setValue(this.quantity.value + 1);
    this.onQuantityChange();
  }
  onDecrementClick() {
    if (this.quantity.value > 1) {
      this.quantity.setValue(this.quantity.value - 1);
      this.onQuantityChange();
    } else {
      this.deleteItem();
    }
  }
  onQuantityChange() {
    if (this.quantity.value < 1) {
      this.deleteItem();
    }
    this.cartItem.quantity = this.quantity.value;
  }
}
