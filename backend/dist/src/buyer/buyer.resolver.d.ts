import { BuyerService } from './buyer.service';
import { CreateBuyerInput } from './dto/create-buyer.input';
import { CreateBuyerResponse } from './dto/create-buyer-response';
import { Buyer } from './entities/buyer.entity';
export declare class BuyerResolver {
    private readonly buyerService;
    constructor(buyerService: BuyerService);
    createBuyer(createBuyerInput: CreateBuyerInput): Promise<CreateBuyerResponse>;
    findBuyers(): Promise<Buyer[]>;
    deleteBuyer(id: string): Promise<CreateBuyerResponse>;
}
