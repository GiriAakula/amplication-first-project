/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCityArgs } from "./CreateCityArgs";
import { UpdateCityArgs } from "./UpdateCityArgs";
import { DeleteCityArgs } from "./DeleteCityArgs";
import { CityFindManyArgs } from "./CityFindManyArgs";
import { CityFindUniqueArgs } from "./CityFindUniqueArgs";
import { City } from "./City";
import { CityService } from "../city.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => City)
export class CityResolverBase {
  constructor(
    protected readonly service: CityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "any",
  })
  async _citiesMeta(
    @graphql.Args() args: CityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [City])
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "any",
  })
  async cities(@graphql.Args() args: CityFindManyArgs): Promise<City[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => City, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "own",
  })
  async city(@graphql.Args() args: CityFindUniqueArgs): Promise<City | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => City)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "create",
    possession: "any",
  })
  async createCity(@graphql.Args() args: CreateCityArgs): Promise<City> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => City)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async updateCity(@graphql.Args() args: UpdateCityArgs): Promise<City | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => City)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "delete",
    possession: "any",
  })
  async deleteCity(@graphql.Args() args: DeleteCityArgs): Promise<City | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
